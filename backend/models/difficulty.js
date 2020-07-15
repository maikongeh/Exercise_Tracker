const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DifficultySchema= new Schema({

    difficulty: {type: String, required: true},
    },{
        timestamps: true,
    }

);

const Difficulty = mongoose.model('Difficulty', DifficultySchema);

module.exports = Difficulty;