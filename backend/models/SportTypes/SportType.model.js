const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SportTypeSchema = new Schema({
    description: {
        type: String,
        required:true,
        unique: true,
        trim: true,
         minlength: 2
    },
},{
    timestamps: true,

});

const SportType = mongoose.model('SportType', SportTypeSchema);

module.exports = SportType;