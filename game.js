const buttonColors = ["green", "red", "yellow", "blue"];
const GamePattern = [];

function randomSequence(number) {
  randomNumber = Math.floor(Math.random() * 4);
  RandomChosen = buttonColors[randomNumber];
  GamePattern.push(RandomChosen);
}
