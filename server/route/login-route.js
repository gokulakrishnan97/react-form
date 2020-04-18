const express = require("express");
const user = require('../schema/user-schema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const route = express.Router();

// route.get('/register',(req, res)=>{
//     res.send("Registered Successfully");
// })

// Register the user details
route.post('/register', async(req, res)=> {
    let hashPassword = await bcrypt.hash(req.body.Password, 10);
    let existingEmail = await user.findOne({Email: req.body.Email});
    if(existingEmail){
        return res.status(400).send('Email already    Exists');
    }
    let userData = await new user({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: hashPassword
    });
    let storedUserData = await userData.save();
    res.send(storedUserData);
})

// Login
route.post('/login', async (req, res)=>{
    let userData = await user.findOne({Email: req.body.Email});
    let hashPassword = await bcrypt.compare(req.body.Password, userData.Password)
    let userToken;
    if(!userData){
        res.status(400).send('Email not Exists');
    }
    if(!hashPassword){
        res.status(400).send("Wrong Password")
    }
    userToken = jwt.sign({Email: req.body.Email}, 'secret-login');
    res.header('Authorization', userToken).send(userToken);
})

const tokenHandler = (req, res, next)=>{
    let token = req.header('Authorization');
    req.token = token;
    next();
}

route.get('/', tokenHandler, (req, res)=>{
    jwt.verify(req.token, 'secret-login', async (err, data)=>{
        if(err){
            res.status(400).send('Session Expires');
        }else {
            let userData = await user.find();
            res.status(200).send(userData);
        }
    })
})


module.exports = route