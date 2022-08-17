const express = require("express");
const employeeRouter = express.Router();
const { connection } = require("../utils/database");

employeeRouter.get("/byoutlet/:number", async (req, res) => {
  let { number } = req.params;
  let response = await connection.getAllEmployeesByOutlet(number);
  console.log("GET ---", req.url);
  res.json(response);
});

employeeRouter.get("/:id", async (req, res) => {
  let { id } = req.params;
  let response = await connection.getOneEmployee(id);
  console.log("GET ---", req.url);
  res.json(response);
});

module.exports = employeeRouter;
//this is a VSCode theme andromeda theme
