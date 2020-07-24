const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExplosiveSchema = new Schema({
    email:{type: String, required: true},

    description: {
        type: String,       
        required: true
    },
    sets: {
        type: Number,
        required: true,
        min: 1
    },
    reps: {
        type: Number,
        required: true,
        min: 1
    }
    },{
    timestamps: true,
    });

const ExplosiveExercise = mongoose.model('ExplosiveExercise', ExplosiveSchema);

module.exports = ExplosiveExercise;