
//config
const express = require('express');
const app =express();
require('dotenv').config();
const cors= require('cors');
const connectionToMongo=require('./db');
const userSchema = require('./models/user.js');
const register =require("./routes/register.js");
const login =require("./routes/login.js");

//midleware
app.use(cors());
app.use(express.json());
app.use("/api/register",register);
app.use("/api/login",login);

connectionToMongo();
//init app 
const port = 8080;

app.listen(port,()=>{
    console.log(`server started in ${port}`);
 })
