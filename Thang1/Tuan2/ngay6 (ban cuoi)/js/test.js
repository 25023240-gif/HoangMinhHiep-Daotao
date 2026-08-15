console.log("                      TRƯỜNG HỢP BÌNH THƯỜNG")
const studentArray = [
    new Student ("SV01", "Nguyễn Văn A", "nguyenvana01@gmail.com", [9.3, 9.1, 9.2]),
    new Student ("SV02", "Nguyễn Văn B", "nguyenvanb02@gmail.com", [6.8, 6.7, 7.5]),
    new Student ("SV03", "Le Van C", "levanc03@gmail.com", [7.8, 7.5, 8.6]),
    new Student ("SV04", "Hoang Van D", "hoangvand04@gmail.com", [8.3, 8.2, 8.7]),
    new Student ("SV05", "Tran Van E", "tranvane05@gmail.com", [2.5, 3.6, 4.7]),
    new Student ("SV06", "Do Van F", "dovanf06@gmail.com", [5.8, 5.2, 7.4]),
]

// Lọc học viên đạt
console.log("LỌC HỌC VIÊN ĐẠT")
const newStudentArray = studentArray.map(getAvgGpa)
const qualifiedStudentArray = newStudentArray.filter(qualifiedStudent)
for (const x of qualifiedStudentArray) {
    console.log(x);
}

// Sắp xếp sinh viên giảm dần theo GPA
console.log("SẮP XẾP GIẢM DẦN THEO GPA")
const sortedStudentArray = [...qualifiedStudentArray].sort(sortedByGpa)
for (const x of sortedStudentArray) {
    console.log(x);
}

// Thống kê
console.log("THỐNG KÊ XẾP LOẠI GPA")
const stat = newStudentArray.reduce(getStatic, {})
console.log(stat);


console.log("                        TRƯỜNG HỢP RỖNG")
const emptyStudentArray = [];
const mappedEmptyArray = emptyStudentArray.map(getAvgGpa);
console.log("Mảng rỗng sau map: " , mappedEmptyArray);
console.log("Mảng rỗng sau lọc: " , mappedEmptyArray.filter(qualifiedStudent));
console.log("Thống kê mảng rỗng:", emptyStudentArray.reduce(getStatic, {}));

console.log("                       TRƯỜNG HỢP BIÊN")
const testArray = [
    new Student ("SV01", "Nguyễn Văn A", "nguyenvana01@gmail.com", [8.5, 8.0, 7.0]),
    new Student ("SV02", "Nguyễn Văn B", "nguyenvanb02@gmail.com", [0.0, 0.0, 0.0]),
    new Student ("SV03", "Le Van C", "levanc03@gmail.com", [10.0, 10.0, 10.0]),
]
const mappedTestArray = testArray.map(getAvgGpa);
console.log("Mảng sau khi lọc")
const passedStudent = mappedTestArray.filter(qualifiedStudent);
for(const x of passedStudent) {
    console.log(x);
}
console.log("SẮP XẾP GIẢM DẦN THEO GPA")
const sortedTestArray = passedStudent.sort(sortedByGpa)
for (const x of sortedTestArray) {
    console.log(x);
}
console.log("Thống kê")
const statTest = mappedTestArray.reduce(getStatic, {})
console.log(statTest);

console.log("              TRƯỜNG HỢP TRUYỀN SAI DỮ LIỆU")
// Test điểm đầu vào ko hợp lệ
try {
    console.log("Điểm ban đầu âm truyền vào là -1: ")
    scoreToAlphabet(-1);
} catch (err) {
    console.log("LỖI :", err.message)
}

try {
    console.log("Điểm ban đầu âm truyền vào là 11: ")
    scoreToAlphabet(11);
} catch (err) {
    console.log("LỖI :", err.message)
}
// 2. Test GPA không hợp lệ
try {
    console.log("gpa âm -0.5");
    rankGpa(-0.5);
} catch (error) {
    console.log("LỖI :", error.message);
}

try {
    console.log("Thử GPA vượt quá 4.0 (5.0):");
    rankGpa(5.0);
} catch (error) {
    console.log("LỖI :", error.message);
}

// Học viên có mảng điểm rỗng
console.log("Test mảng điểm đầu vào rỗng")
try {
    const emptyScoreStudent = [new Student("SVTEST", "Nguyen Van A", "nguyenvanaTEST@gmail.com",[])]
    getAvgGpa(emptyScoreStudent);
} catch(err) {
    console.log("LỖI :", err.message)
}


