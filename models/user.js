const mongoose = require('mongoose')
mongoose.connect("url")


const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String,

})

module.exports = mongoose.model('user',userSchema)