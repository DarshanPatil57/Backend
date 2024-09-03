// install express,jwt,bcrypt packege

const express = require("express")
const app = express()
// const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt') //does encryption and description
const jwt = require('jwt')


// app.use(cookieParser())

// set cookie
app.get("/",function(req,res){
    res.cookie("name","harsh")
    res.send("done")
    //bcrypt code goes here
})

//read cookie
app.get("/read",function(req,res){
    console.log(req.cookies);
    
    res.send("read page")
})

app.listen(3000)


//check if salt gets keep chaging or not 