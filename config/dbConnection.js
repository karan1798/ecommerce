const data_store= require('mysql');
const connection=data_store.createConnection({
    host:'localhost',
    user:'root',
    database:'ecommerce',
    password:'',
    port:3307
});


connection.connect((error)=>{
    if(!error){
        console.log("database conncted");
    }

    else{
        console.log(`not connected because of ${error}`);
    }
});
module.exports={connection};