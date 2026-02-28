let diceRoller = document.getElementById("diceRoller");

// Main Roller.
function rollDie(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event Listening to Stop page from reloading and upload result history;

diceRoller.addEventListener("submit", function (event) {
  event.preventDefault();

  // take form values
  let diceNumber = parseInt(document.getElementById("diceNumber").value);
  let sides = parseInt(document.getElementById("diceType").value);

  //call rollDie in a loop
  let total = 0;
  let rolls = [];
  for (let i = 0; i < diceNumber; i++) {
    let roll = rollDie(1, sides);
    rolls.push(roll);
    total += roll;
  }
  // Display result in a result box
  document.getElementById("currentResult").textContent =
    `${diceNumber}d${sides} rolled ${total}!`;
  //inject into dice log
  let log = document.getElementById("diceLog");
  let entry = document.createElement("p");
  entry.textContent = `${diceNumber}d${sides} → [${rolls.join(", ")}] = ${total}`;
  log.prepend(entry);
});


// clear log

document.getElementById("clearLog").addEventListener("click", function() {
  document.getElementById("diceLog").innerHTML = "";
});