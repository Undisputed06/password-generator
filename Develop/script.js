// Assignment code here

var alphUpper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphLower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = [ " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "\\", ":", ";", "\"", "'", "<", ">", "?", ".", "~", "`"]



//Function to GET and Check Length 
var getLength = function() {
  var passLength = parseInt(window.prompt("How many characters would you like your password to be? Please select between 8 and 128"))
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert("Please enter a number between 8 - 128")
    return passLength
}

var getLower = function () {
  //Get random lower case letter
  var confirmLower = window.confirm("Would you like Lower Case Characters in your password?")
  if(confirmLower) {
    var  randomLower = alphLower[Math.floor(Math.random() * alphLower.length)];
   return randomLower
}

var getUpper = function() {
  //Get random upper case letter 
  var confirmUpper = window.confirm("Would you like Upper Case Characters in your password")
  if(confirmUpper){
   var  randomUpper = alphUpper[Math.floor(Math.random() * alphUpper.length)];
   return randomUpper
}

var getNum = function() {
  //Get random number 
  var confirmNum = window.confirm("Would you like numbers in your password?")
      if (confirmNum) {
        var  randomNum = nums[Math.floor(Math.random() * nums.length)];
        return randomNum
}

var getSpecial = function () {
  //Get random special character 
  var confirmSpecial = window.confirm("Would you Special Characters in your password")
  if(confirmSpecial){
   var  randomSpecial = special[Math.floor(Math.random() * special.length)];
   return randomUpper
}



var generatePassword = function (){
      
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
