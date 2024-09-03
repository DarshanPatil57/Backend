const express = require('express');
const app = express();
const path = require('path');

const userModel = require('./models/user')

// Setting EJS as the view engine
app.set("view engine", "ejs");

// Parsing incoming JSON requests 
app.use(express.json());

// Parsing URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Serving static files from the 'public' directory 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/read', async function(req,res){
    let users = await userModel.find()
    res.render('read',{users:users})
})

app.get('/delete/:id' ,async function(req,res){
    let users = await userModel.findByIdAndDelete({_id: req.params.id})
    res.redirect("/read")
})

app.get('/edit/:userid' ,async function(req,res){
    let user = await userModel.findOne({_id: req.params.userid})
    res.render("/edit",{user})
})

app.post('/update/:userid' ,async function(req,res){
    let {name,email,image} = req.body;

    let user = await userModel.findByIdAndUpdate({_id: req.params.userid},{name,email,image},{new:true})
    res.redirect("/read")
})


app.post('/create', async function(req,res){
    let {name,email,image} = req.body
   let user = await userModel.create({
        name,
        email,
        image
    })
    res.redirect("/read")
})


app.listen(3000, () => console.log('listening on port 3000'));
