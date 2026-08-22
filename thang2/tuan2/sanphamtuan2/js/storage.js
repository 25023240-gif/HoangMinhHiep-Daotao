const storageKey = "STUDENT_LIST";
export function getFromStorage() {
    try {
        const data = localStorage.getItem("STUDENT_LIST");
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }
    } catch(error) {
        console.error("Khong the lay du lieu tu localStorage")
        return [];
    }
}

export function saveToStorage(data) {
    localStorage.setItem("STUDENT_LIST",JSON.stringify(data));
}