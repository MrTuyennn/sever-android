const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const admin = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    password: { type: String },
});
module.exports = mongoose.model('admin', admin);