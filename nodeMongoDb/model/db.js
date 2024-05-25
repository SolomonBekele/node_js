const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:22017/Student',{
    useNewUrlParser:true
},
err =>{
    if(!err){
        console.log("Connection succeeded")
    }
    else{
        console.log("Error in connection "+ err)
    }
})
require("./student.model")