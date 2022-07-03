require('dotenv').config()
const mongoose = require("mongoose");

const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,(err)=>{
        if(err) throw err
        else console.log("database is connected")
    })
}

module.exports=connectDB