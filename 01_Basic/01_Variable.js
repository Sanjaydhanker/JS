const userId=17865;
let userEmail="sanjaydhanker87@gmail.com";
var userCity="Bijnor";
userName="Sanjay";


// userId=12345;   // not allowed

console.log(userId);

/*  
prefere not to use var 
because the issue in block scope and functional scope
*/

userEmail="sd@gmail.com";
userCity="Dhampur";
userName="Arjun";

console.table([userId ,userEmail,userCity,userName]);
