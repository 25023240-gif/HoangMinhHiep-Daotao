import { fetchApi } from './api.js';
import { filterData } from './product.js';
import { saveDataToStorage, getDataFromStorage } from './storage.js';
import { debounce } from './product.js';

export let state = {
    originalProducts: [],
    searchWord: "",
    category: "all",
    sortBy: "default",
    isLoading: true
}

async function GetDataFromFetch() {
    const errorMessage = document.getElementById("error-message");
    try { 
        let products = getDataFromStorage() 
        if (!products || products.length === 0) {
            products = await fetchApi();
            saveDataToStorage(products);
        }
        state.originalProducts = products;
    } catch (error) {
        console.error("Lỗi :", error.message);
        errorMessage.textContent = error.message;
        errorMessage.classList.remove("hidden");
        
        //xóa thông báo mãng rỗng
        if (productList) {
            productList.innerHTML = "";
        }
        return;
    } finally {
        state.isLoading = false;
    }
    render();
}

function setCategory(category) {
    state.category = category;
    render();
}

function setKeyWord(keyword) {
    state.searchWord = keyword;
    render();
}

function setSortBy(sortBy) {
    state.sortBy = sortBy;
    render();
}

function render() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (state.isLoading === true) {
        const loadingMessage = document.createElement("p");
        loadingMessage.textContent = "Đang tải dữ liệu";
        loadingMessage.classList.add("loading-message");
        productList.append(loadingMessage);
        return;
    }

    // thuc hien loc
    const displayProducts = filterData(state.originalProducts,state);

    // khi mang rong
    if (displayProducts.length === 0) {
        const emptylist = document.createElement("p")
        emptylist.textContent = "KHÔNG CÓ SẢN PHẨM NÀO ĐỂ HIỂN THỊ";
        emptylist.classList.add("empty-message");
        productList.append(emptylist);
        return;
    } 

    displayProducts.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", item.image);
        productImg.setAttribute("alt", item.name);

        const productName = document.createElement("h4");
        productName.textContent = item.name;

        const productCategory = document.createElement("p");
        productCategory.textContent = `Phân loại: ${item.category}`;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Giá: ${item.price} đồng`;

        card.append(productImg, productName, productCategory, productPrice);
        productList.append(card);
    });

}

// xu li su kien

const categorySelect = document.getElementById("category-select");
const sortSelect = document.getElementById("sort-select");
const searchInput = document.getElementById("searchInput");
const resetButton = document.getElementById("reset");

categorySelect.addEventListener("change",function(event) {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
});

sortSelect.addEventListener("change", function(event) {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);
});

const handleDebounce = debounce((value) => {
    setKeyWord(value);
    state.isLoading = false; 
    render();
}, 500);

searchInput.addEventListener("input", function(event) {
    state.isLoading = true;
    render();
    handleDebounce(event.target.value);
    
});



function resetFilter() {
    state.searchWord = "";
    state.category = "all";
    state.sortBy = "default";
    if (searchInput) searchInput.value = "";
    if (categorySelect) categorySelect.value = "all";
    if (sortSelect) sortSelect.value = "default";
    render();
}

resetButton.addEventListener("click", resetFilter);

GetDataFromFetch();


