






let persone = {
    name: "Md.Pranto Islam",
    age: 32,
    mobile: "01979728818",
    color: ["red","yellow","green","blue"],
    roll: 30
}



// Object Looping
for(let person in persone){
    // console.log(persone[person]);
}



// console.log(persone.color[1])

// Fine Key and Value

console.log(Object.keys(persone));
console.log(Object.values(persone));
// console.log(Object.values(persone));

// for (let i = 0; i < length; i++) {}



console.log(persone.color)
let len = persone.color.length
console.log(len)
for (let i = 0; i < len; i++) {
    console.log(persone.color[i].toUpperCase());
}


















