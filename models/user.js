const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: { type: String, },
    email: { type: String, },
    phone: { type: Number, },
    password: { type: String },
})

const User = mongoose.model('user', user);
module.exports = User;