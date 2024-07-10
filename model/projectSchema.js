const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    name : {type:String},
    due  : {type:Date},
    priority : {type:String},
    desc : {type:String},
    members:{type:String}
},{

    collection: "projects"
})


module.exports = mongoose.model("projectSchema",projectSchema);