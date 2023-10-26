require("dotenv").config();

const  mongoose = require("mongoose");
const express = require("express");

mongoose.connect('mongodb://127.0.0.1:27017/dynamic-chat-app');
const app = express()
const port = process.env.APP_PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})