// DIA
const dayList = document.getElementById("dayList");
const dayInput = document.getElementById("dayInput");
const dayBtnAddTaskClick = document.getElementById("dayBtnAddTaskClick");

const dayTaskList = [
  "Aparar a barba",
  "Atualizar o LinkedIn",
  "Estudar Angular",
  "Fazer exercício físico",
];

const dayListUpdate = () => {
  dayList.innerHTML = "";

  dayTaskList.forEach((task, index) => {
    const newDayTask = `<li class="d-flex justify-content-between gap-3" id="dayTask${index}">
    <p class="m-0 d-flex align-items-center fw-bold">${task}</p>
    <button class="btn btn-danger" onclick="dayBtnAddDeleteClick(${index})">
    <i class="bi bi-trash3-fill"></i>
    </button>
    </li>`;
    dayList.innerHTML += newDayTask;
  });
};

dayListUpdate();

dayBtnAddTaskClick.addEventListener("click", () => {
  dayTaskList.push(dayInput.value);

  dayListUpdate();
  dayInput.value = "";
});

const dayBtnAddDeleteClick = (id) => {
  dayTaskList.splice(id, 1);

  dayListUpdate();
};

// NOITE
const nightList = document.getElementById("nightList");
const nightInput = document.getElementById("nightInput");
const nightBtnAddTaskClick = document.getElementById("nightBtnAddTaskClick");

const nightTaskList = [
    "Passear com o cachorro",
    "Organizar o quarto",
    "Ler o livro \"Nada Pode me Ferir\" de David Goggins"
];

const nightListUpdate = () => {
  nightList.innerHTML = "";

  nightTaskList.forEach((task, index) => {
    const newNightTask = `<li class="d-flex justify-content-between gap-3" id="nightTask${index}">
    <p class="m-0 d-flex align-items-center fw-bold">${task}</p>
    <button class="btn btn-danger" onclick="nightBtnAddDeleteClick(${index})">
    <i class="bi bi-trash3-fill"></i>
    </button>
    </li>`;
    nightList.innerHTML += newNightTask;
  });
};

nightListUpdate();

nightBtnAddTaskClick.addEventListener("click", () => {
  nightTaskList.push(nightInput.value);

  nightListUpdate();
  nightInput.value = "";
});

const nightBtnAddDeleteClick = (id) => {
  nightTaskList.splice(id, 1);

  nightListUpdate();
};



