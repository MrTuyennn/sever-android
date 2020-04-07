const adminCOntroller = require('../controllers/admin');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// lấy giữ liệu từ form
// màn hình login
router.get('/dangnhap', function(req, res) {
    res.render('DangNhap');
});
router.post('/dangnhap', adminCOntroller.login);
// màn hình đăng kí
router.get('/dangki', function(req, res) {
    res.render('DangKi');
});
router.post('/dangki', adminCOntroller.register);
//màn hình hồ sơ Admin
router.get('/hosoadmin', function(req, res) {
    res.render('HoSoAdmin');
});


module.exports = router;