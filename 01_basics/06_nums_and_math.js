const score=400

let balance=new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber1=12.99878
const otherNumber2=123.99878
// console.log(otherNumber1.toFixed(2))

// console.log(otherNumber1.toPrecision(3))
// console.log(otherNumber2.toPrecision(2))

const hundred=1000000
// console.log(hundred.toLocaleString('en-In'))

// ++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.645))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(2,3,1,5,7))
// console.log(Math.max(2,3,1,5,7,4))

console.log(Math.random()) //give value between 0 and 1
console.log(Math.random()*10)+1  //gives value between 1 to 10
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=30
console.log(Math.floor(Math.random()*(max-min))+min)