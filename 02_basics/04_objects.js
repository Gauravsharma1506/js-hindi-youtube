// const tinderUser= new Object()   //singleton way

const tinderUser={} 

tinderUser.id="abc123"
tinderUser.name="harsh"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    fullname:{
        username:{
            firstname:"hitesh",
            lastname:"sharma"
        }
    }
}
// console.log(regularUser.fullname.username)
// console.log(regularUser.fullname.username.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}


// const obj3={obj1,obj2}//this is wrong way as this will consider obj1 as 1st element and obj2 as 2nd
// console.log(obj3) 


// const obj4=Object.assign({},obj1,obj2,obj3) //less used

const obj4={...obj1,...obj2,...obj3}//using spread
// console.log(obj4)

const user=[
    {
        id:123,
        email:"h@gmail.com"
    },
     {
        id:123,
        email:"h@gmail.com"
    },
     {
        id:123,
        email:"h@gmail.com"
    },
     {
        id:123,
        email:"h@gmail.com"
    }
]
// console.log(user[1].email) //way to access when values from database as array

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))  //to both keys and values

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))//give boolean result

// ----------------------------------------------------------------------

const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}
// course.courseInstructor       //rather than writting this again and again we write

// const {courseInstructor}=course
// console.log(courseInstructor)  //rather than console.log(course.courseInstructor)
// console.log(courseInstructor)
// console.log(courseInstructor)

// or we can destructure them as

const course1={
    coursename:"js in hindi",
    price:999,
    courseInstructor1:"hitesh"
}
const {courseInstructor1:instructor}=course1 //now we can use instructor rather than courseInsturctor
console.log(instructor)

