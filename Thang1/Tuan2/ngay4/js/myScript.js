function Student (id, fullName, phoneNumber, email, score) {
    this.id = id;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.score = score;
}

const studentArray = [
    new Student("SV01", "Nguyen Van A", "0983081875", "nguyenvana01@gmail.com",[9.0, 9.1, 9.2]),
    new Student("SV02", "Nguyen Van B", "0983082877", "nguyenvanb02@gmail.com",[6.1, 6.5, 7.1]),
    new Student("SV03", "Le Van C", "0384005126", "levanc03@gmail.com", [7.8, 7.1, 7.6]),
    new Student("SV04", "Hoang Van D", "0977355845", "hoangvand04@gmail.com", [8.4, 8.1, 8.5]),
    new Student("SV05", "Tran Van E", "0847255146", "tranvane05@gmail.com", [2.5, 3.6, 4.0]),
    new Student("SV06", "Do Van F", "0857441236", "dovanf06@gmail.com", [2.4, 3.6, 2.9]),
]

// Danh sách sinh viên lúc dầu
console.log("DANH SÁCH HỌC VIÊN GỐC")
for (const i of studentArray) {
    console.log(i);
}

// Thêm 1 học viên
console.log("THÊM 1 HỌC VIÊN");
const newStudent = new Student("SV07", "Bui Van G", "094187549", "buivang07@gmail.com", [7.2, 7.4, 7.8]);
console.log(newStudent);

// Danh sách sau khi thêm 1 học viên
console.log("DANH SÁCH SAU KHI THÊM 1 HỌC VIÊN")
const addedStudentArray = [...studentArray, newStudent];
for (const i of addedStudentArray) {
    console.log(i);
}

// Cập nhật điểm học viên SV02
console.log("CẬP NHẬT ĐIỂM CỦA SV02");
const updatedStudentArray = [...addedStudentArray];
const oldStudent = updatedStudentArray[1];
const updatedStudent = {
    ...oldStudent,
    score: [8.1, 8.5, 8.6]
};
updatedStudentArray.splice(1,1,updatedStudent);
console.log("DANH SÁCH SAU KHI CẬP NHẬT HỌC VIÊN SV02")
for (const i of updatedStudentArray) {
    console.log(i);
}

//kiểm tra mảng dữ liệu gốc
console.log("Danh sách ban đầu vẫn có độ dài là")
console.log(studentArray.length);















