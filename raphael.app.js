// ===== Study Hub (kurz + Schwierigkeit) =====

const STORE = "studyhub_data";

// --- 3 Listen nach Schwierigkeit ---
const VOC_EASY = [
  { word: "cat", meaning: "Katze", example: "The _ _ _ is sleeping on the sofa. (Katze)" },
  { word: "dog", meaning: "Hund", example: "My _ _ _ loves to play fetch. (Hund)" },
  { word: "sun", meaning: "Sonne", example: "The _ _ _ rises in the east. (Sonne)" },
  { word: "car", meaning: "Auto", example: "My _ _ _ is very fast. (Auto)" },
  { word: "egg", meaning: "Ei", example: "I like to eat boiled _ _ _. (Ei)" },
  { word: "hat", meaning: "Hut", example: "He is wearing a black _ _ _. (Hut)" },
  { word: "cup", meaning: "Tasse", example: "My tea is in the _ _ _. (Tasse)" },
  { word: "milk", meaning: "Milch", example: "The baby drinks _ _ _ _. (Milch)" },
  { word: "fish", meaning: "Fisch", example: "I caught a big _ _ _ _ in the lake. (Fisch)" },
  { word: "tree", meaning: "Baum", example: "There is a big _ _ _ _ in the garden. (Baum)" },
  { word: "ball", meaning: "Ball", example: "The child is playing with a _ _ _ _. (Ball)" },
  { word: "bread", meaning: "Brot", example: "I eat _ _ _ _ _ for breakfast. (Brot)" },
  { word: "shoe", meaning: "Schuh", example: "My _ _ _ _ is dirty. (Schuh)" },
  { word: "star", meaning: "Stern", example: "The _ _ _ _ shines at night. (Stern)" },
  { word: "moon", meaning: "Mond", example: "The _ _ _ _ shines brightly. (Mond)" }
];

const VOC_MID = [
  { word: "apple", meaning: "Apfel", example: "I eat an _ _ _ _ _. (Apfel)" },
  { word: "banana", meaning: "Banane", example: "Monkeys love _ _ _ _ _ _. (Banane)" },
  { word: "river", meaning: "Fluss", example: "The _ _ _ _ _ flows into the sea. (Fluss)" },
  { word: "garden", meaning: "Garten", example: "The _ _ _ _ _ _ is beautiful. (Garten)" },
  { word: "jacket", meaning: "Jacke", example: "Put on your _ _ _ _ _ _. (Jacke)" },
  { word: "mirror", meaning: "Spiegel", example: "I look in the _ _ _ _ _ _. (Spiegel)" },
  { word: "pencil", meaning: "Bleistift", example: "I need a _ _ _ _ _ _ to write. (Bleistift)" },
  { word: "camera", meaning: "Kamera", example: "She takes photos with a _ _ _ _ _ _. (Kamera)" },
  { word: "flower", meaning: "Blume", example: "This _ _ _ _ _ smells nice. (Blume)" },
  { word: "rabbit", meaning: "Kaninchen", example: "The _ _ _ _ _ jumps. (Kaninchen)" },
  { word: "market", meaning: "Markt", example: "We buy food at the _ _ _ _ _ _. (Markt)" },
  { word: "forest", meaning: "Wald", example: "We are walking in the _ _ _ _ _ _. (Wald)" },
  { word: "school", meaning: "Schule", example: "Children go to _ _ _ _ _ _. (Schule)" },
  { word: "street", meaning: "Straße", example: "The _ _ _ _ _ is busy. (Straße)" }
];

const VOC_HARD = [
  { word: "elephant", meaning: "Elefant", example: "The _ _ _ _ _ _ _ _ is the largest land animal. (Elefant)" },
  { word: "umbrella", meaning: "Regenschirm", example: "I need an _ _ _ _ _ _ _ _. (Regenschirm)" },
  { word: "mountain", meaning: "Berg", example: "We climbed the _ _ _ _ _ _ _ _. (Berg)" },
  { word: "xylophone", meaning: "Xylophon", example: "The _ _ _ _ _ _ _ _ _ sounds nice. (Xylophon)" },
  { word: "volcano", meaning: "Vulkan", example: "The _ _ _ _ _ _ _ erupted yesterday. (Vulkan)" },
  { word: "airplane", meaning: "Flugzeug", example: "The _ _ _ _ _ _ _ _ is flying in the sky. (Flugzeug)" },
  { word: "notebook", meaning: "Notizbuch", example: "I wrote my notes in a _ _ _ _ _ _ _ _. (Notizbuch)" },
  { word: "hospital", meaning: "Krankenhaus", example: "She works in a _ _ _ _ _ _ _ _. (Krankenhaus)" },
  { word: "unicorn", meaning: "Einhorn", example: "The _ _ _ _ _ _ _ is a mythical creature. (Einhorn)" },
  { word: "penguin", meaning: "Pinguin", example: "_ _ _ _ _ _ _ live in cold regions. (Pinguin)" }
];

