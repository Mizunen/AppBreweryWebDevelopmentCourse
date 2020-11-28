const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  const apiKey = "495e851f027a5058d7dab2443b588787";
  const query = req.body.cityName;
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+units;

    https.get(url,function(response){
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp
      const weatherDesc = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
      res.write("<h1>The weather is currently " + weatherDesc+".</h1>");
      res.write("<img src="+ imageURL +" alt= Weather Icon>");
      res.write("<h1>The temperature in "+ query + " is "+ temp+" degrees Celcius.</h1>");
    });
  });
})

/*const apiKey = "495e851f027a5058d7dab2443b588787";
const query = "London";
const units = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+units;

  https.get(url,function(response){
  response.on("data", function(data){
    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp
    const weatherDesc = weatherData.weather[0].description
    const icon = weatherData.weather[0].icon
    const imageURL = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
    res.write("<h1>The weather is currently " + weatherDesc+".</h1>");
    res.write("<img src="+ imageURL +" alt= Weather Icon>");
    res.write("<h1>The temperature in London is "+ temp+" degrees Celcius.</h1>");
  });
}); */

















app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
