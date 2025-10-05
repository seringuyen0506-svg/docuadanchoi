// Mỗi sản phẩm đều có images[] (nhiều ảnh) và videos[] (YouTube embed)
// Thay đường dẫn ảnh & video theo thực tế bạn có.
const PRODUCTS = [
  { // 1) Katana rồng thường
    id: "katana-rong-thuong",
    name: "Katana rồng thường",
    price: null, currency: "VND",
    images: [
      "images/katana-rong-thuong-1.jpg",
      "images/katana-rong-thuong-2.jpg",
      "images/katana-rong-thuong-3.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ],
    description: "Katana rồng bản thường, phù hợp sưu tầm/trưng bày, hoàn thiện cơ bản.",
    info: "Dài ~100cm • Lưỡi thép không gỉ • Bao kiếm giả gỗ • Cán quấn vải",
    zalo: "https://zalo.me/0393414926"
  },
  { // 2) Katana lá tre
    id: "katana-la-tre",
    name: "Katana lá tre",
    price: null, currency: "VND",
    images: [
      "images/katana-la-tre-1.jpg",
      "images/katana-la-tre-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/oHg5SJYRHA0" ],
    description: "Thiết kế lưỡi mô phỏng lá tre, tạo hình lạ mắt để trưng bày/cosplay.",
    info: "Dài ~103cm • Lưỡi thép mài bóng • Tsuba phong cách • Cán quấn dây",
    zalo: "https://zalo.me/0393414926"
  },
  { // 3) Katana lưỡi bóng trơn
    id: "katana-luoi-bong-tron",
    name: "Katana lưỡi bóng trơn",
    price: null, currency: "VND",
    images: [
      "images/katana-luoi-bong-tron-1.jpg",
      "images/katana-luoi-bong-tron-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ],
    description: "Bản lưỡi bóng trơn tối giản, dễ phối cảnh trưng bày.",
    info: "Dài ~104cm • Lưỡi thép đánh bóng • Bao gỗ sơn bóng • Cán bọc vải",
    zalo: "https://zalo.me/0393414926"
  },
  { // 4) Chích điện 928 cờ mỹ
    id: "chich-dien-928-co-my",
    name: "Chích điện 928 cờ mỹ",
    price: null, currency: "VND",
    images: [
      "images/chich-dien-928-1.jpg",
      "images/chich-dien-928-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/oHg5SJYRHA0" ],
    description: "Thiết bị tự vệ cầm tay kiểu 928 (hoa văn cờ Mỹ). Dùng có trách nhiệm, tuân thủ quy định.",
    info: "Nhỏ gọn • Có đèn pin hỗ trợ • Sạc lại được • Chốt an toàn",
    zalo: "https://zalo.me/0393414926"
  },
  { // 5) Đèn pin T10
    id: "den-pin-t10",
    name: "Đèn pin T10",
    price: null, currency: "VND",
    images: [
      "images/den-pin-t10-1.jpg",
      "images/den-pin-t10-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ],
    description: "Đèn pin siêu sáng T10, nhỏ gọn, nhiều chế độ chiếu.",
    info: "Công suất cao • Zoom • Nhiều chế độ sáng • Sạc USB",
    zalo: "https://zalo.me/0393414926"
  },
  { // 6) Dùi Cui X10
    id: "dui-cui-x10",
    name: "Dùi Cui X10",
    price: null, currency: "VND",
    images: [
      "images/dui-cui-x10-1.jpg",
      "images/dui-cui-x10-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/oHg5SJYRHA0" ],
    description: "Gậy hỗ trợ X10, cấu trúc chắc chắn, cầm nắm tốt.",
    info: "Hợp kim • Tay cầm chống trượt • Dễ mang theo",
    zalo: "https://zalo.me/0393414926"
  },
  { // 7) Dùi Cui X8
    id: "dui-cui-x8",
    name: "Dùi Cui X8",
    price: null, currency: "VND",
    images: [
      "images/dui-cui-x8-1.jpg",
      "images/dui-cui-x8-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ],
    description: "Gậy hỗ trợ X8, nhỏ gọn hơn dòng X10, tiện mang theo.",
    info: "Hợp kim • Thiết kế gọn nhẹ • Tay cầm nhám",
    zalo: "https://zalo.me/0393414926"
  },
  { // 8) Xịt cay 110ml (Nato)
    id: "xit-cay-110ml-nato",
    name: "Xịt cay 110ml (Nato)",
    price: null, currency: "VND",
    images: [
      "images/xit-cay-110ml-nato-1.jpg",
      "images/xit-cay-110ml-nato-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/oHg5SJYRHA0" ],
    description: "Bình xịt hỗ trợ tự vệ 110ml (Nato). Sử dụng khẩn cấp, tuân thủ pháp luật.",
    info: "Dung tích ~110ml • Khoá an toàn • Tia xịt cone/stream",
    zalo: "https://zalo.me/0393414926"
  },
  { // 9) Xịt cay 110ml (Police)
    id: "xit-cay-110ml-police",
    name: "Xịt cay 110ml (Police)",
    price: null, currency: "VND",
    images: [
      "images/xit-cay-110ml-police-1.jpg",
      "images/xit-cay-110ml-police-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ],
    description: "Bình xịt hỗ trợ tự vệ 110ml (Police). Tham khảo quy định địa phương trước khi dùng.",
    info: "Dung tích ~110ml • Khoá an toàn • Tia xịt ổn định",
    zalo: "https://zalo.me/0393414926"
  },
  { // 10) Xịt cay to Takedow
    id: "xit-cay-to-takedow",
    name: "Xịt cay to Takedow",
    price: null, currency: "VND",
    images: [
      "images/xit-cay-to-takedow-1.jpg",
      "images/xit-cay-to-takedow-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/oHg5SJYRHA0" ],
    description: "Bình xịt cay dung tích lớn Takedow, chỉ dùng khi cần thiết; không lạm dụng.",
    info: "Bình lớn • Khoá an toàn • Tầm xịt xa • Lưu ý an toàn khi sử dụng",
    zalo: "https://zalo.me/0393414926"
  }
];
