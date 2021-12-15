const connection = require('../config/dbConnection');
const Model = require('../model/ecommerceModel');
const { userValidation } = require('../services/userValidation')


exports.addUserDetails = (req, res) => {
    userValidation(req).then(() => {
        var userDetails = req.body;
        console.log(userDetails);
        var userData = {
            username,
            email,
            contact,
            address,
            user_type,
            user_status,
            password
        } = userDetails;

        const table_name = 'user';
        Model.selectData(table_name, userData).then(() => {
            res.status(422).json({ status: -1, msg: "User already exist in the database" });
        }).catch(() => {
            Model.insertData(table_name, userData).then(() => {
                res.status(200).json({ status: 1, msg: "User inserted into database Successfully" });
            }).catch((err) => {
                res.status(400).json({ status: 0, msg_desc: "error in inserting user into database", err: err });
            })
        })
    }).catch((err) => {
        console.log(`validation controller Error==>${err}`);
        res.status(422).json({ status: -1, msg: err });
    })

}