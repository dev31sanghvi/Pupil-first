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
 * validation error :-
 * {status: "failed" ,reasons: {"reason 1","reason"}};
 * 
 * validation success:-
 * 
 * {status:"success"}
 * 
 */

let printpasswordstatus = () => {
    let pass1 = "abcdq2341";
    let pass2 = "abcd123";
  
    let isMatchingPassword = pass1 === pass2;
    let isRequiredLength = password.length >= 8;
  
    let isValidPassword = isMatchingPassword && isRequiredLength;
  
    if (isValidPassword) {
        return { status:"success"};
    } else {
        let reason = [];
        console.log("invlid password");
        
      if (!isMatchingPassword) {
        reason.push("password do not match");
        // console.log("password do not match");
      }
  
      if (!isRequiredLength) {
        reason.push("password should be atleast 8 char. long ");
      }
      return {status:"failed",reason:reason }
    }
  };
  
  printpasswordstatus();
  

        //   console.log("password is valid");