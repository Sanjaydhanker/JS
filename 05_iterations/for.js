//for loop

for (let i = 0; i <= 10; i++) {
  const element = i;

  if (element == 5) {
    // console.log("5 number");
  }

  // console.log(element);
}



// for (let i = 1; i <= 10; i++) {
//   const element = i;
//   for (let j = 1; j <= 10; j++) {
//     const element2 = j;
//     console.log(element * element2);
//   }
//   console.log(" ");
  
// }

// for (let i = 1; i <= 10; i++) {
//   let row = ""; // हर row के लिए empty string
//   for (let j = 1; j <= 10; j++) {
//     row += `${i * j}\t`; // \t से columns separate होंगे
//   }
//   console.log(row); // हर row एक बार में print होगी
// }


for (let i = 1; i <= 10; i++) {

    // console.log(`Value ${i}`);
    

   for (let j = 1; j <= 10; j++) {
//    console.log(`${i} * ${j} = ${i * j}`);
   
    
   }
    
}

// array with for loop

const myHero = ["Shaktiman" , "Krish" , "Minnal Murali"]

for (let i = 0; i < myHero.length; i++) {
    const element = myHero[i];
    // console.log(element);
    
    
}

//break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 6){
        console.log("Detected 6");
        
        break;
        
    }
console.log(`value of i is ${i}`);

    
}

//continue 
for (let i = 1; i <= 20; i++) {
    if(i == 6){
        console.log("Detected 6");
        
        continue;
        
    }
console.log(`value of i is ${i}`);

    
}