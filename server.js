const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set('strictQuery', true)
const app = express();
app.use(cors());
app.use(express.json()); // parse data
app.use(express.static('public'))//?

const route =require("./route/auth")
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI,()=>{
    console.log("connected with mongodb")
})

app.use(route)

app.listen(PORT,()=>{
    console.log(`app is listening to port ${PORT}`)
})
