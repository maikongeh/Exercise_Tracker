const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EnduranceSchema = new Schema({
    email: {type:String, required: true},

    description: {type: String,required: true},
    duration: {type: Number,required: true,min: 1}}
   
);



const EnWorkoutSchema = new Schema({

    description: {type: String, requierd: true},
    email: {type:String, required: true},
    difficulty: {type: String, required: true},
    exercise1: {type: EnduranceSchema, required: true},
    exercise2: {type: EnduranceSchema, required: true},
    exercise3: {type: EnduranceSchema, required: true},
    exercise4: {type: EnduranceSchema, required: true},
    },{
    timestamps: true,
});
    

const EnduranceWorkout = mongoose.model('EnduranceWorkout', EnWorkoutSchema);

module.exports = EnduranceWorkout;