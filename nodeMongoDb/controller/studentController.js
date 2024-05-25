const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Student = mongoose.model("Student")

router.get('/',(req,res)=>{
    res.render('student/addOrEdit',{
        viewTitle:"Insert Student"
    })
})