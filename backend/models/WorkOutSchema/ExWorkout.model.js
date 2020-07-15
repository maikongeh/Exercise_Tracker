const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExplosiveSchema = new Schema({

    description: {type: String,required: true},
    sets: {type: Number,required: true,min: 1},
    reps: {type: Number,required: true, min: 1}
   
});



const ExWorkoutSchema = new Schema({

    difficulty: {type: String, required: true},
    exercise1: {type: ExplosiveSchema, required: true},
    exercise2: {type: ExplosiveSchema, required: true},
    exercise3: {type: ExplosiveSchema, required: true},
    exercise4: {type: ExplosiveSchema, required: true},
    },{
    timestamps: true,
});
    

const ExplosiveWorkout = mongoose.model('ExplosiveWorkout', ExWorkoutSchema);

module.exports = ExplosiveWorkout;