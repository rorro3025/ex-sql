const express = require("express");
const productRouter = express.Router();
const { connection } = require("../utils/database");

productRouter.get("/byOutlet/:id", async (req, res) => {
  let { id } = req.params;
  let response = await connection.getProductsByOutlet(id);
  res.json(response);
});

module.exports = productRouter;
