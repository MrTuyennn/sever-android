// import module
const express = require('express');
const router = express.Router();

// import controller

const API = require('../controllers/Api');

// Lấy Toàn Bộ Sản Phẩm
router.get('/api/sanpham', API.getAll);

// lấy toàn bộ loại sản phẩm
router.get('/api/loaisanpham', API.getLoaisanpham);

// lấy sản phẩm theo Id của loại sản phẩm
router.get('/api/sanphamnote/:id', API.getSanpham);

// lấy  sản phẩm qa ID 
router.get('/api/getOnesanpham/:id', API.getOnesanpham);

// lấy sản phẩm theo giá <= 5.000.000
router.get('/api/getpricelte', API.getPricelte);

// lấy sản phẩm theo giá >= 5.000.000
router.get('/api/getpricegte', API.getPricegte);
// edit
router.put('/api/sanpham/edit/:id', API.editsanpham);
// delete 
router.delete('/api/sanpham/delete/:id', API.deletesanpham);




module.exports = router;