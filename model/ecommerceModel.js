const {connection}=require('../config/dbConnection');

module.exports=class model{
    static insertData(table_name,data){
        console.log(data);
        return new Promise((resolve,reject)=>{
            const query=this.insertQuery(table_name,data);
            console.log(query);
            connection.query(query,(err,result)=>{
                console.log(result);
                if(!err){
                    
                    // console.log("dghjk");
                    resolve({data:result});
                }
                else{
                    // console.log("hii");
                    reject({error:err})
                }   
            })
        })
    }
    static insertQuery(table_name,data){
        //console.log(data);
        var query=`INSERT INTO `+table_name+"(";
        var column=Object.keys(data).join();
        query+=column+" ) VALUES (";
        var valueArray=[];
        for(var key in data){
            if(typeof data[key]=="string"){ 
                valueArray.push("'" + data[key] + "'");
            }
            else {
                valueArray.push(data[key]);
            }
        }
    
        query += valueArray.join() + " )";
        return query;
    }



    static selectData(table_name,data,condition){
        return new Promise((resolve,reject)=>{
            var query=`select * from ${table_name} where ${condition}='${data}'`
            // console.log(query);

        connection.query(query,(err,result)=>{
            if(!err){
                // console.log("sdfghfgdsmbffff");
                // console.log(result);
                resolve({data:result});
            }
            else{
                // console.log("in elseghjk");
                reject({err:err});
            }
        })
        })
    }
    static selectAllData(table_name){
        return new Promise((resolve,reject)=>{
            var query=`select * from ${table_name}`
            // console.log(query);

        connection.query(query,(err,result)=>{
            if(!err){
                // console.log("sdfghfgdsmbffff");
                // console.log(result);
                resolve({data:result});
            }
            else{
                // console.log("in elseghjk");
                reject({err:err});
            }
        })
        })
    }
    static selectMultiData(table_name1,table_name2,data){
        return new Promise((resolve,reject)=>{
            var query=`select ${table_name1}.address,${table_name2}.qty,${table_name2}.price,${table_name2}.prod_name from ${table_name1},${table_name2} WHERE ${table_name1}.uid=${data.uid} AND ${table_name2}.prod_id=${data.prod_id}`;
            console.log(query);
        connection.query(query,(err,result)=>{
            if(!err){
                resolve({data:result});
            }
            else{
                reject({err:err});
            }
        })
        })
    
    }
}