const studentArray = [
    {id: "SV01", name: "Nguyen Van A", averageScore: 9.6, rank: "Xuất sắc"},
    {id: "SV02", name: "Nguyen Van B", averageScore: 8.5, rank: "Giỏi"},
    {id: "SV03", name: "Le Van C", averageScore: 7.8, rank: "Khá"},
    {id: "SV04", name: "Bui Van D", averageScore: 8.4, rank: "Giỏi"},
    {id: "SV05", name: "Hoang Van E", averageScore: 5.4, rank: "Trung bình"},
    {id: "SV06", name: "Pham Van F", averageScore: 4.3, rank: "Yếu"},
    {id: "SV07", name: "Tran Van G", averageScore: 3.6, rank: "Yếu"}
]

// lọc sinh viên yếu
function fitlerWeekStudent() {
    const qualifiedStudent = studentArray.filter(student => student.averageScore >= 5);
    return qualifiedStudent;
}

// sắp xếp theo điểm giảm dần
function sortStudentByScore() {
    const copy1 = [...studentArray];
    const sortedStudent = copy1.sort((a,b) => b.averageScore - a.averageScore);
    return sortedStudent;
}

// hàm kiểm tra sinh viên xuất sắc 
function CheckExcellentStudent() {
    const ExcellentStudent = studentArray.some(student => student.rank === "Xuất sắc");
    if (ExcellentStudent) {
        return "TRONG DANH SÁCH CÓ SINH VIÊN XUẤT SẮC"
    } else {
        return "TRONG DANH SÁCH KHÔNG CÓ SINH VIÊN XUẤT SẮC"
    }
}

// thống kê danh sách sinh viên
function getStatic() {
    const static = studentArray.reduce((acc, student) => {
        if (acc[student.rank]) {
            acc[student.rank] += 1;
        } else {
            acc[student.rank] = 1;
        }
        return acc
}, {});
    return static;
}

console.log("DANH SÁCH SINH VIÊN ĐẠT")
console.log(fitlerWeekStudent());

console.log("DANH SÁCH SINH VIÊN SẮP XẾP THEO ĐIỂM TB GIẢM DẦN")
console.log(sortStudentByScore());

console.log("KIỂM TRA SINH VIÊN XUẤT SẮC");
console.log(CheckExcellentStudent());

console.log("THỐNG KÊ XẾP HẠNG SINH VIÊN")
console.log(getStatic());





