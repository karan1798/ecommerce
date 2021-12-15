const express=require("express")
const {body}=require('express-validator');

const router=express.Router();
const {userLogin}=require(`../controller/userLogin`);


router.get('/login',[body('email').notEmpty().withMessage("Username must be provided").isEmail().withMessage("Username must be your email id"),
body("password").notEmpty().withMessage("password must be provided")],userLogin);

module.exports=router;