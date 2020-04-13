// import module
const express = require('express');
const router = express.Router();

// import controller

const API = require('../controllers/Api');

// get all 
router.get('/api/loaisanpham', API.getAll);

// edit
router.put('/api/loaisanpham/edit/:id', API.editloaisanpham);

// delete 
router.delete('/api/loaisanpham/delete/:id', API.deleteloaisanpham);



// ====> sanpham
router.get('/api/sanpham/', API.getAllsanpham);
module.exports = router;