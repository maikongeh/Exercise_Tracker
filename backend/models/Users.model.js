const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    role : {
        type: String,
        required: true,
    },

    name : {
        type: String,       
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    password : {
        type :String,
        required: true,

    },
    registered_date: {
        type: Date,
        default: Date.now
    }
    },{
    timestamps: true,
    });

const User = mongoose.model('User', UserSchema);

module.exports = User;