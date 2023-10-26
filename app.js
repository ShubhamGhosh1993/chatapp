require("dotenv").config();

const  mongoose = require("mongoose");
const express = require("express");

mongoose.connect(`${process.env.MONGO_DB_CONNECTION}`);
const app = express()
const port = process.env.APP_PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})