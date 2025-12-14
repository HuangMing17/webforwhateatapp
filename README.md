# 🌐 Website - Hôm Nay Ăn Gì?

Trang web chính thức cho ứng dụng "Hôm Nay Ăn Gì?" - Được tối ưu cho Vercel.

**📍 Vị trí:** Thư mục này đã được tách riêng khỏi project Flutter để dễ quản lý và deploy độc lập.

## 📂 Cấu Trúc

```
website/
├── index.html              # Trang chủ
├── privacy-policy.html     # Chính sách bảo mật (TODO)
├── delete-account.html     # Xóa tài khoản (TODO)
├── terms-of-service.html   # Điều khoản dịch vụ (TODO)
├── support.html           # Hỗ trợ (TODO)
├── vercel.json            # Cấu hình Vercel
├── .gitignore             # Git ignore
├── README.md              # File này
├── css/
│   └── style.css          # CSS chính
├── js/
│   └── main.js           # JavaScript chính
└── images/
    ├── favicon.ico       # Favicon (TODO: thêm file)
    ├── logo.png          # Logo (TODO: thêm file)
    └── screenshots/      # Screenshots app (TODO: thêm files)
```

## 🚀 Bắt Đầu

### 1. Customize Nội Dung

**File `index.html`:**
- Thay `YOUR_APP_ID` bằng Application ID thật từ Play Console
- Email hỗ trợ: `godteam.care@gmail.com` (đã được cấu hình)
- Thêm screenshots vào thư mục `images/screenshots/`
- Thêm logo và favicon

**Các file cần tạo:**
- `privacy-policy.html` - Xem template trong `KE_HOACH_TRANG_WEB.md`
- `delete-account.html` - Xem template trong `KE_HOACH_TRANG_WEB.md`
- `terms-of-service.html` - Xem template trong `KE_HOACH_TRANG_WEB.md`
- `support.html` - Xem template trong `KE_HOACH_TRANG_WEB.md`

### 2. Test Local

```bash
# Vào thư mục website
cd website

# Chạy local server
python -m http.server 8000

# Hoặc dùng Node.js
npx http-server

# Mở browser: http://localhost:8000
```

### 3. Setup Git

```bash
# Khởi tạo git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Website for Hôm Nay Ăn Gì?"
```

### 4. Push Lên GitHub

```bash
# Tạo repository trên GitHub trước, sau đó:
git remote add origin https://github.com/username/homnayangi-website.git
git branch -M main
git push -u origin main
```

### 5. Deploy Lên Vercel

1. Truy cập: https://vercel.com
2. Đăng nhập bằng GitHub
3. Click "Add New Project"
4. Import repository `homnayangi-website`
5. Click "Deploy"
6. Done! 🎉

**URL sẽ là:** `https://homnayangi-website.vercel.app`

## ✅ Checklist

### Trước Khi Deploy

- [ ] Đã thay thế tất cả placeholders trong `index.html`
- [ ] Đã tạo file `privacy-policy.html`
- [ ] Đã tạo file `delete-account.html`
- [ ] Đã tạo file `terms-of-service.html`
- [ ] Đã tạo file `support.html`
- [ ] Đã thêm logo và favicon
- [ ] Đã thêm screenshots
- [ ] Đã test local
- [ ] Tất cả links hoạt động
- [ ] Test trên mobile

### Sau Khi Deploy

- [ ] Test tất cả URLs hoạt động
- [ ] Test trên nhiều trình duyệt
- [ ] Test trên mobile
- [ ] Kiểm tra HTTPS (phải có 🔒)
- [ ] Lấy URLs để điền vào Play Console

## 📝 URLs Cần Điền Vào Play Console

Sau khi deploy, bạn sẽ có các URLs sau:

- **Privacy Policy:** `https://homnayangi-website.vercel.app/privacy-policy.html`
- **Delete Account:** `https://homnayangi-website.vercel.app/delete-account.html`
- **Website:** `https://homnayangi-website.vercel.app/`

## 🔧 Customization

### Thay Đổi Màu Sắc

Sửa file `css/style.css`, phần `:root`:

```css
:root {
    --primary-color: #4CAF50;  /* Thay đổi màu chính */
    --secondary-color: #2196F3; /* Thay đổi màu phụ */
}
```

### Thêm Trang Mới

1. Tạo file HTML mới (ví dụ: `about.html`)
2. Thêm vào navigation trong `index.html`
3. (Tùy chọn) Thêm rewrite trong `vercel.json`

## 📚 Tài Liệu Tham Khảo

- Xem `KE_HOACH_TRANG_WEB.md` để biết chi tiết về nội dung từng trang
- Xem `HUONG_DAN_VERCEL.md` để biết cách deploy chi tiết

## 🐛 Troubleshooting

### Lỗi 404
- Kiểm tra tên file chính xác (case-sensitive)
- Kiểm tra path trong links

### Images không hiển thị
- Đảm bảo path đúng: `/images/logo.png` (bắt đầu với `/`)
- Kiểm tra file có trong repository không

### CSS không load
- Kiểm tra path: `/css/style.css`
- Clear browser cache

---

**Chúc bạn deploy thành công! 🚀**

