// Immediately Invoked Function Expression(IIFI)


// named iifi

( function code(){
    console.log(`DB CONNECTED`);
    
}) ();

((name) => {
   console.log(`DB CONNECTED TWO ${name}`);
   
})("Sanjay")