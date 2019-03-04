const express = require('express');
const router = express.Router(); //eslint-disable-line
const process = require('./processRouter');
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./bal.json');

router.get('/',(req,res) =>{
    process.getBalance();
    const users = store.get('bal');
    console.log(users);
    res.json(users);
});


module.exports = router;