/**
 * password validation
 *
 * rules:-
 * 1. both the passwords entered by the user must match
 * 2.the password length must be atleast 8 character
 *
 * refactoring :-
 * it changes the structure of code.
 * but thi does not change the functionality of the code.
 * purpose:-- code is easier to understand.
 *
 */

let printpasswordstatus = () => {
  let pass1 = "abcdq2341";
  let pass2 = "abcd123";

  let isMatchingPassword = pass1 === pass2;
  let isRequiredLength = password.length >= 8;

  let isValidPassword = isMatchingPassword && isRequiredLength;

  if (isValidPassword) {
    console.log("password is valid");
  } else {
    console.log("invlid password");

    if (!isMatchingPassword) {
      console.log("password do not match");
    }

    if(!isRequiredLength){
      console.log("length is insufficient please mention required length");
    }
  }
};

printpasswordstatus();
