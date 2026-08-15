// hàm tạo đối tượng (constructor)
function Student(id, fullName, email, score) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.score = score;
}

// đổi điểm hệ 10 sang chữ
function scoreToAlphabet(score) {
    if (score < 0 || score > 10) {
        throw new Error("Điểm đầu vào không hợp lệ");
    } else if (score >= 9.0) {
        return "A+";
    } else if (score >= 8.5) {
        return "A";
    } else if (score >= 8.0) {
        return "B+"
    } else if (score >= 7.0) {
        return "B"
    } else if (score >= 6.5) {
        return "C+"
    } else if (score >= 5.5) {
        return "C"
    } else if (score >= 5.0) {
        return "D+"
    } else if (score >= 4.0) {
        return "D"
    } else {
        return "Không đạt"
    }
}
// đổi điểm chữ sang hệ 4
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
    }
}
// xếp loại gpa
function rankGpa(gpa) {
    if (gpa > 4.0 || gpa < 0) {
        throw new Error("Dữ liệu không hợp lệ")
    } else if (gpa >= 3.6) {
        return "Xuất sắc"
    } else if (gpa >= 3.2) {
        return "Giỏi"
    } else if (gpa >= 2.5) {
        return "Khá"
    } else if (gpa >= 2) {
        return "Trung bình"
    } else {
        return "Không đạt"
    }
}

// tính điểm trung bình
function getAvgGpa(student) {
    let sumOfGpa = 0;
    for (const x of student.score) {
        let alphabet = scoreToAlphabet(x);
        let gpa = alphabetToGpa(alphabet);
        sumOfGpa += gpa;
    }
    let avgGpa = (sumOfGpa / student.score.length).toFixed(2);
    let rank = rankGpa(parseFloat(avgGpa));
    return {
        id: student.id,
        fullName: student.fullName,
        email: student.email,
        score: student.score,
        averageGpa: parseFloat(avgGpa),
        rank: rank
    }
}

// Lọc học viên đạt
function qualifiedStudent(student) {
    return student.averageGpa >= 2;
}

// Sắp xếp theo gpa
function sortedByGpa(a, b) {
    return b.averageGpa - a.averageGpa;
}

// Thống kê xếp loại gpa
function getStatic (acc,student) {
    const currenRank = student.rank;        
    if (acc[currenRank] === undefined) {
        acc[currenRank] = 1;
    } else {
        acc[currenRank] += 1;
    }
    return acc
}
