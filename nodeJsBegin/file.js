const {error}=require('console')
const fs = require('fs')

// **************read file

// const txt = fs.readFile("./text.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// })
// console.log()

// ****************** creating new file

// const txt = fs.writeFile("./text1.txt","hey another dude ",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("created successfully");
//     }
// })

// ****************** append to file

// fs.appendFile("./text1.txt"," adding hey another dude ",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("updated successfully");
//     }
// })

// ****************** delete a file

// fs.unlink("./text3.txt",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("deleted successfully");
//     }
// })

// ****************** rename a file

fs.rename("./text1.txt",'./text2.txt',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("renamed successfully");
    }
})



