const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const {viewOrder,viewAllOrder}=require('../controller/viewOrderController')

router.get('/viewOrder',[body('uid').notEmpty().withMessage('Please Provide your uid to check order details')],viewOrder)

router.get('/viewAllOrder',viewAllOrder)

module.exports=router;