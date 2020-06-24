const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AgTypeSchema = new Schema({
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

const AgType = mongoose.model('AgType', AgTypeSchema);

module.exports = AgType;