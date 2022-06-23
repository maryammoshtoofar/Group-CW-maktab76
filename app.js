const API_URL = "https://62b40bbda36f3a973d2ab0ed.mockapi.io";
const table = document.querySelector("#table tbody");
const DEFAULT_PAGE_COUNT = 5;
let current_page = 1;

document.addEventListener("DOMContentLoaded", () => {
  getData();
  creatPagination();
});

function getData() {
  table.innerHTML = " ";
  fetch(`${API_URL}/teamwork${generateQueryParams(current_page)}`)
    .then((response) => response.json())
    .then((data) => {
      const { persons, count } = data;
      persons.forEach(addToDom);
      creatPagination(count);
    });
}

document.querySelector("ul.pagination").addEventListener("click", (event) => {
  console.log("hi");
  const lis = document.querySelectorAll(".page-link");
  if (event.target.innerHTML === "previous") current_page--;
  else if (event.target.innerHTML === "next") current_page++;
  else current_page = Number(event.target.innerHTML);
  lis.forEach((li) => li.classList.remove("active"));
  event.target.classList.add("active");
  getData();
});

function addToDom(person) {
  const row = document.createElement("tr");
  row.dataset.id = person.id;
  const {
    idCell,
    nameCell,
    familyCell,
    birthdayCell,
    nationIdCell,
    fathersNameCell,
    jobCell,
    educationCell,
    genderCell,
    countryCell,
    stateCell,
    cityCell,
    streetCell,
    blockCell,
    noCell,
    floorCell,
    unitCell,
    editCell,
    deleteCell,
  } = creatCell(person);

  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(familyCell);
  row.appendChild(birthdayCell);
  row.appendChild(nationIdCell);
  row.appendChild(fathersNameCell);
  row.appendChild(jobCell);
  row.appendChild(educationCell);
  row.appendChild(genderCell);
  row.appendChild(countryCell);
  row.appendChild(stateCell);
  row.appendChild(cityCell);
  row.appendChild(streetCell);
  row.appendChild(blockCell);
  row.appendChild(noCell);
  row.appendChild(floorCell);
  row.appendChild(unitCell);
  row.appendChild(editCell);
  row.appendChild(deleteCell);

  table.appendChild(row);
}

function creatCell(data) {
  const idCell = document.createElement("td");
  idCell.innerHTML = data.id;

  const nameCell = document.createElement("td");
  nameCell.innerHTML = data.name;

  const familyCell = document.createElement("td");
  familyCell.innerHTML = data.family;

  const birthdayCell = document.createElement("td");
  birthdayCell.innerHTML = new Date(data.birthday);

  const nationIdCell = document.createElement("td");
  nationIdCell.innerHTML = data.nationId;

  const fathersNameCell = document.createElement("td");
  fathersNameCell.innerHTML = data.fathersName;

  const jobCell = document.createElement("td");
  jobCell.innerHTML = data.job;

  const educationCell = document.createElement("td");
  educationCell.innerHTML = data.education;

  const genderCell = document.createElement("td");
  genderCell.innerHTML = data.gender;

  const countryCell = document.createElement("td");
  countryCell.innerHTML = data.location.country;

  const stateCell = document.createElement("td");
  stateCell.innerHTML = data.location.state;

  const cityCell = document.createElement("td");
  cityCell.innerHTML = data.location.city;

  const streetCell = document.createElement("td");
  streetCell.innerHTML = data.location.street;

  const blockCell = document.createElement("td");
  blockCell.innerHTML = data.location.block;

  const noCell = document.createElement("td");
  noCell.innerHTML = data.location.no;

  const floorCell = document.createElement("td");
  floorCell.innerHTML = data.location.floor;

  const unitCell = document.createElement("td");
  unitCell.innerHTML = data.location.unit;

  const editCell = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.dataset.id = data.id;
  editBtn.innerHTML = '<i class="bi bi-pencil-square"></i>';
  editCell.appendChild(editBtn);

  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.dataset.id = data.id;
  deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
  deleteCell.appendChild(deleteBtn);

  return {
    idCell,
    nameCell,
    familyCell,
    birthdayCell,
    nationIdCell,
    fathersNameCell,
    jobCell,
    educationCell,
    genderCell,
    countryCell,
    stateCell,
    cityCell,
    streetCell,
    blockCell,
    noCell,
    floorCell,
    unitCell,
    editCell,
    deleteCell,
  };
}

function creatPagination(count) {
  const pageCount = Math.ceil(count / DEFAULT_PAGE_COUNT);
  let lis = " ";
  lis += `<li class="page-item " > <a class="page-link">previous</a> </li>`;
  for (let i = 1; i < pageCount; i++) {
    lis += `<li class="page-item ${
      i === current_page ? "active" : ""
    } "> <a class="page-link">${i}</a> </li>`;
  }
  lis += `<li class="page-item"> <a class="page-link">next</a> </li>`;
  document.querySelector("ul.pagination").innerHTML = lis;
}

function generateQueryParams(page = 1) {
  return `?page=${page}&limit=${DEFAULT_PAGE_COUNT}`;
}
