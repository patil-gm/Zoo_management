//jshint esversion:6
const express = require('express');
const { connect } = require('./routes/workouts');
require('dotenv').config()
const mongoose = require('mongoose');
const app= express();
 
// connecting routs folder 
const workoutRoutes=require('./routes/workouts')
app.use(express.json())
//middleware
app.use(function(req,res,next){
    console.log(req.path, req.method)
    next()
})



//connect to db
mongoose.connect(process.env.MONG_URI,{useNewUrlParser:true})
 .then((res)=>{
    app.listen(process.env.PORT,()=>{
        console.log('connected to db and listning on port ',process.env.PORT)
    })
 })
 .catch((error)=>{
    console.log('error')
 })

//routes
app.use('/api/workouts',workoutRoutes)

// app.listen(process.env.PORT,function(){
//     console.log("server started on port 3000");
// }); 