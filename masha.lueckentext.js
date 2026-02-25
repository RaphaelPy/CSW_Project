// ===============================
// StudyHub – Lückentext Trainer
// Speichert in LocalStorage:
//   - studyhub_stats     (attempts/best/last)
//   - studyhub_progress  (mastery/level/accuracy/...)
// ===============================

// ===== VOCABULARY =====
const nouns = [
  { word: "ball", meaning: "Ball", example: "The child is playing with a _ _ _ _." },
  { word: "beach", meaning: "Strand", example: "We relax at the _ _ _ _ _." },
  { word: "bread", meaning: "Brot", example: "I eat _ _ _ _ _ for breakfast." },
  { word: "bridge", meaning: "Brücke", example: "The _ _ _ _ _ _ crosses the river." },
  { word: "camera", meaning: "Kamera", example: "She takes photos with a _ _ _ _ _ _." },
  { word: "chair", meaning: "Stuhl", example: "Please sit on the _ _ _ _ _." },
  { word: "clock", meaning: "Uhr", example: "The _ _ _ _ shows the time." },
  { word: "cloud", meaning: "Wolke", example: "A white _ _ _ _ floats in the sky." },
  { word: "coffee", meaning: "Kaffee", example: "I drink _ _ _ _ _ _ every morning." },
  { word: "cookie", meaning: "Keks", example: "She eats a sweet _ _ _ _ _." },
  { word: "cow", meaning: "Kuh", example: "The _ _ _ gives milk." },
  { word: "cup", meaning: "Tasse", example: "My tea is in the _ _ _." },
  { word: "desk", meaning: "Schreibtisch", example: "The book is on the _ _ _ _." },
  { word: "dress", meaning: "Kleid", example: "She wears a red _ _ _ _ _." },
  { word: "duck", meaning: "Ente", example: "The _ _ _ _ swims on the lake." },
  { word: "earth", meaning: "Erde", example: "The _ _ _ _ _ moves around the sun." },
  { word: "engine", meaning: "Motor", example: "The car _ _ _ _ _ _ is loud." },
  { word: "farmer", meaning: "Bauer", example: "The _ _ _ _ _ works in the field." },
  { word: "feather", meaning: "Feder", example: "A bird has a soft _ _ _ _ _ _ _." },
  { word: "field", meaning: "Feld", example: "The cows are in the _ _ _ _." },
  { word: "flag", meaning: "Flagge", example: "The _ _ _ _ is waving in the wind." },
  { word: "flower", meaning: "Blume", example: "This _ _ _ _ _ _ smells nice." },
  { word: "frog", meaning: "Frosch", example: "A green _ _ _ _ jumps." },
  { word: "glass", meaning: "Glas", example: "The water is in a _ _ _ _ _." },
  { word: "glove", meaning: "Handschuh", example: "Wear a _ _ _ _ _ in winter." },
  { word: "goat", meaning: "Ziege", example: "The _ _ _ _ eats grass." },
  { word: "grape", meaning: "Traube", example: "I eat a purple _ _ _ _ _." },
  { word: "grass", meaning: "Gras", example: "The _ _ _ _ _ is green." },
  { word: "hill", meaning: "Hügel", example: "We walk up the _ _ _ _." },
  { word: "horse", meaning: "Pferd", example: "The _ _ _ _ _ runs fast." },
  { word: "hospital", meaning: "Krankenhaus", example: "She works in a _ _ _ _ _ _ _ _ _." },
  { word: "hotel", meaning: "Hotel", example: "We sleep in a _ _ _ _ _." },
  { word: "island", meaning: "Insel", example: "They live on an _ _ _ _ _ _." },
  { word: "juice", meaning: "Saft", example: "I drink orange _ _ _ _ _." },
  { word: "knife", meaning: "Messer", example: "Cut the bread with a _ _ _ _ _." },
  { word: "lake", meaning: "See", example: "The _ _ _ _ is very calm." },
  { word: "leaf", meaning: "Blatt", example: "A green _ _ _ _ falls." },
  { word: "letter", meaning: "Brief", example: "I write a _ _ _ _ _ _." },
  { word: "market", meaning: "Markt", example: "We buy food at the _ _ _ _ _ _." },
  { word: "milk", meaning: "Milch", example: "The baby drinks _ _ _ _." },
  { word: "mirror", meaning: "Spiegel", example: "I see myself in the _ _ _ _ _ _." },
  { word: "mouse", meaning: "Maus", example: "The _ _ _ _ _ runs away." },
  { word: "music", meaning: "Musik", example: "I listen to _ _ _ _ _." },
  { word: "nest", meaning: "Nest", example: "The bird sits in a _ _ _ _." },
  { word: "onion", meaning: "Zwiebel", example: "The _ _ _ _ _ makes me cry." },
  { word: "paint", meaning: "Farbe", example: "I use _ _ _ _ _ to draw." },
  { word: "paper", meaning: "Papier", example: "Write it on _ _ _ _ _." },
  { word: "park", meaning: "Park", example: "Children play in the _ _ _ _." },
  { word: "phone", meaning: "Telefon", example: "My _ _ _ _ _ rings." },
  { word: "pig", meaning: "Schwein", example: "The _ _ _ lives on a farm." },
  { word: "pizza", meaning: "Pizza", example: "We eat _ _ _ _ _ tonight." },
  { word: "plate", meaning: "Teller", example: "The food is on the _ _ _ _ _." },
  { word: "rabbit", meaning: "Kaninchen", example: "The _ _ _ _ _ _ jumps." },
  { word: "road", meaning: "Straße", example: "The car drives on the _ _ _ _." },
  { word: "sand", meaning: "Sand", example: "The _ _ _ _ is hot." },
  { word: "school", meaning: "Schule", example: "Children go to _ _ _ _ _ _." },
  { word: "shoe", meaning: "Schuh", example: "My _ _ _ _ is dirty." },
  { word: "snake", meaning: "Schlange", example: "The _ _ _ _ _ moves quietly." },
  { word: "spoon", meaning: "Löffel", example: "Use a _ _ _ _ _ to eat." },
  { word: "street", meaning: "Straße", example: "The _ _ _ _ _ _ is busy." }
];

