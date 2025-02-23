const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/',(req,res)=>{
    res.render("index.ejs");
});

app.get("/g23",(req,res)=>{
    console.log("get request on /g23 route");
    console.log(req.query);
    res.send("Hello G23 Get methods handled");
})
app.post("/g23",(req,res)=>{
    console.log("post request on /g23 route");
    console.log(req.body);
    res.send("Hello G23 Post methods handled");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})







