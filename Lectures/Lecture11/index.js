const express = require('express');
const app = express();


app.set('view engine' ,'ejs');

app.get('/',(req,res)=>
{
    res.send("Hello G23");
});

app.get('/index',(req,res)=>
{
    res.render("Index");
});

app.listen(3000,()=>
{
    console.log("Server is running on port ");
});