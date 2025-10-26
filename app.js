const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});

const categorySelect = document.getElementById("categorySelect");
const verbSelect = document.getElementById("verbSelect");
const verbCard = document.getElementById("verbCard");
const examplesBlock = document.getElementById("examplesBlock");
const tabs = document.querySelectorAll(".tab");

let currentVerb = null;
let currentTense = "presente";

// Заполнение категорий
Object.keys(VERBS).forEach(category => {
  const opt = document.createElement("option");
  opt.value = category;
  opt.textContent = category;
  categorySelect.appendChild(opt);
});

// Категория по умолчанию
categorySelect.value = "Популярные";
updateVerbs();

function updateVerbs() {
  const verbs = VERBS[categorySelect.value];
  verbSelect.innerHTML = "";
  Object.keys(verbs).forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    verbSelect.appendChild(opt);
  });
}

categorySelect.addEventListener("change", updateVerbs);

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

  examplesBlock.innerHTML = tenseData.examples.map(e => 
    `<p>${e.es} — ${e.ru}</p>`
  ).join("");
}

// Автозапуск ser
verbSelect.value = "ser";
currentVerb = VERBS["Популярные"]["ser"];
renderVerb();
