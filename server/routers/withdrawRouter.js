const express = require('express');
const router = express.Router(); //eslint-disable-line
const process = require('./processRouter');
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data.json');

router.post('/',(req,res) =>{
	let input = {
		amount : req.body.amount,
		mosaicName : 'pera'
	}
	var add = 'TCPMBZODECCBZVDHVRWWWYQCOYIP5CN5ZHWXAIOG';
	process.withdraw(input.mosaicName,add,input.amount);
	

});


module.exports = router;