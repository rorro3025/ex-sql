const express = require('express');

let customersRoute = express.Router();
const {connection} = require('../utils/database');

customersRoute.get('/customers', async (req, res) => {
    let response = await connection.getAllCustomers();
    res.json(response);
})

