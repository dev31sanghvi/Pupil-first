let csv = "one,two,three,four,five"; //coma seperated value.

csv.split(","); //split(",") is used to split the string.

let sentence = "dev is best";

sentence.split(" ");



/** question:-  you have a writing assignment
 * 
 * -google docs
 * -microsoft word
 * 
 * count the number of words in the document.
 */

let essay = "this is essay";
let words = essay.split(" ");

let wordcount = words.length(); //count the number of element

console.log("the word count in the essay is : " + wordcount);