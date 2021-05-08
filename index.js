// const fetch = require('fetch');
const fetch = require('node-fetch');
const axios= require('axios');

// setInterval(() => {
//     console.log("Hello");
// }, 2000);

async function getData(){
    const api1 = "https://jsonplaceholder.typicode.com/todos/1";
    const api2 = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021";
try{
    fetch(api2)
    .then(response => response.text())
    .then(json => console.log(json))
} catch(error){
console.log(error);

}


}


getData();