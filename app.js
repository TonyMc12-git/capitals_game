const APP_VERSION = "20260423-capitals8";
const HIGH_SCORE_KEY = "capitalsGameHighScore";

const rounds = [
  { country: "Afghanistan", capital: "Kabul" },
  { country: "Albania", capital: "Tirana" },
  { country: "Algeria", capital: "Algiers" },
  { country: "Andorra", capital: "Andorra la Vella" },
  { country: "Angola", capital: "Luanda" },
  { country: "Antigua and Barbuda", capital: "Saint John's" },
  { country: "Argentina", capital: "Buenos Aires" },
  { country: "Armenia", capital: "Yerevan" },
  { country: "Australia", capital: "Canberra" },
  { country: "Austria", capital: "Vienna" },
  { country: "Azerbaijan", capital: "Baku" },
  { country: "Bahamas", capital: "Nassau" },
  { country: "Bahrain", capital: "Manama" },
  { country: "Bangladesh", capital: "Dhaka" },
  { country: "Barbados", capital: "Bridgetown" },
  { country: "Belarus", capital: "Minsk" },
  { country: "Belgium", capital: "Brussels" },
  { country: "Belize", capital: "Belmopan" },
  { country: "Benin", capital: "Porto-Novo" },
  { country: "Bhutan", capital: "Thimphu" },
  { country: "Bolivia", capital: "Sucre" },
  { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
  { country: "Botswana", capital: "Gaborone" },
  { country: "Brazil", capital: "Brasília" },
  { country: "Brunei", capital: "Bandar Seri Begawan" },
  { country: "Bulgaria", capital: "Sofia" },
  { country: "Burkina Faso", capital: "Ouagadougou" },
  { country: "Burundi", capital: "Gitega" },
  { country: "Cabo Verde", capital: "Praia" },
  { country: "Cambodia", capital: "Phnom Penh" },
  { country: "Cameroon", capital: "Yaoundé" },
  { country: "Canada", capital: "Ottawa" },
  { country: "Central African Republic", capital: "Bangui" },
  { country: "Chad", capital: "N'Djamena" },
  { country: "Chile", capital: "Santiago" },
  { country: "China", capital: "Beijing" },
  { country: "Colombia", capital: "Bogotá" },
  { country: "Comoros", capital: "Moroni" },
  { country: "Congo", capital: "Brazzaville" },
  { country: "Costa Rica", capital: "San José" },
  { country: "Cote d'Ivoire", capital: "Yamoussoukro" },
  { country: "Croatia", capital: "Zagreb" },
  { country: "Cuba", capital: "Havana" },
  { country: "Cyprus", capital: "Nicosia" },
  { country: "Czechia", capital: "Prague" },
  { country: "Democratic Republic of the Congo", capital: "Kinshasa" },
  { country: "Denmark", capital: "Copenhagen" },
  { country: "Djibouti", capital: "Djibouti" },
  { country: "Dominica", capital: "Roseau" },
  { country: "Dominican Republic", capital: "Santo Domingo" },
  { country: "Ecuador", capital: "Quito" },
  { country: "Egypt", capital: "Cairo" },
  { country: "El Salvador", capital: "San Salvador" },
  { country: "Equatorial Guinea", capital: "Ciudad de la Paz" },
  { country: "Eritrea", capital: "Asmara" },
  { country: "Estonia", capital: "Tallinn" },
  { country: "Eswatini", capital: "Mbabane" },
  { country: "Ethiopia", capital: "Addis Ababa" },
  { country: "Fiji", capital: "Suva" },
  { country: "Finland", capital: "Helsinki" },
  { country: "France", capital: "Paris" },
  { country: "Gabon", capital: "Libreville" },
  { country: "Gambia", capital: "Banjul" },
  { country: "Georgia", capital: "Tbilisi" },
  { country: "Germany", capital: "Berlin" },
  { country: "Ghana", capital: "Accra" },
  { country: "Greece", capital: "Athens" },
  { country: "Grenada", capital: "St. George's" },
  { country: "Guatemala", capital: "Guatemala City" },
  { country: "Guinea", capital: "Conakry" },
  { country: "Guinea-Bissau", capital: "Bissau" },
  { country: "Guyana", capital: "Georgetown" },
  { country: "Haiti", capital: "Port-au-Prince" },
  { country: "Honduras", capital: "Tegucigalpa" },
  { country: "Hungary", capital: "Budapest" },
  { country: "Iceland", capital: "Reykjavik" },
  { country: "India", capital: "New Delhi" },
  { country: "Indonesia", capital: "Jakarta" },
  { country: "Iran", capital: "Tehran" },
  { country: "Iraq", capital: "Baghdad" },
  { country: "Ireland", capital: "Dublin" },
  { country: "Israel", capital: "Jerusalem" },
  { country: "Italy", capital: "Rome" },
  { country: "Jamaica", capital: "Kingston" },
  { country: "Japan", capital: "Tokyo" },
  { country: "Jordan", capital: "Amman" },
  { country: "Kazakhstan", capital: "Astana" },
  { country: "Kenya", capital: "Nairobi" },
  { country: "Kiribati", capital: "South Tarawa" },
  { country: "Kyrgyzstan", capital: "Bishkek" },
  { country: "Kuwait", capital: "Kuwait City" },
  { country: "Laos", capital: "Vientiane" },
  { country: "Latvia", capital: "Riga" },
  { country: "Lebanon", capital: "Beirut" },
  { country: "Lesotho", capital: "Maseru" },
  { country: "Liberia", capital: "Monrovia" },
  { country: "Libya", capital: "Tripoli" },
  { country: "Liechtenstein", capital: "Vaduz" },
  { country: "Lithuania", capital: "Vilnius" },
  { country: "Luxembourg", capital: "Luxembourg" },
  { country: "Madagascar", capital: "Antananarivo" },
  { country: "Malawi", capital: "Lilongwe" },
  { country: "Malaysia", capital: "Kuala Lumpur" },
  { country: "Maldives", capital: "Malé" },
  { country: "Mali", capital: "Bamako" },
  { country: "Malta", capital: "Valletta" },
  { country: "Marshall Islands", capital: "Majuro" },
  { country: "Mauritania", capital: "Nouakchott" },
  { country: "Mauritius", capital: "Port Louis" },
  { country: "Mexico", capital: "Mexico City" },
  { country: "Micronesia", capital: "Palikir" },
  { country: "Moldova", capital: "Chișinău" },
  { country: "Monaco", capital: "Monaco" },
  { country: "Mongolia", capital: "Ulan Bator" },
  { country: "Montenegro", capital: "Podgorica" },
  { country: "Morocco", capital: "Rabat" },
  { country: "Mozambique", capital: "Maputo" },
  { country: "Myanmar", capital: "Naypyidaw" },
  { country: "Namibia", capital: "Windhoek" },
  { country: "Nauru", capital: "Yaren" },
  { country: "Nepal", capital: "Kathmandu" },
  { country: "Netherlands", capital: "Amsterdam" },
  { country: "New Zealand", capital: "Wellington" },
  { country: "Nicaragua", capital: "Managua" },
  { country: "Niger", capital: "Niamey" },
  { country: "Nigeria", capital: "Abuja" },
  { country: "North Macedonia", capital: "Skopje" },
  { country: "North Korea", capital: "Pyongyang" },
  { country: "Norway", capital: "Oslo" },
  { country: "Oman", capital: "Muscat" },
  { country: "Pakistan", capital: "Islamabad" },
  { country: "Palau", capital: "Ngerulmud" },
  { country: "Panama", capital: "Panama City" },
  { country: "Papua New Guinea", capital: "Port Moresby" },
  { country: "Paraguay", capital: "Asunción" },
  { country: "Peru", capital: "Lima" },
  { country: "Philippines", capital: "Manila" },
  { country: "Poland", capital: "Warsaw" },
  { country: "Portugal", capital: "Lisbon" },
  { country: "Qatar", capital: "Doha" },
  { country: "Romania", capital: "Bucharest" },
  { country: "Russia", capital: "Moscow" },
  { country: "Rwanda", capital: "Kigali" },
  { country: "Saint Kitts and Nevis", capital: "Basseterre" },
  { country: "Saint Lucia", capital: "Castries" },
  { country: "Saint Vincent and the Grenadines", capital: "Kingstown" },
  { country: "Samoa", capital: "Apia" },
  { country: "San Marino", capital: "City of San Marino" },
  { country: "Sao Tome and Principe", capital: "São Tomé" },
  { country: "Saudi Arabia", capital: "Riyadh" },
  { country: "Senegal", capital: "Dakar" },
  { country: "Serbia", capital: "Belgrade" },
  { country: "Seychelles", capital: "Victoria" },
  { country: "Sierra Leone", capital: "Freetown" },
  { country: "Singapore", capital: "Singapore" },
  { country: "Slovakia", capital: "Bratislava" },
  { country: "Slovenia", capital: "Ljubljana" },
  { country: "Solomon Islands", capital: "Honiara" },
  { country: "Somalia", capital: "Mogadishu" },
  { country: "South Africa", capital: "Pretoria" },
  { country: "South Korea", capital: "Seoul" },
  { country: "South Sudan", capital: "Juba" },
  { country: "Spain", capital: "Madrid" },
  { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte" },
  { country: "Sudan", capital: "Khartoum" },
  { country: "Suriname", capital: "Paramaribo" },
  { country: "Sweden", capital: "Stockholm" },
  { country: "Switzerland", capital: "Bern" },
  { country: "Syria", capital: "Damascus" },
  { country: "Tajikistan", capital: "Dushanbe" },
  { country: "Tanzania", capital: "Dodoma" },
  { country: "Thailand", capital: "Bangkok" },
  { country: "Timor-Leste", capital: "Dili" },
  { country: "Togo", capital: "Lomé" },
  { country: "Tonga", capital: "Nuku'alofa" },
  { country: "Trinidad and Tobago", capital: "Port of Spain" },
  { country: "Tunisia", capital: "Tunis" },
  { country: "Turkey", capital: "Ankara" },
  { country: "Turkmenistan", capital: "Ashgabat" },
  { country: "Tuvalu", capital: "Funafuti" },
  { country: "Uganda", capital: "Kampala" },
  { country: "Ukraine", capital: "Kyiv" },
  { country: "United Arab Emirates", capital: "Abu Dhabi" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States", capital: "Washington, D.C." },
  { country: "Uruguay", capital: "Montevideo" },
  { country: "Uzbekistan", capital: "Tashkent" },
  { country: "Vanuatu", capital: "Port Vila" },
  { country: "Venezuela", capital: "Caracas" },
  { country: "Vietnam", capital: "Hanoi" },
  { country: "Yemen", capital: "Sana'a" },
  { country: "Zambia", capital: "Lusaka" },
  { country: "Zimbabwe", capital: "Harare" },
  { country: "American Samoa", capital: "Pago Pago" },
  { country: "Anguilla", capital: "The Valley" },
  { country: "Aland Islands", capital: "Mariehamn" },
  { country: "Aruba", capital: "Oranjestad" },
  { country: "Bermuda", capital: "Hamilton" },
  { country: "British Virgin Islands", capital: "Road Town" },
  { country: "Cayman Islands", capital: "George Town" },
  { country: "Christmas Island", capital: "Flying Fish Cove" },
  { country: "Cook Islands", capital: "Avarua" },
  { country: "Cocos Islands", capital: "West Island" },
  { country: "Curacao", capital: "Willemstad" },
  { country: "Falkland Islands", capital: "Stanley" },
  { country: "Faroe Islands", capital: "Tórshavn" },
  { country: "French Polynesia", capital: "Papeetē" },
  { country: "Gibraltar", capital: "Gibraltar" },
  { country: "Greenland", capital: "Nuuk" },
  { country: "Guam", capital: "Hagåtña" },
  { country: "Guernsey", capital: "St. Peter Port" },
  { country: "Hong Kong", capital: "City of Victoria" },
  { country: "British Indian Ocean Territory", capital: "Diego Garcia" },
  { country: "Isle of Man", capital: "Douglas" },
  { country: "Jersey", capital: "Saint Helier" },
  { country: "Kosovo", capital: "Pristina" },
  { country: "Macau", capital: "Macau" },
  { country: "Montserrat", capital: "Plymouth" },
  { country: "New Caledonia", capital: "Nouméa" },
  { country: "Norfolk Island", capital: "Kingston" },
  { country: "Niue", capital: "Alofi" },
  { country: "Northern Mariana Islands", capital: "Saipan" },
  { country: "Palestine", capital: "Ramallah" },
  { country: "Pitcairn Islands", capital: "Adamstown" },
  { country: "Puerto Rico", capital: "San Juan" },
  { country: "Saint Barthelemy", capital: "Gustavia" },
  { country: "Saint Helena, Ascension and Tristan da Cunha", capital: "Jamestown" },
  { country: "Sint Maarten", capital: "Philipsburg" },
  { country: "South Georgia and the South Sandwich Islands", capital: "King Edward Point" },
  { country: "French Southern Territories", capital: "Port-aux-Français" },
  { country: "Taiwan", capital: "Taipei" },
  { country: "Tokelau", capital: "Fakaofo" },
  { country: "Turks and Caicos Islands", capital: "Cockburn Town" },
  { country: "U.S. Virgin Islands", capital: "Charlotte Amalie" },
  { country: "Vatican City", capital: "Vatican City" },
  { country: "Wallis and Futuna", capital: "Mata-Utu" },
  { country: "Western Sahara", capital: "El Aaiún" }
];

const capitalPool = [...new Set(rounds.map((round) => round.capital))];

const promptCountryEl = document.getElementById("prompt-country");
const optionsGridEl = document.getElementById("options-grid");
const scoreEl = document.getElementById("score");
const scoreContextEl = document.getElementById("score-context");
const pointsScoreEl = document.getElementById("points-score");
const roundTimerEl = document.getElementById("round-timer");
const highScoreEl = document.getElementById("high-score");
const newGameButtonEl = document.getElementById("new-game-button");
const bonusToastEl = document.getElementById("bonus-toast");
const celebrationEl = document.getElementById("celebration");
const celebrationKickerEl = document.getElementById("celebration-kicker");
const celebrationTitleEl = document.getElementById("celebration-title");
const celebrationCopyEl = document.getElementById("celebration-copy");
const celebrationButtonEl = document.getElementById("celebration-button");

const state = {
  deck: [],
  currentRound: null,
  points: 0,
  highScore: 0,
  correct: 0,
  presented: 0,
  correctStreak: 0,
  timerId: null,
  timerSegmentStartedAt: 0,
  streakElapsedMs: 0,
  resetTimerOnNextRound: false,
  isLocked: false,
  isComplete: false,
  feedbackTimer: null,
  feedbackReadyAt: 0,
  bonusTimer: null
};

registerServiceWorker();
renderPoints();
resetGame();
newGameButtonEl.addEventListener("click", resetGame);
celebrationButtonEl.addEventListener("click", () => {
  if (Date.now() < state.feedbackReadyAt) {
    return;
  }

  hideCelebration();
  if (!state.isComplete) {
    startRound();
  }
});

window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    fitOptionText();
    fitPromptText();
    fitScoreText();
  });
});

