// Assignment Code
var generateBtn =document.querySelector("#generate");
var length= '';
var characters= ';'





function passwordOpts(){
  
  var length = window.prompt("choose password length between 8 and 128 characters");
  var lowerCase= window.prompt('Would you like lowercase letters? If yes press ok');
  var specialCharacters= window.prompt('Would you like special characters? If yes press ok');
  var upperCase= window.prompt('Would you like uppercase letters? If yes press ok');
  var numbers= window.prompt('Would you like numbers? If yes press ok')
  
}
// this function needs more arguments such as: booleans which tell the function whether or not to include numbers/letters/etc in the generated password
function generatePassword(){
  var length = window.prompt("choose password length between 8 and 128");
  var lowerCase= window.prompt('Would you like lowercase letters? If yes press ok');
  var specialCharacters= window.prompt('Would you like special characters? If yes press ok');
  var upperCase= window.prompt('Would you like uppercase letters? If yes press ok');
  var numbers= window.prompt('Would you like numbers? If yes press ok')
  
  var passwordChars = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()1234567890";
  var generatedPassword = "";
  // somewhere in here there needs to be an if statement which uses the boolean arguments
  for(i=0; i< length; i++){
    // get random number
    var randomIndex= Math.floor(Math.random()*passwordChars.length)
    // chooose random character from passwordChars
   var randomChar= passwordChars[randomIndex]
    // Add random character
  generatedPassword += randomChar
}
return generatedPassword;
}
generatePassword
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
