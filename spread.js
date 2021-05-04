//ABSOLUTELY ESSENTIAL FOR REACT JS

// Math.max(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43) //?
// Math.min(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43) //?

const nums = [13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43]

// console.log(Math.max(nums))

// console.log(Math.max(...nums))
// console.log(Math.min(...nums))
// console.log(nums)
// console.log(...nums)

// console.log("Hello")
// console.log(..."Hello")
// console.log("H", "e", "l", "l")

/*       ARR           */

// const cats = ["Persian", "British", "Devon"] //source code
// const dogs = ["Greyhound", "Saluki", "Retriever"]

// const allPets = [...cats] //functional code
// console.log(cats, allPets)

// allPets.push("Scottish fold")
// console.log(cats, allPets)

// const allPets = [1, 2, 3, ...cats, ...dogs, "Dachshund"]
// console.log(allPets)
// const hi = "hello"
// console.log(hi, ...hi)

/*            OBJ                 */

const foxhound = { legs: 4, family: "English, American" }
const bergamasco = { isFurry: true, family: "Persian sheepdog breed" }

// const rareDogs = { ...foxhound, color: "brown white black" }
// console.log(rareDogs)

// const rareDogs = { ...foxhound, ...bergamasco }
// console.log(rareDogs)

// const rareDogs = { ...foxhound, ...bergamasco, family: "mixed" }
// console.log(rareDogs)

// ARR and strings spread into an object:

// console.log({ ...[1, 2, 3] })
// console.log({ ..."Hello" })

// ANOTHER EXAMPLE:

// const dataFromForm = {
//   email: "fake@gmail.com",
//   password: "fakeFake123",
//   username: "fakeFunk",
// }

// const updateUser = {
//   ...dataFromForm,
//   id: "_1234",
//   isAdmin: false,
//   email: "notFake@gmail.com",
// }
// console.log(updateUser)
