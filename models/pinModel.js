const mongoose= require('mongoose');

const pinData= mongoose.Schema({
    pincode:{type:Number},
    chatId:[Number],
});

module.exports=mongoose.model("PinData",pinData);