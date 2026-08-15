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
    new Student("SV06", "Do Van F", "0857441236", "dovanf06@gmail.com", [5.5, 5.2, 7.1]),
    new Student("SV07", "Bui Van G", "0914549892", "buivang07@gmail.com", [6.5, 5.8, 7.2])
]

function scoreToAlphabet(score) {
    if (score > 10 || score < 0) {
        return "Dữ liệu không hợp lệ"
    }
    else if (score >= 9.0) {
        return "A+"
    }
    else if (score >= 8.5) {
        return "A"
    }
    else if (score >= 8.0) {
        return "B+"
    }
    else if (score >= 7.0) {
        return "B"
    }
    else if (score >= 6.5) {
        return "C+"
    }
    else if (score >= 5.5) {
        return "C"
    }
    else if (score >= 5.0) {
        return "D+"
    }
    else if (score >= 4.0) {
        return "D"
    } else {
        return "F"
    }
}

function alphabetToGpa(alphabet) {
    switch(alphabet) {
        case "A+":
            return 4.0;
        case "A":
            return 3.7;
        case "B+":
            return 3.5;
        case "B":
            return 3.0;
        case "C+":
            return 2.5;
        case "C":
            return 2.0;
        case "D+":
            return 1.5;
        case "D":
            return 1.0;
        case "F":
            return 0.0;
    }
}

function rankGpa(gpa) {
    if (gpa > 4.0 || gpa < 0.0) {
        return "Dữ liệu không hợp lệ"
    } else if (gpa >= 3.6) {
        return "Xuất sắc";
    } else if (gpa >= 3.2) {
        return "Giỏi";
    } else if (gpa >= 2.5) {
        return "Khá";
    } else if (gpa >= 2.0) {
        return "Trung bình";
    } else {
        return "Không đạt";
    }
}

function getAvgGpa(student) {
    let sumOfGpa = 0;
    for (x of student.score) {
        let alphabet = scoreToAlphabet(x);
        let gpa = alphabetToGpa(alphabet);
        sumOfGpa += gpa;
    }
    let avgGpa = (sumOfGpa / student.score.length).toFixed(2);
    let rank = rankGpa(avgGpa);
    return {
        id: student.id,
        fullName: student.fullName,
        phoneNumber: student.phoneNumber,
        email: student.email,
        score: student.score,
        averageGpa: parseFloat(avgGpa),
        rank: rank
    }
}
console.log("DANH SÁCH SINH VIÊN BAN ĐẦU")
for(x of studentArray) {
    console.log(x);
}
console.log("DANH SÁCH SINH VIÊN ĐẠT")
const newStudentArray = studentArray.map(getAvgGpa);
const qualifiedStudentArray = newStudentArray.filter(qualifiedStudent);
function qualifiedStudent(student) {
    return student.averageGpa >= 2.0;
}
for(const x of qualifiedStudentArray) {
    console.log(x);
}
console.log("DANH SÁCH SINH VIÊN SẮP XẾP GIẢM DẦN THEO GPA")
const sortedStudentArray = [...qualifiedStudentArray];
sortedStudentArray.sort(sorted)
function sorted(a, b) {
    return b.averageGpa - a.averageGpa;
}
for(const x of sortedStudentArray) {
    console.log(x);
}
console.log("THỐNG KÊ XẾP LOẠI")
const stats = newStudentArray.reduce(getStatics, {});
function getStatics(acc, student) {
    let currentRank = student.rank;
    if (acc[currentRank] === undefined) {
         acc[currentRank] = 1;
    } else {
         acc[currentRank] +=1;
    }
    return acc;
}
console.log(stats);


