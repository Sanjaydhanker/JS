//map

const map = new Map()
map.set("name" , "Sanjay")
map.set("age" , 20)
map.set("name" , "sanjay")   //map dont use 

// console.log(map);

for (const key of map) {
    console.log(key);
    
}

for (const [key , value] of map) {
    console.log(key , ':-' , value);
    
}
