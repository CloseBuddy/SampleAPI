const TelegramBot = require('node-telegram-bot-api');
const fetch= require('node-fetch');
const dotenv= require('dotenv');
dotenv.config();
console.log(process.env.TOKEN);
const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Welcome ${msg.from.first_name} ${msg.from.last_name} to vax_update, \nplease enter your pincode for getting the vaxine update in your area`);
      
});

bot.onText(/\/location/, (msg) => {
  bot.sendLocation(msg.chat.id,44.97108, -104.27719);
  bot.sendMessage(msg.chat.id, "Here is the point");
});

bot.on('message', (msg) => {
  if(msg.text.toLowerCase() === "hello"){
    bot.sendMessage(msg.chat.id, `hello ${msg.from.first_name} ${msg.from.last_name}`);
  }else if(msg.text.toLowerCase() === "bye"){
    bot.sendMessage(msg.chat.id, "bye have a good day");
  }
  else if(validatePin(msg.text)){
    bot.sendMessage(msg.chat.id, `We got your pincode \nyou will be notified when vaccines are available near you \npincode provided by you : ${msg.text}`);
    postData({"pincode" : msg.text, "chatId" : msg.chat.id});
  }else if(msg.text.charAt(0) != '/'){
    bot.sendMessage(msg.chat.id, `please enter correct pin containing 4 or 6 digits \npincode provided by you : ${msg.text}`);
  }

});

function postData(data){
  fetch('http://localhost:3000/api/addpincode', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


function validatePin(pin){
  return  /^(\d{4}|\d{6})$/.test(pin);
}