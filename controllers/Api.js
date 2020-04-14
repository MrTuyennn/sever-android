/// san phẩm
const Sanpham = require('../models/sanpham');

exports.getAll = async(req, res) => {
    try {
        let sanpham = await Sanpham.find().populate({
            path: "TenLoaiSP",
            select: "TenLoaiSP && image",
        });
        return res.status(200).json({ status: true, data: sanpham });
    } catch (err) {
        console.log(err);
    }

};
// get theo id 
exports.getSanpham = async(req, res) => {
    try {
        let sanpham = await Sanpham.findById({ _id: req.params.id }).populate({
            path: "TenLoaiSP",
            select: "TenLoaiSP",
        });
        return res.status(200).json({ status: true, data: sanpham });
    } catch (err) {
        console.log(err);
    }
};



exports.editsanpham = async(req, res) => {
    try {
        let sanpham = await Sanpham.findById(req.params.id);
        sanpham.set(req.body);
        let result = await sanpham.save();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

// xóa sản phẩm
exports.deletesanpham = async(req, res) => {
    try {
        let result = await Sanpham.deleteOne({ _id: req.body.id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};