
// let arr = ["madhur", 1, true];
// let arr2 = ["max", 2, ["madhur", 26]];
// console.log(arr2[2][0]);
// let arr3 = new Array(1, 2, NaN, undefined, 3.12, true, "Fuck")
// console.log(arr3)
// array is mutable  - indexing in array from 0 to N last ement is -1 -2 -3 -1 0 is type of object

// arrays Method 

let arr = [1, 2, 3, 4, "max"];
console.log(arr.length)
console.log(arr) // original array it add new element from end
let a = arr.push(999)
console.log(arr, "Length " + a)

console.log("\n")
let b = arr.pop() // last element remove does't matter you give paramert or not will remove will remove the elemant from last
console.log(arr)
console.log(b) // it retrun the pop value it will not retrun length original array

console.log("\n")
// Shift and unShift
let c = arr.unshift(7) // it will append element from front of the array
console.log(arr)
console.log(c)//return length of new array 
let d = arr.shift()//it will remove the element from started but also have performance issue some time 
console.log(arr)//return length of new array 
console.log(d)
console.log("\n")



let newArray = arr.slice(1, 5) // it will return new array
console.log(newArray)
arr.splice(3, 2); // it will remove the index of give indexes also it change the originl array be carefull
let e = arr.splice(3, 2);
console.log(arr)
console.log(e) // it will retrun black array 
console.log("\n")


let arr2 = [7, 8];
let arr3 = [9, 0];
let concat = arr2.concat(arr3); //it will not change original array
console.log(arr2) // original 
console.log(concat) // new array retrun 
console.log("\n")

// Spread Oprator

let spreadArr = [...arr2, ...arr3]; // it just make our un Unnecessary code easy by using spread oprator demoted by ...
console.log(spreadArr) // for conate methid actaly the concate methid is not use in js but this ... 
console.log("\n")



// Join
let fruits = ["mango", "litchi", "guava"];
let joinarr = fruits.join(); // it will not chagne on orignal array it will retrun something string
let join2 = fruits.join("🥝") // we can pass parameter too
console.log(fruits)
console.log(joinarr, typeof joinarr)
console.log(join2)
console.log("\n")



// includes
let check = fruits.includes("mango") // it will retrun true/false just like string method
console.log(check)
console.log("\n")


//toString

let str = fruits.toString() // will convert whole array into string and will return new array
console.log(fruits);
console.log(`${str} the type of str - ${typeof (str)}`)
console.log("\n")


// indexOf
let chcker = fruits.indexOf("mango")
console.log(chcker) // of the item is not present it will return -1 else retrun index it wil not change actial array
console.log("\n")



// find
// let test = fruits.find("")❌  //the find worke little differently whe can need to pass function inside of find it will take functionn

let test2 = fruits.find(function (item) {
    if (item == "mango") return true // it also called travesing in dsa each elemnt of visit
})
console.log(test2)
console.log("\n")



//flat
let avangers = ["spiderman", "ironman", ["Thor", "blackPanther", ["hulk"]], "blackWido"];
// console.log(avangers)
console.log(avangers.flat(Infinity)) //it will return new array dont change on original array will will convert the 3d array into single dimanson array 2 is level
console.log("\n")


// reverse
console.log(fruits)
console.log(fruits.reverse()) // it will reverse the whole array and will make changes real array
console.log("\n")


// sort
let array = [6, 2, 5, 7, 1, 54];
array.sort((a, b) => {
    return a - b
}) // this will change on orignal array
console.log(array) // this this out seems wrong when we pass the sting it will sort by alphabatilly like [a,b,c,d....] in number it convert in to string so before it should be converted into string to nuber first then we need to pass function on you sort if you want accending sort a - b or if you desanding order make b - a