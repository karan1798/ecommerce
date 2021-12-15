const express=require('express');

const app=express();
const userRouter=require('./routes/addUserRouter')
const userLogin=require('./routes/userLoginRouter')
const addProduct=require(`./routes/addProductRouter`)
const browseProduct=require('./routes/browseProduct')
const placeOrder=require('./routes/placeOrderRouter')
const orderData=require('./routes/viewOrderRouter')
app.use(express.json())

const PORT=2021;

app.use('/admin',userRouter);
app.use('/admin',userLogin);
app.use('/admin',addProduct);
app.use('/admin',orderData);
app.use('/customer',orderData);
app.use('/customer',browseProduct);
app.use('/customer',placeOrder);
app.use('/customer',orderData);
app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
})