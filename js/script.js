// Assignment code here
let resultsEl = document.getElementById('#password');
let lengthEl = document.getElementById('#output').innerHTML;
let uppercaseEl = document.getElementById('#uppercase');
let lowercaseEl = document.getElementById('#lowercase');
let numericEl = document.getElementById('#numeric');
let specialCharEl = document.getElementById('#special-chars');

let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(lengthEl);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
