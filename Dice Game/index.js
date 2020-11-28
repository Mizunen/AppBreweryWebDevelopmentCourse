var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);

 function play(num1, num2){
  var img1 ="images/dice" + num1 + ".png";
  var img2 ="images/dice" + num2 + ".png";
  var  h1 =  document.querySelector('h1');
  document.querySelector(".img1").setAttribute("src",img1);
  document.querySelector(".img2").setAttribute("src",img2);

  if(num1 >  num2){
    h1.textContent = "🚩Player1 Wins";
  }
  else if(num1 < num2){
    h1.textContent = "Player2 Wins🚩";
  }
  else{
    h1.textContent ="🏳️DRAW!🏳️";
  }
}


document.getElementById("startBtn").onclick = function(){
  play(randomNumber1,randomNumber2);
  document.getElementById("restart").style.visibility = "visible";
};

document.getElementById("restart").onclick = function (){
  window.location.reload();
}

//startBtn.addEventListener('onClick',play(randomNumber1,randomNumber2));
/* function winner(p1,p2){
  if(p1 > p2){
    document.querySelector("h1").textContent = "🚩Player1 Wins";
  }
  else if(p1 < p2){
    document.querySelector("h1").textContent = "Player2 Wins🚩";
  } else{
   document.querySelector("h1").textContent = "🏳️DRAW!🏳️";
  }
}

function changeDie(img,num){
  let imageSrc = "images/dice" + num + ".png"; //sets src to die picture of matching number

    document.querySelector(img).setAttribute('src',imageSrc);
}
document.querySelector('h1').addEventListener(onload,winner(randomNumber1,randomNumber2));

document.querySelector('.img1').addEventListener(onload,changeDie(".img1",randomNumber1));
document.querySelector('.img2').addEventListener(onload,changeDie(".img2",randomNumber2));
*/
