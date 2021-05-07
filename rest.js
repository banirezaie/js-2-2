
// function sum() {
//   console.log(arguments)
// }
// sum()

// function sum(...nums) {
//   return console.log(
//     nums,
//     nums.reduce((acc, curr) => acc + curr)
//   )
// }

// sum(1, 2, 3, 4, 5, 6, 100)

// ORDER MATTERS:

function raceResults(gold, silver, ...others) {
  console.log(`gold medal goes to: ${gold}`)
  console.log(`silver medal goes to: ${silver}`)
  console.log(`Thanks to: ${others}`)
}
// raceResults("Schumacher")
// raceResults("Schumacher", "Hamilton")
// raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")

// function raceResults2(...others) {
//   console.log(`gold medal goes to: ${others[0]}`)
//   console.log(`silver medal goes to: ${others[1]}`)
//   console.log(`Thanks to: ${others}`)
// }
// raceResults2("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")