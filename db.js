const mongoose= require('mongoose');

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true , useUnifiedTopology: true,useFindAndModify:false  })
.then(()=>{console.log("DB connected")});
mongoose.connection.on("error",err=>{
    console.log(`DB connection error: ${err.message}`);
});


