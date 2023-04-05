let rollDice = process.argv[2];
let result = "";
var num = process.argv.slice(2);
num = Number(num);
function rollingDice(diceThrown) {
  for(let i = 1; i <= diceThrown; i++) {
    if(i == diceThrown) {
      result += Math.floor(Math.random() * 6 + 1);
    } else {
      result += Math.floor(Math.random() * 6 + 1) + ", ";
    }
  }
  return result;
}
console.log("Rolled " + num + " dice:", rollingDice(rollDice));


