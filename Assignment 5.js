/******************************************************************************

ASSIGNMENT 5



Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:



const variable = statement ? "this if true" : "this if not true"



Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/

let userMale = true;
const userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);

userMale = false;
const userTitle2 = userMale ? "Mr." : "Mrs.";
console.log(userTitle2);
