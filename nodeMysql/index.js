const express = require("express")
const mysql = require("mysql")
// create connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'NODEMYSQL'
})

// connect to mysql

db.connect(err=>{
    if(err){
        throw err
    }
    console.log("mysql connected")
})

const app = express()

app.listen("3000",()=>{
    console.log("server is running on port 3000")
})

// create bd
app.get("/createdb",(req,res)=>{
    let sql="CREATE DATABASE NODEMYSQL"
    db.query(sql,(err)=>{
        if(err){
            throw err;
        }
        res.send("database created")
    })
})

// create table

app.get("/createemployee",(req,res)=>{
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT,name varchar(255),designation varchar(255),PRIMARY KEY(id))'
    db.query(sql,(err)=>{
        if(err){
            throw err
        }
        res.send('Employee table created')
    })
})
// insert employee 

app.get("/employee1",(req,res)=>{
    let post = {name :"bereket nigussie",designation:'ceo'}
    let sql = "Insert into employee set ?"

    let query =db.query(sql,post,err=>{
        if(err){
            throw err
        }
        res.send('Employee added')
    })
})

// display employee

app.get("/display",(req,res)=>{
    let sql = 'Select * from employee'
    let query = db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send(result)
    })
})  

// updating a value

app.get("/updating/:id",(req,res)=>{
    let newUser ='updated name';
    let sql =`UPDATE employee set name = '${newUser}' where id =${req.params.id}`
    let query = db.query(sql,err =>{
        if(err){
            throw err
        }
        res.send('employee updated')
    })
})

// deleted an employee

app.get("/deleting/:id",(req,res)=>{
    
    let sql =`delete from employee where id =${req.params.id}`
    let query = db.query(sql,(err,result) =>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('employee deleted')
    })
})