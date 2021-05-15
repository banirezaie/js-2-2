//in quiz7.html you will find 6 li elements, two of which have the 'highlight' class applied to them.

// 1-please use JS and classList property to invert which elements have the highlight class.
//basically iterate over all the li elements and toggle the class of highlight on each one.

// = please as second exerse add class of highlight to the elements which they exclude this class
//you code goes here:


const newli = document.querySelectorAll("li")
console.log(newli)

//for    of
// for(let li of newli){
//     if(li.classList.contains("highlight")){
//         li.classList.remove("highlight")
//     }else{
//         li.classList.add("highlight")
//     }
// }


// for(let li of newli){
//     li.classList.toggle("highlight")
// }


// forEach 
// newli.forEach(element => element.classList.toggle("highlight"))


// //====================================
// newli.forEach(element => console.log(element.classList.contains("highlight")))
// newli.forEach(element => element.classList.toggle("highlight"))
// newli.forEach(element => console.log(element.classList.contains("highlight")))





//2-


// newli.forEach(element =>{
//     if(!element.classList.contains("highlight")){
//         element.classList.add("highlight")
//     }
// })










