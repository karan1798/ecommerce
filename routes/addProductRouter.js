const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const {addProducts}=require('../controller/addProductController')

router.post('/addProduct',[body('prod_name').notEmpty().withMessage("product name must be given"),
body('qty').notEmpty().withMessage("Quantity must be given"),
body('price').notEmpty().withMessage("price must be given"),
body('category').notEmpty().withMessage("Category must be given"),
body('status').notEmpty().withMessage("status must be given").isBoolean("must be a boolean")
],addProducts);
module.exports=router;