function resetGame() {
  stopRoundTimer();
  state.deck = shuffleList(rounds);
  state.currentRound = null;
  state.points = 0;
  state.correct = 0;
  state.presented = 0;
  state.correctStreak = 0;
  state.streakElapsedMs = 0;
  state.timerSegmentStartedAt = 0;
  state.resetTimerOnNextRound = false;
  state.isLocked = false;
  state.isComplete = false;
  state.highScore = readHighScore();
  renderScore();
  renderPoints();
  renderTimer(0);
  scoreContextEl.textContent = `of ${rounds.length} countries / territories`;
  fitScoreText();
  startRound();
}

function startRound() {
  if (state.deck.length === 0) {
    finishGame();
    return;
  }

  state.currentRound = state.deck.pop();
  state.isLocked = false;
  promptCountryEl.textContent = state.currentRound.country;
  renderOptions(buildOptions(state.currentRound));
  fitPromptText();
  startRoundTimer();
}

function buildOptions(round) {
  const options = new Set([round.capital]);
  const fallbackPool = shuffleList(capitalPool.filter((city) => city !== round.capital));

  for (const city of fallbackPool) {
    if (options.size >= 20) {
      break;
    }
    options.add(city);
  }

  return shuffleList([...options].slice(0, 20));
}

function renderOptions(options) {
  optionsGridEl.innerHTML = "";
  options.forEach((city) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = city;
    bindPress(button, () => chooseCity(city, button));
    optionsGridEl.appendChild(button);
  });

  window.requestAnimationFrame(fitOptionText);
}

