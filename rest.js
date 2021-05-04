//TODO Uncomment each section and give reasons for the output

/* 
function sum() {
	console.log(arguments);
}
sum();
 */

/* 
function sum(...nums) {
	return `${nums} => ${nums.reduce((acc, curr) => acc + curr)}`;
}

console.log(sum(1, 2, 3)); //=> 1,2,3 => 6
 */

//! ORDER MATTERS

/* 
function raceResults(gold, silver, ...others) {
	console.log(`gold medal goes to: ${gold}`);
	console.log(`silver medal goes to: ${silver}`);
	console.log(`Thanks to: ${others}`);
}
raceResults("Schumacher");
raceResults("Schumacher", "Hamilton");
raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button");
 */
