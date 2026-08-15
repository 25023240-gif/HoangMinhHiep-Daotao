#  Ứng Dụng Danh Mục Sản Phẩm 
## Công Nghệ Sử Dụng

* **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules)
* **Build Tool:** Vite
* **Package Manager:** npm

##  Chức Năng Chính

* Lấy dữ liệu sản phẩm từ file JSON/API và tự động lưu vào `LocalStorage` để tối ưu tốc độ cho các lần tải sau.
* Tìm kiếm sản phẩm theo tên và danh mục theo thời gian thực, tích hợp kỹ thuật **Debounce (500ms)** giúp giảm số lần render không cần thiết khi nhập liệu.
* **Bộ Lọc & Sắp Xếp (Filter & Sort):**
  * Lọc sản phẩm theo danh mục (`Category`).
  * Sắp xếp theo giá tăng/giảm hoặc mặc định (`SortBy`).
  * Nút **Reset lọc** giúp khôi phục toàn bộ bộ lọc về trạng thái ban đầu.
* **Quản Lý Trạng Thái Giao Diện 
  * Hiển thị trạng thái loading khi đang tải dữ liệu.
  * Hiển thị thông báo khi empty state (Không tìm thấy sản phẩm phù hợp).
  * Xử lý và hiển thị lỗi khi truy cập dữ liệu thất bại.

## Cấu Trúc Thư Mục

```text
SanPhamTuan4/
├── assets/             # Chứa hình ảnh, icons
├── css/ 
├   ├── style.css            # Chứa file định dạng style.css
├── js/
│   ├── api.js          # Hàm gọi Fetch API lấy dữ liệu sản phẩm
│   ├── storage.js      # Các hàm thao tác với LocalStorage (get/save)
│   ├── product.js      # Logic lọc, sắp xếp dữ liệu & hàm Debounce
│   └── main.js         # Quản lý State, xử lý sự kiện DOM & Render UI
├── index.html          # File giao diện HTML chính
├── product.json        # File dữ liệu sản phẩm mẫu
├── package.json        # Khai báo dependencies và scripts
├── .gitignore          # Cấu hình bỏ qua các thư mục không push (node_modules, dist)
└── README.md           # Tài liệu hướng dẫn dự án
```
## Hướng dẫn chạy
# vào terminal
#B1 cài đặt thư viện 
# npm install
#B2 Khởi chạy dự án ở môi trường development
# npm run dev
#B3 Đóng gói dự án
# npm run build

