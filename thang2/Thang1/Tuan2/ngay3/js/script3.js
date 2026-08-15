    // Hàm xếp loại điểm gpa
    function gradeToAlphabet(grade) {
        if (grade > 10 || grade < 0) {
            return "Dữ liệu đầu vào không hợp lệ"
        } else if (grade >= 9.0) {
            return "A+";
        } else if (8.5 <= grade && grade < 9.0) {
            return "A";
        } else if (8.0 <= grade && grade < 8.5) {
            return "B+"
        } else if (7.0 <= grade && grade < 8.0) {
            return "B"
        } else if (6.5 <= grade && grade < 7.0) {
            return "C+"
        } else if (5.5 <= grade && grade < 6.5) {
            return "C"
        } else if (5.0 <= grade && grade < 5.5) {
            return "D+"
        } else if (4.0 <= grade && grade < 5.0) {
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
                return 0.0
        }
    }

    function gpaClassification(gpa) {
        if (gpa < 0 || gpa > 4) {
            return "Dữ liệu đầu vào không hợp lệ";
        } else if (gpa >= 3.6) {
            return "Xuất sắc";
        } else if (gpa >= 3.2) {
            return "Giỏi";
        } else if (gpa >= 2.5) {
            return "Khá";
        } else if (gpa >= 2.0) {
            return "Trung bình";
        } else {
            return "Không đủ điều kiện"
        }
    }

    function getFinalScore(numberOfSubject) {
        let sumOfGpa = 0;
        for (i = 1; i <= numberOfSubject ; i++) {
            let score10 = parseFloat(prompt(`Nhập điểm thang 10 cho môn thứ ${i}:`));
            let alphabet = gradeToAlphabet(score10);
            let gpa4 = alphabetToGpa(alphabet);
            sumOfGpa += gpa4;
        }
        let averageGpa = sumOfGpa / numberOfSubject;
        averageGpa = averageGpa.toFixed(2);
        let rank = gpaClassification(averageGpa);
        return `GPA trung bình: ${averageGpa}, Xếp loại: ${rank}`;
    }
    console.log(getFinalScore(3));
    console.log(getFinalScore(4));
    console.log(getFinalScore(5));

    function getLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return "Nam nhuan";
        } else {
            return "Nam binh thuong"
        }
    }
    console.log(getLeapYear(300));
    console.log(getLeapYear(2024));
    console.log(getLeapYear(2024));

    function getSum(a, b ,c) {
        return a + b + c;
    }
    console.log(getSum(3,4,1));
    console.log(getSum("a","b","c"));
    console.log(getSum(3.4,3.5,3.6).toFixed(2));

    function getMax(a, b, c) {
        let max = a;
        if (b > max  && c > b) {
            return c;
        } else if (b > max && c < b) {
            return b;
        } else {
            return a
        }
    }
    console.log(getMax(1,2,3));
    console.log(getMax(36,39,31));
    console.log(getMax(8,18,20));





