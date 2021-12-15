const {connection}=require('../config/dbConnection')
const {userValidation}=require('../services/userValidation');
const Model=require('../model/ecommerceModel');

exports.addProducts=(req,res)=>{
    var productDetails=req.body;
    // var {
    //     prod_id,
    //     prod_name,
    //     qty,
    //     price,
    //     category,
    //     status
    // }=productDetails;
    userValidation(req).then(()=>{
    const table_name = 'product';
    Model.insertData(table_name,productDetails).then(()=>{
        res.status(200).json({status:1,msg:"Product insert into the database Successfully"})
    }).catch((err)=>{
        res.status(400).json({status:0,msg:`Product insertion error ${error}`});
    })
}).catch((err)=>{
    res.status(422).json({status:-1,msg:err})
})

}

