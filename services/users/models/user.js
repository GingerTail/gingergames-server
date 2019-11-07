const mongoose= require("mongoose")
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")

var User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    role: {
        type:String,
        default:"user"
    },
    cart: {
        type:Array
    }
})
User.plugin(passportLocalMongoose)
module.exports=mongoose.model("user", User)