const adjectives = [
  { word: "big", meaning: "groß", example: "It is a _ _ _ house." },
  { word: "small", meaning: "klein", example: "She lives in a _ _ _ _ _ apartment." },
  { word: "fast", meaning: "schnell", example: "The car is very _ _ _ _." },
  { word: "slow", meaning: "langsam", example: "The turtle is _ _ _ _." },
  { word: "happy", meaning: "glücklich", example: "He feels _ _ _ _ _ today." },
  { word: "sad", meaning: "traurig", example: "She looks _ _ _." },
  { word: "hot", meaning: "heiß", example: "It is _ _ _ outside." },
  { word: "cold", meaning: "kalt", example: "The water is _ _ _ _." },
  { word: "beautiful", meaning: "schön", example: "The garden is _ _ _ _ _ _ _ _ _." },
  { word: "ugly", meaning: "hässlich", example: "That building is _ _ _ _." },
  { word: "young", meaning: "jung", example: "She is very _ _ _ _ _." },
  { word: "old", meaning: "alt", example: "The house is very _ _ _." },
  { word: "easy", meaning: "einfach", example: "This task is _ _ _ _." },
  { word: "difficult", meaning: "schwierig", example: "The exam was _ _ _ _ _ _ _ _ _." },
  { word: "strong", meaning: "stark", example: "He is very _ _ _ _ _ _." },
  { word: "weak", meaning: "schwach", example: "She feels _ _ _ _." },
  { word: "clean", meaning: "sauber", example: "The room is _ _ _ _ _." },
  { word: "dirty", meaning: "schmutzig", example: "His shoes are _ _ _ _ _." },
  { word: "rich", meaning: "reich", example: "They are very _ _ _ _." },
  { word: "poor", meaning: "arm", example: "The village is _ _ _ _." },
  { word: "loud", meaning: "laut", example: "The music is _ _ _ _." },
  { word: "quiet", meaning: "leise", example: "The room is _ _ _ _ _." },
  { word: "tall", meaning: "groß", example: "The building is _ _ _ _." },
  { word: "short", meaning: "kurz", example: "The movie was _ _ _ _ _." },
  { word: "heavy", meaning: "schwer", example: "The bag is _ _ _ _ _." },
  { word: "light", meaning: "leicht", example: "The box is _ _ _ _ _." },
  { word: "new", meaning: "neu", example: "She bought a _ _ _ car." },
  { word: "safe", meaning: "sicher", example: "This place is _ _ _ _." },
  { word: "dangerous", meaning: "gefährlich", example: "That road is _ _ _ _ _ _ _ _ _." },
  { word: "full", meaning: "voll", example: "The glass is _ _ _ _." },
  { word: "empty", meaning: "leer", example: "The bottle is _ _ _ _ _." },
  { word: "sweet", meaning: "süß", example: "The cake is _ _ _ _ _." },
  { word: "bitter", meaning: "bitter", example: "The coffee tastes _ _ _ _ _ _." },
  { word: "friendly", meaning: "freundlich", example: "The dog is very _ _ _ _ _ _ _ _." },
  { word: "angry", meaning: "wütend", example: "He looks _ _ _ _ _." },
  { word: "busy", meaning: "beschäftigt", example: "She is very _ _ _ _." },
  { word: "free", meaning: "frei", example: "I am _ _ _ _ today." },
  { word: "hungry", meaning: "hungrig", example: "I am very _ _ _ _ _ _." },
  { word: "thirsty", meaning: "durstig", example: "He feels _ _ _ _ _ _ _." },
  { word: "tired", meaning: "müde", example: "She is _ _ _ _ _." },
  { word: "excited", meaning: "aufgeregt", example: "The kids are _ _ _ _ _ _ _." },
  { word: "boring", meaning: "langweilig", example: "The lesson was _ _ _ _ _ _ _." }
];

