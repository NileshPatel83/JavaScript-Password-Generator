// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  if(password == null){
    return null;
  }

  //Selects password display textbox.
  var passwordText = document.querySelector("#password");

  //Sets the text of password display textbox to generated password.
  passwordText.value = password;

}

function generatePassword(){

  var passwordLength = getPasswordLength();
  if(passwordLength == null){
    return null;
  }
  
  console.log(passwordLength);
}

//Function to get the user input password lenght.
//Display an error message, if entered value is not a number or less than 8 or greater than 128.
function getPasswordLength(){
  const minLength = 8;
  const maxLength = 128;
  
  //Promts the user to enter the value as password length.
  var passwordLength = window.prompt("Please enter the length of the password.\nPassword length must be between " + minLength + " and " + maxLength + " characters.");

  //Checks if entered value is a number or less than 8 or greater than 128. Displays an error message otherwise.
  if(isNaN(passwordLength) || passwordLength < minLength || passwordLength > maxLength){
    window.alert("Invalid input.\nPassword length must be between "+ minLength + " and " + maxLength + " characters.\nPlease try again.");
    return null;
  }

  return passwordLength;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
