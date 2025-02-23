const express = require('express');
const app = express();
const path = require('path');
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.send("Hello from root");
});
app.get('/home',(req,res)=>{
    res.render('sample.ejs');
})
app.listen(3000,()=>{
    console.log("Running at server 3000");
})