const buttonColors = ["green", "red", "yellow", "blue"];
const GamePattern = [];

function randomSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  RandomChosen = buttonColors[randomNumber];
  GamePattern.push(RandomChosen);

  return RandomChosen;
}
