const rawProducts = [
  {
    id: "p01",
    name: "  iphone 15 pro max  ", // Lỗi: thừa khoảng trắng, viết thường
    price: "30000000",             // Lỗi: kiểu string thay vì number
    category: "Phone",
  },
  {
    id: "p02",
    name: "macbook air m2",
    price: 26000000,
    // Lỗi: thiếu thuộc tính category
  },
  {
    id: "p03",
    name: "  Samsung Galaxy S24 ",
    price: "22000000",
    category: "Phone",
  }
];

const cleanProrducts = rawProducts.map(item => {
  const {id, name, price, category = "Unassigned"} = item;
  return {
    id,
    name: name.trim(),
    price: Number(price),
    category
  }
});
console.log("MANG SAU KHI DC CHUAN HOA");
console.log(cleanProrducts);
console.log("DU LIEU GOC");
console.log(rawProducts);