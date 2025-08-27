// const singletonobj= new Object()     //singleton object 

const literals = {}          //literals object

literals.id="123"
literals.name="sam"
literals.gmail="Sanjayahb"

// console.log(literals);


const multiobj={
    name:{
        fullname:{
            firstname:"Sanjay",
            lastname:"Dhanker"
        }
    }
}
// console.log(multiobj.name.fullname.firstname);


//combine two object

const obj1 = {name:"Sanjay" , age:20}       //dont write same key if you want to assign 2 obj
const obj2 = {gmail:"sanjaydhanker@gmail.com"}


// const obj3 = {obj1 , obj2}   //dont use this


//assign(target, source)

// const obj3 = Object.assign({} ,obj1 ,obj2)    // good but never used most of times

const obj3 = {...obj1 ,...obj2}

// console.log(obj3);


//database data

const data=[
    {
        id:1,
        name:"raj"
    },
     {
        id:2,
        name:"ram"
    },
     {
        id:3,
        name:"sanjay"
    }
]
//  console.log(data[1].name)


console.log(literals);

console.log(Object.keys(literals));     //for all keys
console.log(Object.values(literals));   // for all values
console.log(Object.entries(literals));   // to create all value into different array
console.log(literals.hasOwnProperty('name'));   // to check props available or not



