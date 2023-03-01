const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    photo:{
        type:String,
        required:true
    },
    // name:{
    //     type:String,
    //     required:true
    // },
    // city:{
    //     type:String,
    //     required:true
    // },
    // description:{
    //     type:String,
    //     required:true
    // }
},{timestamps:true}) //timestamp?

module.exports = mongoose.model("user",schema);
