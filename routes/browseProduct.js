const express=require('express');
const {getProductDetails}=require('../controller/browseProductController')
const {body}=require('express-validator');
const router=express.Router();

router.get('/browseProduct',[body('category').notEmpty().withMessage('Category must be given:(')],getProductDetails)

module.exports=router;