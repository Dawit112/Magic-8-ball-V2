//magic 8 ball by dawit

// Button Event listener
document.getElementById("8ball").addEventListener("click", btnClicked);

// Get Output
let name = document.getElementById("answer").value;

function btnClicked() {
  console.log("hi");
  // 8 Ball commands
  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = "answer";
  if (randomNumber === 0) {
    document.getElementById("answer").innerHTML = "yes";
  } else if (randomNumber === 1) {
    document.getElementById("answer").innerHTML = "no";
  } else if (randomNumber === 2) {
    document.getElementById("answer").innerHTML = "odds are in your favor";
  } else if (randomNumber === 3) {
    document.getElementById("answer").innerHTML = "Without a Doubt.";
  } else if (randomNumber === 4) {
    document.getElementById("answer").innerHTML = "Concentrate and ask again";
  } else if (randomNumber === 5) {
    document.getElementById("answer").innerHTML = "cant answer that one";
  } else if (randomNumber === 6) {
    document.getElementById("answer").innerHTML = "Outlook not so good";
  }
  document.getElementById(`The Magic 8 ball says, ${eightBall}.`);
}
