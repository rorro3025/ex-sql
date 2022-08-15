const express = require('express');
const outletRoute = express.Router();
const {connection} = require('../utils/database');

outletRoute.get('/',async (req,res)=>{
    let response = await connection.getAllOutlets();
    console.log('GET ---',req.url)
    res.json(response);
})

module.exports = outletRoute;
