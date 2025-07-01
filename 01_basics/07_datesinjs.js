//dates
let myDate= new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))

// let myCreatedDate= new Date(2025,0,26)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate2= new Date(2025,0,26,5,3)
// console.log(myCreatedDate2.toLocaleString())

// let myCreatedDate3= new Date("2025-01-27")
// console.log(myCreatedDate3.toLocaleString())


// let myCreatedDate4= new Date("01-29-2025")
// console.log(myCreatedDate4.toLocaleString())


// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate4.getTime())
// console.log(Math.floor(Date.now()/100))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long",
})
