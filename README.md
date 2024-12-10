# class-api-nodejs


Practice NodeJS:
Viết API quản lí học sinh của một ngôi trường (sử dụng Express, NodeJS):

**KHÔNG CẦN DB, SỬ DỤNG ARRAY ĐỂ LƯU TẠM KHI CHẠY 

Enitity:
   - Student:
         + ID: unique
         + Name: tên học sinh
         + Class: lớp mà học sinh thuộc về.
   - Class:
         + ID: unique
         + Class Name: tên lớp

Constraints:
   - 1 HS chỉ thuộc về duy nhất 1 class
   - Class Name không được phép trùng
   - Student Name không được phép trùng.
   - 1 HS phải thuộc về 1 class nào đó.
   - 1 Class có thể có nhiều học sinh

APIs:
   - Quản lí học sinh:
        + Thêm Học Sinh
        + Update thông tin học sinh
        + Xóa học sinh
        + Truy xuất tất cả danh sách học sinh
        + Truy xuất thông tin HS theo ID
        + Truy xuất thông tin HS theo Name (search LIKE)
        + Truy xất tất cả học sinh theo Class (sử dung Class Name).

   - Quản lí Lớp:
        + Thêm 1 Lớp
        + Update thông tin Lớp
        + Xóa Lớp (nếu lớp còn HS thì ko được phép xóa)
        + Truy xuất thông tin Lớp theo ID


Các câu lệnh test bằng cURL:
   Thêm Học Sinh (POST Request)
      curl -X POST http://localhost:3000/api/students -H "Content-Type: application/json" -d '{"name": "Quang Nguyen", "className": "1A"}'

   Truy Xuất Tất Cả Học Sinh (GET Request)
      curl http://localhost:3000/api/students

   Truy Xuất Học Sinh Theo ID (GET Request)
      curl http://localhost:3000/api/students/1

   Tìm Học Sinh Theo Tên (GET Request)
      curl "http://localhost:3000/api/students/search/name?name=Quang%20Nguyen"

   Truy Xuất Học Sinh Theo Lớp (GET Request)
      curl "http://localhost:3000/api/students/search/class?className=1A"

   Cập Nhật Thông Tin Học Sinh (PUT Request)
      curl -X PUT http://localhost:3000/api/students/1 -H "Content-Type: application/json" -d '{"name": "Minh Huy", "className": "2A}'

   Xóa Học Sinh (DELETE Request)
      curl -X DELETE http://localhost:3000/api/students/1

   Thêm Lớp (POST Request)
      curl -X POST http://localhost:3000/api/classes -H "Content-Type: application/json" -d '{"className": "1A"}'

   Truy Xuất Lớp Theo ID (GET Request)
      curl http://localhost:3000/api/classes/1

   Cập Nhật Thông Tin Lớp (PUT Request)
      curl -X PUT http://localhost:3000/api/classes/1 -H "Content-Type: application/json" -d '{"className": "2A"}'

   Xóa Lớp (DELETE Request)
      curl -X DELETE http://localhost:3000/api/classes/1