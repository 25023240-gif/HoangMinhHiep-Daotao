function Student(id, fullName, avgGpa, rank) {
    this.id = id;
    this.fullName = fullName;
    this.avgGpa = avgGpa;
    this.rank = rank;
}

const studentArray = [
    new Student ("SV01", "Nguyen Van A", 3.67, "Xuất sắc"),
    new Student ("SV02", "Nguyen Van B", 3.36, "Giỏi"),
    new Student ("SV03", "Le Van C", 3.12, "Khá"),
    new Student ("SV04", "Do Van D", 3.19, "Khá")
];

const tbody = document.querySelector("#studentList");
tbody.textContent = "";
function renderStudent(studentArray) {  
    for(let x = 0; x <studentArray.length; x++) {
        const student = studentArray[x];
        const tr = document.createElement("tr");

        const stt = document.createElement("td");
        stt.textContent = x + 1;

        const studentId = document.createElement("td");
        studentId.textContent = student.id;

        const studentName = document.createElement("td");
        studentName.textContent = student.fullName;

        const studentGpa = document.createElement("td");
        studentGpa.textContent = student.avgGpa;

        const studentRank = document.createElement("td");
        studentRank.textContent = student.rank;

        tr.append(stt, studentId, studentName, studentGpa, studentRank);
        tbody.append(tr);
    }
}

renderStudent(studentArray);
