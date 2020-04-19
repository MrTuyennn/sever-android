/// san phẩm
const Sanpham = require('../models/sanpham');
const Loaisanpham = require('../models/loaisanpham');

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
exports.getLoaisanpham = async(req, res) => {
        try {
            let loaisanpham = await Loaisanpham.find({});
            // res.send(loaisanpham);
            res.status(200).json({ status: true, data: loaisanpham });
        } catch (error) {
            console.log(error);
        }
    }
    // get theo id 
exports.getSanpham = async(req, res) => {
    console.log(req.params.id);
    try {
        let sanpham = await Sanpham.find({ TenLoaiSP: req.params.id }).populate({
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

// xóa sản p
exports.deletesanpham = async(req, res) => {
    try {
        let result = await Sanpham.deleteOne({ _id: req.body.id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};