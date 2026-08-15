const storageKey = "Work list data";
// stat ban đầu
let state = {
    workList: getDataFromStorage(),
    filter: "all",
    searchKeyWord: "",
};

function saveDataToStorage() {
    const savedData = localStorage.setItem(storageKey, JSON.stringify(state.workList));   
}

function getDataFromStorage() {
    try {
        const gotData = localStorage.getItem(storageKey);
        if (gotData) {
            return JSON.parse(gotData);
        } else {
            return [];
        }
    } catch (err) {
        console.log("Dữ liệu trong local storage không đúng định dạng");
        return [];
    }
}


// Các hàm biến đổi đữ liệu state add, toggle, delete
// hàm thêm dữ liệu
function addWorkList(workName, people, deadline) {
    const workInfo = {
        id: Date.now(),
        workName,
        people,
        deadline,
        completed: false
    }
    state.workList.push(workInfo);
    saveDataToStorage();
    render();       
}

// hàm thay đổi trạng thái của công việc theo id
function toggleWorkStatus(id) {
    for (let workInfo of state.workList) {
        if (workInfo.id === id) {
            workInfo.completed = !workInfo.completed;    // đảo ngược trạng thái
            break;     
        }
    }
    saveDataToStorage();
    render();
}

// hàm xóa công việc theo id
function deleteWorkList(id) {
    state.workList = state.workList.filter(function(workInfo) {
        return workInfo.id !== id;
    });
    saveDataToStorage();
    render();
}

// hàm cập nhật keyword
function setKeyWord(keyWord) {
    state.searchKeyWord = keyWord;
    render();
}

// hàm tìm kiếm theo keyword
function searchByKeyWord(list) {
    const keyword = state.searchKeyWord.trim().toLocaleLowerCase();
    if (keyword === "") {
        return list
    } else {
        return list.filter(function(workInfo) {
            const hasWorkName = workInfo.workName.toLocaleLowerCase().includes(keyword);
            const hasPeople = workInfo.people.toLocaleLowerCase().includes(keyword);
            return hasWorkName || hasPeople;
        });
    }
}

// hàm đặt trạng thái lọc
function setFilter(filterType) {
    state.filter = filterType;
    render()
}

// hàm lọc theo trạng thái
function filterByStatus() {
    if (state.filter == "all") {
        return state.workList;
    }
    else if (state.filter == "completed") {
        const completedWorkList = state.workList.filter(function(workInfo) {
            return workInfo.completed === true;
        });
        return completedWorkList;
    }
    else if (state.filter == "uncompleted") {
        const uncompletedWorkList = state.workList.filter(function(workInfo) {
            return workInfo.completed === false;
        });
        return uncompletedWorkList;
    } 
}

// hàm lọc tổng hợp
function filterData() {
    const filterStatusList = filterByStatus();
    const finalList = searchByKeyWord(filterStatusList);
    return finalList 
}

// thống kê
function Statistic() {
    const total = state.workList.length;
    const uncompleted = state.workList.filter(function(workInfo) {
        return workInfo.completed === false;
    }).length;
    const completed = total - uncompleted;
    
    const totalStat = document.getElementById("total-static");
    const uncompletedStat = document.getElementById("uncompleted-static");
    const completedStat = document. getElementById("completed-static");

    totalStat.textContent = total;
    uncompletedStat.textContent = uncompleted;
    completedStat.textContent = completed;
}

