const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
// khai báo Api
const api = require('./routes/API');
// khai báo từ admin
const adminRoute = require('./routes/admin');
// khai báo từ routes/loaisanpham
const loaisanpham = require('./routes/loaisanpham');
// khai báo từ routes/sanpham
const sanpham = require('./routes/sanpham');
// khai báo user 
const user = require('./routes/user');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/editsanpham', function(req, res) {
    res.render('editsanpham');
});
//lấy các tài nguyên từ public
app.use("/public", express.static("public"));
app.use(express.static('uploads'));
app.use(adminRoute);
app.use(loaisanpham);
app.use(sanpham);
app.use(api);
app.use(user);

// kết nối với MongoDB
const connectDB = require("./config/database");
connectDB();


// cấu hình express-handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// màn hình quản lý người dùng
app.get('/quanlynguoidung', function(req, res) {
    res.render('QuanLyNguoiDung');
});


// localhost 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));