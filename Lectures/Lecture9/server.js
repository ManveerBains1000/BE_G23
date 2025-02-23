const express = require('express');
const { type } = require('os');
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Home route</h1>");
    res.end();
})
app.get('/search',(req,res)=>{
    console.log(req.query);
    let age = parseInt(req.query.age);
    console.log(typeof(age));
    res.send("<h1>Looking are something</h1>");
    res.end()
})
app.listen(3000,(req,res)=>{
    console.log("Server running at port 3000");
})


