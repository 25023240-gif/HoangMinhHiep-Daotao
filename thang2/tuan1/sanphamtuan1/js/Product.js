export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.id} - ${this.name} - Giá tiền: ${this.price} đồng`
    }
}