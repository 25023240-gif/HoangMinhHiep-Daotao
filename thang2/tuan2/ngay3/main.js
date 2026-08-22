let studentArray = [];


const form = document.getElementById("studentForm");
const tbody = document.getElementById("studentData");
const template = document.getElementById("template");

function validation() {
    const fullNameInput = document.getElementById("fullName");
    const classNameInput = document.getElementById("className");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const gpaInput = document.getElementById("gpa");

    const fullNameValue = fullNameInput.value.trim();
    const classNameValue = classNameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailValue = emailInput.value.trim();
    const gpaValue = gpaInput.value.trim();
    
    const fullNameError = document.getElementById("fullNameError");
    const classNameError = document.getElementById("classNameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const gpaError = document.getElementById("gpaError");

    fullNameError.innerText = "";
    classNameError.innerText = "";
    phoneError.innerText = "";
    emailError.innerText = "";
    gpaError.innerText = "";
    
    if (fullNameValue === "" || fullNameValue.length <=2 ) {
        fullNameError.innerText = "Vui lòng nhập đầy đủ họ và tên";
        fullNameInput.focus();
        return false;
    } else if (classNameValue ==="") {
        classNameError.innerText = "Vui lòng nhập đầy đủ tên lớp";
        classNameInput.focus();
        return false;
    } else if (phoneValue === "" || isNaN(phoneValue)) {
        phoneError.innerText = "Vui lòng nhập chính xác số điện thoại";
        phoneInput.focus();
        return false;
    } else if (emailValue === "") {
        emailError.innerText = "Vui lòng nhập chính xác địa chỉ email";
        emailInput.focus();
        return false;
    } else if (gpaValue === "") {
        gpaError.innerText = "Vui lòng nhập chính xác điểm gpa";
        gpaInput.focus()
        return false;
    }
    return true;
}



function render() {
    tbody.textContent = ""
    for(let i = 0; i < studentArray.length; i++) {;
        let student = studentArray[i];
        const clone = template.content.cloneNode(true);

        clone.querySelector(".stt").textContent = i + 1;
        clone.querySelector(".name").textContent = student.fullName;
        clone.querySelector(".class").textContent = student.className;
        clone.querySelector(".phoneNum").textContent = student.phone;
        clone.querySelector(".email").textContent = student.email;
        clone.querySelector(".gpa").textContent = student.gpa;

        const deleteBtn = clone.querySelector(".delete-btn");
        if (deleteBtn) {
            deleteBtn.dataset.id = student.id;
        }
        tbody.append(clone);

    }
}

const addBtn = document.getElementById("submit");
addBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const student = {
        id: Date.now(),
        fullName: document.getElementById("fullName").value,
        className: document.getElementById("className").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        gpa: document.getElementById("gpa").value
    };
    if (validation()) {
        studentArray.push(student);
    }
    render();
    form.reset();
})

// hàm xóa học viên
function deleteStudent(id) {
    studentArray = studentArray.filter(student => student.id !== id);
    render()
}

// bắt sự kiện nút xóa
tbody.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const deleteID = Number(event.target.dataset.id);
        deleteStudent(deleteID);
    }
});

