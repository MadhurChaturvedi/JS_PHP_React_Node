let person = {
    name: "max",
    age: 23,
    city: "goa"
}

// insertation
person["email"] = "max@gmaile.com";
delete person.city


// //for object we can only use forin loop
// for (let key in person) {
//     console.log(`value of ${key} is ${person[key]}`)
// }




let Obj = {
    name: "madhur",
    middle: "mohan",
    last: "chaturvedi",
    // getFullName: function () {
    //     return `${this.name} ${this.middle} ${this.last}`
    // }
}

// console.log(Obj.g)
// let fullName = Obj.getFullName();
// console.log(fullName);

let fullName = ({ name, middle, last }) => {
    return `${name} ${middle} ${last}`
}

let result = fullName(Obj);

// console.log(result)


// let keys = Object.keys(Obj).length;
// console.log(keys)



let products = [
    { id: 1, name: "Samsung" },
    { id: 2, name: "Iphone" },
    { id: 3, name: "nokia" }
];

function Search(products, searchKeyWord) {
    let filteredProudt = products.filter((obj) => {
        return obj.name.toLowerCase().includes(searchKeyWord.toLowerCase())
    })

    console.log(filteredProudt)
}


Search(products, "sam");
