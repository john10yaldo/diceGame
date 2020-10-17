


  var randomNumber1 = Math.random() * 6;
  randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImg1 = "dice" + randomNumber1 + ".png"

var first = document.getElementById("x");

first.setAttribute("src", randomImg1)



var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomImg2 = "dice" + randomNumber2 + ".png"

var second = document.getElementById("y");

second.setAttribute("src", randomImg2)

if (randomNumber1 > randomNumber2){
  document.getElementById("title").innerHTML = "🚩 Player 1 Wins!"
}

else if (randomNumber1 < randomNumber2){
  document.getElementById("title").innerHTML = "Player 2 Wins!  🚩"
}

else if (randomNumber1 = randomNumber2){
  document.getElementById("title").innerHTML = "Tie, Play Again!"
}
