const PRON = ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos"];
const REFLEX_PRON = ["me", "te", "se", "nos", "os", "se"];

let currentCategory = "";
let currentVerb = "";
let currentTense = "presente"; // по умолчанию
let isReflex = false;

// элементы DOM
const categorySelect = document.getElementById("categorySelect");
const verbSelect = document.getElementById("verbSelect");
const reflexSwitch = document.getElementById("reflexSwitch");
const verbLine = document.getElementById("verbLine");
const panel = document.getElementById("panel");
const colLeft = document.getElementById("col-left");
const colRight = document.getElementById("col-right");
const examples = document.getElementById("examples");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextVerb");
const prevBtn = document.getElementById("prevVerb");
const tabPast = document.getElementById("tabPast");
const tabPresent = document.getElementById("tabPresent");
const tabFuture = document.getElementById("tabFuture");

// ======= 1. Категории =======
function loadCategories() {
  categorySelect.innerHTML = "";
  Object.keys(VERB_DATA).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
  currentCategory = Object.keys(VERB_DATA)[0];
  loadVerbs(currentCategory);
}

// ======= 2. Глаголы =======
function loadVerbs(cat) {
  const verbs = Object.keys(VERB_DATA[cat]);
  verbSelect.innerHTML = "";
  verbs.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    verbSelect.appendChild(opt);
  });
  currentVerb = verbs[0];
  renderVerb();
}

// ======= 3. Отображение =======
function renderVerb() {
  const verbObj = VERB_DATA[currentCategory][currentVerb];
  const hasReflex = verbObj.reflexive !== false;
  const tenses = verbObj.tenses[currentTense];
  const mode = isReflex && hasReflex ? "reflex" : "normal";

  // Проверки
  if (!tenses) {
    showMessage("Нет данных для этого времени.");
    return;
  }
  if (isReflex && !hasReflex) {
    showMessage("Этот глагол не имеет возвратной формы.");
    return;
  }
  if (isReflex && !tenses.reflex) {
    showMessage("Возвратная форма не используется в этом времени.");
    return;
  }

  hideMessage();

  const data = tenses[mode];
  if (!data) {
    showMessage("Нет данных для этой комбинации.");
    return;
  }

  // верхняя строка
  verbLine.innerHTML = `${isReflex ? currentVerb + "se" : currentVerb} <span>— ${verbObj.ru}</span>`;
  panel.hidden = false;
  examples.hidden = false;

  // таблица
  colLeft.innerHTML = "";
  colRight.innerHTML = "";
  const forms = data.forms;
  for (let i = 0; i < 3; i++) {
    const forma = isReflex ? REFLEX_PRON[i] + " " + forms[i] : forms[i];
    colLeft.innerHTML += `<div class="row"><span>${PRON[i]}</span><span class="forma">${forma}</span></div>`;
  }
  for (let i = 3; i < 6; i++) {
    const forma = isReflex ? REFLEX_PRON[i] + " " + forms[i] : forms[i];
    colRight.innerHTML += `<div class="row"><span>${PRON[i]}</span><span class="forma">${forma}</span></div>`;
  }

  // примеры
  examples.innerHTML = "";
  data.examples.forEach(([es, ru]) => {
    examples.innerHTML += `<div class="ex-item"><div class="es">${es}</div><div class="ru">${ru}</div></div>`;
  });
}

// ======= 4. Сообщения =======
function showMessage(txt) {
  message.hidden = false;
  message.textContent = txt;
  panel.hidden = true;
  examples.hidden = true;
}
function hideMessage() {
  message.hidden = true;
}

// ======= 5. Слушатели =======
categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  loadVerbs(currentCategory);
});

verbSelect.addEventListener("change", () => {
  currentVerb = verbSelect.value;
  renderVerb();
});

reflexSwitch.addEventListener("click", () => {
  isReflex = !isReflex;
  reflexSwitch.classList.toggle("on");
  renderVerb();
});

[nextBtn, prevBtn].forEach(btn =>
  btn.addEventListener("click", e => {
    const verbs = Object.keys(VERB_DATA[currentCategory]);
    let idx = verbs.indexOf(currentVerb);
    if (e.target.id === "nextVerb") idx = (idx + 1) % verbs.length;
    else idx = (idx - 1 + verbs.length) % verbs.length;
    currentVerb = verbs[idx];
    verbSelect.value = currentVerb;
    renderVerb();
  })
);

// ======= 6. Переключение времен =======
function setTense(t) {
  currentTense = t;
  [tabPast, tabPresent, tabFuture].forEach(tab => tab.classList.remove("active"));
  if (t === "pasado") tabPast.classList.add("active");
  if (t === "presente") tabPresent.classList.add("active");
  if (t === "futuro") tabFuture.classList.add("active");
  renderVerb();
}

tabPast.addEventListener("click", () => setTense("pasado"));
tabPresent.addEventListener("click", () => setTense("presente"));
tabFuture.addEventListener("click", () => setTense("futuro"));

// ======= 7. Инициализация =======
loadCategories();
