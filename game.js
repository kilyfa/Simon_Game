const buttonColors = ["green", "red", "yellow", "blue"];
var GamePattern = [];
var userClick = [];
var start = false;

function randomSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  RandomChosen = buttonColors[randomNumber];
  GamePattern.push(RandomChosen);
}

function playSound(text) {
  const soundProgram = new Audio("sounds/" + text + ".mp3");
  soundProgram.play();
}

function EqualAnswer(array1, array2) {
  if (array1.length > 0) {
    if (array1.length !== array2.length) {
      return false;
    }

    for (var i = 0; i <= array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return WrongSide();
      }
    }
    return setTimeout(function () {
      GameArray();
    }, 1000);
  }
}

$(".btn").click(function () {
  var click_id = $(this).attr("id");
  userClick.push(click_id);
  $("#" + click_id).addClass("pressed");
  playSound(click_id);
  setTimeout(function () {
    $("#" + click_id).removeClass("pressed");
  }, 100);
  console.log(userClick);
  //Logic
  EqualAnswer(GamePattern, userClick);
});

//Khusus Program
$(document).on("keypress", function () {
  if (!start) {
    userClick = [];
    $("#level-title").text("Level " + GamePattern.length);
    randomSequence();
    $("#" + RandomChosen)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    playSound(RandomChosen);
    console.log(GamePattern);
    start = true;
  }
});

function GameArray() {
  userClick = [];
  $("#level-title").text("Level " + GamePattern.length);
  randomSequence();
  $("#" + RandomChosen)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(RandomChosen);
  console.log(GamePattern);
}

function WrongSide() {
  $("#level-title").text("Wrong!! TRY AGAIN!!");
  $("body").addClass("game-over");
  playSound("wrong");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 250);
  GamePattern = [];
  start = false;
}
