
const vocabulary = [
  { word: "apple", meaning: "Apfel", example: "I eat an _ _ _ _ _ _ every day." },
  { word: "banana", meaning: "Banane", example: "Monkeys love _ _ _ _ _ _ _." },
  { word: "cat", meaning: "Katze", example: "The cat is sleeping on the sofa." },
  { word: "dog", meaning: "Hund", example: "My _ _ _ loves to play fetch." },
  { word: "elephant", meaning: "Elefant", example: "The _ _ _ _ _ _ _ _ is the largest land animal." },
  { word: "fish", meaning: "Fisch", example: "I caught a big _ _ _ in the lake." },
  { word: "giraffe", meaning: "Giraffe", example: "The _ _ _ _ _ _ _ has a very long neck." },
  { word: "house", meaning: "Haus", example: "I live in a small house." },
  { word: "ice", meaning: "Eis", example: "The _ _ _ on the lake is frozen." },
  { word: "jungle", meaning: "Dschungel", example: "There are many animals in the _ _ _ _ _ _." },
  { word: "kite", meaning: "Drachen", example: "The children are flying a _ _ _ _." },
  { word: "lion", meaning: "Löwe", example: "The _ _ _ _ is called the king of the jungle." },
  { word: "moon", meaning: "Mond", example: "The _ _ _ _ shines brightly at night." },
  { word: "nose", meaning: "Nase", example: "He has a cold and a runny _ _ _ _." },
  { word: "orange", meaning: "Orange", example: "I like to drink _ _ _ _ _ _ juice in the morning." },
  { word: "penguin", meaning: "Pinguin", example: "_ _ _ _ _ _ _ _ live in cold regions." },
  { word: "queen", meaning: "Königin", example: "The _ _ _ _ _ waved to the crowd." },
  { word: "river", meaning: "Fluss", example: "The _ _ _ _ _ flows into the sea." },
  { word: "sun", meaning: "Sonne", example: "The _ _ _ rises in the east." },
  { word: "tree", meaning: "Baum", example: "There is a big _ _ _ _ in the garden." },
  { word: "umbrella", meaning: "Regenschirm", example: "I need an _ _ _ _ _ _ _ _ because it's raining." },
  { word: "violin", meaning: "Geige", example: "She plays the _ _ _ _ _ _ beautifully." },
  { word: "water", meaning: "Wasser", example: "Drink plenty of _ _ _ _ _ every day." },
  { word: "xylophone", meaning: "Xylophon", example: "The child is playing the _ _ _ _ _ _ _ _ _." },
  { word: "yogurt", meaning: "Joghurt", example: "I eat _ _ _ _ _ _ for breakfast." },
  { word: "zebra", meaning: "Zebra", example: "_ _ _ _ _ _ have black and white stripes." },
  { word: "airplane", meaning: "Flugzeug", example: "The _ _ _ _ _ _ _  is flying in the sky." },
  { word: "book", meaning: "Buch", example: "I am reading a _ _ _ _ about history." },
  { word: "car", meaning: "Auto", example: "My _ _ _ is very fast." },
  { word: "door", meaning: "Tür", example: "Please close the _ _ _ _." },
  { word: "egg", meaning: "Ei", example: "I like to eat boiled _ _ _ _." },
  { word: "forest", meaning: "Wald", example: "We are walking in the _ _ _ _ _ _." },
  { word: "garden", meaning: "Garten", example: "The flowers in the _ _ _ _ _ _ are beautiful." },
  { word: "hat", meaning: "Hut", example: "He is wearing a black _ _ _." },
  { word: "island", meaning: "Insel", example: "We visited a small _ _ _ _ _ _." },
  { word: "jacket", meaning: "Jacke", example: "Put on your _ _ _ _ _ _, it's cold." },
  { word: "key", meaning: "Schlüssel", example: "I lost my house _ _ _." },
  { word: "lamp", meaning: "Lampe", example: "Turn on the _ _ _ _, it's dark." },
  { word: "mountain", meaning: "Berg", example: "We climbed the highest _ _ _ _ _ _ _ _." },
  { word: "notebook", meaning: "Notizbuch", example: "I wrote my notes in a n_ _ _ _ _ _ _ _." },
  { word: "ocean", meaning: "Ozean", example: "The _ _ _ _ _ is vast and deep." },
  { word: "pencil", meaning: "Bleistift", example: "I need a _ _ _ _ _ _ to write." },
  { word: "rain", meaning: "Regen", example: "It will _ _ _ _ tomorrow." },
  { word: "star", meaning: "Stern", example: "The _ _ _ _ _ are shining at night." },
  { word: "train", meaning: "Zug", example: "The _ _ _ _ _ is on time." },
  { word: "unicorn", meaning: "Einhorn", example: "The _ _ _ _ _ _ _ is a mythical creature." },
  { word: "volcano", meaning: "Vulkan", example: "The _ _ _ _ _ _ _ erupted yesterday." },
  { word: "whale", meaning: "Wal", example: "_ _ _ _ _ _ are the largest animals in the ocean." },
  { word: "yacht", meaning: "Yacht", example: "He owns a big _ _ _ _ _." },
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
  { word: "duck", meaning: "Ente", example: "The _ _ _ swims on the lake." },
  { word: "earth", meaning: "Erde", example: "The _ _ _ moves around the sun." },
  { word: "engine", meaning: "Motor", example: "The car _ _ _ _ _ _ is loud." },
  { word: "farmer", meaning: "Bauer", example: "The _ _ _ _ _ works in the field." },
  { word: "feather", meaning: "Feder", example: "A bird has a soft _ _ _ _ _ _." },
  { word: "field", meaning: "Feld", example: "The cows are in the _ _ _ _." },
  { word: "flag", meaning: "Flagge", example: "The _ _ _ _ is waving in the wind." },
  { word: "flower", meaning: "Blume", example: "This _ _ _ _ _ smells nice." },
  { word: "frog", meaning: "Frosch", example: "A green _ _ _ _ jumps." },
  { word: "glass", meaning: "Glas", example: "The water is in a _ _ _ _ _." },
  { word: "glove", meaning: "Handschuh", example: "Wear a _ _ _ _ _ in winter." },
  { word: "goat", meaning: "Ziege", example: "The _ _ _ eats grass." },
  { word: "grape", meaning: "Traube", example: "I eat a purple _ _ _ _ _." },
  { word: "grass", meaning: "Gras", example: "The _ _ _ _ is green." },
  { word: "hill", meaning: "Hügel", example: "We walk up the _ _ _ _." },
  { word: "horse", meaning: "Pferd", example: "The _ _ _ _ runs fast." },
  { word: "hospital", meaning: "Krankenhaus", example: "She works in a _ _ _ _ _ _ _ _." },
  { word: "hotel", meaning: "Hotel", example: "We sleep in a _ _ _ _ _." },
  { word: "juice", meaning: "Saft", example: "I drink orange _ _ _ _ _." },
  { word: "knife", meaning: "Messer", example: "Cut the bread with a _ _ _ _ _." },
  { word: "lake", meaning: "See", example: "The _ _ _ _ is very calm." },
  { word: "leaf", meaning: "Blatt", example: "A green _ _ _ _ falls." },
  { word: "letter", meaning: "Brief", example: "I write a _ _ _ _ _ _." },
  { word: "market", meaning: "Markt", example: "We buy food at the _ _ _ _ _ _." },
  { word: "milk", meaning: "Milch", example: "The baby drinks _ _ _ _." },
  { word: "mirror", meaning: "Spiegel", example: "I see myself in the _ _ _ _ _ _." },
  { word: "mouse", meaning: "Maus", example: "The _ _ _ _ runs away." },
  { word: "music", meaning: "Musik", example: "I listen to _ _ _ _ _." },
  { word: "nest", meaning: "Nest", example: "The bird sits in a _ _ _ _." },
  { word: "onion", meaning: "Zwiebel", example: "The _ _ _ _ _ makes me cry." },
  { word: "paint", meaning: "Farbe", example: "I use _ _ _ _ _ to draw." },
  { word: "paper", meaning: "Papier", example: "Write it on _ _ _ _ _." },
  { word: "park", meaning: "Park", example: "Children play in the _ _ _ _." },
  { word: "phone", meaning: "Telefon", example: "My _ _ _ _ rings." },
  { word: "pig", meaning: "Schwein", example: "The _ _ _ lives on a farm." },
  { word: "pizza", meaning: "Pizza", example: "We eat _ _ _ _ _ tonight." },
  { word: "plate", meaning: "Teller", example: "The food is on the _ _ _ _ _." },
  { word: "rabbit", meaning: "Kaninchen", example: "The _ _ _ _ _ jumps." },
  { word: "road", meaning: "Straße", example: "The car drives on the _ _ _ _." },
  { word: "sand", meaning: "Sand", example: "The _ _ _ _ is hot." },
  { word: "school", meaning: "Schule", example: "Children go to _ _ _ _ _ _." },
  { word: "shoe", meaning: "Schuh", example: "My _ _ _ _ is dirty." },
  { word: "snake", meaning: "Schlange", example: "The _ _ _ _ moves quietly." },
  { word: "spoon", meaning: "Löffel", example: "Use a _ _ _ _ _ to eat." },
  { word: "street", meaning: "Straße", example: "The _ _ _ _ _ is busy." }
];

