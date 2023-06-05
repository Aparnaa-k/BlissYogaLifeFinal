const mongoose=require("mongoose");

const dataSchema=mongoose.Schema({
    img:String,
    level:String,
    info:String,
    title:String,
    description:String,
    curriculum:Array
})

const dataModel=mongoose.model("data",dataSchema);

module.exports={dataModel}