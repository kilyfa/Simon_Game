const buttonColors = ["green", "red", "yellow", "blue"];

function randomSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  RandomChosen = buttonColors[randomNumber];

  return RandomChosen;
}
