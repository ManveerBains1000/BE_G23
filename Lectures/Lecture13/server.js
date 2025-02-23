const express = require('express');
const app = express();
const port = 3000;
app.use((req,res,next)=>{
    res.send('Time',Date.now());
    next();
});
// app.use('/payment',(req,res,next)=>{
//     console.log('Payment  middleware');
//     next();
// });
app.get('/',(req,res)=>{
    res.send('Hello G23');
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})



