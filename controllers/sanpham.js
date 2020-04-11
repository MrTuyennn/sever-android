const Sanpham = require('../models/sanpham');
const Loaisanpham = require('../models/loaisanpham');
// Đỗ dữ liệu

exports.getAll = async(req, res) => {
    let loaisanpham = await Loaisanpham.find().lean();
    let sanpham = await Sanpham.find()
        .populate({ path: "TenLoaiSP", select: "TenLoaiSP" })
        .lean();
    /* let newData = buy.map((item, index) => ({
        ...item,
      }));*/
    res.render("QuanLySanPham", {
        listsanpham: sanpham,
        loaisanpham: loaisanpham,

    });
};