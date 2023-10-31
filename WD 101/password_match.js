/**
 * password validation
 * 
 * rules:-
 * 1. both the passwords entered by the user must match
 * 2.the password length must be atleast 8 character
 */

let pass1 = "abcdq2341";
let pass2 = "abcd123";

let isMatchingPassword = pass1 === pass2;
let isRequiredLength = password.length >= 8;

let isValidPassword = isMatchingPassword && isRequiredLength;

if (isValidPassword) {
    console.log("password is valid");
}
else{
    console.log("invlid password");

    if (!isMatchingPassword) {
        console.log("password do not match");
    }

    if (!isRequiredLength) {
        console.log("password should be atleast 8 char. long ");
    }
    
    
}
