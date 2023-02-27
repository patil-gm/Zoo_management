const express=require('express')
const router= express.Router()
const Workout = require('../models/workoutModel.js')
//get all workoutes
router.get('/',(req,res) => {
    res.json({msg:"get all workouts"});
})

//get single workout
router.get('/:id',(req,res) => {
    res.json({msg:"single id workout"})
})

//post a new workout
router.post('/',async (req,res) =>{
    const {title, reps,load}=req.body;
    console.log(title)
    try {
        const workout= await Workout.create({title ,reps,load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
   
})

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({msg:"delete a workout"})
})

//upadte a workout
router.patch('/:id',(req,res)=>{
    res.json({msg:"upadte a workout"})
})


module.exports = router