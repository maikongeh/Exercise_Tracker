const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StrengthSchema = new Schema({
    email: {type: String, required: true},

    description: {
        type: String,       
        required: true
    },
    weight: {
        type: Number,
        required: true,
        min: 1,
        max: 10
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

const StrengthExercise = mongoose.model('StrengthExercise', StrengthSchema);

module.exports = StrengthExercise;