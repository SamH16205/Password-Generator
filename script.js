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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(String.fromCharCode(97))