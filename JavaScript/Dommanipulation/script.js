/*
1.DOM ✅
2.selection on HTMl element ✅
3.how to change or manupuate HTML ✅
4.Changing CSS with js ✅
5.event Listeners 
*/


// setTimeout(() => {
//     let Paragraph = document.querySelector('p')
//     // console.log(Paragraph)
//     Paragraph.innerHTML = "New Work Don by Me 👋".toUpperCase()
// }, 2000)

let Paragraph = document.querySelector('p')
// console.log(Paragraph)
Paragraph.innerHTML = "New Work Don by Me 👋".toUpperCase()
// Paragraph.style="border:solid;padding:3px"
Paragraph.style.backgroundColor = "#9564DD"
Paragraph.style.padding = "3px"
Paragraph.style.border = "5px dotted red";

let headding = document.querySelector('h1');
headding.style.background = "#2F39A9"
headding.style.color = "yellow"
headding.style.display = "flex"
headding.style.alignItems = "center"
headding.style.justifyContent = "center"


let span = document.querySelector('span');
span.addEventListener("", function () {

})