function chooseCity(city, button) {
  if (state.isLocked) {
    return;
  }

  state.isLocked = true;
  const roundMs = stopRoundTimer();
  const isCorrect = city === state.currentRound.capital;
  state.presented += 1;
  if (isCorrect) {
    state.correct += 1;
  }

  applyScoring(isCorrect, 10, roundMs);

  [...optionsGridEl.querySelectorAll(".option-button")].forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.textContent === state.currentRound.capital) {
      optionButton.classList.add("correct");
    }
  });

  if (!isCorrect) {
    button.classList.add("incorrect");
  }

  renderScore();
  showRoundResult(isCorrect);
}

function showRoundResult(isCorrect) {
  celebrationEl.classList.toggle("wrong", !isCorrect);
  celebrationKickerEl.textContent = isCorrect ? "Correct" : "Answer";
  celebrationTitleEl.textContent = state.currentRound.capital;
  celebrationCopyEl.textContent = "";
  showFeedback();
}

function finishGame() {
  state.isLocked = true;
  state.isComplete = true;
  stopRoundTimer();
  promptCountryEl.textContent = "Finished";
  optionsGridEl.innerHTML = "";
  celebrationEl.classList.remove("wrong");
  celebrationKickerEl.textContent = "Complete";
  celebrationTitleEl.textContent = "Full Set Done";
  celebrationCopyEl.textContent = "";
  showFeedback();
}

