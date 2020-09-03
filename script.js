// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // All your code goes here
  // password length

var passwordLegth= prompt("How many characters do you want your password to be (minimum 8 and maximum 128?")
console.log(passwordLegth)
var lowerCaseAllowed=confirm("Do you want lower case characters in your password?");
var upperCaseAllowed=confirm("Do you want upper case characters in your password?");
var numericAllowed= confirm("Do you want numbers in your password?");
var specialAllowed=confirm("Do you want special characters in your password?");

var passwordCondition ={
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
upperCase: " ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numberic:"0123456789",
 symbols: "!@#$%^&*()_+-=[]{}|?/<>,.:"
}
var generatePassword= "";

if (passwordLength>8 && passwordLegth<128){
  console.log("Password length:" + passwordLegth)
} 
else{
alert("Enter a password between 8 and 128 characters");
}
}














  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