function difficultyFromWord(word) {
  if (word.length <= 4) return "easy";
  if (word.length <= 7) return "medium";
  return "hard";
}

const cards = vocabulary.map((v, i) => ({
  id: i + 1,
  front: v.meaning,
  back: v.word,
  difficulty: difficultyFromWord(v.word),
  tags: ["vocab"]
}));

let filteredCards = [...cards];


const STORAGE_KEY = "studyhub_data";

function getDefaultStudyHubData() {
  return {
    meta: { version: "1.2", lastUpdated: new Date().toISOString() },
    user: { username: "User" },
    modules: {
      flashcards: {
        cardStatus: {},
        kpi: {
          masteryScore: 0,
          level: "Anfänger",
          accuracy: 0,
          totalAttempts: 0,
          correct: 0,
          wrong: 0,
          lastActive: null,
          highscore: 0,
          bestLivesRemaining: 0
        },
        history: []
      }
    }
  };
}

function loadStudyHub() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const init = getDefaultStudyHubData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
      return init;
    }

    const parsed = JSON.parse(raw);
    parsed.meta ||= { version: "1.2", lastUpdated: new Date().toISOString() };
    parsed.modules ||= {};
    parsed.modules.flashcards ||= getDefaultStudyHubData().modules.flashcards;

    parsed.modules.flashcards.cardStatus ||= {};
    parsed.modules.flashcards.kpi ||= getDefaultStudyHubData().modules.flashcards.kpi;
    parsed.modules.flashcards.history ||= [];

    return parsed;
  } catch (e) {
    const init = getDefaultStudyHubData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
    return init;
  }
}

