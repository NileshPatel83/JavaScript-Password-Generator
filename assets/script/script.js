//Constant global variables.
const minLength = 8;
const maxLength = 128;
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars ="0123456789";
const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//Selects generate password button.
var generateBtn = document.querySelector("#generate");

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {

  //Generates the password based on user criteria.
  var password = generatePassword();
  if(password == null) return;

  //Selects password display text area.
  var passwordText = document.querySelector("#password");

  //Sets the text of password display text area to generated password.
  passwordText.value = password;
}

//Generates the password based on user criteria.
function generatePassword(){

  //Gets user entered password length.
  var passwordLength = getPasswordLength();
  if(passwordLength == null) return null;

  //Gets user selected character types for password.
  var charTypes = getSelectedCharacterTypes();
  if(charTypes == null) return null;

  //Gets character set array based on user selected character types.
  var charSet = getCharacterSet(charTypes);
  if(charSet.length == 0) return null;

  //Initialize an empty password arrray.
  var password = [];

  //Generates one random character each time from character set and pushes it to password array until the password length is reached.
  for(var i = 0; i< passwordLength; i++){
    password.push(charSet[Math.floor(Math.random() * charSet.length)]);
  }
  
  //Returns the password as a string.
  return password.join("");
}

//Gets character set array based on user selected character types.
function getCharacterSet(charTypes){
  var charSet = [];

  //Gets lowercase character array if user selects lowercase character type and adds to character set.
  if(charTypes.includeLowercase){
    charSet = charSet.concat(lowercaseChars.split(""));
  }

  //Gets uppercase character array by converting lowercase string to upper case if user selects uppercase character type and adds to character set.
  if(charTypes.includeUppercase){
    charSet = charSet.concat(lowercaseChars.toUpperCase().split(""));
  }

  //Gets numeric character array if user selects numeric character type and adds to character set.
  if(charTypes.includeNumbers){
    charSet = charSet.concat(numberChars.split(""));
  }

  //If user selects special character type, converts special character string to a character array and adds to character set.
  if(charTypes.includeSpecialChars){
    charSet = charSet.concat(specialChars.split(""));
  }

  return charSet;
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
  charTypes.includeLowercase = window.confirm("Would you like to include lower case characters?");
  charTypes.includeUppercase = window.confirm("Would you like to include upper case characters?");
  charTypes.includeNumbers = window.confirm("Would you like to include numeric characters?");
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
