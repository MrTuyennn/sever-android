const Loaisanpham = require('../models/loaisanpham');

// get all
exports.getAll = async(req, res) => {
    try {
        let loaisanpham = await Loaisanpham.find({});
        res.send(loaisanpham);
    } catch (error) {
        console.log(error);
    }
};

exports.getLoaisanpham = async(req, res) => {
    try {
        let loaisanpham = await Loaisanpham.findById(req.params.id);
        res.send(loaisanpham);
    } catch (error) {
        console.log(error);
    }
}

// edit 
exports.editloaisanpham = async(req, res) => {
    try {
        let loaisanpham = await Loaisanpham.findById(req.params.id);
        loaisanpham.set(req.body);
        let result = await loaisanpham.save();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

// xóa sản phẩm
exports.deleteloaisanpham = async(req, res) => {
    try {
        let result = await Loaisanpham.deleteOne({ _id: req.body.id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}