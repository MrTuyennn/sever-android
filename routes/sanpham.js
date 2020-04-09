const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// const multer = require('multer');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const loaisanpham = require('../controllers/loaisanpham');
console.log("đây là : " + loaisanpham.getdata);
console.log("" + loaisanpham);

router.get('/quanlysanpham', function(req, res) {
    loaisanpham.getdata(req, res);
});


module.exports = router;