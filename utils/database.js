const mysql = require("mysql2/promise");

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "music",
});

const getAllCustomers = async () => {
  let response = await conn.execute(
    "SELECT customer_id as id,customer_name as name, address,city,state,zip,phone FROM customers"
  );
  return response[0];
};

const getAllOutlets = async () => {
  const [rows] = await conn.execute(
    "SELECT  outlet_number as id, address,city,state,zip,phone FROM outlets"
  );
  return rows;
};

const getOneCustomer = async (id) => {
  const [rows] = await conn.execute(
    "SELECT customer_id as id,customer_name as name, address,city,state,zip,phone FROM customers WHERE customer_id = ?",
    [id]
  );
  return rows[0];
};

const getAllEmployeesByOutlet = async (id) => {
  const [rows] = await conn.execute(
    "SELECT  outlet_number as outletNumber,emp_number as id, emp_name as name FROM employees WHERE outlet_number = ?",
    [id]
  );
  return rows;
};

const getOneEmployee = async (id) => {
  const [rows] = await conn.execute(
    "SELECT  outlet_number as outletNumber,emp_number as id, emp_name as name FROM employees WHERE emp_number = ?",
    [id]
  );
  return rows[0];
};

const getProductsByOutlet = async (id) => {
  const [rows] = await conn.execute(
    "select distinct p.product_code as id, artist,title,sale_price as salePrice,i.quantity as inventory from products p join inventory i on p.product_code = i.product_code where outlet_number = ?",
    [id]
  );
  return rows;
};

module.exports = {
  connection: {
    getAllCustomers,
    getAllOutlets,
    getOneCustomer,
    getAllEmployeesByOutlet,
    getOneEmployee,
    getProductsByOutlet,
  },
};
