# HƯỚNG DẪN CÀI ĐẶT FIREBASE (100% GÓI MIỄN PHÍ - SPARK PLAN)

> [!IMPORTANT]
> **Hoàn toàn MIỄN PHÍ:**
> - Dự án này chạy 100% trên **Firebase Spark Plan** (gói miễn phí của Google).
> - **KHÔNG CẦN THẺ NGÂN HÀNG / THẺ TÍN DỤNG (VISA / MASTERCARD).**
> - Không tốn bất kỳ chi phí nào. Quota miễn phí mỗi ngày (50.000 lượt đọc, 20.000 lượt ghi Firestore) hoàn toàn thoải mái cho nhu cầu học tập và quản lý lớp học.

---

## BƯỚC 1: TẠO DỰ ÁN FIREBASE (1 PHÚT)

1. Truy cập [Firebase Console](https://console.firebase.google.com/) và đăng nhập bằng tài khoản Google của bạn.
2. Bấm **Add project** (Thêm dự án).
3. Đặt tên dự án (ví dụ: `so-tu-toeic-web`), bấm **Continue**.
4. Ở bước Google Analytics, bạn có thể **Tắt (Disable)** để thiết lập nhanh hơn, sau đó bấm **Create project**.
5. Chờ vài giây và bấm **Continue** khi hoàn tất.

---

## BƯỚC 2: BẬT ĐĂNG NHẬP (AUTHENTICATION)

1. Ở thanh menu bên trái, vào mục **Build** > **Authentication**, bấm **Get started**.
2. Tại tab **Sign-in method**, kích hoạt 2 phương thức:
   - **Google**: Bật công tắc `Enable` > Chọn email hỗ trợ của bạn > Bấm **Save**.
   - **Email/Password**: Bật công tắc `Enable` ở dòng đầu tiên > Bấm **Save**.
3. Thêm tên miền web của bạn vào danh sách cho phép (Authorized domains):
   - Chuyển sang tab **Settings** của Authentication > chọn mục **Authorized domains**.
   - Bấm **Add domain** và nhập tên miền GitHub Pages của bạn:
     ```text
     cuong287.github.io
     ```
   - Bấm **Add**. *(Lưu ý: `localhost` đã được Firebase tự động cho phép sẵn khi bạn thử trên máy).*

---

## BƯỚC 3: TẠO CƠ SỞ DỮ LIỆU (FIRESTORE DATABASE)

1. Ở menu bên trái, vào **Build** > **Firestore Database**, bấm **Create database**.
2. Chọn vị trí lưu trữ (Location): Khuyên dùng `asia-southeast1` (Singapore) hoặc `asia-east1` (Đài Loan/Tokyo) để tốc độ tải nhanh nhất ở Việt Nam.
3. Chọn chế độ bảo mật: Chọn **Start in production mode** (Bắt đầu ở chế độ sản xuất) > Bấm **Create**.

---

## BƯỚC 4: LẤY CẤU HÌNH VÀ DÁN VÀO `firebase-config.js`

1. Bấm vào biểu tượng **Bánh răng (Cài đặt dự án)** ở góc trên bên trái menu > Chọn **Project settings**.
2. Ở tab **General**, cuộn xuống mục **Your apps**, bấm vào biểu tượng Web: `</>`.
3. Đặt tên app (ví dụ: `toeic-web`), không cần tích vào Firebase Hosting > Bấm **Register app**.
4. Bạn sẽ thấy đoạn mã cấu hình `firebaseConfig` giống như sau:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "so-tu-toeic-web.firebaseapp.com",
     projectId: "so-tu-toeic-web",
     storageBucket: "so-tu-toeic-web.firebasestorage.app",
     messagingSenderId: "123456789...",
     appId: "1:123456789:web:abcdef..."
   };
   ```
5. Mở file [firebase-config.js](firebase-config.js) trong thư mục dự án của bạn và dán các giá trị tương ứng vào đó.

---

## BƯỚC 5: CẬP NHẬT LUẬT BẢO MẬT (FIRESTORE RULES)

Bạn có thể làm ngay trên trình duyệt mà không cần cài đặt thêm phần mềm nào:

1. Vào lại mục **Firestore Database** trên Firebase Console.
2. Bấm vào tab **Rules** (ở trên đầu, cạnh tab Data).
3. Mở file [firestore.rules](firestore.rules) trong máy của bạn, copy toàn bộ nội dung và dán đè vào ô soạn thảo Rules trên Firebase Console.
4. Bấm nút **Publish** (Xuất bản).

> [!NOTE]
> Tạo chỉ mục (Index) cho Bảng xếp hạng:
> 1. Trên Firebase Console, vào tab **Indexes** của Firestore Database.
> 2. Bấm **Add index** (Thêm chỉ mục):
>    - **Collection ID**: `leaderboard`
>    - Fields to index:
>      + `totalBest`: chọn **Descending** (Giảm dần)
>      + `completedCount`: chọn **Descending** (Giảm dần)
>    - Query scope: **Collection**
> 3. Bấm **Save**.

---

## BƯỚC 6: PHÂN QUYỀN ADMIN (QUẢN TRỊ VIÊN)

Chỉ những tài khoản được bạn thêm vào danh sách này mới có thể truy cập trang Quản trị và xem chi tiết bài làm của người khác:

1. Mở trang web TOEIC của bạn lên, bấm nút **Đăng nhập** ở góc trái bằng tài khoản Google hoặc Email của bạn.
2. Quay lại [Firebase Console](https://console.firebase.google.com/), vào mục **Authentication** > tab **Users**.
3. Bạn sẽ thấy tài khoản bạn vừa đăng nhập. Hãy copy chuỗi ký tự ở cột **User UID** (chuỗi dài khoảng 28 ký tự, ví dụ: `uK82Jfdm91xLkp93...`).
4. Vào lại mục **Firestore Database** > tab **Data**:
   - Bấm **Start collection** (Bắt đầu bộ sưu tập).
   - Collection ID nhập đúng chữ: `admins`
   - Bấm **Next**.
   - Document ID: dán chính xác **User UID** bạn vừa copy ở trên.
   - Thêm trường dữ liệu (Field):
     + Field: `role`
     + Type: `string`
     + Value: `admin`
   - Bấm **Save**.
5. Quay lại trang web và tải lại trang (F5):
   - Bạn sẽ thấy nút **Quản trị viên** xuất hiện ở thanh menu bên trái.
   - Tại đây bạn có thể xem danh sách tất cả học viên, tổng điểm, số chủ đề đã học và bấm **Xem bài** để xem từng câu dịch, ô điền từ và từ khó của họ!

---

## BƯỚC 7: ĐẨY LÊN GITHUB PAGES

Khi đã dán cấu hình vào [firebase-config.js](firebase-config.js) và kiểm tra hoạt động tốt trên máy:

```bash
git add .
git commit -m "Them tinh nang dang nhap Firebase va luu tien do nguoi hoc"
git push origin main
```

Trang web trên GitHub Pages sẽ tự động cập nhật và học viên có thể đăng nhập, lưu tiến độ và thi đua trên Bảng xếp hạng!
