// Mỗi sản phẩm đều có images[] (nhiều ảnh) và videos[] (YouTube embed)
// Thay đường dẫn ảnh & video theo thực tế bạn có.
const PRODUCTS = [
  { // 1) Katana rồng thường
    id: "katana-rong-thuong",
    name: "Katana rồng thường",
    price: null, currency: "VND",
    images: [
      "images/katana-rong-thuong-2.jpg",
      "images/katana-rong-thuong-3.jpg",
      "images/katana-rong-thuong-4.jpg",
      "images/katana-rong-thuong-5.jpg",
      "images/katana-rong-thuong-6.jpg",
      "images/katana-rong-thuong-7.jpg",
      "images/katana-rong-thuong-8.jpg",
      "images/katana-rong-thuong-9.jpg",
      "images/katana-rong-thuong-10.jpg",
      "images/katana-rong-thuong-11.jpg",
      "images/katana-rong-thuong-12.jpg",
      
    ],
    videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ],
    description: "Katana bản rồng 103cm",
    info: "Lưỡi dày 5,5 ly, Thép mangan có vân sóng, Vỏ gỗ, Chống han rỉ, Có : 57cm - 80cm - 103cm",
    zalo: "https://zalo.me/0393414926"
  },
  { // 2) Katana lá tre
    id: "katana-la-tre",
    name: "Katana lá tre",
    price: null, currency: "VND",
    images: [
      "images/katana-la-tre-1.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/oHg5SJYRHA0" ],
    description: "Katana lá tre bản dài 57cm -85cm -105cm",
    info: "Lưỡi dày 7ly, Thép cacbon bóng có vân sóng, Vỏ gỗ, Chống han rỉ",
    zalo: "https://zalo.me/0393414926"
  },
  { // 3) Katana lưỡi bóng trơn
    id: "katana-luoi-bong-tron",
    name: "Katana lưỡi bóng trơn",
    price: null, currency: "VND",
    images: [
      "images/katana-luoi-bong-tron-1.jpg",
      "images/katana-luoi-bong-tron-2.jpg",
      "images/katana-luoi-bong-tron-3.jpg",
      "images/katana-luoi-bong-tron-4.jpg",
      "images/katana-luoi-bong-tron-5.jpg",
      "images/katana-luoi-bong-tron-6.jpg",
      "images/katana-luoi-bong-tron-7.jpg",
      "images/katana-luoi-bong-tron-8.jpg",
      "images/katana-luoi-bong-tron-9.jpg",
      "images/katana-luoi-bong-tron-10.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ],
    description: "Katana lưỡi trơn bóng dài 108cm",
    info: "Lưỡi dày 7ly , Thép cacbon bóng trơn , Vỏ gỗ, Chống han rỉ",
    zalo: "https://zalo.me/0393414926"
  },
  { // 3) Kiếm hán lưỡi thẳng
    id: "kiem-han",
    name: "Kiếm hán lưỡi thẳng",
    price: null, currency: "VND",
    images: [
      "images/kiem-han.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/8EQVSSTX-GE" ],
    description: "Kiếm Hán lưỡi thẳng dài : 103cm - 110cm",
    info: "Kiếm Hán lưỡi thẳng dài : 103cm - 110cm",
    zalo: "https://zalo.me/0393414926"
  },
  { // 4) Chích điện 928 cờ mỹ
    id: "chich-dien-928-co-my",
    name: "Chích điện 928 cờ mỹ",
    price: null, currency: "VND",
    images: [
      "images/chich-dien-928-1.jpg"
    ],
    videos: [ "https://youtube.com/embed/k6wKdcDT-QQ?feature=share" ],
    description: "Roi điện 928 , Nhỏ gọn, dễ dùng, sạc nhanh, sát thương cao.",
    info: "Thông số kỹ thuật: Độ dài sản phẩm: 18cm•  Lượng điện áp: 98.000KV•  Cổng sạc: 220v•  Thời gian sạc: từ 1 đến 2 tiếng•  Thời gian dùng sản phẩm: 4 đến 8 ngày•  Xuất xứ: made in USA, hàng chính hãng nhập khẩu từ Hoa Kì•  Thiết kế bao da kèm để gắn vào thắt lưng•  Dí đối phương 2-4s là XỈU",
    zalo: "https://zalo.me/0393414926"
  },
  { // 5) Đèn pin T10
    id: "den-pin-t10",
    name: "Đèn pin T10",
    price: null, currency: "VND",
    images: [
      "images/den-pin-t10-1.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/n9-8Jf4xIZE" ],
    description: "Đèn pin siêu sáng T10, nhỏ gọn, nhiều chế độ chiếu.",
    info: "Công suất cao • Zoom • Nhiều chế độ sáng • Sạc USB",
    zalo: "https://zalo.me/0393414926"
  },
  { // 5) Súng điện tầm xa 5-7 mét
    id: "sung-dien-tam-xa",
    name: "Súng điện tầm xa 5-7 mét",
    price: null, currency: "VND",
    images: [
      "images/sung-dien-tam-xa.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/nLmoNsqmLD8" ],
    description: "Nhỏ gọn , dễ dùng , sạc nhanh , sát thương cao",
    info: "Thông số kỹ thuật   •    Độ dài sản phẩm: 16  •    Lượng điện áp: 98.000KV  •    Cổng sạc: 220v   •    Thời gian sạc: từ 1 đến 2 tiếng  •    Thời gian dùng sản phẩm: 4 đến 8 ngày   •    Xuất xứ: made in USA, hàng chính hãng nhập khẩu từ Hoa Kì   •    Thiết kế bao da kèm để gắn vào thắt lưng.    Dí đối phương 2-4s là XỈU - Lắp đầu đạn bắn 5-7 mét ( hết đạn lại mua )  Có đèn , còi hú , tilare",
    zalo: "https://zalo.me/0393414926"
  },
  { // 6) Dùi Cui X10
    id: "dui-cui-x10",
    name: "Dùi Cui X10",
    price: null, currency: "VND",
    images: [
      "images/dui-cui-x10-1.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/oHg5SJYRHA0" ],
    description: "Vừa đèn vừa gậy vừa chích điện ( Vỏ làm từ hợp kim nhôm )",
    info: "Thông số kỹ thuật   •    Độ dài sản phẩm: thu 50 kéo ra 58cm  •   Lượng điện áp: 110.000KV  •   Cổng sạc: 220v  •   Thời gian sạc: từ 1 đến 2 tiếng   •    Thời gian dùng sản phẩm: 4 đến 8 ngày   •    Xuất xứ: made in USA, hàng chính hãng nhập khẩu từ Hoa Kì   •     Thiết kế chắc chắn uy lực  •   Dí đối phương 2-3s là XỈU",
    zalo: "https://zalo.me/0393414926"
  },
  { // 7) Dùi Cui X8
    id: "dui-cui-x8",
    name: "Dùi Cui X8",
    price: null, currency: "VND",
    images: [
      "images/dui-cui-x8-1.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/dQw4w9WgXcQ" ],
    description: "Vừa đèn vừa gậy vừa chích điện ( Vỏ làm từ hợp kim nhôm )",
    info: "Thông số kỹ thuật  •   Độ dài sản phẩm: 39cm  •   Lượng điện áp: 100.000KV  •   Cổng sạc: 220v  •   Thời gian sạc: từ 1 đến 2 tiếng  •   Thời gian dùng sản phẩm: 4 đến 8 ngày  •   Xuất xứ: made in USA, hàng chính hãng nhập khẩu từ Hoa Kì   •    Thiết kế chắc chắn uy lựcDí đối phương 2-3s là XỈU",
    zalo: "https://zalo.me/0393414926"
  },
  { // 8) Xịt cay 110ml (Nato và police)
    id: "xit-cay-110ml-nato",
    name: "Xịt cay 110ml (Nato và police)",
    price: null, currency: "VND",
    images: [
      "images/xit-cay-110ml-nato-1.jpg",
      "images/xit-cay-110ml-nato-2.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/SGMwXfwJCwg" ],
    description: "Nhỏ gọn , dễ dùng  gây cay choáng khiến đối phương khóc thét khi bị dính chưởng phạm vi 2-3 mét - Hạn sd 5 năm",
    info: "Thông số kỹ thuật   •    Độ dài sản phẩm: 17cm   •    Dung tích 110ml   •    Xịt khoảng : 4-50 lần tuỳ theo mức độ sử dụng   •    Xuất xứ: made in USA, hàng chính hãng nhập khẩu từ Hoa Kì  Lưu ý : Tránh xa tầm tay trẻ em , không xịt trong phòng kín.",
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
    videos: [ "https://www.youtube.com/embed/G3CTJHSf2VQ" ],
    description: "Nhỏ gọn , dễ dùng  gây cay choáng khiến đối phương khóc thét khi bị dính chưởng phạm vi 5-7 mét - Hạn sd 5 năm",
    info: "Thông số kỹ thuật   •    Độ dài sản phẩm: 25cm   •    Dung tích : 470ml   •    Xịt khoảng : 4-50 lần tuỳ theo mức độ sử dụng   • Xuất xứ: made in USA, hàng chính hãng nhập khẩu từ Hoa Kì   Lưu ý : Tránh xa tầm tay trẻ em , không xịt trong phòng kín.",
    zalo: "https://zalo.me/0393414926"
  },
  { // 11) Đèn pin X3
    id: "den-pin-x3",
    name: "Đèn pin x3",
    price: null, currency: "VND",
    images: [
      "images/den-pin-x3.jpg",
      "images/den-pin-x31.jpg",
      "images/den-pin-x32.jpg",
    ],
    videos: [ "https://www.youtube.com/embed/dlBBn1gCxN8" ],
    description: "Nhỏ gọn , dễ dung , sạc nhanh , sát thương cao",
    info: "Thông số kỹ thuật   •    Độ dài sản phẩm: 18cm   •    Lượng điện áp: 55.000KV   •    Cổng sạc: 220v   •    Thời gian sạc: từ 1 đến 2 tiếng   •    Thời gian dùng sản phẩm: 4 đến 8 ngày   •    Xuất xứ: made in USA, hàng chính hãng nhập khẩu từ Hoa Kì   •    Thiết kế bao da kèm để gắn vào thắt lưng. Dí đối phương 3-5s là XỈU",
    zalo: "https://zalo.me/0393414926"
  },
  { // 11) Baton ASP -SHY
    id: "baton-asp-shy",
    name: "Baton ASP -SHY",
    price: null, currency: "VND",
    images: [
      "images/baton-asp-shy.jpg"
    ],
    videos: [ "https://www.youtube.com/embed/xx913RYQ6II" ],
    description: "Baton ASP -SHY.",
    info: "Thông số kỹ thuật   •    Độ dài sản phẩm: thu 25 kéo ra 65cm   •    Chất liệu : Hợp kim thép không rỉ   •    Xuất xứ: made in USA, hàng chính hãng nhập khẩu từ Hoa Kì   •    Thiết kế chắc chắn uy lực - bao test gạch đá cờ lê.",
    zalo: "https://zalo.me/0393414926"
  },
];
