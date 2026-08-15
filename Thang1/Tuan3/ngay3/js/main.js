let workArray = [];
function validateForm() {
    // đọc dữ liệu
    const workNameInput = document.forms["workForm"]["workName"]
    const peopleNameInput = document.forms["workForm"]["people"]
    const deadlineInput = document.forms["workForm"]["deadline"]
    let errorWorkName = document.getElementById("errorWorkName");
    let errorPeopleName = document.getElementById("errorPeopleName");
    let errorDeadline = document.getElementById("errorDeadline");
    
    // trim dữ liệu loại bỏ khoảng trắng dư thừa    
    const workName = workNameInput.value.trim();
    const peopleName = peopleNameInput.value.trim();
    const deadline = deadlineInput.value.trim();

    // reset lỗi cũ
    errorWorkName.innerText = "";
    errorPeopleName.innerText = "";
    errorDeadline.innerText = "";

    // validate form
    if (workName === "") {
        errorWorkName.innerText = "Vui lòng nhập tên công việc";
        workNameInput.focus();
        return false
    } else if (peopleName === "") {
        errorPeopleName.innerText = "Vui lòng nhập đầy đủ họ tên người phụ trách";
        peopleNameInput.focus();
        return false;
    } else if (deadline === "") {
        errorDeadline.innerText = "Vui lòng nhập hạn hoàn thành";
        deadlineInput.focus();
        return false;
    } else if (workNameInput.length < 3 || workNameInput.length > 50) {
        errorWorkName.innerText = "Tên công việc phải có độ dài lớn hơn 3 kí tự và nhỏ hơn 50 kí tự";
        workNameInput.focus();
        return false;
    } else if (workArray.some(function(value) {
        return value.toLowerCase() === workName.toLowerCase();
     })) {
        errorWorkName.innerText ="Tên công việc không được trùng lặp";
        workNameInput.focus();
        return false
     }
    return true;
}

// prevent default
const tbody = document.getElementById("workList");
const form = document.getElementById("workForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const workNameInput = document.forms["workForm"]["workName"];
    const peopleNameInput = document.forms["workForm"]["people"];;
    const deadlineInput = document.forms["workForm"]["deadline"]
    const workName = workNameInput.value.trim();
    const peopleName = peopleNameInput.value.trim();
    const deadline = deadlineInput.value.trim();

    if (validateForm()) {
        workArray.push(workName);
        const tr = document.createElement("tr");
        const stt = document.createElement("td");
        stt.innerHTML = workArray.length;

        const work = document.createElement("td");
        work.textContent = workName;

        const people = document.createElement("td");
        people.textContent = peopleName;

        const deadlineValue = document.createElement("td");
        deadlineValue.textContent = deadline;

        const activity = document.createElement("td");
        const selectButton = document.createElement("button")
        selectButton.textContent = "Chọn"
        selectButton.type = "button";
        selectButton.addEventListener("click", function(event) {
            document.getElementById("workName").value = workName;
            document.getElementById("people").value = peopleName;
            document.getElementById("deadline").value = deadline;
        });
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Xóa";
        removeButton.type = "button";
        removeButton.addEventListener("click", function(event) {
        tr.remove();
    });
        activity.append(selectButton, removeButton);
        tr.append(stt, work, people, deadlineValue, activity);
        tbody.append(tr);
        form.reset();
    }
});