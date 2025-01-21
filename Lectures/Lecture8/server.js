const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log(`${req.method} request for ${req.url}`);
    console.log(req.ip);
    console.log(new Date());
    next();
})

app.get('/',(req,res) =>{
    res.send("home");
})
app.get('/about',(req,res)=>{
    res.send('About us');
})
app.get('/reddit/:data',(req,res)=>{
    console.log(req.params);
    res.send('reddit page');
})

app.get('/reddit/:profile/:data',(req,res) => {
    console.log(req.params);
    res.send('Reddit page comments');
})
app.listen(3000,(req,res) => {
    console.log("Server running at 3000");
})

