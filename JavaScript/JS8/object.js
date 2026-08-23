let obj = {
    "firstname": "madhur",
    start: () => console.log("Start The Function"),
    "full name": function () {
        console.log(this.firstname)
    }
}
// console.log(obj.firstname)
// console.log(obj["name"])
// obj["start"]()
// obj["full name"]

// object is mutable which means wae can add and remove propertyes
obj.email = "madhurchaturvedi2000@gmail.com"
//deleate and elemnt of the object  
delete obj.email
// console.log(obj)
obj['full name']()

let obj2 = {};

let arobj = Object.assign(obj2, obj) // return modified array
// console.log(arobj)

let obj3 = { ...obj2, ...obj }
console.log(obj3)


// seal and freez

let newobj = {
    name: "gta",
    age: 24,
}


let freez = Object.freeze(newobj) // object freez mean from now on you can not add new element of this 
freez.age = 12 // it will not work becuase of freez
console.log(freez);


/* seal 
Object.seal basically you can not add or deleate and new 
element but you can update existing elemnt or change value
*/

console.log(newobj.hasOwnProperty("age")) // so we pass the keys return true or false