//ABSOLUTELY ESSENTIALFOR REACT JS (کاملا ضروری برای ری اکت) 
/* SPREAD:
spread syntax allows an iterable such as an array to be expanded in places
where  zero or more arguments (for function calls) or elements (for array literals)
are expected , or an object experssion to be expanded in places where zero or more
key- value pairs(for object literals) are expected.
*/ 


// Math.max(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43) // show max number
// Math.min(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43) // show min number

const nums = [13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43]

//  console.log(Math.max(nums)) //NaN

//console.log(Math.max(...nums)) //spread 
// console.log(Math.min(...nums))
//اسپریت برای هر چیزی واکنش متفاوتی دارد
console.log(nums)
console.log(...nums)

// console.log("Hello")
// console.log(..."Hello")
// console.log("H", "e", "l", "l")

/*       ARR           */

<<<<<<< HEAD
const cats = ["Persian", "British", "Devon"] //source code
const dogs = ["Greyhound", "Saluki", "Retriever"]

//
// const allPets = [...cats] //functional code  => spread in array 
=======
// const cats = ["Persian", "British", "Devon"] //source code
// const dogs = ["Greyhound", "Saluki", "Retriever"]

// const allPets = [...cats] //functional code
// console.log(cats, allPets)
>>>>>>> parent of 106c947 (zahra)

// console.log(cats, allPets)
// console.log(cats)
// allPets.push("Scottish fold")
// console.log(cats, allPets)

const allPets = [1, 2, 3, ...cats, ...dogs, "Dachshund"]
// console.log(allPets)
const hi = "hello"
// console.log(hi, ...hi)

// console.log([..."Hello"]) // we have array of each letter is the string Hello.
// console.log({..."Hello"}) // we have object of each letter is the string Hello.
 

/*            OBJ                 */

const foxhound = { legs: 4, family: "English, American" }
const bergamasco = { isFurry: true, family: "Persian sheepdog breed" }

// const rareDogs = { ...foxhound, color: "brown white black" }
// console.log(rareDogs)

// const rareDogs = { ...foxhound, ...bergamasco } // it write the seconde family => { legs: 4, family: 'Persian sheepdog breed', isFurry: true }
// console.log(rareDogs)

// const rareDogs = { ...foxhound, ...bergamasco, family: "mixed" }
// console.log(rareDogs)

<<<<<<< HEAD

// ARR and strings spread into an object:

// console.log({ ...[1, 2, 3] }) //{ '0': 1, '1': 2, '2': 3 }
// console.log({ ..."Hello" }) //{ '0': 'H', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
=======
// const rareDogs = { ...foxhound, ...bergamasco, family: "mixed" }
// console.log(rareDogs)

// ARR and strings spread into an object:

// console.log({ ...[1, 2, 3] })
// console.log({ ..."Hello" })
>>>>>>> parent of 106c947 (zahra)

// ANOTHER EXAMPLE:

const dataFromForm = {
  email: "fake@gmail.com",
  password: "fakeFake123",
  username: "fakeFunk",
}  

const updateUser = {
  ...dataFromForm,
  id: "_1234",
  isAdmin: false,
  email: "notFake@gmail.com",
}
console.log(updateUser)
