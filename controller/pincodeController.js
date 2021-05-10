//const { modelName } = require('../models/pinModel');
const TelegramCode= require('../models/pinModel');

const addPincode=async(req,res)=>{
try{
const newPincode= req.body.pincode;
const chatId=req.body.chatId;

 const getPincode= await  TelegramCode.exists({pincode:newPincode},{__v:0}); 
if(getPincode){
    const findchatId= await  TelegramCode.find({pincode:newPincode},{__v:0}); 
  //  console.log(findchatId);
const getChatId= await findchatId[0].chatId.find(c=>c== chatId);
if(!getChatId){
    findchatId[0].chatId.push(chatId);
    const addnewChatId= await  TelegramCode.findOneAndUpdate({pincode:newPincode},{chatId:findchatId[0].chatId},{
        new:true
    });
      res.send(addnewChatId);
}
    res.send(findchatId);
}
else{
    const chataar= [chatId];
    var data={
        pincode:newPincode,
        chatId:chataar
    }
const savePincode= TelegramCode(data);
const result= await savePincode.save();
console.log(result);
 res.send(result);
}

}catch( error){
console.log(error);
}
}





module.exports.addPincode= addPincode;
