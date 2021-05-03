// const allImages = document.getElementsByTagName("img")

// for (let img of allImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// }

// const squareImages = document.getElementsByClassName("square")

// for (let img of squareImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// }

//QUERY

// const links = document.querySelectorAll("p a")

// for (let link of links) {
//   console.log(link.href)
// }

//STYLE

// const allLinks = document.querySelectorAll("a")

// for (let link of allLinks) {
//   link.style.color = "olive"
//   link.style.textDecorationColor = "magenta"
//   link.style.textDecorationStyle = "wavy"
// }

//ClassList

// const h2 = document.querySelector("h2")

// h2.setAttribute("class", "purple")

// h2.setAttribute("class", "border")

// const currentClasses = h2.getAttribute("class")
// console.log(currentClasses)

//we can instead do:
// h2.classList      please check the methods under classList in your console :)

// h2.classList.add("purple")
// h2.classList.add("border")

// h2.classList.remove("border")

// h2.classList.contains("border") //for test reasons     => output is a boolean

// h2.classList.toggle("purple") //test it in console      => it is useful when we want to toggle some items or fade them

//PROPERTIES AND METHODS

// const firstBold = document.querySelector("b")
// console.log(firstBold)

// console.log(firstBold.parentElement)
// console.log(firstBold.parentElement.parentElement)
// console.log(firstBold.parentElement.parentElement.parentElement)

// const paragraph = firstBold.parentElement
// console.log(paragraph.children)
// console.log(paragraph.children[0])
// console.log(paragraph.children[0])

// const squareImg = document.querySelector(".square")
// console.log(squareImg)
// console.log(squareImg.nextSibling)
// console.log(squareImg.nextElementSibling)
// console.log(squareImg.previousSibling)
// console.log(squareImg.previousElementSibling)

//createElement

// const newImg = document.createElement("img")
// console.dir(newImg)
// newImg.src =
//   "https://images.unsplash.com/photo-1556796879-160fd67614ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"

//appendChild
//don't forget body!!!
// document.body.appendChild(newImg)
// it is your very last element of the body
// newImg.classList.add("square")

// const newH3 = document.createElement("h3")
// newH3.innerText = "I am a new h3"
// document.body.appendChild(newH3)

//Append

// const p = document.querySelector("p")
// p.append("I am new text hooooooooooorrrraaaaayyyyy", "new new new new new new")

// const newB = document.createElement("b")
// newB.append("Hi!")
// console.log(newB)
// p.prepend("Hi!")

//insertAdjacentElement
//check MDN for those 4 possible actions

// const h2 = document.createElement("h2")
// h2.append("adorable chickens")

// const h1 = document.querySelector("h1")

// h1.insertAdjacentElement("afterend", h2)

//REMOVE

// const firstLi = document.querySelector("li")
// firstLi.removeChild      //it doesn't work

// const ul = firstLi.parentElement
// ul.removeChild(firstLi)

//or if you want to take it in first go you can also:

// const b = document.querySelector("b")
// b.parentElement.removeChild(b)

// or:
// const img = document.querySelector("img")
// img.remove()
