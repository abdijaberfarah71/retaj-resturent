// import express from "express";

// const app = express();

// app.listen("server is listen port 3000");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./routers/users");
const productsRoute = require("./routers/products")

dotenv.config()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', false);
mongoose.connect(process.env.connection_uri,
 (err) => {
  if (!err) {
    console.log("Conected DB");
  } else 
    console.log(err);
  
});
app.use(express.json());
app.use("/", users);
app.use("/", productsRoute);
// app.get("/", (req, res) => {
//   res.send({ massege: "heloo wordl" });
// });
app.listen(5000, () => console.log("Example app listening on port 5000!"));