const adverbs = [
  { word: "quickly", meaning: "schnell", example: "She runs _ _ _ _ _ _ _." },
  { word: "slowly", meaning: "langsam", example: "He walks _ _ _ _ _ _." },
  { word: "always", meaning: "immer", example: "I _ _ _ _ _ wake up early." },
  { word: "never", meaning: "nie", example: "She _ _ _ _ _ forgets her keys." },
  { word: "often", meaning: "oft", example: "They _ _ _ _ _ play together." },
  { word: "sometimes", meaning: "manchmal", example: "I _ _ _ _ _ _ _ _ _ forget." },
  { word: "carefully", meaning: "vorsichtig", example: "He drives _ _ _ _ _ _ _ _ _." },
  { word: "carelessly", meaning: "unvorsichtig", example: "She answered _ _ _ _ _ _ _ _ _ _." },
  { word: "happily", meaning: "glücklich", example: "They live _ _ _ _ _ _ _." },
  { word: "sadly", meaning: "traurig", example: "He spoke _ _ _ _ _." },
  { word: "loudly", meaning: "laut", example: "The dog barked _ _ _ _ _ _." },
  { word: "quietly", meaning: "leise", example: "She entered _ _ _ _ _ _ _." },
  { word: "easily", meaning: "leicht", example: "He solved it _ _ _ _ _ _." },
  { word: "hardly", meaning: "kaum", example: "I can _ _ _ _ _ _ see it." },
  { word: "nearly", meaning: "fast", example: "We are _ _ _ _ _ _ there." },
  { word: "already", meaning: "schon", example: "She has _ _ _ _ _ _ _ finished." },
  { word: "soon", meaning: "bald", example: "I will arrive _ _ _ _." },
  { word: "late", meaning: "spät", example: "He arrived _ _ _ _." },
  { word: "early", meaning: "früh", example: "She woke up _ _ _ _ _." },
  { word: "outside", meaning: "draußen", example: "The kids are playing _ _ _ _ _ _ _." },
  { word: "inside", meaning: "drinnen", example: "Please stay _ _ _ _ _ _." },
  { word: "together", meaning: "zusammen", example: "We work _ _ _ _ _ _ _ _." },
  { word: "alone", meaning: "allein", example: "He lives _ _ _ _ _." },
  { word: "well", meaning: "gut", example: "She sings very _ _ _ _." },
  { word: "badly", meaning: "schlecht", example: "The plan worked _ _ _ _ _." },
  { word: "far", meaning: "weit", example: "They live _ _ _ away." },
  { word: "near", meaning: "nah", example: "The school is _ _ _ _." },
  { word: "everywhere", meaning: "überall", example: "Flowers grow _ _ _ _ _ _ _ _ _." },
  { word: "nowhere", meaning: "nirgendwo", example: "I can find it _ _ _ _ _ _ _ _." },
  { word: "today", meaning: "heute", example: "I am busy _ _ _ _ _." },
  { word: "tomorrow", meaning: "morgen", example: "We will leave _ _ _ _ _ _ _ _." },
  { word: "yesterday", meaning: "gestern", example: "It happened _ _ _ _ _ _ _ _ _." },
  { word: "again", meaning: "wieder", example: "Try _ _ _ _ _." },
  { word: "once", meaning: "einmal", example: "I met her _ _ _ _." },
  { word: "twice", meaning: "zweimal", example: "I checked _ _ _ _ _." },
  { word: "daily", meaning: "täglich", example: "He trains _ _ _ _ _." },
  { word: "weekly", meaning: "wöchentlich", example: "We meet _ _ _ _ _ _." },
  { word: "seriously", meaning: "ernsthaft", example: "He spoke _ _ _ _ _ _ _ _ _." },
  { word: "politely", meaning: "höflich", example: "She answered _ _ _ _ _ _ _ _." },
  { word: "rudely", meaning: "unhöflich", example: "He behaved _ _ _ _ _ _." },
  { word: "clearly", meaning: "klar", example: "Please speak _ _ _ _ _ _." },
  { word: "silently", meaning: "leise", example: "She cried _ _ _ _ _ _ _ _." }
];

