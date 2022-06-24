// Get URL params
const API_URL = "https://62b40bbda36f3a973d2ab0ed.mockapi.io";
const urlParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlParams.entries());
const form = document.getElementById("myForm");
const firstName = document.getElementById("name");
const bday = document.getElementById("bday");
const fatherName = document.getElementById("fathername");
const education = document.getElementById("edu");
const country = document.getElementById("country");
const city = document.getElementById("city");
const block = document.getElementById("block");
const floor = document.getElementById("floor");
const lastName = document.getElementById("lname");
const nationalId = document.getElementById("nationalid");
const job = document.getElementById("job");
const gender = document.getElementById("gender");
const state = document.getElementById("state");
const street = document.getElementById("street");
const no = document.getElementById("no");
const unit = document.getElementById("unit");

document.addEventListener("DOMContentLoaded", () => {
  getUserData(params.id);
});

if (params.id) {
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit this Infromation";
  form.appendChild(editBtn);
  function getUserData(id) {
    fetch(`${API_URL}/teamwork/${id}`)
      .then((response) => response.json())
      .then((data) => {
        firstName.value = data.name;
        bday.value = data.birthday;
        fatherName.value = data.fathersName;
        lastName.value = data.family;
        nationalId.value = data.nationId;
        job.value = data.job;
        education.value = data.education;
        gender.value = data.gender;
        country.value = data.location.country;
        city.value = data.location.city;
        state.value = data.location.state;
        street.value = data.location.street;
        no.value = data.location.no;
        block.value = data.location.block;
        floor.value = data.location.floor;
        unit.value = data.location.unit;

        console.log(data);
      });
  }
}
