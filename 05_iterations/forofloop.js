//for of

const arr = [1 , 2 , 3 , 4 ]

for (const value of arr) {
    // console.log(value);
    
}
for (const value in arr) {
    // console.log(value);
    console.log(`key for my obj ${value} and value is ${arr[value]}`);

    
}

const name = "Sanjay kumar"

for (const char of name) {

    if (char == " ") {
        break
    }
    // console.log(`all char in my name ${char}`);
    
    
}
const str = "Sanjay kumar"

for (const all of str) {

    if (all == " ") {
        continue
    }
    // console.log(`all char in my name ${all}`);
    
    
}


//  with obj

const obj = {
    name : "sanjay",
    age: 20,
    role : "Full satck"
}
// for (const [key , value] of obj) {
//     console.log(key , ':-' , value);     //not usable
    
// }

// for (const key of obj) {
//     console.log(key);      // not usable
    
// }

for (const key in obj) {
    console.log(`key for my obj ${key} and value is ${obj[key]}`);
    
}