const vocabularyByMode = {
  nouns,
  adjectives,
  adverbs,
  mix: [...nouns, ...adjectives, ...adverbs]
};

// ===== LocalStorage Keys =====
const PROGRESS_KEY = 'studyhub_progress';
const STORAGE_KEY  = 'studyhub_stats';

// ===== SESSION SIZE =====
const SESSION_SIZE = 10;

// ===== HINTS =====
function generateHints(word, meaning) {
  const hints = [];
  hints.push(`Das Wort hat <strong>${word.length}</strong> Buchstaben.`);
  hints.push(`Es beginnt mit "<strong>${word[0].toUpperCase()}</strong>".`);
  hints.push(`Es endet mit "<strong>${word[word.length - 1].toUpperCase()}</strong>".`);
  hints.push(`Deutsche Bedeutung: "<strong>${meaning}</strong>".`);
  const vowels = word.match(/[aeiou]/gi);
  if (vowels) hints.push(`Das Wort enthält <strong>${vowels.length}</strong> Vokal(e).`);
  return hints;
}

// ===== STATE =====
let currentMode = null;
let currentDifficulty = null;
let currentExercises = [];
let currentExerciseIndex = 0;
let currentAttempt = 1;
let letterInputs = [];
let exerciseResults = [];

let sessionStats = {
  totalAttempts: 0,
  correct: 0,
  correctFirstTry: 0,
  correctSecondTry: 0,
  wrong: 0,
  totalScore: 0
};

// ===== DOM =====
const exerciseArea = document.querySelector('.content-grid');
const modeButtons        = document.querySelectorAll('.mode-btn');
const diffButtons        = document.querySelectorAll('.diff-btn');
const sentenceDisplay    = document.getElementById('sentenceDisplay');
const hintsList          = document.getElementById('hintsList');
const checkBtn           = document.getElementById('checkBtn');
const nextBtn            = document.getElementById('nextBtn');
const feedbackEl         = document.getElementById('feedback');
const progressNodes      = document.getElementById('progressNodes');
const progressLineFill   = document.getElementById('progressLineFill');
const progressPercentage = document.getElementById('progressPercentage');
const resultsScreen      = document.getElementById('resultsScreen');
const resetBtn           = document.getElementById('resetBtn');

const statAttemptsEl = document.getElementById('statAttempts');
const statBestEl     = document.getElementById('statBest');
const statLastEl     = document.getElementById('statLast');

// init
if (sentenceDisplay) sentenceDisplay.textContent = 'Wählen Sie einen Modus und einen Schwierigkeitsgrad aus, um zu beginnen.';
if (hintsList) hintsList.innerHTML = '<li>Noch keine Hinweise – wähle einen Modus und einen Schwierigkeitsgrad.</li>';
if (checkBtn) checkBtn.style.display = 'none';
if (nextBtn) nextBtn.style.display = 'none';