function saveStudyHub(data) {
  data.meta ||= { version: "1.2", lastUpdated: new Date().toISOString() };
  data.meta.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function $(id) {
  return document.getElementById(id);
}

const studyhub = loadStudyHub();
const flashModule = studyhub.modules.flashcards;


let index = 0;
let showBack = false;

const cardEl = $("card");
const cardText = $("cardText");
const learnedBadge = $("learnedBadge");
const difficultBadge = $("difficultBadge");

function currentCard() {
  return filteredCards[index] || null;
}

function renderBadges(card) {
  const status = flashModule.cardStatus[card.id] || {};
  if (learnedBadge) learnedBadge.style.display = status.learned ? "inline-flex" : "none";
  if (difficultBadge) difficultBadge.style.display = status.difficult ? "inline-flex" : "none";
}

function renderCard() {
  const card = currentCard();
  if (!card || !cardText) return;

  cardText.textContent = showBack ? card.back : card.front;
  renderBadges(card);

  if (game.active) startTimer();
}

const flipBtn = $("flipBtn");
if (flipBtn) {
  flipBtn.onclick = () => {
    showBack = !showBack;
    renderCard();
  };
}
if (cardEl) {
  cardEl.onclick = () => {
    if (flipBtn) flipBtn.click();
  };
}


const nextBtn = $("nextBtn");
if (nextBtn) {
  nextBtn.onclick = () => {
    if (filteredCards.length === 0) return;
    index = (index + 1) % filteredCards.length;
    showBack = false;
    renderCard();
  };
}

const prevBtn = $("prevBtn");
if (prevBtn) {
  prevBtn.onclick = () => {
    if (filteredCards.length === 0) return;
    index = (index - 1 + filteredCards.length) % filteredCards.length;
    showBack = false;
    renderCard();
  };
}


const markLearned = $("markLearned");
if (markLearned) {
  markLearned.onclick = () => {
    const card = currentCard();
    if (!card) return;

    flashModule.cardStatus[card.id] ||= {};
    flashModule.cardStatus[card.id].learned = !flashModule.cardStatus[card.id].learned;

    saveStudyHub(studyhub);
    renderCard();
  };
}

const markDifficult = $("markDifficult");
if (markDifficult) {
  markDifficult.onclick = () => {
    const card = currentCard();
    if (!card) return;

    flashModule.cardStatus[card.id] ||= {};
    flashModule.cardStatus[card.id].difficult = !flashModule.cardStatus[card.id].difficult;

    saveStudyHub(studyhub);
    renderCard();
  };
}

const shuffleBtn = $("shuffleBtn");
if (shuffleBtn) {
  shuffleBtn.onclick = () => {
    const arr = [...filteredCards];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    filteredCards = arr;
    index = 0;
    showBack = false;
    renderCard();
  };
}

const difficultyFilter = $("difficultyFilter");
const tagFilter = $("tagFilter");

function populateTagFilter() {
  if (!tagFilter) return;

  tagFilter.innerHTML = "";
  const allOpt = document.createElement("option");
  allOpt.value = "all";
  allOpt.textContent = "Alle Tags";
  tagFilter.appendChild(allOpt);

  const tags = new Set();
  cards.forEach((c) => {
    if (Array.isArray(c.tags)) c.tags.forEach((t) => tags.add(t));
  });

  Array.from(tags)
    .sort((a, b) => a.localeCompare(b))
    .forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t.charAt(0).toUpperCase() + t.slice(1);
      tagFilter.appendChild(opt);
    });
}

