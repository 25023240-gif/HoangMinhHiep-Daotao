export async function fetchApi() {
    const response = await fetch("product.json");
    if (!response.ok) {
        throw new Error(`Không thể truy cập dữ liệu, Mã lỗi: ${response.status}`);
    }
    return await response.json();
}
        