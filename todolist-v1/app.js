//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

const items =[];
const workItems=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  //console.log(date());
const day = date.getDate();
  res.render("list",{listTitle:day, newItems:items});
  //res.sendFile(__dirname + "/list.ejs");
});

app.post("/", function(req, res){
  const item = req.body.newItem;

  if(req.body.list ==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list",{listTitle:"Work List", newItems:workItems});
});

app.post("/work", function(req, res){
  const item = req.body.newItem;
  workItems.push(item);
  console.log(req.body);
  res.redirect("/");
});
app.get("/about",function(req, res){
  res.render("about");
});
app.listen(3000,function(){
  console.log("Server started on port 3000");
});
