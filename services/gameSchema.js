const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const gameSchema = new mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    detailSrc: {
        type: Array,
    },
    price:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    genre:{
        type:Array,
        required: true
    },
    platform:{
        type:Array,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    keySearch:{
        type:Array,
        required: true
    },
    Company: {
        type: Array,
        required: true
    }
})

const Games = mongoose.model('game', gameSchema)
module.exports= Games