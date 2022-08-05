const mysql = require('mysql2/promise');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'music'
})

const getAllCustomers = async () => {
    let response = await conn.execute('SELECT * FROM customers')
    return response[0] 
}

const getAllOutlets = async () => {
    const [rows] = await conn.execute('SELECT * FROM outlets')
    return rows
}

const getOneCustomer = async (id) => {
    const [rows] = await conn.execute('SELECT * FROM customers WHERE customer_id = ?', [id])
    return rows[0]
}

const getAllEmployeesByOutlet = async (id) => {
    const [rows] = await conn.execute('SELECT * FROM employees WHERE outlet_number = ?', [id])
    return rows 
}

module.exports = {
    connection : {
        getAllCustomers,
        getAllOutlets,
        getOneCustomer,
        getAllEmployeesByOutlet
    }}