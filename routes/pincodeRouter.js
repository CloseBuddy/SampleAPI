const express = require('express');
const controller = require('../controller/pincodeController');
const router= express.Router();


// router.get('/',function(req,res){
// res.send("hello");

// })

router.post('/addpincode',controller.addPincode);

module.exports= router;