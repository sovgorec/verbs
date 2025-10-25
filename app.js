/* ==============================
   VerboPlay v4 — Борис Бирюков
   ============================== */

let currentCategory = "";
let currentVerb = "";
let currentTense = "present";
let isReflexive = false;

const categorySelect = document.getElementById("categorySelect");
const verbSelect = document.getElementById("verbSelect");
const panel = document.getElementById("panel");
const examplesBlock = document.getElementById("examples");
const message = document.getElementById("message");
const verbLine = document.getElementById("verbLine");
const colLeft = document.getElementById("col-left");
const colRight = document.getElementById("col-right");

const tabPast = document.getElementById("tabPast");
const tabPresent = document.getElementById("tabPresent");
const tabFuture = document.getElementById("tabFuture");
const reflexSwitch = document.getElementById("reflexSwitch");

const btnPrev = document.getElementById("prevVerb");
const btnNext = document.getElementById("nextVerb");

const PRON = ["Yo","Tú","Él/Ella","Nosotros","Vosotros","Ellos/Ellas"];
const REFLEX_PRON = ["me","te","se","nos","os","se"];

// ===============================
// Загрузка категорий
// ===============================
function loadCategories() {
  categorySelect.innerHTML = "";
  Object.keys(VERBS).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
  currentCategory = categorySelect.value;
  loadVerbs();
}

// ===============================
// Загрузка глаголов выбранной категории
// ===============================
function loadVerbs() {
  verbSelect.innerHTML = "";
  const verbs = VERBS[currentCategory];
  Object.keys(verbs).forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    verbSelect.appendChild(opt);
  });
  currentVerb = verbSelect.value;
  renderVerb();
}

// ===============================
// Переключение времени
// ===============================
function setTense(t) {
  currentTense = t;
  [tabPast, tabPresent, tabFuture].forEach(el => el.classList.remove("active"));
  if (t === "past") tabPast.classList.add("active");
  else if (t === "future") tabFuture.classList.add("active");
  else tabPresent.classList.add("active");
  renderVerb();
}

// ===============================
// Переключение возвратного режима
// ===============================
function toggleReflex() {
  isReflexive = !isReflexive;
  reflexSwitch.classList.toggle("on", isReflexive);
  renderVerb();
}

// ===============================
// Показ конкретного глагола
// ===============================
function renderVerb() {
  const vData = VERBS[currentCategory][currentVerb];
  const tenseData = vData.tenses[getTenseKey(currentTense)];

  if (!tenseData) return showMessage("Нет данных по этому времени");

  // Проверяем возвратность
  if (isReflexive && !vData.reflexive) {
    hideMain();
    showMessage("Этот глагол не бывает возвратным.");
    return;
  }

  hideMessage();
  panel.hidden = false;
  examplesBlock.hidden = false;

  // Название
  verbLine.innerHTML = `${currentVerb} <span>— ${vData.ru}</span>`;

  // Формы
  colLeft.innerHTML = "";
  colRight.innerHTML = "";

  const forms = isReflexive ? tenseData.reflexForms : tenseData.forms;
  for (let i = 0; i < 3; i++) {
    colLeft.innerHTML += `
      <div class="row"><span>${PRON[i]}</span>
      <span class="forma">${forms[i]}</span></div>`;
  }
  for (let i = 3; i < 6; i++) {
    colRight.innerHTML += `
      <div class="row"><span>${PRON[i]}</span>
      <span class="forma">${forms[i]}</span></div>`;
  }

  // Примеры
  const exs = isReflexive ? tenseData.examplesReflex : tenseData.examples;
  examplesBlock.innerHTML = "";
  if (!exs || !exs.length) {
    examplesBlock.hidden = true;
  } else {
    exs.forEach(e=>{
      examplesBlock.innerHTML += `
        <div class="ex-item"><div class="es">${e.es}</div><div class="ru">${e.ru}</div></div>`;
    });
  }
}

// ===============================
// Вспомогательные функции
// ===============================
function getTenseKey(t) {
  if (t === "past") return "pasado";
  if (t === "future") return "futuro";
  return "presente";
}

function hideMessage() { message.hidden = true; }
function showMessage(txt) {
  message.textContent = txt;
  message.hidden = false;
  panel.hidden = true;
  examplesBlock.hidden = true;
}
function hideMain() {
  panel.hidden = true;
  examplesBlock.hidden = true;
}

// ===============================
// Переключение глаголов (навигация)
// ===============================
function nextVerb() {
  const keys = Object.keys(VERBS[currentCategory]);
  let idx = keys.indexOf(currentVerb);
  idx = (idx + 1) % keys.length;
  currentVerb = keys[idx];
  verbSelect.value = currentVerb;
  renderVerb();
}
function prevVerb() {
  const keys = Object.keys(VERBS[currentCategory]);
  let idx = keys.indexOf(currentVerb);
  idx = (idx - 1 + keys.length) % keys.length;
  currentVerb = keys[idx];
  verbSelect.value = currentVerb;
  renderVerb();
}

// ===============================
// Слушатели
// ===============================
categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  loadVerbs();
});
verbSelect.addEventListener("change", () => {
  currentVerb = verbSelect.value;
  renderVerb();
});
tabPast.addEventListener("click", () => setTense("past"));
tabPresent.addEventListener("click", () => setTense("present"));
tabFuture.addEventListener("click", () => setTense("future"));
reflexSwitch.addEventListener("click", toggleReflex);
btnNext.addEventListener("click", nextVerb);
btnPrev.addEventListener("click", prevVerb);

// ===============================
// Старт
// ===============================
window.addEventListener("DOMContentLoaded", loadCategories);