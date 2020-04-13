const Loaisanpham = require('../models/loaisanpham');
const Sanpham = require('../models/sanpham');
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



// ======> api sanpham



exports.getAllsanpham = async(req, res) => {
    try {
        let sanpham = await Sanpham.find({});
        res.render(sanpham);
    } catch (error) {
        console.log(error);
    }
};

// exports.getsanpham = async(req, res) => {
//     try {
//         let sanpham = await Sanpham.findById(req.params.id);
//         res.send(sanpham);
//     } catch (error) {
//         console.log(error);
//     }
// };

// edit 
// exports.editsanpham = async(req, res) => {
//     try {
//         let sanpham = await Sanpham.findById(req.params.id);
//         sanpham.set(req.body);
//         let result = await sanpham.save();
//         res.send(result);
//     } catch (error) {
//         console.log(error);
//     }
// };

// xóa sản phẩm
exports.deletesanpham = async(req, res) => {
    try {
        let result = await Sanpham.deleteOne({ _id: req.body.id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}