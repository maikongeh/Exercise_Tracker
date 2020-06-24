const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExTypeSchema = new Schema({
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

const ExType = mongoose.model('ExType', ExTypeSchema);

module.exports = ExType;