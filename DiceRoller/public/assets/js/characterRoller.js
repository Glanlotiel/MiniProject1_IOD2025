// Main Roller.
function rollDie(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Character loop for 4d6

function rollStat() {
  let rolls = [];
  for (let i = 0; i < 4; i++) {
    rolls.push(rollDie(1, 6));
  }
  rolls.sort((a, b) => a - b); // sort ascending
  rolls.shift(); // remove the first (lowest) value
  return rolls.reduce((sum, val) => sum + val, 0); // add the remaining 3
}

function rollCharacter() {
  let stats = [];
  for (let i = 0; i < 6; i++) {
    stats.push(rollStat());
  }
  return stats;
}

// listen for button click; roll stats :D
document.getElementById("rollCharacter").addEventListener("click", function () {
  let stats = rollCharacter();
  let labels = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  let result = document.getElementById("characterResult");
  result.innerHTML = ""; // clear previous result

  stats.forEach(function (stat, index) {
    let entry = document.createElement("p");
    entry.textContent = `${labels[index]}: ${stat}`;
    result.appendChild(entry);
  });
});