function showFeedback() {
  window.clearTimeout(state.feedbackTimer);
  state.feedbackReadyAt = Date.now() + 400;
  celebrationButtonEl.disabled = true;
  celebrationEl.classList.add("show");
  celebrationEl.setAttribute("aria-hidden", "false");
  state.feedbackTimer = window.setTimeout(() => {
    celebrationButtonEl.disabled = false;
  }, 400);
}

function hideCelebration() {
  window.clearTimeout(state.feedbackTimer);
  celebrationButtonEl.disabled = false;
  celebrationEl.classList.remove("show");
  celebrationEl.setAttribute("aria-hidden", "true");
}

function renderScore() {
  scoreEl.textContent = `${state.correct} / ${state.presented}`;
}

function startRoundTimer() {
  stopRoundTimer();
  if (state.resetTimerOnNextRound) {
    state.streakElapsedMs = 0;
    state.resetTimerOnNextRound = false;
  }

  state.timerSegmentStartedAt = performance.now();
  renderTimer(state.streakElapsedMs);
  state.timerId = window.setInterval(() => {
    renderTimer(state.streakElapsedMs + performance.now() - state.timerSegmentStartedAt);
  }, 100);
}

function stopRoundTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }

  if (!state.timerSegmentStartedAt) {
    return state.streakElapsedMs || 0;
  }

  state.streakElapsedMs += performance.now() - state.timerSegmentStartedAt;
  state.timerSegmentStartedAt = 0;
  renderTimer(state.streakElapsedMs);
  return state.streakElapsedMs;
}

