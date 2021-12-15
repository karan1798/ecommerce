const Model=require('../model/ecommerceModel')
exports.userLogin=(req,res)=>{
    const loginCred=req.body
    const table_name = 'user';
    Model.selectData(table_name,loginCred.email,'email').then((resp)=>{
        // console.log(resp);
        // console.log(resp.data[0].password);
        if(resp.data[0].password==loginCred.password){
            res.status(200).json({status:1,msg:"Loggin successfully"})
        }
    }).catch((err)=>{
        // console.log(err);
        res.status(400).json({status:0,msg:"Invalid Credentials"})
    })
}