const express = require('express');
const mongoose = require('mongoose');
const loginRoute = require('./route/login-route.js');
const app = express();

app.use(express.json())
app.use('/user', loginRoute)

app.listen("8000",()=>{
    console.log("Server Started");
})

mongoose.connect('mongodb://localhost:27017/user-login',()=>{
    console.log("DB connected Successfully");
})