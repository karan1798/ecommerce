const {validationResult}=require('express-validator');

exports.userValidation=(req,res)=>{
    return new Promise((resolve,reject)=>{
        var error=validationResult(req);
        if(!error.isEmpty()){
            var arr=error.array();
            var err=arr[0].msg;
            reject(err)

        }
        else{
            resolve();
        }
    })
}