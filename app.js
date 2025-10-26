const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});

// --- Пример заполнения интерфейса ---
const categorySelect = document.getElementById("categorySelect");
const verbSelect = document.getElementById("verbSelect");
const examplesDropdown = document.getElementById("examplesDropdown");
const tabs = document.querySelectorAll(".tab");

// Загружаем категории
Object.keys(VERBS).forEach(category => {
  const opt = document.createElement("option");
  opt.value = category;
  opt.textContent = category;
  categorySelect.appendChild(opt);
});

let currentVerb = null;
let currentTense = "presente";

categorySelect.addEventListener("change", () => {
  verbSelect.innerHTML = "<option>Выбери глагол</option>";
  const verbs = VERBS[categorySelect.value];
  Object.keys(verbs).forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    verbSelect.appendChild(opt);
  });
});

verbSelect.addEventListener("change", () => {
  currentVerb = VERBS[categorySelect.value][verbSelect.value];
  renderVerb();
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentTense = tab.dataset.tense;
    renderVerb();
  });
});

function renderVerb() {
  if (!currentVerb) return;
  const tenseData = currentVerb.tenses[currentTense];
  if (!tenseData) return;

  const [yo, tu, el, nos, vos, ellos] = tenseData.forms;
  document.getElementById("yoForm").textContent = yo;
  document.getElementById("tuForm").textContent = tu;
  document.getElementById("elForm").textContent = el;
  document.getElementById("nosForm").textContent = nos;
  document.getElementById("vosForm").textContent = vos;
  document.getElementById("ellosForm").textContent = ellos;

  examplesDropdown.innerHTML = "<option>Примеры...</option>";
  tenseData.examples.forEach(ex => {
    const opt = document.createElement("option");
    opt.textContent = `${ex.es} — ${ex.ru}`;
    examplesDropdown.appendChild(opt);
  });
}