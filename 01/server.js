const express = require('express')
const app = express();

app.get('/hello/:username',(req,res)=>{
    const username = req.params.username
    res.send(`hello ${username}`)
})

app.listen(8000,()=>{
    console.log("server running")
})