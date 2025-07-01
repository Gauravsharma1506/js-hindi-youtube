//array-----------

const myArr=[1,2,3,4,5]
// const myHeros=["harkirath","ironman"]

// const myArr2= new Array(1,2,3,4,5)
// console.log(myArr[0])

//array methods----------

// myArr.push(8)
// myArr.push(7)
// myArr.pop()                 //remove last element of array

// myArr.unshift(9)            //add 9 at index 0 of array
// myArr.shift()               //pop the element placed at index 0
// console.log(myArr)

// console.log(myArr.includes(2))          //return boolean value after checking 2 is present or not
// console.log(myArr.indexOf(8))
// console.log(myArr.indexOf(800))         //return -1 in this case

// const newArr= myArr.join()      //join binds and converts the array into string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof(newArr))


// slice,splice------------------------
 console.log("A",myArr)

 const myn1=myArr.slice(1,3)//  slice will not affect actual array and exclude 3 here
 console.log(myn1)
 console.log("B",myArr)

 const myn2=myArr.splice(1,3)// splice will affect actual array and inclue index 3 also
 console.log(myn2)
 console.log("C",myArr)