const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Loaisanpham = new Schema({
    MaLoaiSP: { type: String, },
    TenLoaiSP: { type: String, },
    image: { type: String, },
});
module.exports = mongoose.model('loaisanpham', Loaisanpham);