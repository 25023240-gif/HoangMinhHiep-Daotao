function tinhTuoi(namSinh) {
    const namHienTai = 2026;
    let tuoi = namHienTai - namSinh;
}

function tinhDiemTb(diemToan, diemVan, diemAnh) {
    let diemTb = (diemToan + diemVan + diemAnh) / 3;
    return `Diem trung binh cac mon: ${diemTb.toFixed(2)}`;
}

function tinhTongTien(gia,soLuong,sanPham) {
    const vat = 0.1;
    let tongTien = soLuong * sanPham * (1 + vat);
    return `San Pham: ${sanPham}, So Luong: ${soLuong}, Hoa Don: ${tongTien} Dong`;
}

console.log(tinhTuoi(2007));
console.log(tinhDiemTb(9, 7.5, 9));
console.log(tinhTongTien(200000, 4, "Tai nghe không dây"));
console.log(5=="5", "Ra true vì so sánh bằng lỏng lẻo");   /* ra true vì == so sánh bằng lỏng lẻo */
console.log(5==="5", "Ra false vì so sánh bằng tuyệt đối");  /* ra false vì so sánh bằng tuyệt đối */
 
