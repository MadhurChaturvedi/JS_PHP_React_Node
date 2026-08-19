// sum of arr

let arr = [1, 2, 3, 4, 5, 6];

// Accumulator and current value
let sumarr = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(sumarr)


let array = new Array(25);
let ZeroArray = array.map((item, index) => {
    return item = 0;
})

