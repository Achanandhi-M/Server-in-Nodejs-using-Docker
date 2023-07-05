const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/process',(req,res)=>{
    const name=req.body.name;
    const mail=req.body.email;
    const message=`welcome ${name}!  You are loged in as ${mail}`;
    res.send(message);
    res.send(`You are loged in as ${mail}`);
});

app.listen(8080,()=>{
    console.log('Server is running');
})