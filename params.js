//Default Params 
//if we do not pass a param we want a default (sometimes)
//order is importent

function rollDie(numSides) {
  return Math.floor(Math.random() * numSides) + 1
}

// console.log(rollDie(6))
console.log(rollDie())

// function rollDie(numSides) {
//   if (numSides === undefined) { // If we do not provide entry for the  numSides, leave the number 6 by default
//     numSides = 6

//   }
//   return Math.floor(Math.random() * numSides) + 1
// }

//If we do not provide entry for the numsides, leave the number 6 by default
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1
}

//ORDER MATTERS HERE

// function greet(msg, person) {
//   console.log(`${msg} , ${person}`)
// }

// greet("hello", "Mozafar")

// function greet(msg = "Hey there", person) { // همیشه باید پارامتر هایی رو که دیفالت دارند آخر بنویسیم
//   console.log(`${msg} , ${person}`)
// }

// greet("Mozafar") // Mozafar , undefind    // person => undefind 
// because our function can not understand that "Mozafar" is a name of person and msg => "Mozafar"

// function greet(person, msg = "Hey there") {
//   console.log(`${msg} , ${person}`)
// }

// greet("Mozafar")

function greet(person, msg = "Hey there", punc = "!") {
  console.log(`${msg} , ${person}${punc}`)
}
//order is very importent

// greet()   // person => undefind
// greet("Mozafar")   //Hey there  Mozafar!
greet("Mozafar", "Heya")  // Heya , Mozafar
greet("Mozafar", "hellooooo", "!!!!!")   // hellooooo , Mozafar!!!!!
