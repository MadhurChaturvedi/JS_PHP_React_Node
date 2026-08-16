// we use Backticks in code `` <- this is called String litricals
// the value/variable we use inside on the litrals called String interpolation

let name = "madhur"
let age = 25
let nameAge = `my Name is ${name} and My age is : ${age} `
// console.log(nameAge)

// String Constructor method to create strign

// let str = new String(1);
// type is Object whey pata nhi
// console.log(typeof str)
// console.log(str)


//String are imutable you can not change

let s = "max"

let result = s + s[2] + "n";
// console.log(s)

// offLoop

// for (let ch of s) {
//     console.log(`${ch}\n`)
// }


// Methods string

let str = "Abcde"
let space = "      Java is Good langugae Java is also knows as Programming Language!"
console.log(str)
console.log(str.length) // 5
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())
console.log(str.toUpperCase())
console.log(space)
console.log(space.trim()) // it will remove lefe and right sive of the space but in midlle of the string
console.log(str.concat(space.trim()))
console.log(space.includes("Java")) // it will return either true/false
console.log(space.indexOf("J"))
console.log(str.charAt(str.length - 1))
console.log(space.replace("Java", "C++")) // this replace only do one's not many so for many use replaceAll
console.log(space.replaceAll("Java", "C++"))
console.log(space.slice(6))

//split 
console.log(space.split(/*if you dont pass any thing will split whole string*/))
console.log(space.trim().split("")) // this will split the each charater into array 
console.log(space.trim().split("a")) // this will split the each charater into array 