initFromLocalStorage();

// events
modeButtons.forEach(btn => btn.addEventListener('click', () => setMode(btn.dataset.mode)));
diffButtons.forEach(btn => btn.addEventListener('click', () => setDifficulty(btn.dataset.difficulty)));

if (checkBtn) checkBtn.addEventListener('click', checkAnswer);
if (nextBtn) nextBtn.addEventListener('click', loadNextExercise);

if (resetBtn) {
  resetBtn.addEventListener('click', () => {

    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PROGRESS_KEY);


    if (statAttemptsEl) statAttemptsEl.textContent = '0';
    if (statBestEl) statBestEl.textContent = '0%';
    if (statLastEl) statLastEl.textContent = '0%';

    if (resultsScreen) resultsScreen.classList.remove('show');
    clearFeedback();

    if (sentenceDisplay) sentenceDisplay.textContent = 'Wählen Sie einen Modus und einen Schwierigkeitsgrad aus, um zu beginnen.';
    if (hintsList) hintsList.innerHTML = '<li>Noch keine Hinweise – wähle einen Modus und einen Schwierigkeitsgrad.</li>';
    if (checkBtn) checkBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';


    modeButtons.forEach(b => {
      b.classList.remove('btn-primary');
      b.classList.add('btn-secondary');
    });
    diffButtons.forEach(b => {
      b.classList.remove('btn-primary');
      b.classList.add('btn-secondary');
    });

    currentMode = null;
    currentDifficulty = null;

    if (progressLineFill) progressLineFill.style.width = '0%';
    if (progressPercentage) progressPercentage.textContent = '0%';
    if (progressNodes) progressNodes.innerHTML = '';

    console.log('[Vocab] Reset: localStorage gelöscht');
  });
}

//Load storage on start
function initFromLocalStorage() {
  const stats = loadStatsSafe();

  if (statAttemptsEl) statAttemptsEl.textContent = String(stats.totalAttempts ?? 0);
  if (statBestEl) statBestEl.textContent = `${stats.bestAccuracy ?? 0}%`;
  if (statLastEl) statLastEl.textContent = `${stats.lastAccuracy ?? 0}%`;

  console.log('[Vocab] Beim Start geladen:', stats);
}

//modus setzen
function setMode(mode) {
  currentMode = mode;
  modeButtons.forEach(b => {
    b.classList.toggle('btn-primary', b.dataset.mode === mode);
    b.classList.toggle('btn-secondary', b.dataset.mode !== mode);
  });
  maybeStart();
}

//difficulty setzen
function setDifficulty(diff) {
  currentDifficulty = diff;
  diffButtons.forEach(b => {
    b.classList.toggle('btn-primary', b.dataset.difficulty === diff);
    b.classList.toggle('btn-secondary', b.dataset.difficulty !== diff);
  });
  maybeStart();
}

//start
function maybeStart() {
  if (!currentMode || !currentDifficulty) return;
  startSession();
}

//session
function startSession() {
  if (exerciseArea) exerciseArea.style.display = 'grid';
  const pool = vocabularyByMode[currentMode] || vocabularyByMode.mix;

  let filtered;
  if (currentDifficulty === 'easy') {
    filtered = pool.filter(v => v.word.length <= 5);
  } else if (currentDifficulty === 'medium') {
    filtered = pool.filter(v => v.word.length >= 6 && v.word.length <= 8);
  } else {
    filtered = pool.filter(v => v.word.length >= 9);
  }

  if (filtered.length === 0) {
    if (sentenceDisplay) sentenceDisplay.textContent =
      'Keine Wörter für diese Kombination gefunden. Versuchen Sie einen anderen Modus oder Schwierigkeitsgrad.';
    if (hintsList) hintsList.innerHTML = '<li>—</li>';
    if (checkBtn) checkBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    return;
  }

  currentExercises = [...filtered]
    .sort(() => Math.random() - 0.5)
    .slice(0, SESSION_SIZE);

  currentExerciseIndex = 0;
  currentAttempt = 1;

  exerciseResults = new Array(currentExercises.length).fill('upcoming');
  exerciseResults[0] = 'current';

  sessionStats = {
    totalAttempts: 0,
    correct: 0,
    correctFirstTry: 0,
    correctSecondTry: 0,
    wrong: 0,
    totalScore: 0
  };

  if (resultsScreen) resultsScreen.classList.remove('show');
  clearFeedback();
  loadExercise();
  updateProgress();
}

