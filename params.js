// function rollDie(numSides) {
//   return Math.floor(Math.random() * numSides) + 1
// }

// console.log(rollDie(6))
// console.log(rollDie())

// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6
//   }
//   return Math.floor(Math.random() * numSides) + 1
// }

// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1
// }

//ORDER MATTERS HERE

// function greet(msg, person) {
//   console.log(`${msg} , ${person}`)
// }

// greet("hello", "Mozafar")

// function greet(msg = "Hey there", person) {
//   console.log(`${msg} , ${person}`)
// }

// greet("Mozafar")

// function greet(person, msg = "Hey there") {
//   console.log(`${msg} , ${person}`)
// }

// greet("Mozafar")

// function greet(person, msg = "Hey there", punc = "!") {
//   console.log(`${msg} , ${person}${punc}`)
// }

// greet("Mozafar")
// greet("Mozafar", "Heya")
// greet("Mozafar", "hellooooo", "!!!!!")
