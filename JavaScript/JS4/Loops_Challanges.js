// Calcuate sum if first n number 
// let n = 5;
// let sum = 0;

// for (let i = 0; i <= 5; i++) {
//     sum = sum + i;
// }

// console.log(sum);


// calculate number of sum from m to n 

// let m = 2;
// let n = 5;

// sum = 0;

// for (let i = m; i <= n; i++) {
//     sum = sum + i;
// }

// console.log(sum);


//Odd Number 

// let n = 5;
// let i = 0;

// while (i <= n) {
//     if (!(i % 2 == 0)) {
//         console.log(i)
//     }
//     i++;
// }

// create a nuber knock Game 

let computerNumber = 6;
let guss = null;
// guss = Number(prompt("Guss the Number! "));


while (guss !== computerNumber) {
    guss = Number(prompt("Guss the Number! "));
    if (isNaN(guss)) {
        alert("number is Invalude Pls again !")
    } else if (guss < computerNumber) {
        alert("Number is Too small")
    } else if (guss > computerNumber) {
        alert("Too High")
    } else {
        alert("You Guss is Correct Cogralatutauon")
    }

}




