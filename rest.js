<<<<<<< HEAD
//est looks like spread, but it’s not!

/*ARGUMENTS OBJECT
Available inside every function
It’s an array-like object
•Has a length property
•Does not have array methods like push/pop
Contains all arguments passed to the 
function
Not available inside of arrow functions!
*/

function sum() {
  console.log(arguments) // arguments arenot string not object not array not spread
}
=======
// function sum() {
//   console.log(arguments)
// }
>>>>>>> parent of 106c947 (zahra)
// sum()

//rest => ...nums       in arrow function we can't use rest

// function sum(...nums) { // not spread , it mean more than one number soo     ...num => more than one value
//   return console.log(
//     nums,
//     nums.reduce((acc, curr) => acc + curr)
//   )
// }
// sum(1, 2, 3, 4, 5, 6, 100)
// sum( ) //it show us array but not array it just look-like array

// ORDER MATTERS:

// rest can be doesn't exist but silver should be exist
//rest pramert must be last
function raceResults(gold, silver, ...others) {
  console.log(`gold medal goes to: ${gold}`)
  console.log(`silver medal goes to: ${silver}`)
  console.log(`Thanks to: ${others}`)
}
// raceResults("Schumacher")
// raceResults("Schumacher", "Hamilton")
// raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")

function raceResults2(...others) {
  console.log(`gold medal goes to: ${others[0]}`)
  console.log(`silver medal goes to: ${others[1]}`)
  console.log(`Thanks to: ${others}`) //and slice
}
raceResults2("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")