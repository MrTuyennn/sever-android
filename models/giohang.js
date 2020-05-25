const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gioHang = new Schema({
    Image: { type: String, },
    Tensanpham: { type: String },
    Giasanpham: { type: Number },
    SoLuong: { type: Number },
    NgayMua: { type: Date },
    Trangthai: { type: Boolean },
});
module.exports = mongoose.model('gioHang', gioHang);