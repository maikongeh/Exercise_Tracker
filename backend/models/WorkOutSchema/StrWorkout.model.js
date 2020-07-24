const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StrengthSchema = new Schema({
    email: {type:String, required: true},

    description: {type: String,required: true},
    weight: {type: Number, required: true, min: 1},
    sets: {type: Number,required: true,min: 1},
    reps: {type: Number,required: true, min: 1}
   
});



const StrWorkoutSchema = new Schema({
    email: {type:String, required: true},

    difficulty: {type: String, required: true},
    exercise1: {type: StrengthSchema, required: true},
    exercise2: {type: StrengthSchema, required: true},
    exercise3: {type: StrengthSchema, required: true},
    exercise4: {type: StrengthSchema, required: true},
    },{
    timestamps: true,
});
    

const StrengthWorkout = mongoose.model('StrengthWorkout', StrWorkoutSchema);

module.exports = StrengthWorkout;