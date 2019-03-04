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
	var add = 'TAGQBIABLAT6ZK3PL2OGQI4MAAZCWUQENBL44RK6';
	process.deposit(input.mosaicName,add,input.amount);
	

});


module.exports = router;