function applyFilters() {
  const diff = difficultyFilter ? difficultyFilter.value : "all";
  const tag = tagFilter ? tagFilter.value : "all";

  filteredCards = cards.filter((c) => {
    const diffMatch = diff === "all" || c.difficulty === diff;
    const tagMatch = tag === "all" || (Array.isArray(c.tags) && c.tags.includes(tag));
    return diffMatch && tagMatch;
  });

  index = 0;
  showBack = false;
  renderCard();

  syncSideLevelWithDifficulty();
}

if (difficultyFilter) difficultyFilter.onchange = applyFilters;
if (tagFilter) tagFilter.onchange = applyFilters;


let game = {
  active: false,
  livesStart: 3,
  lives: 3,
  points: 0,
  attempts: 0,
  correct: 0,
  answeredCards: new Set(),
  timeLimit: 10,
  timeLeft: 10,
  timerId: null
};

const livesEl = $("lives");
const pointsEl = $("points");
const timeLeftEl = $("timeLeft");
const timeLimitInput = $("timeLimitInput");
const gameOverEl = $("gameOver");

const startGameBtn = $("startGame");
const knewItBtn = $("knewIt");
const didntKnowBtn = $("didntKnowIt");
const restartBtn = $("restartGame");

function updateGameUI() {
  if (livesEl) livesEl.textContent = `❤️ ${game.lives}`;
  if (pointsEl) pointsEl.textContent = `⭐ ${game.points}`;
  if (timeLeftEl) timeLeftEl.textContent = `${game.timeLeft}`;
}

function setGameOverVisible(isVisible) {
  if (!gameOverEl) return;
  gameOverEl.classList.toggle("hidden", !isVisible);
}

function setMiniGameControlsEnabled({ playing }) {
  if (startGameBtn) startGameBtn.disabled = playing;
  if (knewItBtn) knewItBtn.disabled = !playing;
  if (didntKnowBtn) didntKnowBtn.disabled = !playing;
  if (restartBtn) restartBtn.disabled = playing;
}

function startTimer() {
  clearInterval(game.timerId);

  game.timeLeft = game.timeLimit;
  updateGameUI();

  game.timerId = setInterval(() => {
    game.timeLeft -= 1;
    updateGameUI();

    if (game.timeLeft <= 0) {
      clearInterval(game.timerId);
      handleTimeout();
    }
  }, 1000);
}

function calcLevel(masteryScore) {
  if (masteryScore < 50) return "Anfänger";
  if (masteryScore < 80) return "Fortgeschritten";
  return "Profi";
}

function endGame(reason = "lives") {
  clearInterval(game.timerId);
  game.active = false;

  const sessionAccuracy = Math.round((game.correct / game.attempts) * 100) || 0;

  flashModule.history.push({
    date: new Date().toISOString(),
    mode: "minigame",
    endReason: reason,            
    points: game.points,
    attempts: game.attempts,
    correct: game.correct,
    accuracy: sessionAccuracy,
    livesStart: game.livesStart,
    livesRemaining: game.lives
  });

  const kpi = flashModule.kpi;
  kpi.totalAttempts = parseInt(kpi.totalAttempts, 10) || 0;
  kpi.correct = parseInt(kpi.correct, 10) || 0;
  kpi.wrong = parseInt(kpi.wrong, 10) || 0;

  kpi.totalAttempts += game.attempts;
  kpi.correct += game.correct;
  kpi.wrong += (game.attempts - game.correct);

  kpi.accuracy = Math.round((kpi.correct / kpi.totalAttempts) * 100) || 0;
  kpi.masteryScore = kpi.accuracy;
  kpi.level = calcLevel(kpi.masteryScore);

  kpi.highscore = Math.max(parseInt(kpi.highscore, 10) || 0, game.points);
  kpi.bestLivesRemaining = Math.max(parseInt(kpi.bestLivesRemaining, 10) || 0, game.lives);
  kpi.lastActive = new Date().toISOString();

  saveStudyHub(studyhub);

  setMiniGameControlsEnabled({ playing: false });
  setGameOverVisible(true);
  renderDashboard();
}

