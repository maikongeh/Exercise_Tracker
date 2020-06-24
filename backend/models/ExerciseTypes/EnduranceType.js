const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EnTypeSchema = new Schema({
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

const EnType = mongoose.model('EnType', EnTypeSchema);

module.exports = EnType;