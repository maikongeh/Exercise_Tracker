const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EnduranceSchema = new Schema({
    description: {
        type: String,       
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: 1
    },
    date: {
        type: Date,
        required: true,
        min: 1
    }
    },{
    timestamps: true,
    });

const EnduranceExercise = mongoose.model('EnduranceExercise', EnduranceSchema);

module.exports = EnduranceExercise;