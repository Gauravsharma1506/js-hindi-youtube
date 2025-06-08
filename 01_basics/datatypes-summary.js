// primitive

// 7 types: string ,Number,null,undefined,Boolean,symbol,BigInt

const score=100
const scoreValue=100.2

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);
const bigNumber=234234323423423n;




// Reference (Non primitive)

// Array,object,Functions 

let heros=["shaktimaan","naagraj","doga"];
let myObj={
    name:"Hitesh",
    age:21,
}

const myFunction=function(){
    console.log("hello word");
}

console.log(typeof bigNumber);  //non primitives ka typeof object hi hota h