//render dựng html
function render() {
    const tbody = document.querySelector("#workList");
    tbody.textContent = "";
    const filteredWorkList = filterData();
    
    // đổi highlight cho nút được chọn
    const allButton = document.getElementById("filter-all");
    const uncompletedButton = document.getElementById("filter-uncompleted");
    const completedButton = document.getElementById("filter-completed");
    allButton.classList.remove("active");
    uncompletedButton.classList.remove("active");
    completedButton.classList.remove("active");
    if (state.filter === "all") {
        allButton.classList.add("active");
    } else if (state.filter === "uncompleted") {
        uncompletedButton.classList.add("active");
    } else if (state.filter === "completed") {
        completedButton.classList.add("active");
    }



    // nếu mảng rỗng
    if (filteredWorkList.length === 0) {
        const emptyTr = document.createElement("tr");
        const emptyTd = document.createElement("td");
        // trang trí css gộp cột đưa chữ ra giữa
        emptyTd.colSpan = 6;
        emptyTd.style.textAlign = "center";
        emptyTd.textContent = "Không có công việc nào"
        emptyTr.append(emptyTd);
        tbody.append(emptyTr);
    } else {
        for (let x = 0; x < filteredWorkList.length; x++) {
            const tr = document.createElement("tr");
            const workInfo = filteredWorkList[x];

            const sttTd = document.createElement("td");
            sttTd.textContent = x + 1;

            const workNameTd = document.createElement("td");
            workNameTd.textContent = workInfo.workName;

            const peopleTd = document.createElement("td");
            peopleTd.textContent = workInfo.people;

            const deadlineTd = document.createElement("td");
            deadlineTd.textContent = workInfo.deadline;

            const statusTd = document.createElement("td");
            if (workInfo.completed === true) {
                statusTd.textContent = "Đã xong";
            } else {
                statusTd.textContent = "Chưa xong"
            }

            const activityTd = document.createElement("td");

            const selectButton = document.createElement("button");
            selectButton.type = "button";
            if (workInfo.completed === true) {
                selectButton.textContent = "Mở lại";
            } else {
                selectButton.textContent = "Xong";
            }
            selectButton.setAttribute("aria-label", `Đổi trạng thái công việc`)
            selectButton.addEventListener("click",function(event) {
                return toggleWorkStatus(workInfo.id)
            });

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "Xóa";
            deleteButton.addEventListener("click", function(event) {
                return deleteWorkList(workInfo.id);
            });

            activityTd.append(selectButton, deleteButton);
            tr.append(sttTd, workNameTd, peopleTd, deadlineTd, statusTd, activityTd);
            tbody.append(tr);
        }
    }
    Statistic();    
}

function validateForm() {
    const workNameInput = document.forms["workForm"]["workName"];
    const peopleNameInput = document.forms["workForm"]["people"];;
    const deadlineInput = document.forms["workForm"]["deadline"]
    const workNameValue = workNameInput.value.trim();
    const peopleNameValue = peopleNameInput.value.trim();
    const deadlineValue = deadlineInput.value.trim();

    let errorWorkName = document.getElementById("errorWorkName");
    let errorPeopleName = document.getElementById("errorPeopleName");
    let errorDeadline = document.getElementById("errorDeadline");
    //reset lỗi cũ
    errorWorkName.innerText = "";
    errorPeopleName.innerText = "";
    errorDeadline.innerText = "";

    const isDuplicate = state.workList.some(function(workInfo) {
        return workInfo.workName.toLowerCase() === workNameValue.toLowerCase();
    });
    
    if (workNameValue === "") {
        errorWorkName.innerText = "Vui lòng không để trống tên công việc";
        workNameInput.focus();
        return false;
    } else if (peopleNameValue === "") {
        errorPeopleName.innerText = "Vui lòng không để trống tên người phục trách";
        peopleNameInput.focus();
        return false
    } else if (deadlineValue === "") {
        errorDeadline.innerText = "Vui lòng không để trống thời hạn hoàn thành";
        deadlineInput.focus();
        return false;
    } else if (workNameValue.length < 3 || workNameValue.length > 50) {
        errorWorkName.innerText = "Tên công việc phải có độ dài lớn hơn 3 kí tự và nhỏ hơn 50 kí tự";
        workNameInput.focus();
        return false;
    } else if (isDuplicate) {
        errorWorkName.innerText = "Tên công việc không được phép trùng lặp";
        workNameInput.focus();
        return false;
    } 
    return true;
}

const form = document.getElementById("workForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const workNameInput = document.forms["workForm"]["workName"];
    const peopleNameInput = document.forms["workForm"]["people"];;
    const deadlineInput = document.forms["workForm"]["deadline"]
    const workNameValue = workNameInput.value.trim();
    const peopleNameValue = peopleNameInput.value.trim();
    const deadlineValue = deadlineInput.value.trim();

    if (validateForm()) {
        addWorkList(workNameValue, peopleNameValue, deadlineValue);
        form.reset();
    }
})
render();

// Thêm sự kiện cho 3 nuts lọc còn thiếu
const allButton = document.getElementById("filter-all");
const uncompletedButton = document.getElementById("filter-uncompleted");
const completedButton = document.getElementById("filter-completed");
const searchInput = document.getElementById("searchInput");
allButton.addEventListener("click", function() {
    setFilter("all");
});

uncompletedButton.addEventListener("click", function() {
    setFilter("uncompleted");
});

completedButton.addEventListener("click", function() {
    setFilter("completed");
});

if (searchInput) {
    searchInput.addEventListener("input", function(event) {
        setKeyWord(event.target.value);
    });
}




