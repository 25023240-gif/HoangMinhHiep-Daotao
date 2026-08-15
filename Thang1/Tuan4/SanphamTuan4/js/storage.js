import {state} from './main.js';

const keyStorage = "My Data";

export function saveDataToStorage(data) {
    if (data) {
        localStorage.setItem(keyStorage, JSON.stringify(data));
    }
}

export function getDataFromStorage() {
    try {
        const gotData = localStorage.getItem(keyStorage);
        if (gotData) {
            JSON.parse(gotData); 
        } else {
            return [];
        }
    } catch (error) {
        console.error("Lỗi dữ liệu trong localStorage không đúng định dạng")
        return [];
    }
}