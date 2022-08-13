const mongoose = require("mongoose")

const User = new mongoose.Schema({
    id: {type: Number, required: true, unique:true},
    title: {type: String, required: true},
    body: {type:String, required: true},
   
},
{collection: "notes"}

)

const model = mongoose.model("notes", User)

module.exports = model