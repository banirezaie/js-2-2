// const allImages = document.getElementsByTagName("img")
// console.log(allImages)
// for (let img of allImages) {
//   img.src =
//     "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80"
// }

//     const squareImages = document.getElementsByClassName("square")
//     console.log(squareImages)

// for (let img of squareImages) {
//   img.src =
//     "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80"
// }

//QUERY

// const links = document.querySelectorAll("p a")
// console.log(links)
// for (let link of links) {
//   console.log(link.href)
// }

//INNER TEXT HTML

// const p = document.querySelectorAll('p')
// console.log(p.innerText)
// console.log(p.textContent)
// for (let ps of p) {
//   ps.innerText = "<b>IMD team is incredible</b>"
//   ps.textContent = "<b>IMD team is fantastic</b>"
//   ps.innerHTML = "<b>IMD team is fascinating by coding</b>"
// }

//ATTRIBUTE SELECTOR

// let newBanner = document.querySelector('img')
// newBanner.id = "newBanner"
// newBanner.src =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// newBanner.alt = "dumb chicken"
// console.log(newBanner)

// let newBanner = document.querySelector("img").setAttribute('id', 'newBanner')
// console.log(newBanner)

//STYLE

// const allLinks = document.querySelectorAll("a")

// for (let link of allLinks) {
//   console.log(link.style)
//   link.style.color = "olive" //inline style     => js
//   link.style.textDecorationColor = "magenta"
//   link.style.textDecorationStyle = "wavy"
// }

//ClassList

// const h2 = document.querySelector("h2")
// console.log(h2)
// h2.setAttribute("class", "purple")

// h2.setAttribute("class", "border")


//we can instead do:
// h2.classList      please check the methods under classList in your console :)

// h2.classList.add("purple")
// h2.classList.add("border")

// const currentClasses = h2.getAttribute("class")
// console.log(currentClasses)

// h2.classList.remove("border")
// console.log(h2.classList)

// h2.classList.contains("border")       //for test reasons     => output is a boolean

// console.log(h2.classList.contains("border"))

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
// console.log(paragraph.children[3])

// const squareImg = document.querySelector(".square")
// console.log(squareImg)
// // console.log(squareImg.nextSibling)
// console.log(squareImg.nextElementSibling)
// // console.log(squareImg.previousSibling)
// console.log(squareImg.previousElementSibling)

//createElement

// const newImg = document.createElement("img")
// console.dir(newImg)
// newImg.src =
//   "https://images.unsplash.com/photo-1556796879-160fd67614ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"

// //appendChild
// //don't forget body!!!
// document.body.appendChild(newImg)
// // it is your very last element of the body
// newImg.classList.add("square")

// const newH3 = document.createElement("h3")
// newH3.innerText = "I am a new h3"
// document.body.appendChild(newH3)

//Append

// const p = document.querySelector("p")
// p.append(
//   "I am new text hooooooooooorrrraaaaayyyyy",
//   "<b>second append is here</b>"
// )

// const newB = document.createElement("b")
// newB.append("Hi!")
// console.log(newB)
// // p.append(newB)
// p.prepend(newB)
// // p.append(newB)

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
