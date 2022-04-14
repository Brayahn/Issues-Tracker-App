const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


//my routes




//server run 
app.listen(5000, () =>
{
    console.log("Server is up on 5000");
});
