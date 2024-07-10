const express = require("express");
const userRoute = express.Router();
const userSchema = require("../model/userSchema")
const mongoose = require("mongoose");


userRoute.post("/signup",(req,res)=>{
    userSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else    
            res.json(data);
    })
})
userRoute.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    
    userSchema.findOne({ email }, (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if passwords match
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Authentication successful
      res.status(200).json({ message: "Login successful", user });
    });
  });
  
   
  
    









userRoute.route("/login/:email")
.put((req,res)=>{
    projectSchema.findOne(req.params.email),
    (err,data)=>{
        if(err)
            return err;
        else 
            res.json(data);
    }
});

userRoute.get("/",(req,res)=>{
    userSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})






module.exports = userRoute;