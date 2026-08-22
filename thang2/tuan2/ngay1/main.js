// Danh sách lưu trữ thông tin sinh viên
const studentList = [
  {
    id: 1,
    fullName: "Nguyễn Văn An",
    className: "CNTT1-K68",
    phone: "0912345678",
    email: "an.nguyen@gmail.com",
    gpa: 3.65
  },
  {
    id: 2,
    fullName: "Trần Thị Bình",
    className: "CNTT2-K68",
    phone: "0987654321",
    email: "binh.tran@gmail.com",
    gpa: 3.20
  },
  {
    id: 3,
    fullName: "Lê Hoàng Cường",
    className: "DPT1-K68",
    phone: "0933112233",
    email: "cuong.le@gmail.com",
    gpa: 3.82
  },
  {
    id: 4,
    fullName: "Phạm Minh Đức",
    className: "CNTT1-K68",
    phone: "0977889900",
    email: "duc.pham@gmail.com",
    gpa: 2.95
  },
  {
    id: 5,
    fullName: "Hoàng Mai Anh",
    className: "DPT2-K68",
    phone: "0905678910",
    email: "anh.hoang@gmail.com",
    gpa: 3.50
  }
];

const tbody = document.getElementById("studentData");
studentList.forEach(student => {
    const tr = document.createElement("tr");

    const studentId = document.createElement("td");
    studentId.textContent = student.id;

    const studentFullName = document.createElement("td");
    studentFullName.textContent = student.fullName;

    const studentClassName = document.createElement("td");
    studentClassName.textContent = student.className;

    const studentPhoneNumber = document.createElement("td");
    studentPhoneNumber.textContent = student.phone;

    const studentEmail = document.createElement("td");
    studentEmail.textContent = student.email;

    const studentGpa = document.createElement("td");
    studentGpa.textContent = student.gpa;

    tr.append(studentId, studentFullName, studentClassName, studentPhoneNumber, studentEmail, studentGpa);
    tbody.append(tr);
})