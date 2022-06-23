const API_URL = "https://62b40bbda36f3a973d2ab0ed.mockapi.io";
const table = document.querySelector("#table tbody");

document.addEventListener("DOMContentLoaded", () => {
  getData();
});

function getData() {
  fetch(`${API_URL}/teamwork`)
    .then((response) => response.json())
    .then((data) => {
      const { persons, count } = data;
      persons.forEach(addToDom);
    });
}

function addToDom(person) {
  const row = document.createElement("tr");
  row.dataset.id = person.id;
  const{idCell , nameCell , familyCell , birthdayCell ,nationIdCell,
    fathersNameCell , jobCell ,educationCell , genderCell ,countryCell ,
    stateCell , cityCell , streetCell ,blockCell ,noCell , floorCell,
  unitCell ,editCell , deletCell } = creatCell(person)

  row.appendChild(idCell)
  row.appendChild(nameCell)
  row.appendChild(familyCell)
  row.appendChild(birthdayCell)
  row.appendChild(nationIdCell)
  row.appendChild(fathersNameCell)
  row.appendChild(jobCell)
  row.appendChild(educationCell)
  row.appendChild(genderCell)
  row.appendChild(countryCell)
  row.appendChild(stateCell)
  row.appendChild(cityCell)
  row.appendChild(streetCell)
  row.appendChild(blockCell)
  row.appendChild(noCell)
  row.appendChild(floorCell)
  row.appendChild(unitCell)
  row.appendChild(editCell)
  row.appendChild(deletCell)

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
  const editbtn = document.createElement('button')
  editbtn.dataset.id = data.id
  editbtn.innerHTML = '<i class="bi bi-pencil-square"></i>'
  editCell.appendChild(editbtn)
  
  
  const deletCell = document.createElement("td");
  const deletbtn = document.createElement('button')
  deletCell.dataset.id = data.id ;
  deletbtn.innerHTML = '<i class="bi bi-trash3"></i>'
  deletCell.appendChild(deletbtn)

  return{idCell , nameCell , familyCell , birthdayCell ,nationIdCell,
          fathersNameCell , jobCell ,educationCell , genderCell ,countryCell ,
          stateCell , cityCell , streetCell ,blockCell ,noCell , floorCell,
        unitCell ,editCell , deletCell }  
}
