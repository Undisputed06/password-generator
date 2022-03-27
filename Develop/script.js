// Assignment code here

var alphUpper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphLower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = [ " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "\\", ":", ";", "\"", "'", "<", ">", "?", ".", "~", "`"]



//Function to GET and Check Length 
var getLength = function() {
   

}

var getLower = function () {
  //Get random lower case letter
}

var getUpper = function() {
  //Get random upper case letter
}

var getNum = function() {


  //Get random number 
}

var getSpecial = function () {
  //Get random special character 
}



var generatePassword = function (){
      var passLength = parseInt(window.prompt("How many characters would you like your password to be? Please select between 8 and 128"))
      debugger;
      if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        window.alert("Please enter a number between 8 - 128")
        return generatePassword()
      }
     
      var confirmUpper = window.confirm("Would you like Upper Case Characters in your password")
      if(confirmUpper){


      }

      var confirmLower = window.confirm("Would you like Lower Case Characters in your password?")
      if(confirmLower) {

      }

      var confirmNum = window.confirm("Would you like numbers in your password?")
      if (confirmNum) {

      }

      var confirmSpecial = window.confirm("Would you like special characters in your password")

      if (confirmSpecial ){

      }

      for (var i = 0; i > passLength; i ++){
          getPass = '';
          
      }
    
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
