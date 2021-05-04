//TODO Uncomment each section and give reasons for the output

/* 
function rollDie(numSides) {
  return Math.floor(Math.random() * numSides) + 1
}

console.log(rollDie(6)) 
console.log(rollDie()) //=> NaN
 */

/* 
function rollDie(numSides) {
	if (numSides === undefined) {
		numSides = 6;
	}

	return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie()); //=> A random number between 1, 6
 */

/* 
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1
}

console.log(rollDie()); //=> A random number between 1, 6
 */

//! ORDER MATTERS HERE

/* 
function greet(msg, person) {
  console.log(`${msg} , ${person}`)
}

greet("hello", "Mozafar") //=> hello , Mozafar
 */

/* 
function greet(msg = "Hey there", person) {
	console.log(`${msg} , ${person}`);
}

greet("Mozafar"); //=> Mozafar , undefined
 */

/* 
function greet(person, msg = "Hey there") {
  console.log(`${msg} , ${person}`)
}

greet("Mozafar") //=> Hey there , Mozafar
 */

/* 
function greet(person, msg = "Hey there", punc = "!") {
	console.log(`${msg} , ${person}${punc}`);
}

greet("Mozafar"); //=> Hey there , Mozafar!
greet("Mozafar", "hellooooo", "!!!!!"); //=> hellooooo , Mozafar!!!!!
 */