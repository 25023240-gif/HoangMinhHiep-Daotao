const tbody = document.querySelector("#studentList");
const form = document.getElementById("studentForm")
form.addEventListener("submit", function(event){
    event.preventDefault();
    const idInput = document.getElementById("id").value;
    const nameInput = document.getElementById("name").value;
    const birthInput = document.getElementById("birth").value;
    const phoneNumberInput = document.getElementById("phoneNumber").value;
    const emailInput = document.getElementById("email").value;

    const tr = document.createElement("tr");

    const studentId = document.createElement("td");
    studentId.textContent = idInput;

    const studentName = document.createElement("td");
    studentName.textContent = nameInput;

    const studentBirthday = document.createElement("td");
    studentBirthday.textContent = birthInput;

    const studentPhoneNumber = document.createElement("td");
    studentPhoneNumber.textContent = phoneNumberInput;

    const studentEmail = document.createElement("td");
    studentEmail.textContent = emailInput;

    const activity = document.createElement("td");
    const selectButton = document.createElement("button");
    selectButton.textContent = "Chọn";
    selectButton.type = "button";
    selectButton.addEventListener("click", function(event) {
        document.getElementById("id").value = idInput;
        document.getElementById("name").value = nameInput;
        document.getElementById("birth").value = birthInput;
        document.getElementById("phoneNumber").value = phoneNumberInput;
        document.getElementById("email").value = emailInput;
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Xóa";
    removeButton.type = "button";
    removeButton.addEventListener("click", function(event) {
        tr.remove();
    });
    activity.append(selectButton, removeButton);
    tr.append(studentId, studentName, studentBirthday, studentPhoneNumber, studentEmail, activity);
    tbody.append(tr);
    form.reset();
});