//load aufgaben
function loadExercise() {
  if (currentExerciseIndex >= currentExercises.length) {
    showResults();
    return;
  }

  const ex = currentExercises[currentExerciseIndex];
  const word = ex.word.toUpperCase();

  if (hintsList) {
    hintsList.innerHTML = generateHints(ex.word, ex.meaning).map(h => `<li>${h}</li>`).join('');
  }

  let inputsHTML = '<span class="letter-inputs">';
  for (let i = 0; i < word.length; i++) {
    inputsHTML += `<input class="letter-input" maxlength="1" autocomplete="off" spellcheck="false">`;
  }
  inputsHTML += '</span>';

  if (sentenceDisplay) {
    sentenceDisplay.innerHTML =
      `<div class="example-sentence">Beispiel: <em>"${ex.example}"</em></div>` +
      `<div class="type-prompt">Geben Sie das Wort ein: ${inputsHTML}</div>`;
  }

  letterInputs = Array.from(document.querySelectorAll('.letter-input'));

  letterInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
      if (input.value && i < letterInputs.length - 1) letterInputs[i + 1].focus();
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !input.value && i > 0) letterInputs[i - 1].focus();
      if (e.key === 'Enter') checkAnswer();
    });
  });

  if (letterInputs[0]) letterInputs[0].focus();
  if (checkBtn) checkBtn.style.display = 'inline-block';
  if (nextBtn) nextBtn.style.display = 'none';

  clearFeedback();
  currentAttempt = 1;
}

//answer check
function checkAnswer() {
  const solution = currentExercises[currentExerciseIndex].word.toUpperCase();
  const typed = letterInputs.map(i => i.value).join('');

  if (typed.length < solution.length || letterInputs.some(i => !i.value)) {
    showFeedback('⚠ Fill in all letters first.', 'warning');
    return;
  }

  sessionStats.totalAttempts++;

  if (typed.toUpperCase() === solution) {
    const pts = solution.length * (currentAttempt === 1 ? 2 : 1);
    sessionStats.totalScore += pts;
    sessionStats.correct++;
    if (currentAttempt === 1) sessionStats.correctFirstTry++;
    else sessionStats.correctSecondTry++;

    exerciseResults[currentExerciseIndex] = currentAttempt === 1 ? 'success-first' : 'success-second';

    letterInputs.forEach(inp => inp.classList.add('correct'));
    showFeedback(`✓ Correct! +${pts} pts`, 'success');

    if (checkBtn) checkBtn.style.display = 'none';
    if (nextBtn) {
      nextBtn.style.display = 'inline-block';
      nextBtn.focus();
    }
  } else {
    letterInputs.forEach((inp, i) => {
      inp.classList.add(inp.value.toUpperCase() === solution[i] ? 'correct' : 'incorrect');
    });

    if (currentAttempt === 1) {
      currentAttempt = 2;
      showFeedback('✗ Not quite — try once more!', 'error');
      setTimeout(() => {
        letterInputs.forEach(inp => {
          inp.value = '';
          inp.className = 'letter-input';
        });
        if (letterInputs[0]) letterInputs[0].focus();
      }, 900);
    } else {
      sessionStats.wrong++;
      exerciseResults[currentExerciseIndex] = 'failed';
      showFeedback(`✗ The answer was: ${solution}`, 'error');

      if (checkBtn) checkBtn.style.display = 'none';
      if (nextBtn) {
        nextBtn.style.display = 'inline-block';
        nextBtn.focus();
      }
    }
  }

  updateProgress();
}

statAttempts

// next
function loadNextExercise() {
  currentExerciseIndex++;
  if (currentExerciseIndex < exerciseResults.length) {
    exerciseResults[currentExerciseIndex] = 'current';
  }
  loadExercise();
  updateProgress();
}

