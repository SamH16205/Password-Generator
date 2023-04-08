// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "0123456789".split("")
var special = "!@#$%^&*()_+></?".split("")
var len = 0
var userInput = []


function promptUser(){
  // Asks user for the length of password and what characters to include and updates the global variable userInput by including all possible characters. Also calls the writePassword function
  userInput = []
  len = prompt("How many characters would you like the password to be?")
  while(len > 128 || len < 8 || len === null){
    len = prompt("Password must be between 8 and 128 characters. Please enter a valid length.")
  }

  var includeLowercase = confirm("Do you wish to include lowercase letters? \nClick 'OK' for yes and  'Cancel' for no.")
  if (includeLowercase){
    userInput = userInput.concat(lowercase)
  }

  var includeUppercase = confirm("Do you wish to include uppercase letters? \nClick 'OK' for yes and  'Cancel' for no.")
  if (includeUppercase){
    userInput = userInput.concat(uppercase)
  }

  var includeNumbers = confirm("Do you wish to include numbers? \nClick 'OK' for yes and  'Cancel' for no.")
  if (includeNumbers){
    userInput = userInput.concat(numbers)
  }

  var includeSpecial = confirm("Do you wish to include special characters? \nClick 'OK' for yes and  'Cancel' for no.")
  if (includeSpecial){
    userInput = userInput.concat(special)
  }

  writePassword()
}

function generatePassword(){
// Uses the userInput array to construct a password
var pWord = ''

// randomly chooses a character from userInput a designated number of times
for(var i=0; i<len; i++){
  pWord += userInput[Math.floor(Math.random()*userInput.length)]
}
return pWord
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);
