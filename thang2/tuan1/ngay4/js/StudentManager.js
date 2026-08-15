import { Student } from "./Student.js";
export class StudentManager {
    // hàm khởi tạo
    constructor(className, student) {
        this.className = className;
        this.studentArray = [];
    }

    // hàm thêm sinh viên
    addStudent(student) {
        if (!student || !student.id || !student.name || !student.gpa) {
            return "Dữ liệu không hợp lệ";
        } else {
            this.studentArray.push(student);
        }
    }

    // hàm lọc sinh viên
    filterStudent(minGpa) {
        if (this.studentArray.length === 0) {
            return "Lớp không tồn tại sinh viên";
        } else {
            return this.studentArray.filter(student => student.gpa >= minGpa);
        }
    }

    // in thông tin
    printAll() {
        if (this.studentArray.length === 0) {
            return "Không có sinh viên nào để in";
        } else {
            this.studentArray.forEach(student => console.log(student.getInfo()));
        }
    }
}