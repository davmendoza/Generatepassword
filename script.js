// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#passwordDisplay");

  passwordText.value = password;

}
var upperLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLet = "abcdefghijklmnopqrstuvwxyz";
var numbSym = "0123456789";
var speciSym = "!@#$%^&*()_+{}[];:<>,.?/";
function generatePassword() {
  var passLength = prompt("How long would you like your password to be from 8-128?");
  if (passLength < 8) {
    alert('Please choose a number between 8 through 128!!!')
    return("Try Again")
  } 
  var passUpper = confirm("Would you like Uppercase?");
  var passLower = confirm("Would you like Lowercase?");
  var passNumeric = confirm("Would you like numbers?");
  var passSpeci = confirm("Would you like special characters?");
  
  // += add on the right to the left
  var lookUplist = "";
  if (passUpper === true) {
    lookUplist += upperLet;
  }
  if (passLower === true) {
    lookUplist += lowerLet;
  }
  if (passNumeric === true) {
    lookUplist += numbSym;
  }
  if (passSpeci === true) {
    lookUplist += speciSym;
  }



  var password = "";
  for (i = 0; i < passLength; i++) {
    var randomNum = Math.floor(Math.random() * Math.floor(lookUplist.length));
    password += lookUplist.charAt(randomNum);

  }

  return password;
}