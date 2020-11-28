var buttonColors = ["red", "blue",  "green", "yellow"];
var gamePattern = [];
var userPattern =[];
var userChosenColor ="";
var start =  0;
var count = 0;
var level = 1;
function nextSequence(){

  let num = Math.random() * 4;
  var randomNumber = Math.floor(num);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  return gamePattern;
}

function check(){
  for(let i = 0; i < gamePattern.length; i++){
    if(userPattern[i] == gamePattern[i]){
        return true;
    }
  }
  if(userChosenColor == gamePattern[0]){//checks if user pattern matches gamePattern
    console.log("UserChosen color " +userChosenColor +" Game Pattern  " +gamePattern);
  }
  else{
    console.log("check fail test");
  }
}

  /* for(let i = 0; i < gamePattern.length; i++){
    if(userPattern[i] != gamePattern[i]){
      i += gamePattern.length;
      //alert("check fail test");
      $('h1').text("Game Over").css("color","red");
    }else{

      console.log('checkPattern test');
    }
  }*/

nextSequence();
  document.addEventListener("keydown",function(event){
    if(event.key == "a" && start == 0){
      start++;
      playSound("#"+gamePattern);
      $("#"+gamePattern).fadeIn().fadeOut().fadeIn();
    //  console.log("test");
    }
  })
  function next(color){
    playSound("#" + color);
    $("#"+color).fadeIn().delay(500).fadeOut().fadeIn();
    console.log("next test");
  }
// Button clicks
  for(let i = 0; i < buttonColors.length; i++){
    $("#"+ buttonColors[i]).click(function(){
        userPattern.push(buttonColors[i]);
        userChosenColor = buttonColors[i];

        nextSequence();
      playSound("#"+buttonColors[i]);
      $("#" + buttonColors[i]).fadeIn().fadeOut().fadeIn().delay(700).css("background-color",buttonColors[i]);
      check(userChosenColor,gamePattern);
      nextSequence();
      //nextPattern();
    //  console.log(userPattern);
    });
  }
/*if(userPattern.length == gamePattern.length){
  nextPattern();
}*/

function playSound(color){
  switch(color){
    case "#red":

    var red = new Audio("sounds/red.mp3");
    red.play();
    break;

    case "#blue":

    var blue = new Audio("sounds/blue.mp3");
    blue.play();
    break;

    case "#green":

    var green = new Audio("sounds/green.mp3");
    green.play();
    break;

    case "#yellow":

    var yellow = new Audio("sounds/yellow.mp3");
    yellow.play();
    break;
case "wrong":
    var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
    default:
  }

}
