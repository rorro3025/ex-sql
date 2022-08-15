const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/customers", require("./routes/customers.route"));
app.use("/outlets", require("./routes/outlets.route"));
app.use("/employees", require("./routes/employees.route"));
app.use("/products", require("./routes/products.route"));

app.get("/", (_req, res) => {
  res.send("This is the root of the API");
});

app.listen(PORT, () => console.log("Listening on port " + PORT));
