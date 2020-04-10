const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sanphamSchema = new Schema({
    TenLoaiSP: { type: String, },
    TenSP: { type: String, },
    MaSP: { type: String, },
    GiaSP: { type: Number, },
    MotaSp: { type: String, },
    imageSP: { type: String, },
});
const sanpham = mongoose.model('sanpham', sanphamSchema);
module.exports = sanpham;