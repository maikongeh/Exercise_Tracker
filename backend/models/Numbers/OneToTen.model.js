const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RPESchema = new Schema({

  RPE: {
        type: Number,
        required: true
    }
},{
    timestamps: true,

});
    

const RPE = mongoose.model('RPE', RPESchema);

module.exports = RPE;