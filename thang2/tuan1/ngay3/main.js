const studentArray = [
    { name: "Nguyen Hoai An", gpa: 3.8, rank: "Xuat sac" },
    { name: "Nguyen An Thuyen", gpa: 2.9, rank: "Kha" },
    { name: "Nguyen Anh Quan", gpa: 3.6, rank: "Xuat sac"},
    { name: "Pham Phung Duc Anh", gpa: 1.8, rank: "Yeu" },
    { name: "Nguyen Van A", gpa: 2.2, rank: "Trung Binh" },
    { name: "Nguyen Van B", gpa: 3.4, rank: "Gioi" }
]
// bo dem co cau hinh
function counter(step, start = 1) {
    let stt = start;
    return function() {
        const id = `SV${stt}`;
        stt++;
        return id;
    }
}
// bo loc co cau hinh
function filterStudent(minGpa) {
    return function(student) {
        return student.gpa >= minGpa;
    }
}

// kiem tra bo dem
const studentID = counter(1);
const updateStudent = studentArray.map(student => {
    return {
        id: studentID(),
        ...student
    }
})
for (const student of updateStudent) {
    console.log(student);
}

// kiem tra bo loc

const scholarshipFilter = filterStudent(3.2);
const qualifiedFilter = filterStudent(2.0);

console.log("DANH SACH SINH VIEN DAT HOC BONG");
console.log(updateStudent.filter(scholarshipFilter));

console.log("DANH SACH SINH VIEN DAT");
console.log(updateStudent.filter(qualifiedFilter));




