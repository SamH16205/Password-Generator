// TODO: When button is clicked, a prompt should ask the user:
// password length
//  lowercase, uppercase, numbers and special characters

// make function that produces symbols/letters/numbers from ascii
// make variables for each types of character that has its ascii range as a value
// based on user input, append the variables to a list of selected values.
// randomly select from the list of symbol types, and then randomly coose an ascii code from the range stored in the chosen variable
// convert that code to a string and append it to the password.
// display password


// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowercase = range(97,123)
var uppercase = range(65,91)
var numbers = range(48, 58)
var special = range(33,48)
var userInput = []

function range(start, stop){
  // produces a range between two values exclusive of the stop value
  var r = []
  for(var i=start; i<stop; i++){
    r.push(i)
  }
  return r
}

function promptUser(){
  var length = prompt("How many characters would you like the password to be?")
  while(length > 128 || length < 8 || length === null){
    length = prompt("Password must be between 8 and 128 characters. Please enter a valid length.")
  }
  var includeLowercase = confirm("Do you wish to include lowercase letters? \nClick 'OK' for yes and  'Cancel' for no.")
  var includeUppercase = confirm("Do you wish to include uppercase letters? \nClick 'OK' for yes and  'Cancel' for no.")
  var includeNumbers = confirm("Do you wish to include numbers? \nClick 'OK' for yes and  'Cancel' for no.")
  var includeSpecial = confirm("Do you wish to include special characters? \nClick 'OK' for yes and  'Cancel' for no.")
  userInput = [length, includeLowercase, includeUppercase, includeNumbers, includeSpecial]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);

// console.log(String.fromCharCode(97))