// --- UI holen ---
const ui = {
  sbAttempts: document.getElementById("sbAttempts"),
  sbBest: document.getElementById("sbBest"),
  sbLast: document.getElementById("sbLast"),
  sbLevel: document.getElementById("sbLevel"),
  dashText: document.getElementById("dashText"),

  pillMode: document.getElementById("pillMode"),
  pillProgress: document.getElementById("pillProgress"),
  pillPoints: document.getElementById("pillPoints"),
  progressBar: document.getElementById("progressBar"),

  qTitle: document.getElementById("qTitle"),
  qSub: document.getElementById("qSub"),
  answers: document.getElementById("answers"),
  errorText: document.getElementById("errorText"),
  cardActions: document.getElementById("cardActions"),

  btnStart: document.getElementById("btnStart"),
  btnReset: document.getElementById("btnReset"),
  btnNext: document.getElementById("btnNext"),
  btnExport: document.getElementById("btnExport"),

  startModal: document.getElementById("startModal"),
  selCount: document.getElementById("selCount"),
  selMode: document.getElementById("selMode"),
  selDiff: document.getElementById("selDiff"),   // <-- neu!
  chkVocab: document.getElementById("chkVocab"),
  chkBlank: document.getElementById("chkBlank"),
  btnCancelStart: document.getElementById("btnCancelStart"),
  btnConfirmStart: document.getElementById("btnConfirmStart")
};

// --- speichern / laden (minimal) ---
function load() {
  const raw = localStorage.getItem(STORE);
  if (!raw) return { tries: 0, best: 0, last: 0, diff: "easy" };
  try { return JSON.parse(raw); } catch { return { tries: 0, best: 0, last: 0, diff: "easy" }; }
}
function save(d) {
  localStorage.setItem(STORE, JSON.stringify(d));
}

// --- helpers ---
const clean = (t) => String(t ?? "").trim().toLowerCase();

function diffName(key) {
  if (key === "easy") return "Anfänger";
  if (key === "mid") return "Fortgeschritten";
  if (key === "hard") return "Profi";
  return "All Star";
}

function vocabByDiff(key) {
  

  if (key === "easy") return VOC_EASY;
  if (key === "mid") return VOC_MID;
  if (key === "hard") return VOC_HARD;
  return [...VOC_EASY, ...VOC_MID, ...VOC_HARD];
}

// --- App Zustand ---
let data = load();
let run = null;

// --- Dashboard ---
function updateDash() {
  ui.sbAttempts.textContent = data.tries;
  ui.sbBest.textContent = data.best + "%";
  ui.sbLast.textContent = data.last + "%";

  // rechts "Level" = Schwierigkeit
  ui.sbLevel.textContent = diffName(data.diff);

  // kleine Liste unten
  ui.dashText.innerHTML = `
    <li>Last: ${data.last}%</li>
    <li>Best: ${data.best}%</li>
    <li>Attempts: ${data.tries}</li>
  `;
}

// --- Status oben (Pills + Progress) ---
function updateStatus() {
  if (!run) {
    ui.pillMode.textContent = "Modus: —";
    ui.pillProgress.textContent = "Fortschritt: —";
    ui.pillPoints.textContent = "Punkte: —";
    ui.progressBar.style.width = "0%";
    return;
  }

  ui.pillMode.textContent = "Modus: Prüfung";
  ui.pillProgress.textContent = `Fortschritt: ${run.i + 1}/${run.list.length}`;
  ui.pillPoints.textContent = `Punkte: ${run.ok}/${run.list.length}`;

  const p = (run.ok / run.list.length) * 100;
  ui.progressBar.style.width = `${p}%`;
}

