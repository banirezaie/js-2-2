//in quiz7.html you will find 6 li elements, two of which have the 'highlight' class applied to them.

// 1-please use JS and classList property to invert which elements have the highlight class.
//basically iterate over all the li elements and toggle the class of highlight on each one.

// = your end result will be all blue ish ones will be purple, and all purples will be blue :)
//2- please as second exercise add class of highlight to the elements which they exclude this class
//you code goes here:


const li = document.querySelectorAll("li")

// forEach      // for (of)

// li.forEach(element => console.log(element.classList.contains("highlight")))
//solution 1
// li.forEach(element => element.classList.toggle("highlight"))

// li.forEach(element => console.log(element.classList.contains("highlight")))

// console.log(li)

//solution 2
// for (let element of li) {
//   element.classList.toggle("highlight")
// }


//2-

// li.forEach(element => {
//   if (!element.classList.contains("highlight")) {
//     element.classList.add("highlight")
//   }
// })