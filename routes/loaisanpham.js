const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const multer = require('multer');
const Loaisanpham = require('../models/loaisanpham');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// import model 

const loaisanphamController = require('../controllers/loaisanpham');


// lấy giữ liệu từ form


// cấu hình multer
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), (request, response) => {
    let loaisanpham = new Loaisanpham({
        MaLoaiSP: request.body.MaloaiSP,
        TenLoaiSP: request.body.TenloaiSP,
        image: request.file.originalname,
    });
    loaisanpham.save(function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            response.redirect('/quanlyloaisanpham');
            console.log(request.file.filename);
        }
    });
});

// màn hình quản lý người dùng
router.get('/quanlynguoidung', function(req, res) {
    res.render('QuanLyNguoiDung');
});

// màn hình quản lý sản phẩm
router.get('/quanlysanpham', function(req, res) {
    res.render('QuanLySanPham');
});

// màn hình quản lý Loại Sản Phẩm
router.get('/quanlyloaisanpham', loaisanphamController.getAll);


module.exports = router;