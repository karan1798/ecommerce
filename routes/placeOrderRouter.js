const express=require('express');
const { body } = require('express-validator');
const {placeOrder}=require('../controller/placeOrder')
const router=express.Router();
router.post('/placeOrder',[body('prod_id').notEmpty().withMessage("Product Id is mandetoryvfor Place Order"),
                            body('uid').notEmpty().withMessage("Username must be required "),
                            body('qty').notEmpty().withMessage("qty required!!! ")],placeOrder);


module.exports=router;