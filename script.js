// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "0123456789".split("")
var special = "!@#$%^&*()_+></?".split("")
var len = 0
// list of characters from user input
var userInput = []

// keywords to determine what tests to run to check that the password has one of each selected character types
var verifiers = []


function promptUser(){
  // Asks user for the length of password and what characters to include, updates the global variable userInput by including all possible characters, updates the array of verifiers, and calls the writePassword function
  userInput = []
  len = prompt("How many characters would you like the password to be?")
  while(len > 128 || len < 8 || len === null){
    len = prompt("Password must be between 8 and 128 characters. Please enter a valid length.")
  }

  var includeLowercase = confirm("Do you wish to include lowercase letters? \nClick 'OK' for yes and  'Cancel' for no.")
  if (includeLowercase){
    userInput = userInput.concat(lowercase)
    verifiers.push("lowercase")
  }

  var includeUppercase = confirm("Do you wish to include uppercase letters? \nClick 'OK' for yes and  'Cancel' for no.")
  if (includeUppercase){
    userInput = userInput.concat(uppercase)
    verifiers.push("Uppercase")
  }

  var includeNumbers = confirm("Do you wish to include numbers? \nClick 'OK' for yes and  'Cancel' for no.")
  if (includeNumbers){
    userInput = userInput.concat(numbers)
    verifiers.push("Numbers")
  }

  var includeSpecial = confirm("Do you wish to include special characters? \nClick 'OK' for yes and  'Cancel' for no.")
  if (includeSpecial){
    userInput = userInput.concat(special)
    verifiers.push("Special")
  }

  writePassword()
}


function generatePassword(){
// Uses the userInput array to construct a password
var pWord = ''

// randomly chooses a character from userInput until the password is as long as the user requested
for(var i=0; i<len; i++){
  pWord += userInput[Math.floor(Math.random()*userInput.length)]
}

// check for lowercase
if (verifiers.includes("Lowercase")){
  if(!checkLower(pWord)){
    return generatePassword()
  }
}

// Check for uppercase
if (verifiers.includes("Uppercase")){
  if(!checkUpper(pWord)){
    return generatePassword()
  }
}

// check numbers
if (verifiers.includes("Numbers")){
  if(!checkNumber(pWord)){
    return generatePassword()
  }
}

// check specials
if (verifiers.includes("Special")){
  if(!checkSpecial(pWord)){
    return generatePassword()
  }
}
return pWord
}


function checkLower(word){
  // check if password has a lowercase letter
  word = word.split("")
  for (const x of word) {
    if (lowercase.includes(x)){
      return true
    }
  }
}

function checkUpper(word){
  // Check if password has an uppercase letter
  word = word.split("")
  for (const x of word) {
    if (uppercase.includes(x)){
      return true
    }
  }
}

function checkNumber(word){
  // check if password has a number
  word = word.split("")
  for (const x of word) {
    if (numbers.includes(x)){
      return true
    }
  }
}

function checkSpecial(word){
  // check if password has a special character
  word = word.split("")
  for (const x of word) {
    if (special.includes(x)){
      return true
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);