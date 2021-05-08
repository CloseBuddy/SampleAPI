const fetch = require('node-fetch');
const axios= require('axios');

setInterval(() => {
 getData()   
},2000);

async function getData(){
    const api2 = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110001&date=31-03-2021";
try{
    fetch(api2,
        {
            headers:{
                'User-Agent':'anand'
            }
        })
        .then(res => res.json())
    .then(json => console.log(json))
} catch(error){
console.log(error);

}
}
