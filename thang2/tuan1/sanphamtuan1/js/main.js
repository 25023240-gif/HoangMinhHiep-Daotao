import { Product } from "./product.js";
import { ShoppingCart } from "./ShoppingCart.js";

const cart = new ShoppingCart("Giỏ hàng");

const productList = document.getElementById("productList")
const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const maxPriceInput = document.getElementById("maxPriceInput")
const addBtn = document.getElementById("addBtn");
const filterBtn = document.getElementById("filterBtn");
const resetBtn = document.getElementById("resetFilterBtn")
const errorMessage = document.getElementById("error-msg");


function render(list) {
    productList.replaceChildren();
    if (list.length === 0) {
        const emptyLi = document.createElement("li");
        emptyLi.className = "empty-msg";
        emptyLi.textContent = "Khong co san pham nao de hien thi"
        productList.append(emptyLi);
        return;
    }

    list.forEach(item => {
        const itemLi = document.createElement("li");
        itemLi.className = "productItem";
        itemLi.textContent = item.getInfo();
        productList.append(itemLi)
    });
}

addBtn.addEventListener("click", event => {
    //reset tbao lỗi
    errorMessage.textContent = "";
    try {
        const nameValue = nameInput.value;
        const priceValue = priceInput.value;
        
       if (!nameValue) {
            nameInput.focus();
            throw new Error("Vui lòng nhập tên sản phẩm!");
        }

        if (!priceValue) {
            priceInput.focus();
            throw new Error("Vui lòng nhập giá sản phẩm!");
        }
        const newProduct = new Product(0, nameValue ,priceValue);
        cart.productList = cart.addProduct(cart.productList,newProduct);

        render(cart.productList);
        nameInput.value = "";
        priceInput.value = "";
    } catch (error) {
        errorMessage.textContent = error.message;

    }
})

// Nút Lọc
filterBtn.addEventListener("click", () => {
    errorMessage.textContent = "";
    try {
        const maxPriceValue = Number(maxPriceInput.value);
        const filteredList = cart.filterProduct(cart.productList, maxPriceValue);
        render(filteredList);
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

// Nút Reset Lọc / Hiện tất cả
resetBtn.addEventListener("click", () => {
    errorMessage.textContent = "";
    maxPriceInput.value = "";
    render(cart.productList); 
});

