const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const admin = new Schema({
    username: { type: String, },
    email: { type: String, },
    phone: { type: Number, },
    password: { type: String },
});
module.exports = mongoose.model('admin', admin);