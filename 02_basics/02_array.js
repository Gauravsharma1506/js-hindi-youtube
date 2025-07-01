const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["batman","superman","splash"]

// marvel_heros.push(dc_heros)//in js as array can contain all data types object and data structure
// console.log(marvel_heros)    // so marvel_heros array now contain complete array dc_heros 
                        // as new element at index 3 as whole and give output as give 
                        //  [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'splash' ] ]  

                        
// console.log(marvel_heros[3])     
// console.log(marvel_heros[3][1])


// note---- push changes in same but concat gives new array

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)  
//now this will merge them and give
//[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'splash' ]

//we can also use spread rather than concat

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)


// const another_array=[1,2,3,[4,5,6],7,8,[2,3,4,[9,11,33]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("hitesh"))// gives true or false after checking this array is present or not
console.log(Array.from("hitesh"))// to conver into array
console.log(Array.from({name:"Hitesh"}))// interesting as is return empty array as it is 
                                        // not specified is array  of key or value should make


let score1=200
let score2=300
let score3=400

console.log(Array.of(score1,score2,score3))