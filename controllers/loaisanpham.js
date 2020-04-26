const Loaisanpham = require('../models/loaisanpham');


// đỗ dữ liệu
exports.getAll = function(req, res) {
    Loaisanpham.find({})
        .lean()
        .exec(function(err, data) {
            res.render('QuanLyLoaiSanPham', { Loasanphamlist: data.reverse() });
            console.log(data);
            if (err) {
                log(err);
            }
        });

};

// lấy giữ liệu
exports.getloaisanpham = function(request, response) {
    Loaisanpham.findById(request.params.id)
        .lean()
        .exec((err, doc) => {
            if (!err) {
                response.render('editloaisanpham', { loaisanpham: doc });
            }
        });
};

// chỉnh sửa 
exports.edit = function(req, res) {
    Loaisanpham.updateOne({ _id: req.body._id }, { $set: { TenLoaiSP: req.body.TenLoaiSP, image: req.body.image } },
        (err, doc) => {
            if (!err) {
                res.redirect('/quanlyloaisanpham');
            } else {
                console.log('Edit Failed');
            }
        }
    );
};

//xóa sản phẩm
exports.delete = function(request, response) {
    Loaisanpham.deleteOne({ _id: request.params.id }, (err, doc) => {
        if (!err) {
            response.redirect('/quanlyloaisanpham');
        } else {
            console.log(err);
        }
    });
};