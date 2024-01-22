const mongoose = require("moongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    repeatMode: {
        type:String,
        enum:["daily","weekly"],
        default:"daily"
    },
    reminder:{
        type:Boolean,
        default:false
    },
    completed:{
        type:Object,
        default:{}
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Todo = mongoose.model("Todo".todoSchema);

module.exports = Todo