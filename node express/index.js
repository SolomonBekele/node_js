const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello There")
})
app.listen(3001,()=>{
    console.log('server started on port 3000')
})


require("./events")
require("./stream-buffer")