function renderTimer(milliseconds) {
  const secondsText = (milliseconds / 1000).toFixed(1).padStart(5, "0");
  roundTimerEl.textContent = `${secondsText}s`;
}

function applyScoring(isCorrect, basePoints, roundMs) {
  const bonusMessages = [];

  if (isCorrect) {
    state.points += basePoints;
    state.correctStreak += 1;

    if (state.correctStreak % 10 === 0) {
      state.points += 100;
      bonusMessages.push("+100 streak bonus");

      const streakSeconds = roundMs / 1000;
      if (streakSeconds <= 10) {
        state.points += 400;
        bonusMessages.push("+400 10-in-10 bonus");
      } else if (streakSeconds <= 20) {
        state.points += 200;
        bonusMessages.push("+200 10-in-20 bonus");
      }
    }
  } else {
    state.correctStreak = 0;
    state.resetTimerOnNextRound = true;
  }

  updateHighScore();
  renderPoints();

  if (bonusMessages.length > 0) {
    showBonusToast(bonusMessages.join(" / "));
  }
}

function renderPoints() {
  pointsScoreEl.textContent = state.points;
  highScoreEl.textContent = state.highScore;
}

function updateHighScore() {
  if (state.points <= state.highScore) {
    return;
  }

  state.highScore = state.points;
  try {
    localStorage.setItem(HIGH_SCORE_KEY, String(state.highScore));
  } catch {
    // Ignore localStorage issues.
  }
}

