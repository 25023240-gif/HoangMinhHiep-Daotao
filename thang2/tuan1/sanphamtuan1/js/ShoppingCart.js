import { Product } from "./Product.js";
export class ShoppingCart {
    constructor(name) {
        this.name = name;
        this.productList = [];
    }

    // them san pham vao gio hang
    addProduct(list = this.productList,item) {
        if (!item || !item.name || item.name.trim() === "") {
            throw new Error("San pham khong hop le");
        } else {
            const autoId = list.length + 1;
            item.id = autoId;
            return [...list, item];
        }
    }
    // loc san pham theo gia thanh
    filterProduct(list = this.productList, maxPrice) {
        if (typeof maxPrice !== "number" || maxPrice <= 0 || maxPrice === " ") {
            throw new Error ("Gia toi da khong hop le")
        } else if (list.length === 0) {
            return [];

        } else {
            return list.filter(item => item.price <= maxPrice);
        }
     }

     // in thong tin 
     printAll() {
        if (this.productList.length === 0) {
            return "Gioi hang rong"
        }
        else {
            this.productList.forEach(item => console.log(item.getInfo()));
        }
     }
}