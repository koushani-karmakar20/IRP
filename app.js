const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const internal = require("stream");
const { Int32 } = require("bson");
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/Assignment2DB",{useNewUrlParser:true});
const userSchema={
uid:Number,
name:String,
gender:String,
email:String

};
const eventSchema={
    id:Number,
    uid:Number,
    eventname:String,
    occurence:String,
    startDate:Date,
    endDate:Date
};

const User=mongoose.model("User",userSchema);
const Event=mongoose.model("Event",eventSchema);
app.post("/users",function(req,res){
    const newUser=new User({
        uid:req.body.uid,
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email

    });
    newUser.save(function(err){
        if(!err)
        res.send("Successfully added a new user!!");
        else
        res.send(err);
    });
});
app.post("/events",function(req,res){
    /*console.log(req.body.id);
    console.log(req.body.uid);
    console.log(req.body.eventname);
    console.log(req.body.occurence);
    console.log(req.body.startDate);
    console.log(req.body.endDate);*/
    

    const newEvent=new Event({
        id:req.body.id,
        uid:req.body.uid,
        eventname:req.body.eventname,
        occurence:req.body.occurence,
        startDate:req.body.startDate,
        endDate:req.body.endDate

    });
    newEvent.save(function(err){
        if(!err)
        res.send("Successfully added a new event!!");
        else
        res.send(err);
    });
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});