// progress
function updateProgress() {
  const completed = currentExerciseIndex;
  const pct = Math.min(completed * 10, 100);

  if (progressLineFill) progressLineFill.style.width = `${pct}%`;
  if (progressPercentage) progressPercentage.textContent = `${pct}%`;

  if (!progressNodes) return;

  progressNodes.innerHTML = '';
  const visible = 10; // always 10 nodes

  for (let i = 0; i < visible; i++) {
    const node = document.createElement('div');
    const status = exerciseResults[i] || 'upcoming';
    let cls = 'progress-node';

    if (status === 'success-first') cls += ' correct';
    else if (status === 'success-second') cls += ' secondtry';
    else if (status === 'failed') cls += ' wrong';
    else if (status === 'current') cls += ' current';

    node.className = cls;
    node.textContent = i + 1;
    progressNodes.appendChild(node);
  }
}



//feedback
function showFeedback(msg, type) {
  if (!feedbackEl) return;
  feedbackEl.textContent = msg;
  feedbackEl.className = `feedback ${type} show`;
}
function clearFeedback() {
  if (!feedbackEl) return;
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
}

// results + save
function showResults() {
  const acc = sessionStats.totalAttempts
    ? Math.round((sessionStats.correct / sessionStats.totalAttempts) * 100)
    : 0;

  // ── CHANGE 2: hide exercise area (hints + sentence) when session ends ──
// ── HIDE COMPLETE EXERCISE AREA ──
  if (exerciseArea) exerciseArea.style.display = 'none';
  clearFeedback();

  // UI Final
  const finalScore = document.getElementById('finalScore');
  const finalCorrect = document.getElementById('finalCorrect');
  const finalAccuracy = document.getElementById('finalAccuracy');

  if (finalScore) finalScore.textContent = sessionStats.totalScore;
  if (finalCorrect) finalCorrect.textContent = `${sessionStats.correct} / ${currentExercises.length}`;
  if (finalAccuracy) finalAccuracy.textContent = `${acc}%`;

  if (resultsScreen) resultsScreen.classList.add('show');

  // Save Progress
  const progress = loadProgressSafe();
  progress.masteryScore = (progress.masteryScore || 0) + sessionStats.totalScore;
  progress.totalAttempts = (progress.totalAttempts || 0) + sessionStats.totalAttempts;
  progress.correct = (progress.correct || 0) + sessionStats.correct;
  progress.wrong = (progress.wrong || 0) + sessionStats.wrong;
  progress.accuracy = progress.totalAttempts
    ? Math.round((progress.correct / progress.totalAttempts) * 100)
    : 0;
  progress.level = calculateLevel(progress.masteryScore);
  progress.lastActive = new Date().toISOString();
  saveProgressSafe(progress);

  // Save Stats
  const stats = loadStatsSafe();
  stats.totalAttempts = (stats.totalAttempts || 0) + 1;
  stats.lastAccuracy = acc;
  stats.bestAccuracy = Math.max(stats.bestAccuracy || 0, acc);
  saveStatsSafe(stats);

  // Update Aside UI
  if (statAttemptsEl) statAttemptsEl.textContent = String(stats.totalAttempts);
  if (statBestEl) statBestEl.textContent = `${stats.bestAccuracy}%`;
  if (statLastEl) statLastEl.textContent = `${stats.lastAccuracy}%`;

  console.log('[Vocab] saved', { stats, progress });
}

// ===== STORAGE HELPERS =====
function loadStatsSafe() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      bestAccuracy: 0,
      lastAccuracy: 0,
      totalAttempts: 0
    };
  } catch {
    return { bestAccuracy: 0, lastAccuracy: 0, totalAttempts: 0 };
  }
}
function saveStatsSafe(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadProgressSafe() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {
      masteryScore: 0,
      level: "Anfänger",
      accuracy: 0,
      totalAttempts: 0,
      correct: 0,
      wrong: 0,
      lastActive: null
    };
  } catch {
    return {
      masteryScore: 0,
      level: "Anfänger",
      accuracy: 0,
      totalAttempts: 0,
      correct: 0,
      wrong: 0,
      lastActive: null
    };
  }
}
function saveProgressSafe(data) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

function calculateLevel(score) {
  if (score < 100) return "Anfänger";
  if (score < 300) return "Fortgeschritten";
  return "Profi";
}
