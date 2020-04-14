// import module
const express = require('express');
const router = express.Router();

// import controller

const API = require('../controllers/Api');

// get all 
router.get('/api/sanpham', API.getAll);

// edit
router.put('/api/sanpham/edit/:id', API.editsanpham);

// delete 
router.delete('/api/sanpham/delete/:id', API.deletesanpham);



// ====> sanpham
// router.get('/api/sanpham', API.getAllsanpham);
module.exports = router;