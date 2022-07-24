// Assignment code here
let resultsEl = document.getElementById('#password');
let lengthEl = document.getElementById('#length');
let uppercaseEl = document.getElementById('#uppercase');
let lowercaseEl = document.getElementById('#lowercase');
let numericEl = document.getElementById('#numeric');
let specialCharEl = document.getElementById('#special-chars');
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// const randoFunc = {
//   lower: getRandoLower,
//   upper: getRandoUpper,
//   number: getRandoNum,
//   symbol: getRandoSym
// }


// get random uppercase letter 

// getRandoUpper = () => {
//   let randoUpper = alphabet[Math.floor(Math.random() * alphabet.length)]
//   console.log(randoUpper)
// }

// getRandoUpper();

getRandoLower = () => {
  let randoLower = alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase()
  console.log(randoLower)
}

getRandoLower();






generatePassword = () => {


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

writePassword();



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
