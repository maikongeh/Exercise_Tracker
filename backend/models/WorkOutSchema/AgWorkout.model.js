const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AgilitySchema = new Schema({

    email: {type:String, required: true},
    description: {type: String,required: true},
    sets: {type: Number,required: true,min: 1},
    duration: {type: Number,required: true,min: 1}}
   
);



const AgWorkoutSchema = new Schema({

    email: {type:String,required:true},
    difficulty: {type: String, required: true},

    exercise1: {type: AgilitySchema, required: true},
    exercise2: {type: AgilitySchema, required: true},
    exercise3: {type: AgilitySchema, required: true},
    exercise4: {type: AgilitySchema, required: true},
    },{
    timestamps: true,
});
    

const AgilityWorkout = mongoose.model('AgilityWorkout', AgWorkoutSchema);

module.exports = AgilityWorkout;