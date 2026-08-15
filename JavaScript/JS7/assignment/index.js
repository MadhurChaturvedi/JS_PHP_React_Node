function firstLatter(prop) {
    if (typeof prop !== "string") {
        alert("Not a string");
    }

    return prop[0];
}

let input = prompt("Enter anything, I will provide you the first letter");

let result = firstLatter(input);

alert(result);