function readHighScore() {
  try {
    const storedScore = Number(localStorage.getItem(HIGH_SCORE_KEY));
    return Number.isFinite(storedScore) && storedScore > 0 ? storedScore : 0;
  } catch {
    return 0;
  }
}

function showBonusToast(message) {
  window.clearTimeout(state.bonusTimer);
  bonusToastEl.textContent = message;
  bonusToastEl.classList.add("show");
  bonusToastEl.setAttribute("aria-hidden", "false");
  state.bonusTimer = window.setTimeout(() => {
    bonusToastEl.classList.remove("show");
    bonusToastEl.setAttribute("aria-hidden", "true");
  }, 1400);
}

function fitOptionText() {
  [...optionsGridEl.querySelectorAll(".option-button")].forEach((button) => {
    fitTextToBox(button, { minSize: 10, step: 0.5 });
  });
}

function fitPromptText() {
  fitTextToBox(promptCountryEl, { minSize: 24, step: 1 });
}

function fitScoreText() {
  fitTextToBox(scoreContextEl, { minSize: 9, step: 0.5 });
}

function fitTextToBox(element, options = {}) {
  const minSize = options.minSize || 10;
  const step = options.step || 1;
  element.style.fontSize = "";
  let fontSize = parseFloat(window.getComputedStyle(element).fontSize);

  while (fontSize > minSize && doesTextOverflow(element)) {
    fontSize -= step;
    element.style.fontSize = `${fontSize}px`;
  }
}

function doesTextOverflow(element) {
  return element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 1;
}

function shuffleList(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function bindPress(button, onChoose) {
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.classList.add("pressing");
    onChoose();
  });
  button.addEventListener("pointerup", () => {
    button.classList.remove("pressing");
  });
  button.addEventListener("pointercancel", () => {
    button.classList.remove("pressing");
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`./sw.js?v=${APP_VERSION}`).catch(() => {});
  });
}
