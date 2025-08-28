 function firstfunc(){
    console.log('sanjay');
    
 }
//  firstfunc()


function addTwoNum(num1,num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNum(3 ,4)
// console.log(result);


function isUserLogged(username="sanjay"){
    return `${username} just logged in`
}

// console.log(isUserLogged("vijay"));


function shopcard(value1,value2, ...allvalue){
    return allvalue
}

// console.log(shopcard(20 ,40, 50,50 ,368));          //... if the value is more than key


// function with object

const user={
    name:"sanjay",
    age:20
}

function userHandling(anyobj){
    console.log(`my name is ${anyobj.name} , my age is ${anyobj.age}`);
    
}

// userHandling(user)    
// userHandling({                               
//     name:"Sanjay",                    //you can use both
//     age:20
// })


// function with Array


const myNewArray = [1,2,3,4,5]

function arrayControll(arr){
     console.log(`my array second value ${arr[1]}`);
     
}
// arrayControll(myNewArray)
arrayControll([1,2,3,4,5])

