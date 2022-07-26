const e = require('express');
const express = require('express')
const port = 8000;
const app = express();
const path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))


app.get('/',(req,res)=>{ 
    res.render('index');
})

app.listen(port,(err,success)=>{
    if(err)console.log('error in starting app');
    else
    console.log("App started successfully on the Port : ",port);
})