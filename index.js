require("./mediaServer");
const { exec } = require("child_process");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static("./build"));

app.listen(4000, () => {
  console.log("Server running on port 4000");
  exec("start http://localhost:4000");
});
