/**
 * 
 * you can not sign up for this service with a gmail address
 * 
 */

let email = "abc@gmail.com";

let isGmailAddress = email.includes("abc@gmail.com");

if (isGmailAddress)
{
   console.log("you cant sign in !") ;
}
else{
    console.log("successfully loged in :)");
}
