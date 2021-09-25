const mongoose = require('mongoose')

const datamedSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    composition: {
        type:String,
        required: true
    },
    usage: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model('DataMed',datamedSchema)