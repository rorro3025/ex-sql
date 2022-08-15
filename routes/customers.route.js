const express = require("express");
const customersRoute = express.Router();
const { connection } = require("../utils/database");

customersRoute.get("/", async (req, res) => {
  let response = await connection.getAllCustomers();
  console.log("GET ---", req.url);
  res.json(response);
});

customersRoute.post("/", (req, res) => {
  res.json("mehod post");
});
customersRoute.get("/:id", async (req, res) => {
  let { id } = req.params;
  let response = await connection.getOneCustomer(id);
  console.log("GET ---", req.url);
  res.json(response);
});

module.exports = customersRoute;