// --- Fragen bauen (aus Schwierigkeit + Checkboxen) ---
function buildQuestions() {
  const types = [];
  if (ui.chkVocab.checked) types.push("vocab");
  if (ui.chkBlank.checked) types.push("blank");
  if (types.length === 0) return [];

  const vocab = vocabByDiff(ui.selDiff.value);
  const pool = [];

  vocab.forEach(v => {
    // hier: deine echten Namen word/meaning/example benutzen
    if (types.includes("vocab")) {
      pool.push({ t: "vocab", q: v.meaning, a: v.word });
    }

    if (types.includes("blank") && v.example.includes("_")) {
      pool.push({ t: "blank", q: v.example, a: v.word });
    }
  });

  pool.sort(() => Math.random() - 0.5);

  const cnt = Number(ui.selCount.value);
  return pool.slice(0, Math.min(cnt, pool.length));
}

// --- Frage anzeigen ---
function showQuestion() {
  updateStatus();
  ui.errorText.textContent = "";

  const q = run.list[run.i];
  ui.qTitle.textContent = (q.t === "vocab") ? "Vokabel" : "Lückentext";
  ui.qSub.textContent = (q.t === "vocab")
    ? `Deutsch: ${q.q} → Englisch?`
    : `Satz: ${q.q}`;

  ui.answers.innerHTML = `<input class="text-input" id="ans" placeholder="Antwort..." />`;
  document.getElementById("ans").focus();

  ui.cardActions.style.display = "flex";
}

// --- Ende ---
function finish() {
  const total = run.list.length;
  const percent = Math.round((run.ok / total) * 100);

  data.tries++;
  data.last = percent;
  data.best = Math.max(data.best, percent);

  // speichern: auch Schwierigkeit merken
  data.diff = run.diff;

  save(data);
  updateDash();

  ui.qTitle.textContent = "Ergebnis";
  ui.qSub.textContent = `Richtig: ${run.ok}/${total} (${percent}%)`;
  ui.answers.innerHTML = `<button class="btn primary" id="again">Nochmal</button>`;
  ui.cardActions.style.display = "none";
  updateStatus();

  document.getElementById("again").addEventListener("click", openModal);
  run = null;
}

// --- Start ---
function openModal() { ui.startModal.style.display = "flex"; }
function closeModal() { ui.startModal.style.display = "none"; }

function startQuiz() {
  const list = buildQuestions();
  if (list.length === 0) return alert("Bitte Fragetyp auswählen.");

  // Schwierigkeit direkt übernehmen und rechts anzeigen
  data.diff = ui.selDiff.value;
  save(data);
  updateDash();

  run = {
    i: 0,
    ok: 0,
    list,
    diff: ui.selDiff.value
  };

  closeModal();
  showQuestion();
}

// --- Weiter / prüfen ---
function nextQuestion() {
  if (!run) return;

  const inp = document.getElementById("ans");
  const val = inp ? inp.value : "";

  if (!val.trim()) {
    ui.errorText.textContent = "Bitte etwas eingeben.";
    return;
  }

  const q = run.list[run.i];
  if (clean(val) === clean(q.a)) run.ok++;

  run.i++;
  if (run.i >= run.list.length) finish();
  else showQuestion();
}

// --- Export / Reset ---
function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "studyhub_results.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function resetAll() {
  if (!confirm("localStorage wirklich löschen?")) return;
  localStorage.removeItem(STORE);
  data = load();
  run = null;

  ui.qTitle.textContent = "Klicke auf Start.";
  ui.qSub.textContent = "Dann bekommst du eine Frage.";
  ui.answers.innerHTML = "";
  ui.cardActions.style.display = "none";

  updateDash();
  updateStatus();
}

// --- Events ---
ui.btnStart.addEventListener("click", openModal);
ui.btnCancelStart.addEventListener("click", closeModal);
ui.btnConfirmStart.addEventListener("click", startQuiz);

ui.btnNext.addEventListener("click", nextQuestion);
document.addEventListener("keydown", (e) => { if (e.key === "Enter" && run) nextQuestion(); });

ui.btnExport.addEventListener("click", exportData);
ui.btnReset.addEventListener("click", resetAll);

// --- Boot ---
updateDash();
updateStatus();