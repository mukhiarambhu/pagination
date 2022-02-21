const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;
app.listen(port, async () => {
  connectDB();
  console.log(`server started on ${port}`);
});
