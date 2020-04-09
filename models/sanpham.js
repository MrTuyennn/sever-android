const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sanpham = new Schema({
    MaSP: { type: String, },
    TenLoaiSP: { type: String, },
    TenSP: { type: String, },
    GiaSP: { type: Number },
    MotaSP: { type: String, },
    imageSP: { type: String, },
});
module.exports = mongoose.model('sanpham', sanpham);