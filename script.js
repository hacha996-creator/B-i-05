// var a = 20;
// var b = a++ - --a+ ++a;
// console.log(b);

// var a = 15;
// var b = a++ + ++a - --a;
// console.log(b);

// var a = 10;
// var b = a;
// console.log(b);

// var a = 10;
// var b = 20;
// var c = a > b;
// console.log(c);

// var a = 10;
// var b = 20;
// console.log(b>a);



// kiểu string
// var msg1 = 'day la string dung dau nhay don';
// var msg2 = "day la string dung dau nhay kep";
// var msg1 = `day la string dung dau backtick`;

// kiểu boolean
// var isDarkMode = true;
// var isDarkMode = false;

// var a = null;
// console.log(a);

// function tinhTong(a,b) {
//     var tong = a + b;
//     return tong;
// }

// var ketQua1 = tinhTong(10, 20);
// console.log(ketQua1);

// var ketQua2 = tinhTong(100, 200);
// console.log(ketQua2);

// function xinChao(ten) {
//     var msg = 'xinchao' + ten;
//     return msg;
//  }

//  var loiChao = xinChao("Hà");
//  console.log(loiChao);


//  function tinhDienTich(chieuDai, chieuRong){
//     var dienTich = chieuDai * chieuRong;
//     return dienTich;
//  }

//  var ketQua1 = tinhDienTich(10, 5);
//  console.log(ketQua1);

// var ketQua2 = tinhDienTich(15, 5);
//  console.log(ketQua2);



// function tinhHieu(a, b, c){
//     return a - b -c;
// }

// var x = tinhHieu(50, 20, 10);
// console.log(x);



// function tinhTongBaSo(a, b, c) {
//     return (a + b + c);
// }

// var ketQua = tinhTongBaSo(10, 20, 30);
// console.log(ketQua);


// function tinhTienHoaQua(tenQua, soKg, giaTien1Kg) {
//     var tongTien = soKg * giaTien1Kg;
//     return `Mua ${soKg} ${tenQua} tổng cộng hết ${tongTien} đồng`;
// }

// var chiTiet = tinhTienHoaQua('quả táo', 3, 20);
// console.log(chiTiet);

// function tinhDiemTrungBinh(toan, van, anh) {
//     var dtb = (toan + van + anh)/3;
//     return `Điểm trung bình của bạn là: ${dtb}`;
// }

// var kq = tinhDiemTrungBinh(8, 7, 9);
// console.log(kq);


function gioiThieu(hoTen, ngheNghiep) {
    return `Xin chào, tôi là ${hoTen}, hiện đang làm ${ngheNghiep}.`;
}

var kq = gioiThieu('hà', 'IT comtor');
console.log(kq);

function gioiThieu(hoTen, ngheNghiep) {
    var msg = `Xin chào, tôi là ${hoTen}, hiện đang làm ${ngheNghiep}.`;
    return msg;
}

var kq = gioiThieu('hà', 'IT comtor');
console.log(kq);










