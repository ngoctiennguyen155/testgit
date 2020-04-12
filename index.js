const express = require('express')
const port = 3000
const app = express()

app.get('',(req,res)=>{
    res.send('helloworld');
})
app.listen(port,()=>
    console.log('exsample  listen port : '+port))