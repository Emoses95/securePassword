// Assignment Code
var generateBtn =document.querySelector("#generate");

function generatePassword(){
  var length = window.prompt("choose password length between 8 and 128");
 char = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
 num = "1234567890"
  passwordText = [""];
  for(i=0; i< length; i++){
  password += char.num(Math.floor(Math.random()* char.length))
    return "passwordText" ;
}
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);