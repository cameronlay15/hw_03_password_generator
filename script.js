// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase= " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers= "0123456789"
var symbols= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // All your code goes here
  // password length
  var desiredPasswordLength = prompt("How many characters do you want your password to be (minimum 8 and maximum 128)?");
  if (desiredPasswordLength>8 && desiredPasswordLength <128){
    console.log("Password length: " + desiredPasswordLength);
  }
      else {
        alert("Enter a number between 8 and 128");
        prompt("How many characters do you want your password to be (minimum 8 and maximum 128)?");
      }
    }

    // const lowerCaseAllowed = confirm("Allow for lower case letters in password?");
    // console.log("Allow lowercase?": lowerCaseAllowed);
    
    // const upperCaseAllowed= confirm("Allow for upper case letters in password?");
    // console.log("Allow uppercase?": upperCaseAllowed);

    // const numbersAllowed= confirm("Allow for number in password?");
    // console.log("Allow for numbers?": numbersAllowed);

    // const symbolsAllowed= confirm("Allow for symbols in password?");
    // console.log("Allow for symbols?": symbolsAllowed);





  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
