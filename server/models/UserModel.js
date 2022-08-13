const mongoose = require("mongoose")

const User = new mongoose.Schema({
    id: {type: Number, required: true, unique:true},
    firstName: {type: String, required: true},
    lastName: {type:String, required: true},
    email:{type:String, required: true, unique:true},
    dob:{type:String, required: true},
    mobile: {type: Number, required:true},
    status: {type: Boolean, required:true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    accType: {type: String, required: true},

},
{collection: "userDetails"}

)

const model = mongoose.model("userDetails", User)

module.exports = model