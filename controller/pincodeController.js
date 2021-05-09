const { modelName } = require('../models/pinModel');
const TelegramCode= require('../models/pinModel');


const addPincode=async(req,res)=>{
try{
const newPincode= req.body.pincode;
const chatId=req.body.chatId;

 const chataar= [chatId];
//  const getPincode= await  TelegramCode.exists({pincode:newPincode},{__v:0}); 

//  getPincode.chatId
//  console.log(getPincode.chatId);


var data={
    pincode:newPincode,
    chatId:chataar
}

const savePincode= TelegramCode(data);
const result= await savePincode.save();
console.log(result);
 res.send(result);
}catch( error){
console.log(error);
}


}


module.exports.addPincode= addPincode;