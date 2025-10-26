// Темная тема
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});

// Элементы
const categorySelect = document.getElementById("categorySelect");
const verbSelect = document.getElementById("verbSelect");
const verbCard = document.getElementById("verbCard");
const examplesDropdown = document.getElementById("examplesDropdown");
const tabs = document.querySelectorAll(".tab");

let currentVerb = null;
let currentTense = "presente";

// Категории
Object.keys(VERBS).forEach(category => {
  const opt = document.createElement("option");
  opt.value = category;
  opt.textContent = category;
  categorySelect.appendChild(opt);
});

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

  const persons = ["yo","tú","él/ella","nosotros","vosotros","ellos"];
  verbCard.innerHTML = "";

  persons.forEach((p, i) => {
    const block = document.createElement("div");
    block.classList.add("verb-block");
    block.innerHTML = `<b>${p}</b><span>${tenseData.forms[i]}</span>`;
    verbCard.appendChild(block);
  });

  examplesDropdown.innerHTML = "<option>Примеры...</option>";
  tenseData.examples.forEach(ex => {
    const opt = document.createElement("option");
    opt.textContent = `${ex.es} — ${ex.ru}`;
    examplesDropdown.appendChild(opt);
  });
}