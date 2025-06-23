// Write a function that declares bankruptcy via an alert
// https://www.youtube.com/watch?v=OqRAt4snz_w
function bankruptcy() {
  console.log('I DECLARE BANKRUPTCY!!#$@!!%!%$#!!!@##@')
}

bankruptcy();


// Write a function to make a sandwich that takes in 2 ingredients and 1 secret ingredient. The function should output the ingredients to the console between bread emojis 🍞
let name = "Logan";

function sandwich(firstIngredient, secondIngredient, secretIngredient) {
  console.log("🍞 " + firstIngredient + secondIngredient + secretIngredient + " 🍞");
}

sandwich("honey ham", "a bagel", "pastrami");

// Write a function that inputs a temperature in Celsius and outputs that temperature in Fahrenheit.
// Celesius * 9/5 + 32 
function cToF(tempInC) {
  return tempInC * (9 / 5) + 32; 
}

let tempInF = cToF(20);

console.log(tempInF);