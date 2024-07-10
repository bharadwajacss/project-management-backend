const express = require("express");
const projectRoute = express.Router();
const projectSchema = require("../model/projectSchema")
const mongoose = require("mongoose");


projectRoute.post("/createProject",(req,res)=>{
    projectSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else    
            res.json(data);
    })
})

projectRoute.get("/viewProject/:id", (req, res) => {
    const projectId = req.params.id;
   

    projectSchema.findById(mongoose.Types.ObjectId(projectId), (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!data) {
            res.status(404).json({ error: 'Project not found' });
        } else {
            res.status(200).json(data);
        }
    });
});



projectRoute.get("/",(req,res)=>{
    projectSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
projectRoute.route("/updateProject/:id")
.get((req,res)=>{
projectSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
    if(err)
        return err;
    else
        res.json(data);
})



}).put((req,res)=>{
    projectSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else 
            res.json(data);
    })
})
projectRoute.delete("/deleteProject/:id",(req,res)=>{
    projectSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


module.exports = projectRoute;