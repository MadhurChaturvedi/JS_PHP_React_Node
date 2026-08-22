let obj = {
    "name": "madhur",
    start: () => console.log("Start The Function"),
    "full name": `${this.obj}`
}
console.log(obj.name)
// console.log(obj["name"])
// obj["start"]()
obj["full name"]

// object is mutable which means wae can add and remove propertyes
obj.email = "madhurchaturvedi2000@gmail.com"
//deleate and elemnt of the object  
delete obj.email

console.log(obj)