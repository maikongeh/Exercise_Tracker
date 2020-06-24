const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StrTypeSchema = new Schema({
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

const StrType = mongoose.model('StrType', StrTypeSchema);

module.exports = StrType;