const name="hitesh"  //one way to declare string
const repocount=50

console.log(name+repocount+" value")  //outdated use backticks  called string interpolation

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName= new String('shadowfight')   //another way to declare string
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(name.length)
console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))
console.log(gameName.substring(0,4))
console.log(gameName.slice(-8,4))   //slice is used as we can  handel it by negative values also
const url="https://hitesh%20sharma"
console.log(url.replace('%20','_'))
console.log(url.includes('hitesh'))