
const express = require("express");
const mongoose = require("mongoose");
const projectRoute=require("./controller/projectRoute")
const bodyParser = require("body-parser");
const cors = require("cors")
const userRoute = require("./controller/userRoute");


const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://cssb:2004@cluster0.5akujnm.mongodb.net/projectdb");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))


app.use("/projectRoute",projectRoute);
app.use("/userRoute",userRoute);


app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})
