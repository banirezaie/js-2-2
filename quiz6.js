//please write some JS codes to make the rainbow colored
//use this array of colors:
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"] //PLEASE DON'T CHANGE THIS LINE!
//your task is to select all spans, iterate over them, assign them each one of the colors from the colors array.
//the first span should be red, second one orange and so on.
//YOU CODE GOES HERE:

//1th way

let newSpan = document.querySelectorAll("span")

// count = 0
// for (let span of newSpan){
//     span.style.color = colors[count]
//     count++
// }


// 2th way

// const  new1 = newSpan.forEach((span , index) => {
    // console.log(span , index)
    // span.style.color = colors[index]
// })



//3th way

// const  new1 = newSpan.forEach(
//     ({style}, index) => (style.color = colors[index])
// )

// console.log(span.style)