import { Student } from "./Student.js";
import { StudentManager } from "./StudentManager.js";

const studentList = [
    new Student("SV01", "Nguyen Van A", 3.6),
    new Student("SV02", "Nguyen Van B", 3.2),
    new Student("SV03", "Nguyen Van C", 3.4),
    new Student("SV04", "Nguyen Van D", 2.5),
    new Student("SV05", "Nguyen Van E", 2.9),
    new Student("SV06", "Nguyen Van F", 1.8)
]

const manager = new StudentManager("Lớp: IT5")

// thêm sinh viên
studentList.forEach(student => manager.addStudent(student));

// lọc sinh viên đủ đk xét học bổng
const filteredList = manager.filterStudent(3.2);
manager.filteredList.printAll();



