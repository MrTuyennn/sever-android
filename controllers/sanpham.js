const Sanpham = require('../models/sanpham');
const Loaisanpham = require('../models/loaisanpham');
// Đỗ dữ liệu

exports.getAll = async(req, res) => {
    let loaisanpham = await Loaisanpham.find().lean();
    let sanpham = await Sanpham.find()
        .populate({ path: "TenLoaiSP", select: "TenLoaiSP" })
        .lean();
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
                res.render('/editsanpham', { sanpham: doc });
            }
        });
};

// chỉnh sửa 
exports.editSanpham = function(req, res) {
    Sanpham.updateOne({ _id: req.body._id }, {
            $set: {
                TenSP: req.body.TenSP,
                MaSP: req.body.MaSP,
                GiaSP: req.body.GiaSP,
                MotaSP: req.body.MotaSP,
                TenLoaiSP: req.body.TenLoaiSP,
            }
        },
        (err, doc) => {
            if (!err) {
                res.redirect('/quanlysanpham');
            } else {
                console.log('Edit Failed');
            }
        }
    );
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