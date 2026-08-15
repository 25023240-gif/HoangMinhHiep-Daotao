export class Student {
    // hàm khởi tạo
    constructor(id, name, gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }

    // hàm lấy thông tin
    getInfo() {
        return `${this.id} - ${this.name} - GPA: ${this.gpa}`;
    }
}