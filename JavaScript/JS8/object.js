let obj = {
    "name": "madhur",
    start: () => console.log("Start The Function"),
    "full name": `${this.name}`
}
console.log(obj.name)
// console.log(obj["name"])
// obj["start"]()
obj["full name"]