//singleton
// Object.create       //constructor method

const mysym= Symbol("key1")
// object literals
const Jsuser={
    name:"hitesh",
    "full-name":"Hitesh Sharma",
    age:21,
    [mysym]:"mykey1",
    mysym:"mykey1",//this is not symbol it should be in[] in key its type is string 
    location:"Bhiwani",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

//two ways to access object-----
console.log(Jsuser.email)
console.log(Jsuser["email"]) //as key is consider as string by default
console.log(Jsuser["full-name"])// we use second way of accessing in this case as we cannot access
                                // full-name with dot 
// console.log(Jsuser."full-name")         //this will give error


// console.log(Jsuser[mysym])// to access symbol

// Jsuser.email="hitesh@chatgpt.com"
//  Object.freeze(Jsuser)// to freeze or lock the value of keys of object
 
// Jsuser.email="hitesh@microsoft.com"//not work as we freeze it above lets see
// console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("hello Js user")
}

Jsuser.greetingTwo=function(){
    console.log(`hello Js user ${this.name}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())

