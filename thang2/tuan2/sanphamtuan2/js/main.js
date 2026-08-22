import { StudentManager } from "./student.js";

const manager = new StudentManager();

const form = document.getElementById("studentForm");
const tbody = document.getElementById("studentData");
const template = document.getElementById("template");
const submitBtn = document.getElementById("submit");
const filterBtn = document.getElementById("filterBtn");
const resetBtn = document.getElementById("resetBtn");
const searchInput = document.getElementById("searchInput")

// hàm validation
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
    } else if (gpaValue === "" || gpaValue > 4 || gpaValue < 0) {
        gpaError.innerText = "Vui lòng nhập chính xác điểm gpa";
        gpaInput.focus()
        return false;
    }
    return true;
}

// reset form
function resetForm() {
    manager.editId = null;
    submitBtn.textContent = "Thêm sinh viên";
    form.reset()
}


// hàm render dữ liệu
function render(list = manager.studentArray) {
    tbody.textContent = ""
    if (list.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7">Chưa có sinh viên nào</td>
            </tr>
        `;
        return;
    }
    for(let i = 0; i < list.length; i++) {
        let student = list[i];
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
        const updateBtn = clone.querySelector(".update-btn");
        if (updateBtn) {
            updateBtn.dataset.id = student.id;
        }
 
        tbody.append(clone);

    }
}
// hàm xử lí nút submit
function handleSubmitForm(event) {
    event.preventDefault();
    if (!validation()) {
        return;
    }
    const studentData = {
        fullName: document.getElementById("fullName").value.trim(),
        className: document.getElementById("className").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        email: document.getElementById("email").value.trim(),
        gpa: document.getElementById("gpa").value.trim()
    }
    if (manager.editId === null) {
        manager.addStudent({ id: Date.now(), ...studentData });
    } else {
        manager.updateStudent(studentData);
    }
    render();
    resetForm();
}

// hàm xử lí sự kiện mục hành động

function handleTableButton(event) {
    const id = Number(event.target.dataset.id);
    if (!id) return;

    if (event.target.classList.contains("delete-btn")) {
        // Hiển thị hộp thoại xác nhận Co / Khong
        const isConfirmed = confirm("Bạn có chắc chắn muốn xóa sinh viên này không?");
        if (isConfirmed) {
            manager.deleteStudent(id);
            render();
        }
    } else if (event.target.classList.contains("update-btn")) {
        const student = manager.studentArray.find(student => student.id === id);
        if (student) {
            document.getElementById("fullName").value = student.fullName;
            document.getElementById("className").value = student.className;
            document.getElementById("phone").value = student.phone;
            document.getElementById("email").value = student.email;
            document.getElementById("gpa").value = student.gpa;
            manager.editId = id;
            submitBtn.textContent = "Xác nhận sửa";
        }
    }
}

function handleFilterStudent(event) {
    const filterGpa = document.getElementById("filterInput").value.trim();
    const filteredArray = manager.filterStudent(Number(filterGpa));
    render(filteredArray); 
}

function handleResetFilterButton(event) {
    const filterGpa = document.getElementById("filterInput");
    searchInput.value = "";
    filterGpa.value = "";
    render(manager.studentArray);
}

function handleSearch(event) {
    const keyword = event.target.value;
    const result = manager.searchStudent(keyword);
    render(result);
}
    

// Bắt sự kiện
form.addEventListener("submit", handleSubmitForm);
tbody.addEventListener("click", handleTableButton);
filterBtn.addEventListener("click", handleFilterStudent); 
resetBtn.addEventListener("click", handleResetFilterButton);
searchInput.addEventListener("input", handleSearch);

render();

