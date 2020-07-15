const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AgilitySchema = new Schema({

    description: {
        type: String,       
        required: true
    },
    sets: {
        type: Number,
        required: true,
        min: 1
    },
    duration: {
        type: Number,
        required: true,
        min: 1
    },
    },{
    timestamps: true,
    });

const AgilityExercise = mongoose.model('AgilityExercise', AgilitySchema);

module.exports = AgilityExercise;