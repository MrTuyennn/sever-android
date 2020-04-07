const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loaisanpham = new Schema({
    MaLoaiSP: { type: String, },
    TenLoaiSP: { type: String, },
    image: { type: String, },
});
module.exports = mongoose.model('loaisanpham', loaisanpham);