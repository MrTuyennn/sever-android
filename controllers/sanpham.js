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
// lấy giử liệu để edit 

exports.getSanpham = function(req, res) {
    Sanpham.findById(req.params.id)
        .lean()
        .exec((err, doc) => {
            if (!err) {
                res.render('editsanpham', { sanpham: doc });
            }
        });
};
// xóa sản phẩm
exports.deletesanpham = function(request, response) {
    Sanpham.deleteOne({ _id: request.params.id }, (err, doc) => {
        if (!err) {
            response.redirect('/quanlysanpham');
        } else {
            console.log(err);
        }
    });
};