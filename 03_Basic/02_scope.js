//block scope

var a= 100
let b=200
const c=300
if(true){
    var a= 10
    let b= 20
    const c= 30 

    console.log("Inner:" ,a);
    console.log("Inner:" ,b);
    console.log("Inner:" ,c);
    
}

console.log(a);
console.log(b);
console.log(c);
