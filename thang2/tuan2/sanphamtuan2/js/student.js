import { saveToStorage, getFromStorage } from "./storage.js";

export class StudentManager {
    constructor() {
        this.studentArray = getFromStorage();
        this.editId = null;
    }

    // them sinh vien
    addStudent(newStudent) {
        this.studentArray.push(newStudent);
        saveToStorage(this.studentArray);
    }

    // sua sinh vien
    updateStudent(newStudent) {
        this.studentArray = this.studentArray.map(student => {
            if (student.id === this.editId) {
                return {...student,...newStudent};
            } else {
                return student;
            }
        });
        saveToStorage(this.studentArray);
        this.editId = null;
    }

    // xoa sinh vien
    deleteStudent(id) {
        this.studentArray = this.studentArray.filter(student => student.id !== id);
        saveToStorage(this.studentArray);
    }

    // loc sinh vien
    filterStudent(minGpa) {
        const filterError = document.getElementById("filterError");
        filterError.textContent = "";
        if (isNaN(minGpa) || minGpa > 4 || minGpa < 0 || minGpa === "") {
            filterError.textContent = "Vui lòng nhập giá trị lọc hợp lệ";
            return this.studentArray
        } else {
            return this.studentArray.filter(student => student.gpa >= minGpa)
        }
    }
    
    // tim kiem
    searchStudent(keyword) {
        const searchWord = keyword.toLowerCase().trim();
        if (searchWord === "") {
            return this.studentArray;
        } else {
            return this.studentArray.filter(student => 
                student.fullName.toLowerCase().includes(searchWord) ||
                student.className.toLowerCase().includes(searchWord)
            );
        }
    }
}