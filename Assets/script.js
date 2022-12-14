// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Alphabet, Numbers, Special Characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map((letter) => letter.toLowerCase());
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]
// This function generates a random number within each variable to choose which character or number will be picked. Rounded to the lowest integer

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Function to generate password

function generatePassword() {
  // This will ask how many characters are wanted for the user password
  var passwordLength = prompt(
    "How many characters would you like your password to be? ( Between 8 - 128 characters )"
  )
  // If characters chosen is not greater than 8 or less than 128 you receive an alert
if (passwordLength <= 7 || passwordLength >= 129) {
  alert( "Please choose between 8 - 128 Characters")
  return generatePassword()
}
  // This will ask if the user wants to use uppercase letters in the password
  var useUppercase = confirm(
    "Would you like to include uppercase letters in your password?"
  )
  // This will ask if the user wants to use lowercase letters in the password
  var useLowercase = confirm(
    "Would you like to use lowercase letters in your password?"
  )
  // This will ask if the user wants to use numbers in the password
  var useNumbers = confirm(
    "Would you like to include numbers in your password?"
  )
  // This will ask if the user wants to use special characters in the password
  var useSpecialChars = confirm(
    "Would you like to include special characters in your password?"
  )
  // This will check if all confirms are false. If so it restarts the process
if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialChars === false){
  alert( "Please choose at least 1 unique character type!")
  return generatePassword();
}
  // This creates the potential structure of all the potential characters for the password
  var potentialChars = []

// This will concat uppercase letters into the potential chars variable
  if (useUppercase) {
    potentialChars = potentialChars.concat(uppercase);
  }
// This will concat lowercase letters into the potential chars variable
  if (useLowercase) {
    potentialChars = potentialChars.concat(lowercase);
  }
// This will concat numbers into the potential chars variable
  if (useNumbers) {
    potentialChars = potentialChars.concat(numbers);
  }
// This will concat special letters into the potential chars variable
  if (useSpecialChars) {
    potentialChars = potentialChars.concat(special);
  }

 
  

  // Creates the password of "passwordLength" length
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    password = password + potentialChars[getRandomInt(potentialChars.length)]
  }

  return password
}
