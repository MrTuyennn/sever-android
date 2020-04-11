const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const multer = require('multer');

const sanphamcontroller = require('../controllers/sanpham');
//import model 
const sanpham = require('../models/sanpham');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// lấy giữ liệu



router.get('/quanlysanpham', function(req, res) {
    sanphamcontroller.getAll(req, res);
});

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

router.post('/uploadsanpham', upload.single('imageSP'), (request, response) => {
    let newsanpham = new sanpham({
        MaSP: request.body.MaSP,
        TenLoaiSP: request.body.TenLoaiSP,
        TenSP: request.body.TenSP,
        GiaSP: request.body.GiaSP,
        MotaSP: request.body.MotaSP,
        imageSP: request.file.originalname,
    });
    newsanpham.save(function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            response.redirect('/quanlysanpham');
            console.log(newsanpham);
        }
    });
});

module.exports = router;