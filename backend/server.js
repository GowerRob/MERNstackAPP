require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//this middleware will be run before all other request, remember to run next
app.use(express.json())
app.use((req,res,next)=>{
    console.log("Path: ",req.path,"  Method: ",req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log('listening on port 4000')
    })

})
.catch((error)=>{
    console.log(error)
})


