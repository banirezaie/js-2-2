//please write some JS codes to make the rainbow colored
//use this array of colors:
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"] //PLEASE DON'T CHANGE THIS LINE!
//your task is to select all spans, iterate over them, assign them each one of the colors from the colors array.
//the first span should be red, second one orange and so on.
//YOU CODE GOES HERE:

const rainbow = document.querySelectorAll("span")
//solution 1:
// console.log(rainbow)
let count = 0
for (let rainbowColor of rainbow) {
  console.log(rainbowColor)
  rainbowColor.style.color = colors[count]
  count++
}

//solution 2:
// const example = rainbow.forEach((span, index) => {
//   console.log(index)
//     span.style.color = colors[index]
// console.log(span.style)
// })

//solution 3 with destruction
// const example = rainbow.forEach(
//   ({ style }, index) => (style.color = colors[index])
// )