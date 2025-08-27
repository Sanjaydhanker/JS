//Array
const myArr = [0,1,2,3,4,5]

// myArr.push(6)       // to add 
// myArr.push(7)
// myArr.unshift(8)      // add one value on start
// myArr.pop()
// myArr.shift()     //delete first value
// console.log(myArr.includes(4));   //value available or not
// console.log(myArr.indexOf(4));   // indexing
// const my=myArr.join()     // change array type into string


console.log("A" ,myArr);

const myn1= myArr.slice(1,3)
console.log(myn1);

console.log("B" ,myArr);
const myn2= myArr.splice(1,3)
console.log("C" ,myArr);

console.log(myn2);


