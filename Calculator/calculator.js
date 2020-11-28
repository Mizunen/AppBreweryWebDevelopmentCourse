const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){
var num1 =Number(req.body.n1);
var num2 =Number(req.body.n2);
var result = num1 + num2;
res.send("The result of the calculation is "+ result);
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var height = Number(req.body.ht);
  var heightsq = height * height;
  var weight = Number(req.body.wt);
  var result = weight / heightsq;
  res.send("Your BMI is "+ result);
});
app.listen(3000);
