const app = require('./app');
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT;

mongoose.connect(
  process.env.MONGO_URI,
  {}).then(result=>{
      console.log("db connected")
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  }
  ).catch(err => console.log(err))
