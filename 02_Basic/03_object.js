//object literals



const sym=Symbol("id")

const user={
    name:"sanjay",
    [sym]:"key",
    "full name" :"Sanjay Dhanker",
    age:20,
    location:"bijnor",
    gmail:"sanjaydhanker87@gmail.com",
    isLoggedIN:false
}

user.age=21    //change value
// Object.freeze(user)
// user.age=22   //this will not change the value of age because of Object.freeze() function


// console.log(user.name);  // dont use this
// console.log(user["name"]);  //right choice

// console.log(user.full name);  //not ecceptable
// console.log(user["full name"]);  //ecceptable

// console.log(user[sym]);
// console.log(typeof user[sym]);
// console.log(typeof sym);

// console.log(user);

user.greeding = function(){
    console.log("Hello");
}
user.greedingtwo = function(){
    console.log(`Hello ,${this["full name"]}`);
}


console.log(user.greeding());
console.log(user.greedingtwo());







