/// san phẩm
const Sanpham = require('../models/sanpham');
const Loaisanpham = require('../models/loaisanpham');

// Lấy Toàn Bộ Sản Phẩm 
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
// lấy toàn bộ sản phẩm
exports.getLoaisanpham = async(req, res) => {
        try {
            let loaisanpham = await Loaisanpham.find({});
            // res.send(loaisanpham);
            res.status(200).json({ status: true, data: loaisanpham });
        } catch (error) {
            console.log(error);
        }
    }
    // lấy sản phẩm theo Id của loại sản phẩm
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
// lấy sản phẩm theo Id  
exports.getOnesanpham = async(req, res) => {
    try {
        let sanpham = await Sanpham.findById({ _id: req.params.id }).populate({
            path: "TenLoaiSP",
            select: "TenLoaiSP",
        })

        return res.status(200).json({ status: true, data: sanpham });
    } catch (error) {
        console.log(error);
    }
};

// lấy sản phẩm theo Giá <= 5.000.000
exports.getPricelte = async(req, res) => {
    try {
        let sanpham = await Sanpham.find({ GiaSP: { $lte: 5000000 } }).populate({
            path: "TenLoaiSP",
            select: "TenLoaiSP"
        })
        return res.status(200).json({ status: true, data: sanpham });
    } catch (error) {
        console.log(error);
    }
}

// lấy sản phẩm theo giá >= 5.000.000
exports.getPricegte = async(req, res) => {
    try {
        let sanpham = await Sanpham.find({ GiaSP: { $gte: 5000000 } }).populate({
            path: "TenLoaiSP",
            select: "TenLoaiSP"
        })
        return res.status(200).json({ status: true, data: sanpham });
    } catch (error) {
        console.log(error);
    }
}

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


exports.deletesanpham = async(req, res) => {
    try {
        let result = await Sanpham.deleteOne({ _id: req.body.id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};