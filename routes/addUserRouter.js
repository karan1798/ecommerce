const express=require('express');
const addUserDetails=require('../controller/addUserController')
const {body}=require('express-validator')
const router=express.Router();

router.post('/addUser',[body('username').notEmpty().withMessage("Username is Mandatory").isLength({max:30,min:2}),
body('email').notEmpty().withMessage("email is mandatory").isEmail(),
body('contact').notEmpty().withMessage("phone is mandatory").isNumeric(),
body('user_type').notEmpty().withMessage("User Type is mandatory"),
body("password").notEmpty().withMessage("Password must be given")

],addUserDetails.addUserDetails)

module.exports=router;