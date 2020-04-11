const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sanphamSchema = new Schema({
    TenLoaiSP: { type: Schema.Types.ObjectId, ref: "loaisanpham" },
    TenSP: { type: String, },
    MaSP: { type: String, },
    GiaSP: { type: Number, },
    MotaSP: { type: String, },
    imageSP: { type: String, },
});
const sanpham = mongoose.model('sanpham', sanphamSchema);
module.exports = sanpham;