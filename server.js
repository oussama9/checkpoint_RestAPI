
const express = require('express')
const app=express()
const connectDB = require('./config/conncetDataBase')
require("dotenv").config({path:"./config/.env"});

app.use(express.json())

connectDB(); //connection to database

app.use('/',require("./routes/userRoutes"))
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`runing on port`, port)
})
