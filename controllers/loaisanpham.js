const loaisanpham = require('../models/loaisanpham');


exports.getAll = function(req, res) {
    loaisanpham.find({})
        .lean()
        .exec(function(err, data) {
            res.render('QuanLyLoaiSanPham', { loasanphamlist: data.reverse() });
            console.log(data);
            if (err) {
                log(err);
            }
        });
};

exports.getLoaiSanpham = function(req, res) {
    loaisanpham.findById(req.params.id)
        .lean()
        .exec((err, doc) => {
            if (err) {
                response.render('UploadLoaiSP', { loaisanpham: doc });
            }
        });
};

// exports.edit = function(req, res) {
//     loaisanpham.updateOne({ _id: req.body._id },

//     )
// }