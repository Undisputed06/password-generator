// Assignment code here

var upperArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numArray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialArray = [ " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "\\", ":", ";", "\"", "'", "<", ">", "?", ".", "~", "`"]
var selectedChars = []

  

//Get random lower case letter
var getLower = function () {
    var randomLower = lowerArray[Math.floor(Math.random() * lowerArray.length)];
    return randomLower
}

 //Get random upper case letter 
var getUpper = function() {
   var  randomUpper = upperArray[Math.floor(Math.random() * upperArray.length)];
   return randomUpper
}

 //Get random number 
var getNum = function() {
    var  randomNum = numArray[Math.floor(Math.random() * numArray.length)];
    return randomNum
}

//Get random special character 
var getSpecial = function () {
   var  randomSpecial = specialArray[Math.floor(Math.random() * specialArray.length)];
   return randomSpecial
}

///Get random character from built selectedChars Array 
var getRandomSelectedChars = function () {
  var randomChar = selectedChars[Math.floor(Math.random() * selectedChars.length)];
  return randomChar
}

var resetGenerator = function() {
  selectedChars = []
  newGeneratedPassword = " ";
}


var generatePassword = function (){
  //Ask User for password criteria 
  resetGenerator();
  var passLength = parseInt(window.prompt("How many characters would you like your password to be? Please select between 8 and 128"))
  if (passLength < 8 || passLength > 128) {
    window.alert("The password length must be between 8 and 128 characters!")
    generatePassword()
  }
  //Ensure we get a number back
  if (isNaN(passLength)){
    window.alert("Please enter a numerical value!")
    generatePassword()
  }
  
  var confirmLower = window.confirm("Would you like Lower Case Characters in your password?");
  var confirmUpper = window.confirm("Would you like Upper Case Characters in your password");
  var confirmNum = window.confirm("Would you like Numbers in your password?");
  var confirmSpecial = window.confirm("Would you Special Characters in your password");

  //Append values to string to ensure the user selection is included atleast once is password
  var userPass = []
  if (confirmLower) {
    selectedChars = selectedChars.concat(lowerArray)
    userPass += getLower()
  }

  if (confirmUpper){
    selectedChars = selectedChars.concat(upperArray)
    userPass += getUpper()
  }

  if (confirmNum){
    selectedChars = selectedChars.concat(numArray)
    userPass += getNum()
  }

  if (confirmSpecial) {
    selectedChars = selectedChars.concat(specialArray)
    userPass += getSpecial()
  }
  //Generate Password if user doesn't make choice
  if( selectedChars.length ===0 ){
    window.alert("You did not make a criteria choice. Generating password with Uppercase characters and special characters")
    selectedChars = selectedChars.concat(upperArray,specialArray)
    userPass += getUpper()
    userPass += getSpecial()
  }

  var selectedPassword = "";

/*Iterate through selectedChars only grabbing enough characters
  to build to the password string created by users choices(userPass). 
*/
  for (var i =0; (i < passLength - userPass.length); i ++){
    var char = getRandomSelectedChars()
    selectedPassword += char
  }
 var newGeneratedPassword = selectedPassword + userPass
 console.log(newGeneratedPassword)


return newGeneratedPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
