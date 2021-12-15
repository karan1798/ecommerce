const {userValidation}=require('../services/userValidation')
const Model=require('../model/ecommerceModel')


exports.viewOrder=(req,res)=>{
    var viewOrderDetails=req.body;
    userValidation(req).then(()=>{
        var table_name='order_prod';
        Model.selectData(table_name,viewOrderDetails.uid,'uid').then((resp)=>{
            res.status(200).json({status:1,data:resp.data})
        }).catch((err)=>{
            res.status(400).json({status:0,err:err})
        })
    }).catch((err)=>{
        res.status(422).json({status:-1,msg:err});
    })
}

exports.viewAllOrder=(req,res)=>{
    // var viewOrderDetails=req.body;
    
        var table_name='order_prod';
        Model.selectAllData(table_name).then((resp)=>{
            res.status(200).json({status:1,data:resp.data})
        }).catch((err)=>{
            res.status(400).json({status:0,err:err})
        })
}