function handleTimeout() {
  if (!game.active) return;
  const card = currentCard();
  if (!card) return;
  if (game.answeredCards.has(card.id)) return;

  game.answeredCards.add(card.id);
  game.attempts += 1;
  game.lives = Math.max(0, game.lives - 1);
  updateGameUI();

  
  endGame("timeout");
}

function startGame() {
  game = {
    active: true,
    livesStart: 3,
    lives: 3,
    points: 0,
    attempts: 0,
    correct: 0,
    answeredCards: new Set(),
    timeLimit: Math.max(3, parseInt(timeLimitInput?.value, 10) || 10),
    timeLeft: 0,
    timerId: null
  };

  setGameOverVisible(false);
  setMiniGameControlsEnabled({ playing: true }); 
  startTimer();
  updateGameUI();
}

if (startGameBtn) startGameBtn.onclick = startGame;

if (knewItBtn) {
  knewItBtn.onclick = () => {
    if (!game.active) return;
    const card = currentCard();
    if (!card) return;
    if (game.answeredCards.has(card.id)) return;

    game.answeredCards.add(card.id);
    game.attempts += 1;
    game.correct += 1;
    game.points += 10;

    startTimer();
    updateGameUI();
  };
}

if (didntKnowBtn) {
  didntKnowBtn.onclick = () => {
    if (!game.active) return;
    const card = currentCard();
    if (!card) return;
    if (game.answeredCards.has(card.id)) return;

    game.answeredCards.add(card.id);
    game.attempts += 1;
    game.lives = Math.max(0, game.lives - 1);

    if (game.lives === 0) endGame("lives");
    else startTimer();

    updateGameUI();
  };
}

if (restartBtn) restartBtn.onclick = startGame;


const dashAccuracy = $("dashAccuracy");
const dashHighscore = $("dashHighscore");
const dashLives = $("dashLives");
const dashProgressBar = $("dashProgressBar");
const sideLevel = $("sideLevel");

function difficultyToLevelLabel(diff) {
  // Mapping (so wie gewünscht: Level ändert sich, wenn du die Schwierigkeit änderst)
  if (diff === "easy") return "Anfänger";
  if (diff === "medium") return "Fortgeschritten";
  if (diff === "hard") return "Profi";
  // Bei "all" behalten wir das KPI-Level (Mastery) bei
  return flashModule?.kpi?.level || "Anfänger";
}

function syncSideLevelWithDifficulty() {
  if (!sideLevel) return;
  const diff = difficultyFilter ? difficultyFilter.value : "all";
  sideLevel.textContent = difficultyToLevelLabel(diff);
}

function renderDashboard() {
  const kpi = flashModule.kpi;

  if (dashAccuracy) dashAccuracy.textContent = `${kpi.accuracy || 0}%`;
  if (dashHighscore) dashHighscore.textContent = `${kpi.highscore || 0}`;
  if (dashLives) dashLives.textContent = `${kpi.bestLivesRemaining || 0}`;
  // Standard: KPI-Level anzeigen. Falls der User einen Schwierigkeits-Filter setzt,
  // überschreibt syncSideLevelWithDifficulty() das anschließend.
  if (sideLevel) sideLevel.textContent = `${kpi.level || "Anfänger"}`;

  if (dashProgressBar) {
    const val = Math.max(0, Math.min(100, parseInt(kpi.masteryScore, 10) || 0));
    dashProgressBar.style.width = `${val}%`;
  }
}


const resetAllBtn = $("resetAll");
if (resetAllBtn) {
  resetAllBtn.onclick = () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  };
}

const quickStartBtn = $("quickStart");
if (quickStartBtn) {
  quickStartBtn.onclick = () => {
    startGame();

  };
}


populateTagFilter();
applyFilters();
renderDashboard();
syncSideLevelWithDifficulty();
updateGameUI();
setMiniGameControlsEnabled({ playing: false });
setGameOverVisible(false);