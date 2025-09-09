// Folsy values

//  null , undefined , "" , 0 , -0 , BigInt 0n , false , NaN

// Truthy values

// true , [] , {} , "0" , 'false' , " " , function(){}


// if obj is enpty

const enptyObj = {}

if (Object.keys(enptyObj).length === 0) {

    // console.log("Objct is empty");
    
    
}

// nullish coallecins operator(??) : null oprtor

let value;
// value = null ?? 10
// value = 6 ?? 10
// value = undefined ?? 10
// value = undefined ?? 1 ?? 10


// console.log(value);

// terniary oprator

// condition ? true : false

const age = 20
age <=19 ? console.log("less than 19") : console.log("greater than 19");


