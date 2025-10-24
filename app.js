const PRON = ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos"];
const REFLEX_PRON = ["me", "te", "se", "nos", "os", "se"];

let currentCategory = "";
let currentVerb = "";
let isReflex = false;

const categorySelect = document.getElementById("categorySelect");
const verbSelect = document.getElementById("verbSelect");
const reflexSwitch = document.getElementById("reflexSwitch");
const panel = document.getElementById("panel");
const verbLine = document.getElementById("verbLine");
const colLeft = document.getElementById("col-left");
const colRight = document.getElementById("col-right");
const examples = document.getElementById("examples");
const nextBtn = document.getElementById("nextVerb");
const prevBtn = document.getElementById("prevVerb");

// 🔹 Инициализация списка категорий
function loadCategories() {
  categorySelect.innerHTML = "";
  Object.keys(VERB_DATA).forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
  categorySelect.value = Object.keys(VERB_DATA)[0];
  loadVerbs(categorySelect.value);
}

// 🔹 Загрузка глаголов выбранной категории
function loadVerbs(cat) {
  const verbs = Object.keys(VERB_DATA[cat]);
  verbSelect.innerHTML = "";
  verbs.forEach(v => {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = v;
    verbSelect.appendChild(option);
  });
  currentCategory = cat;
  currentVerb = verbs[0];
  renderVerb();
}

// 🔹 Отображение глагола
function renderVerb() {
  const data = VERB_DATA[currentCategory][currentVerb];
  const forms = data.pres;
  const examplesData = isReflex && data.reflex ? data.reflex.examples : data.examples;
  const displayForms = isReflex && data.reflex ? data.reflex.pres : data.pres;

  // Верхняя строка
  verbLine.innerHTML = `${isReflex ? currentVerb + "se" : currentVerb} <span>— ${data.ru}${isReflex ? " (возв.)" : ""}</span>`;

  // Таблица
  colLeft.innerHTML = "";
  colRight.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    colLeft.innerHTML += `<div class="row"><span>${PRON[i]}</span><span class="forma">${isReflex ? REFLEX_PRON[i] + " " + displayForms[i] : displayForms[i]}</span></div>`;
  }
  for (let i = 3; i < 6; i++) {
    colRight.innerHTML += `<div class="row"><span>${PRON[i]}</span><span class="forma">${isReflex ? REFLEX_PRON[i] + " " + displayForms[i] : displayForms[i]}</span></div>`;
  }

  // Примеры
  examples.innerHTML = "";
  examplesData.forEach(([es, ru]) => {
    examples.innerHTML += `<div class="ex-item"><div class="es">${es}</div><div class="ru">${ru}</div></div>`;
  });

  panel.hidden = false;
  examples.hidden = false;
}

// 🔹 Слушатели событий
categorySelect.addEventListener("change", () => {
  loadVerbs(categorySelect.value);
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

nextBtn.addEventListener("click", () => {
  const verbs = Object.keys(VERB_DATA[currentCategory]);
  let idx = verbs.indexOf(currentVerb);
  idx = (idx + 1) % verbs.length;
  currentVerb = verbs[idx];
  verbSelect.value = currentVerb;
  renderVerb();
});

prevBtn.addEventListener("click", () => {
  const verbs = Object.keys(VERB_DATA[currentCategory]);
  let idx = verbs.indexOf(currentVerb);
  idx = (idx - 1 + verbs.length) % verbs.length;
  currentVerb = verbs[idx];
  verbSelect.value = currentVerb;
  renderVerb();
});

// 🔹 Старт
loadCategories();
