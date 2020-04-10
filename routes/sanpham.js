const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const multer = require('multer');
const sanphamcontroller = require('../controllers/sanpham');
//import model 
const sanpham = require('../models/sanpham');
const loaisanpham = require('../controllers/loaisanpham');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// lấy giữ liệu

// router.get('/quanlysanpham', loaisanpham.getdata);

// router.get('/quanlysanpham', function(req, res) {
//     sanphamcontroller.getAll(req, res);
// });
router.get('/quanlysanpham', loaisanpham.getdata);
// lấy giữ liệu controller


// router.get('/quanlysanpham', sanphamcontroller.getAll);
// cấu hình multer
var storage = multer.diskStorage({
    description: function(req, file, cb) {
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
        MotaSp: request.body.MotaSP,
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

//ê sao mà ns dc ta nghe m nghe t ns k nghe