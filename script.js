//Constant global variables.
const minLength = 8;
const maxLength = 128;
const lowercaseLowerLimit = 97;
const lowercaseUpperLimit = 122;
const uppercaseLowerLimit = 65;
const uppercaseUpperLimit = 90;

//Selects generate password button.
var generateBtn = document.querySelector("#generate");

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  if(password == null) return;

  //Selects password display textbox.
  var passwordText = document.querySelector("#password");

  //Sets the text of password display textbox to generated password.
  passwordText.value = password;
}

function generatePassword(){

  //Gets user entered password length.
  var passwordLength = getPasswordLength();
  if(passwordLength == null) return null;

  //Gets user selected character types for password.
  var charTypes = getSelectedCharacterTypes();
  if(charTypes == null) return null;

  var charSet = getCharacterSet(charTypes);
  if(charSet == null) return null;






}

function getCharacterSet(charTypes){
  var charSet = [];

  //Gets lowercase character array if user selects lowercase character type.
  if(charTypes.includeLowercase){
    var lowercaseChars = getCharacterArray(lowercaseLowerLimit, lowercaseUpperLimit);
    charSet.push(lowercaseChars);
  }

  console.log(charSet);


}

//Gets the character array based on specified lower and upper limits.
function getCharacterArray(lowerLimit, upperLimit){

  var charArray= [];

  //Loops through lower and upper limits and generates the character array.
  for(var i = lowerLimit; i<= upperLimit; i++){
    charArray.push(String.fromCharCode(i));
  }

  return charArray;
}

//Gets user selected character types for password.
//Displays an error message if none of lowercase, uppercase, numeric or special characters is selected.
function getSelectedCharacterTypes(){
  
  //Initialize the object with false values.
  var charTypes = {
    includeLowercase : false,
    includeUppercase : false,
    includeNumbers : false,
    includeSpecialChars : false,
  };

  //Prompts the user to select character types for password.
  charTypes.includeLowercase = window.confirm("Would you like to include lower case letters?");
  charTypes.includeUppercase = window.confirm("Would you like to include upper case letters?");
  charTypes.includeNumbers = window.confirm("Would you like to include numbers?");
  charTypes.includeSpecialChars = window.confirm("Would you like to include special characters?");  

  //Checks if user has selected at least one character type or not. Displays an error message otherwise.
  if(!charTypes.includeLowercase && !charTypes.includeUppercase && !charTypes.includeNumbers && !charTypes.includeSpecialChars){
    window.alert("No character type selected. \nAt least one character type must be selected from lowercase, uppercase, numeric and special characters.\nPlease try again.");
    return null;
  }

  return charTypes;
}

//Gets the user entered password length.
//Display an error message, if entered value is not a number or less than 8 or greater than 128.
function getPasswordLength(){

  //Promts the user to enter the value as password length.
  var passwordLength = window.prompt("Please enter the length of the password.\nPassword length must be between " + minLength + " and " + maxLength + " characters.");

  //Checks if entered value is a number or less than 8 or greater than 128. Displays an error message otherwise.
  if(isNaN(passwordLength) || passwordLength < minLength || passwordLength > maxLength){
    window.alert("Invalid input.\nPassword length must be between "+ minLength + " and " + maxLength + " characters.\nPlease try again.");
    return null;
  }

  return passwordLength;
}
