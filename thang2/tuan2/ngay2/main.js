let studentArray = [];

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
    studentArray.push(student);
    render();
})

const tbody = document.getElementById("studentData");
const template = document.getElementById("template")
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

