const express= require("express");
const router= express.Router();

const userController= require('../controllers/userController');

router.get('/contact', userController.contact);

module.exports=router;