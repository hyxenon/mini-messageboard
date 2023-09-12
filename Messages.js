const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    user: {type: String},
    text: {type: String},
    added: {type: Date, default: ()=> Date.now()}
})


module.exports = mongoose.model("Messages", messageSchema)