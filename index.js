const fetch = require('node-fetch');
const axios= require('axios');
const express= require('express');
const createError=require('http-errors');
const pincodeRoute= require('./routes/pincodeRouter');
const dotenv= require('dotenv');
const bodyparser= require('body-parser');
// const db= require('./db');
const mongoose= require('mongoose');

dotenv.config();
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true , useUnifiedTopology: true,useFindAndModify:false  })
.then(()=>{console.log("DB connected")});
mongoose.connection.on("error",err=>{
    console.log(`DB connection error: ${err.message}`);
});


const app= express();
app.use(bodyparser.json());
app.use('/api',pincodeRoute);

app.use((req,res,next)=>{
    next(createError(404, "Page not Found"));
    });
    
    app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    });
    });

    const port= process.env.PORT || 3000;
    app.listen(port ,()=>{console.log(`Server started on port ${port}`)});

// setInterval(() => {
//  getData()   
// },2000);


// async function getData(){
//     const api2 = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110001&date=08-05-2021";
// try{
//     const request= await fetch(api2,
//         {
//             headers:{
//                 'User-Agent':'anand'
//             } });

//      const response= await request.json();       
//     console.log(response);
// } catch(error){
// console.log(error);

// }
// }
