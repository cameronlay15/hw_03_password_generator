// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // All your code goes here
  // password length

  // INPUT what will appear on screen
  var passwordLength = prompt("How many characters do you want your password to be (minimum 8 and maximum 128")
  var lowerCaseAllowed = confirm("Do you want lower case characters in your password");
  var upperCaseAllowed = confirm("Do you want upper case characters in your password");
  var numericAllowed = confirm("Do you want numbers in your password");
  var specialAllowed = confirm("Do you want special characters in your password");

    // items that can be entered into the password
  var passwordCondition = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberic: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|?/<>,.:"
  }
// establishing password length
  if (passwordLength > 8 && passwordLength < 128) {
    console.log("Password length:" + passwordLength)
  }
  else {
    passwordLength = prompt("Enter a password between 8 and 128 characters");
  }
// creating the password conditions
 var allAvailableCharacters="";
 if(lowerCaseAllowed===true){
   allAvailableCharacters=allAvailableCharacters.concat(passwordCondition.lowerCase)
 }
 if(upperCaseAllowed===true){
   allAvailableCharacters=allAvailableCharacters.concat(passwordCondition.upperCase)
 }
 if(numericAllowed===true){
   allAvailableCharacters=allAvailableCharacters.concat(passwordCondition.numberic)
 }
 if(specialAllowed===true){
   allAvailableCharacters=allAvailableCharacters.concat(passwordCondition.symbols)
 }
console.log(allAvailableCharacters)
// randomizing/selecting the characters
var randomizedPassword= '';
for (var i=0; i<passwordLength;i++){
  randomizedPassword=randomizedPassword.concat(allAvailableCharacters[
    Math.floor(Math.random()* allAvailableCharacters.length)
  ]
  )
  }
  // output on screen
  return randomizedPassword;
  }

  // PROCESSING
  // --- use the input to create a strind of characters ---
  // create a variable to hold our password
  // var whatEverPassword = '';
  // var passwordOptions = '';
  // if they have selected one of the options
  // if they chose uppercase 
  // passwordOption = passwordOption + posswordCondition.uppercase
  // -- dump all the uppercase values into a string
  // 'abc123ABC'

  // figure out how many characters
  // maybe use passwordLength
  // then for each character 
  
    // grab a random value from that options
    // whatEverPassword = whatEverPassword + passwordOptions[randomNumber]
  // }


  // OUTPut -- string of characters that rep a uniq password



















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
