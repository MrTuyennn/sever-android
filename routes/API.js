// import module
const express = require('express');
const router = express.Router();

// import controller

const API = require('../controllers/Api');

// get all 
router.get('/api/sanpham', API.getAll);
router.get('/api/loaisanpham', API.getLoaisanpham);
router.get('/api/sanphamnote/:id', API.getSanpham);

// edit
router.put('/api/sanpham/edit/:id', API.editsanpham);
// delete 
router.delete('/api/sanpham/delete/:id', API.deletesanpham);



// ====> sanpham
// router.get('/api/sanpham', API.getAllsanpham);
module.exports = router;