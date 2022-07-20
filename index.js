const e = require('express');
const express = require('express')
const port = 8000;
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>The App is running smoothly</h1>")
})

app.listen(port,(err,success)=>{
    if(err)console.log('error in starting app');
    else
    console.log("App started successfully on the Port : ",port);
})