const { json } = require("body-parser")
const express = require("express")
const users = require("../node_express/Users")
const app = express()
const port = 3002

app.use(express.json())
app.use(express.urlencoded({extended:false}))

let movies =[
    {
        id:1,
        title:"Inception",
        director:"Christopher Nolan",
        release_date:"2010-07-06"
    },
    {
        id:2,
        title:"The IrishMan",
        director:"martin Scorses",
        release_date:"2012-07-06"
    }
]

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

// get all movies

app.get('/movies',(req,res)=>{
    res.json(movies);
})
//  get movie by id
app.get('/movies/:id',(req,res)=>{
    const found = movies.some((movie )=> movie.id === parseInt(req.params.id)) 

    if(found){
        res.json(movies.filter((movie)=> movie.id === parseInt(req.params.id)))
    }
    else{
        res.sendStatus(400)
    }
})
// add amovie

app.post('/movie',(req,res)=>{
    const newMovie = req.body
    console.log(newMovie)
    if(newMovie){
        movies.push(newMovie)
        res.json({msg:"movie added",movies})
    }
    else{
        res.sendStatus(400)
    }

})

// delete a movie by id

app.delete('/movie/:id',(req,res)=>{
    const id= req.params.id
    const found = movies.some((movie)=> movie.id === parseInt(id))
    if(found){
        movies=movies.filter((movie)=>movie.id !== parseInt(id))
        res.json({msg:"movie deleted successfully",movies})
    }
    else{
        res.status(404).send('movie not found')
    }
})



