const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Messages = require('../Messages')
require('dotenv').config();

mongoose.connect(process.env.SECRET_KEY)
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];

let messages



const addMessages = async (user, text) =>{
  const message = new Messages({ text, user})
  await message.save()
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await Messages.find()
  messages = result

  res.render('index', { title: 'Mini Messageboard', messages });
});

router.post("/new", (req, res)=>{
  const username = req.body.username
  const messageText = req.body.messageText
  // messages.push({text: messageText, user: username, added: new Date()})
  addMessages(username, messageText)
  
  res.redirect('/')
})

router.get("/api/messages", async (req, res) => {
  const result = await Messages.find()
  res.json({"messages": result})
})

module.exports = router;
