const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {connection} = require('./utils/database');

const app = express();
const PORT = process.env.PORT || 4000
app.use(cors())
app.use(bodyParser.json());

app.get('/outlets',async (_req,res)=>{
    let response = await connection.getAllOutlets();
    res.json(response);
})

app.get('/customers/:id',async (req,res)=>{
    let {id} = req.params;
    let response = await connection.getOneCustomer(id);
    res.json(response);
})

app.get('/employeeByOutlet/:number',async(req,res)=>{
    let {number} = req.params;
    let response = await connection.getAllEmployeesByOutlet(number);
    res.json(response);
    })

app.listen(PORT,()=>console.log('Listening on port '+PORT))