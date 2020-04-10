const Sanpham = require('../models/sanpham');

// Đỗ dữ liệu
exports.getAll = function(req, res) {
    Sanpham.find({})
        .lean()
        .exec(function(err, data) {
            res.render('QuanLySanPham', { sanphamlist: data });
            console.log(data);
            if (err) {
                log(err);
            }
        });
};



//hàm thêm đâu