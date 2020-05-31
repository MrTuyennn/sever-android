const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user = new Schema({
    _id : Schema.Types.ObjectId,
    username: String, 
    email: String,
    phone: Number,
    password: String ,
})

const User = mongoose.model('user', user);
module.exports = User;