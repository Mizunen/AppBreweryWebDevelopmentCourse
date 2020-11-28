const express = require("express");
const app  = express();
app.get("/",function(req, res){
  res.send("Hello");
});
app.get("/contact", function(req, res){
  res.send("Contact me at: kon10419@hotmail.com");
});
app.get("/about", function(req, res){
  res.send("My name is Brandon Rodriguez. I am learning how to program using the appbrewery web development course. My favorite book genre is magical realism and my favorite book series is The Stormlight Archive by Brandon Sanderson.");
});
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
