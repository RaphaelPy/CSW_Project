(function () {
  const DATASETS = [
    { key: "studyhub_data", name: "Raphael Quiz", render: renderRaphaelStudyhubData },
    { key: "studyhub_stats", name: "Vokabeln Stats", render: renderVocabStats },
    { key: "studyhub_progress", name: "Vokabeln Progress", render: renderVocabProgress },
  ];

  function byId(id) { return document.getElementById(id); }
  function setText(id, value) {
    const el = byId(id);
    if (el) el.textContent = value;
  }

  function formatDateTime(iso) {
    if (!iso) return "-";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "-";
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    return `${dd}.${mm}.${yyyy} ${hh}:${min}`;
  }

  function updateTime() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    setText("currentTime", `${hh}:${mm}`);
  }

  function readLocalStorageJSON(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return { ok: true, value: null, raw: null };
    try {
      return { ok: true, value: JSON.parse(raw), raw };
    } catch (e) {
      return { ok: false, value: null, raw, error: e };
    }
  }

  const cache = {
    raphael: null,
    vocabStats: null,
    vocabProgress: null,
    storageEvents: 0,
  };

  let raphaelChart = null;
  let vocabChart = null;
  let nikChart = null;

  function initCharts() {
    try {
      const rCtx = document.getElementById('raphaelChart');
      if (rCtx && typeof Chart !== 'undefined') {
        raphaelChart = new Chart(rCtx, {
          type: 'line',
          data: { labels: [], datasets: [{ label: 'Accuracy', data: [], borderColor: '#3e95cd', backgroundColor: 'rgba(62,149,205,0.15)', fill: true }] },
          options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
        });
      }

      const vCtx = document.getElementById('vocabChart');
      if (vCtx && typeof Chart !== 'undefined') {
        vocabChart = new Chart(vCtx, {
          type: 'doughnut',
          data: { labels: ['Richtig', 'Falsch'], datasets: [{ data: [0, 0], backgroundColor: ['#4caf50', '#f44336'] }] },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
      const nCtx = document.getElementById('nikChart');
      if (nCtx && typeof Chart !== 'undefined') {
        nikChart = new Chart(nCtx, {
          type: 'doughnut',
          data: { labels: ['Richtig', 'Falsch'], datasets: [{ data: [0,0], backgroundColor: ['#4caf50','#f44336'] }] },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
    } catch (e) { }
  }

  function renderRaphaelStudyhubData(obj, raw) {
    cache.raphael = obj || null;

    let tries = 0, best = 0, last = 0, diff = "-";

    if (obj?.modules?.flashcards) {
      const kpi = obj.modules.flashcards.kpi || {};
      tries = kpi.totalAttempts ?? 0;
      best = kpi.highscore ?? kpi.accuracy ?? 0;
      last = (obj.modules.flashcards.history?.slice(-1)[0]?.accuracy) ?? kpi.accuracy ?? 0;
      diff = kpi.level ?? "-";
    } else {
      tries = obj?.tries ?? 0;
      best = obj?.best ?? 0;
      last = obj?.last ?? 0;
      diff = obj?.diff ?? "-";
    }

    setText("studyAttempts", String(tries));
    setText("studyBest", `${Math.round(best)}%`);
    setText("studyLast", `${Math.round(last)}%`);
    setText("studyDiff", String(diff));

    const rawEl = byId("raphaelRaw");
    if (rawEl) rawEl.textContent = raw ? JSON.stringify(obj, null, 2) : "Keine Rohdaten.";

    try {
      if (raphaelChart) {
        if (obj?.modules?.flashcards?.history) {
          const hist = obj.modules.flashcards.history.slice(-20);
          raphaelChart.data.labels = hist.map(h => formatDateTime(h.date));
          raphaelChart.data.datasets[0].data = hist.map(h => h.accuracy ?? h.points ?? 0);
        } else {
          raphaelChart.data.labels = [formatDateTime(new Date().toISOString())];
          raphaelChart.data.datasets[0].data = [last];
        }
        raphaelChart.update();
      }
    } catch (e) { }

    try {
      if (nikChart && obj?.modules?.flashcards?.kpi) {
        const k = obj.modules.flashcards.kpi;
        const correct = Number(k.correct ?? 0);
        const wrong = Number(k.wrong ?? 0);
        nikChart.data.datasets[0].data = [correct, wrong];
        nikChart.update();
      }
    } catch (e) { }

    updateOverview();
  }

  function renderRaphaelNoData(key) {
    cache.raphael = null;

    setText("studyAttempts", "0");
    setText("studyBest", "0%");
    setText("studyLast", "0%");
    setText("studyDiff", "-");

    const rawEl = byId("raphaelRaw");
    if (rawEl) {
      rawEl.textContent =
        "Keine Daten gefunden.\n\n" +
        "1) Öffne raphael.index.html\n" +
        "2) Quiz einmal abschließen\n" +
        "3) Dashboard neu laden.\n\n" +
        `Fehlender Key: ${key}`;
    }

    updateOverview();
  }

  function renderBadJSONTo(elId, key, raw) {
    const rawEl = byId(elId);
    if (rawEl) rawEl.textContent = `Fehler: Key "${key}" ist kein gültiges JSON:\n\n${raw}`;
  }

  function renderVocabStats(obj) {
    cache.vocabStats = obj || null;
    renderVocabCard();
    updateOverview();
  }

  function renderVocabProgress(obj) {
    cache.vocabProgress = obj || null;
    renderVocabCard();
    updateOverview();
  }

  function renderVocabCard() {
    const stats = cache.vocabStats || { bestAccuracy: 0, lastAccuracy: 0, totalAttempts: 0 };
    const prog = cache.vocabProgress || {
      masteryScore: 0,
      level: "Anfänger",
      accuracy: 0,
      totalAttempts: 0,
      correct: 0,
      wrong: 0,
      lastActive: null
    };

    setText("vocabSessions", String(stats.totalAttempts ?? 0));
    setText("vocabBest", `${Math.round(stats.bestAccuracy ?? 0)}%`);
    setText("vocabLast", `${Math.round(stats.lastAccuracy ?? 0)}%`);

    setText("vocabLevel", String(prog.level ?? "Anfänger"));
    setText("vocabMastery", String(prog.masteryScore ?? 0));
    setText("vocabAcc", `${Math.round(prog.accuracy ?? 0)}%`);
    setText("vocabCW", `${prog.correct ?? 0} / ${prog.wrong ?? 0}`);
    setText("vocabLastActive", formatDateTime(prog.lastActive));

    const rawEl = byId("vocabRaw");
    if (rawEl) {
      rawEl.textContent = JSON.stringify(
        { studyhub_stats: stats, studyhub_progress: prog },
        null,
        2
      );
    }

    try {
      if (vocabChart) {
        const correct = Number(prog.correct ?? 0);
        const wrong = Number(prog.wrong ?? 0);
        vocabChart.data.datasets[0].data = [correct, wrong];
        vocabChart.update();
      }
    } catch (e) { }
  }

  function updateOverview() {
    const quizSessions = cache.raphael?.tries ?? 0;
    const vocabSessions = cache.vocabStats?.totalAttempts ?? 0;
    const totalSessions = quizSessions + vocabSessions;

    const bestCandidates = [
      cache.raphael?.best,
      cache.vocabStats?.bestAccuracy
    ].filter(v => typeof v === "number");

    const lastCandidates = [
      cache.raphael?.last,
      cache.vocabStats?.lastAccuracy
    ].filter(v => typeof v === "number");

    const best = bestCandidates.length ? Math.max(...bestCandidates) : 0;
    const last = lastCandidates.length ? lastCandidates[lastCandidates.length - 1] : 0;

    setText("qsSessions", String(totalSessions));
    setText("qsBest", `${Math.round(best)}%`);
    setText("qsLast", `${Math.round(last)}%`);

    const activityList = byId("activityList");
    if (activityList) {
      const items = [];

      if (cache.raphael) {
        items.push(`Quiz: Best ${Math.round(cache.raphael.best ?? 0)}% · Last ${Math.round(cache.raphael.last ?? 0)}% · Versuche ${cache.raphael.tries ?? 0}`);
      } else {
        items.push("Quiz: keine Daten (erst Session abschließen)");
      }

      if (cache.vocabStats || cache.vocabProgress) {
        items.push(`Vokabeln: Best ${Math.round(cache.vocabStats?.bestAccuracy ?? 0)}% · Sessions ${cache.vocabStats?.totalAttempts ?? 0} · Level ${cache.vocabProgress?.level ?? "Anfänger"}`);
      } else {
        items.push("Vokabeln: keine Daten (erst Session abschließen)");
      }

      activityList.innerHTML = items.map(t => `<li class="activity-item">${t}</li>`).join("");
    }

    renderVocabCard();
  }

  function loadAllDatasets() {
    for (const ds of DATASETS) {
      const result = readLocalStorageJSON(ds.key);

      if (!result.ok) {
        if (ds.key === "studyhub_data") renderBadJSONTo("raphaelRaw", ds.key, result.raw);
        if (ds.key === "studyhub_stats" || ds.key === "studyhub_progress") renderBadJSONTo("vocabRaw", ds.key, result.raw);
        continue;
      }

      if (result.value === null) {
        if (ds.key === "studyhub_data") renderRaphaelNoData(ds.key);
        if (ds.key === "studyhub_stats") cache.vocabStats = null;
        if (ds.key === "studyhub_progress") cache.vocabProgress = null;
        updateOverview();
        continue;
      }

      ds.render(result.value, result.raw);

      if (ds.key === "studyhub_data" && result.value?.modules?.flashcards) {
        const flash = result.value.modules.flashcards;
        const k = flash.kpi || {};
        cache.vocabStats = {
          bestAccuracy: k.highscore ?? k.accuracy ?? 0,
          lastAccuracy: (flash.history?.slice(-1)[0]?.accuracy) ?? k.accuracy ?? 0,
          totalAttempts: k.totalAttempts ?? 0
        };

        cache.vocabProgress = {
          masteryScore: k.masteryScore ?? k.accuracy ?? 0,
          level: k.level ?? "Anfänger",
          accuracy: k.accuracy ?? 0,
          totalAttempts: k.totalAttempts ?? 0,
          correct: k.correct ?? 0,
          wrong: k.wrong ?? 0,
          lastActive: k.lastActive ?? null
        };
      }
    }
    applyDemoFallbacksIfNeeded();
  }

  function applyDemoFallbacksIfNeeded() {
    const hasAny = cache.raphael || cache.vocabStats || cache.vocabProgress;
    if (hasAny) return;

    const now = new Date().toISOString();
    cache.raphael = {
      demo: true,
      tries: 1,
      best: 78,
      last: 72,
      diff: "Mittel",
      modules: { flashcards: { kpi: { accuracy: 72, totalAttempts: 1, correct: 3, wrong: 1, masteryScore: 72, level: 'Anfänger', highscore: 78, lastActive: now }, history: [{ date: now, accuracy: 72 }] } }
    };

    cache.vocabStats = { bestAccuracy: 85, lastAccuracy: 85, totalAttempts: 2 };
    cache.vocabProgress = { masteryScore: 85, level: "Fortgeschritten", accuracy: 85, totalAttempts: 2, correct: 6, wrong: 1, lastActive: now };

    const rapStatus = byId('raphaelStatus'); if (rapStatus) rapStatus.textContent = 'Demo';
    const vocabStatus = byId('vocabStatus'); if (vocabStatus) vocabStatus.textContent = 'Demo';

    try {
      if (raphaelChart) {
        raphaelChart.data.labels = cache.raphael.modules.flashcards.history.map(h => formatDateTime(h.date));
        raphaelChart.data.datasets[0].data = cache.raphael.modules.flashcards.history.map(h => h.accuracy);
        raphaelChart.update();
      }
      if (vocabChart) {
        vocabChart.data.datasets[0].data = [cache.vocabProgress.correct ?? 0, cache.vocabProgress.wrong ?? 0];
        vocabChart.update();
      }
      if (nikChart) {
        nikChart.data.datasets[0].data = [cache.vocabProgress.correct ?? 0, cache.vocabProgress.wrong ?? 0];
        nikChart.update();
      }
    } catch (e) { }
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 10_000);

    try { initCharts(); } catch (e) { }

    loadAllDatasets();
    updateOverview();

    setInterval(() => { loadAllDatasets(); updateOverview(); }, 3000);

    window.refreshDashboard = () => { loadAllDatasets(); updateOverview(); };

    window.addEventListener("storage", (e) => {
      if (!e.key) return;
      if (DATASETS.some((d) => d.key === e.key)) {
        cache.storageEvents++;
        loadAllDatasets();
        updateOverview();
      }
    });
  });
})();
