const Model=require(`../model/ecommerceModel`);
const {userValidation}=require('../services/userValidation')
exports.getProductDetails=(req,res)=>{
    var productdata=req.body;
    userValidation(req).then(()=>{
        var table_name="product"
        // console.log(productdata.category);
        Model.selectData(table_name,productdata.category,'category').then((resp)=>{
            res.status(200).json({status:1,data:resp.data})
        }).catch((err)=>{
            res.status(400).json({status:0,err:err})
        })
    }).catch((err)=>{
        res.status(422).json({status:-1,msg:err});
    })
}