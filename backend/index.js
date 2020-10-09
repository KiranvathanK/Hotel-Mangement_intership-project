const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://madhushetty:madhushetty777@ds263571.mlab.com:63571/advaitam");


let app=express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let feedbackSchema=new mongoose.Schema({
	review:String,
	comments:String,
	name:String,
  email:String,

  });
	let contactSchema=new mongoose.Schema({
		name:String,
	  email:String,

		country:String,

	  mobile:Number,
		requirement:String
	  });

    let starroomSchema=new mongoose.Schema({
  		firstname:String,
  	  mailid:String,
      checkin:String,
      checkout:String,
      rooms:Number,
      phoneno:Number,
      address:String,
  		country:String,



  	  });

      let superiorstarroomSchema=new mongoose.Schema({
    		firstname:String,
    	  mailid:String,
        checkin:String,
        checkout:String,
        rooms:Number,
        phoneno:Number,
        address:String,
    		country:String,



    	  });

        let s3Schema=new mongoose.Schema({
      		firstname:String,
      	  mailid:String,
          checkin:String,
          checkout:String,
          rooms:Number,
          phoneno:Number,
          address:String,
      		country:String,



      	  });

          let s4Schema=new mongoose.Schema({
        		firstname:String,
        	  mailid:String,
            checkin:String,
            checkout:String,
            rooms:Number,
            phoneno:Number,
            address:String,
        		country:String,



        	  });
let feedbackModel=mongoose.model("feedback",feedbackSchema);


let contactModel=mongoose.model("contact",contactSchema);

let starroomModel=mongoose.model("starroom",starroomSchema);
let superiorstarroomModel=mongoose.model("superiorstarroom",superiorstarroomSchema);
let s3Model=mongoose.model("s3",s3Schema);
let s4Model=mongoose.model("s4",s4Schema);
app.use(bodyParser.json());







	app.post("/feedback",function(req,res){
  console.log(req.body);
feedbackModel(req.body).save(function(err,data){
   if(err) throw err;
  res.json({"message":"Thank you for feedback"});
});

});
app.post("/contact",function(req,res){
console.log(req.body);
contactModel(req.body).save(function(err,data){
if(err) throw err;
res.json({"message":"Thank you for contacting us"});
});

});

app.post("/starroom",function(req,res){
console.log(req.body);
starroomModel(req.body).save(function(err,data){
if(err) throw err;
res.json({"message":"Congrats,your room has reserved as per your choice.you can pay at the time of check-in or-else it leads to the cancellation of room.Thank you. "});
});

});

app.post("/superiorstarroom",function(req,res){
console.log(req.body);
superiorstarroomModel(req.body).save(function(err,data){
if(err) throw err;
res.json({"message":"Congrats,your room has reserved as per your choice.you can pay at the time of check-in or-else it leads to the cancellation of room.Thank you."});
});

});

app.post("/s3",function(req,res){
console.log(req.body);
s3Model(req.body).save(function(err,data){
if(err) throw err;
res.json({"message":"Congrats,your room has reserved as per your choice.you can pay at the time of check-in or-else it leads to the cancellation of room.Thank you."});
});

});
app.get("/feedbacks",function(req,res){
      //res.writeHead(200,{"Content-Type":"application/json"});
      feedbackModel.find({},function(err,data){
        if(err) throw err;
        res.json(data);
      })
    });
app.post("/s4",function(req,res){
console.log(req.body);
s4Model(req.body).save(function(err,data){
if(err) throw err;
res.json({"message":"Congrats,your room has reserved as per your choice.you can pay at the time of check-in or-else it leads to the cancellation of room.Thank you."});
});

});





app.listen(3000);

//const app = require('./app');
//app();
//
// let server=http.createServer(function(req,res){
//
//   fs.createReadStream(__dirname+"/index.html").pipe(res);
//
// });
//
// server.listen(3000);

//var op=fs.createWriteStream("op.txt");


// let data=fs.readFile("data.txt","utf8",function(err,data){
//   console.log(data);
// });
console.log("few lines of code");
console.log("few lines of code");
console.log("few lines of code");
