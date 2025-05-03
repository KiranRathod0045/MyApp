const express = require('express')
const app = express();
const PORT = process.env.PORT || 5005
app.listen(PORT,()=>{
    console.log(`running on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('Hello AWS')
})

