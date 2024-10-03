const express= require('express');
const router= express.Router();

const productController= require('../controllers/productController');


router.get("/productlist", productController.productlist);


module.exports=router;
