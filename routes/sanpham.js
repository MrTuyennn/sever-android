const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const multer = require('multer');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//import model 
const Sanpham = require('../models/sanpham');
// lấy giữ liệu
const loaisanpham = require('../controllers/loaisanpham');
router.get('/quanlysanpham', function(req, res) {
    loaisanpham.getdata(req, res);
});

// cấu hình multer
var storage = multer.diskStorage({
    description: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/uploadsanpham', upload.single('imageSP'), (request, response) => {
    let sanpham = new Sanpham({
        MaSP: request.body.MaSP,
        TenLoaiSP: request.body.TenLoaiSP,
        TenSP: request.body.TenSP,
        GiaSP: request.body.GiaSP,
        MotaSp: request.body.MotaSp,
        imageSP: request.file.originalname,
    });
    sanpham.save(function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            response.redirect('/quanlysanpham');
            console.log(request.file.filename);
        }
    });
});
module.exports = router;