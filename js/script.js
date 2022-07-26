// Assignment code here
let uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

let lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]

let numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
]

let specialChars = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|"
]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generatePassword = () => {
  let length = parseInt(prompt('How long would you like your password to be?'));
  let passwordOptions = [];
  let finalPassword = [];

  if (length < 8 || length > 128) {
    alert('Password needs to be a valid length');
    return;
  }

  let hasNumbers = confirm("Do you want to include numbers in your password?");
  let hasLowercase = confirm("Do you want to include lowercase letters in your password?");
  let hasUppercase = confirm("Do you want to include uppercase letters in your password?");
  let hasSpecialChars = confirm("Do you want to include special characters in your password?");


  if (hasNumbers) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  if (hasLowercase) {
    passwordOptions = passwordOptions.concat(lowercase);
  }
  if (hasUppercase) {
    passwordOptions = passwordOptions.concat(uppercase);
  }
  if (hasSpecialChars) {
    passwordOptions = passwordOptions.concat(specialChars);
  }
  

  for (var i = 0; i < length; i++){
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])
  }

    return finalPassword.join('');
}

writePassword();



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
