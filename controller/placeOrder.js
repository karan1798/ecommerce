const Model=require('../model/ecommerceModel')
const {userValidation}=require('../services/userValidation')
exports.placeOrder=(req,res)=>{
    var orderData=req.body;
    userValidation(req).then(()=>{
        var table_name="order_prod"
        // console.log(productdata.category);
        Model.selectMultiData("user","product",orderData).then((resp)=>{
            console.log(resp.data[0]);
            var data={
                prod_id:orderData.prod_id,
                uid:orderData.uid,
                address:resp.data[0].address,
                qty:orderData.qty,
                price:resp.data[0].price,
                prod_name:resp.data[0].prod_name
            }
        Model.insertData(table_name,data).then((resp)=>{
            res.status(200).json({status:1,msg:"Order placed Successfully"});
        }).catch((err)=>{
            res.status(400).json({status:0,err:err})
        })
    }).catch((err)=>{
        res.status(400).json({status:0,msg:"error in fetching data"})
    })   
    }).catch((err)=>{
        res.status(422).json({status:-1,msg:err});
    })
}
