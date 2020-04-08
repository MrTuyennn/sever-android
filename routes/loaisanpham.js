const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const multer = require('multer');
const Loaisanpham = require('../models/loaisanpham');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// import model 

const LoaisanphamController = require('../controllers/loaisanpham');


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


router.get('/quanlyloaisanpham', LoaisanphamController.getAll);
router.get('/editloaisanpham/:id', LoaisanphamController.getloaisanpham);
router.post('/editloaisanpham', LoaisanphamController.edit);
router.get('/delete/:id', LoaisanphamController.delete);

// màn hình quản lý Loại Sản Phẩm
module.exports = router;