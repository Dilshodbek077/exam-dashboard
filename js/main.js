let modal = document.getElementById("modal-container");
let modall = document.getElementById("modal-containerr");
let btnLogOut = document.getElementById("btn-logOut");
let btnYes = document.getElementById("btnYes");
let btnNo = document.getElementById("btnNo");
let teacher = document.getElementById("teach");
let box16 = document.getElementById("box-16");
let box15 = document.getElementById("box-15");
let nwBtt = document.getElementById("btnsave");

btnLogOut.addEventListener("click", () => {
    modal.style.display = "block";
});

btnYes.addEventListener("click", () => {
    window.location.href = "singin.html";
});

btnNo.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});




teacher.addEventListener("click", () => {
    modall.style.display = "block";
});

window.addEventListener("click", (e) => {
    if (e.target === modall) {
        modall.style.display = "none";
    }
});



nwBtt.addEventListener("click", (e) => {
    modall.style.display = "none";
});








const btnSave = document.getElementById("btnsave");
const tableBody = document.querySelector("#studentTable tbody");

btnSave.addEventListener("click", (e) => {
    box15.style.display = "none";
    box16.style.display = "block";

    e.preventDefault();

  const name = document.getElementById("formName").value.trim();
  const clas = document.getElementById("fomrClass").value.trim();
  const email = document.getElementById("FormEmail").value.trim();
  const gender = document.getElementById("formGender").value;
  const subject = document.getElementById("formSubject").value.trim();
  const age = document.getElementById("formAge").value.trim(); // kerak bo‘lsa qo‘shamiz
  const about = document.getElementById("formAbout").value.trim();

  if (!name || !clas || !email || !subject) {
    alert(" Iltimos, barcha majburiy maydonlarni to‘ldiring!");
    return;
  }

  // yangi qator yaratamiz
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${subject}</td>
    <td>${clas}</td>
    <td>${email}</td>
    <td>${gender}</td>
    <td>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </td>
  `;

  tableBody.appendChild(row);

  // Delete tugmasi ishlashi
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
  });

  // Edit tugmasi ishlashi
  row.querySelector(".edit-btn").addEventListener("click", () => {
    document.getElementById("formName").value = name;
    document.getElementById("fomrClass").value = clas;
    document.getElementById("FormEmail").value = email;
    document.getElementById("formGender").value = gender;
    document.getElementById("formSubject").value = subject;
    document.getElementById("formAge").value = age;
    document.getElementById("formAbout").value = about;

    row.remove(); // eski satrni o‘chirib tashlaymiz
  });

  // forma tozalash
  document.getElementById("formName").value = "";
  document.getElementById("fomrClass").value = "";
  document.getElementById("FormEmail").value = "";
  document.getElementById("formGender").value = "";
  document.getElementById("formSubject").value = "";
  document.getElementById("formAge").value = "";
  document.getElementById("formAbout").value = "";
});





const student = { name, clas, email, gender, subject, age, about };

let students = JSON.parse(localStorage.getItem("students")) || [];
students.push(student);
localStorage.setItem("students", JSON.stringify(students));



  