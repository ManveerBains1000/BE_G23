const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send("About us");
})
app.get('/contact',(req,res)=>{
    res.send("Contact us");
})
app.all('*',(req,res)=>{
    res.send("404 not found");
})
app.listen(3000,()=>{
    console.log("Server is running at port http://localhost3000");
})

