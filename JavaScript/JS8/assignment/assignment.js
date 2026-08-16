// Create a program to take full name from user and generate a username start
// with @, followed by their full name and ends with underscore followed by the
// length of full name.

// let personname = String(prompt("Enter you name"))
// let username = `@${personname}`
// alert(username)

// 2. Take a string and a character from the user and:
// a) count how many times that character appears in the string.
// b) Case-Insensitive Version
// c) Find All Occurrence Positions

// let word = String(prompt("Enter the word")).toLowerCase()
// let character = String(prompt("Enter the character")).toLowerCase()
// let countCharacter = 0;
// let indexOccurace = "";

// if (!(word.includes(character))) {
//     alert("There is not no Charater")
// }
// else {
//     let e = ""
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == character) {
//             countCharacter++;
//             indexOccurace = indexOccurace + i + ",";
//         }
//     }
//     alert(countCharacter)
//     alert(indexOccurace)
// }


// 3. Count the words present in a given string.

// 
let query = String(prompt("Entet the String"))
let count = 0;
let mod = query.trim().split(" ")

for (let i = 0; i < mod.length; i++) {
    count = count + 1;
}

// alert(count)
alert(count);
