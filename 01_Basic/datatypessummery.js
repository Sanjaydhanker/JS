/*
primitive datatype=>

    7:String , Number , Boolean ,null , undefined ,Symbol ,BigInt
*/


const number=87                   //typeof number
const numberValue=88              //typeof number
const inLoggedIn=false            //typeof boolean
const temp=null                   //typeof null
let userId;                       //typeof undefined

const id=Symbol('123')              //typeof symbol
const anotherid=Symbol('123')

// console.log(id === anotherid);
// console.log(typeof id);
// console.log(typeof anotherid);

const bigNumber=983247667928784n    //typeof bigint
// console.log(typeof bigNumber);



/*
non primitive (reference type)

Array ,Objects ,Functions

*/


const myArr=["thor","IronMan" ,"CaptainAmerica","Hulk"]        //typeof object

let myObj={                                             //typeof object
    myName:"Sanjay",
    myAge:20,
    gmail:"sanjaydhanker@gmail.com"
    

}

let myFunction=function(){                  //typeof function
    console.log("Hello Sanjay");
    
}
// console.table([myArr,myObj])
// console.log(typeof myObj);
// console.log(typeof myArr);


//+++++++++++++++++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (primitive)  copy milega   and  heap (non primitive)  reference milega

let myName="sanjay"


let myFirstName=myName
myFirstName="Sanju"


// console.log(myFirstName);
// console.log(myName);



let myDetail={
    name:"sanjay",
    age:20
}

let detail=myDetail
detail.name="Sanju"

console.log(myDetail.name);

console.log(detail.name);

