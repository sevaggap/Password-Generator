// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const specialChars= ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','`','~','[',']','{','}','|','.','<','>','/','?'];
let initial_password = [];

// Write password to the #password input
function writePassword() {
  let password_length = prompt("How long do you want your password to be?*\n*value must be between 8 and 128 characters");
  
    while (password_length < 8 || password_length > 128) {
      window.alert("That's not in the bounds.\nPlease try again.");
      password_length = prompt("How long do you want your password to be?*\n*value must be between 8 and 128 characters");
    }

    lowercase = window.confirm("Do you want lowercase letters?");
    uppercase = window.confirm("Do you want uppercase letters?");
    numeric = window.confirm("Do you want numbers?");
    special = window.confirm("Do you want special characters?");

    if (lowercase==true || uppercase==true || numeric==true || special==true){
      console.log(password_length);
      console.log(lowercase);
      console.log(uppercase);
      console.log(numeric);
      console.log(special);
    } else {
      window.alert("Nothing was selected!\nPleae try again.");
      lowercase = window.confirm("Do you want lowercase letters?");
      uppercase = window.confirm("Do you want uppercase letters?");
      numeric = window.confirm("Do you want numbers?");
      special = window.confirm("Do you want special characters?");
    }

    for (i=0; i<1; i++) {
        if (lowercase==true) {
        initial_password[i] = lowerCase;
        }
        if (uppercase==true) {
        initial_password[i+1] = upperCase ;
        }
        if(numeric==true){
          initial_password[i+2] = numbers;
        }
        if (special==true) {
          initial_password[i+3] = specialChars;
        }
    }

    initial_password=initial_password.filter(Boolean);
    console.log(initial_password);

    var password = generatePassword(password_length,initial_password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  function generatePassword (password_length, initial_password) {
    let pwd = [];
    let numbers_generated = [];
    pwd.length = password_length;
    let index = 0;

    for(i=0; i<password_length; i++) {
     index = Math.floor(Math.random()*initial_password.length);
     console.log(index);
     console.log(initial_password[index]);
     numbers_generated[i] = index;
     }

     console.log(numbers_generated);

     for(i=0; i<numbers_generated.length; i++) {
        let value;
        let x = numbers_generated[i];
        value = Math.floor(Math.random()*initial_password[x].length);
        console.log(initial_password[x][value]);
        pwd[i]=initial_password[x][value];
     }

     pwd=pwd.join('');
     console.log(pwd);
     
      return pwd
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

