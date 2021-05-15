// const allImages = document.getElementsByTagName("img")
// console.log(allImages) //show us HTMLCollection , it's not array
// for (let img of allImages) {
//   img.src =
//    "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"}

//     const squareImages = document.getElementsByClassName("square")
//     console.log(squareImages)

// for (let img of squareImages) {
//   img.src =
// "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"}

// const notExisted =document.getElementById("alaki")
// console.log(notExisted)  //Null   => HTMLCollection khali

//QUERY selector 

// const allLinks = document.getElementsByTagName('a')
// console.log(allLinks)
//HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a.mw-redirect, a, a, a, a]

//querySelectorAll() ==> method can be used to access all elements which match with a specified CSS selector.
//To return all matches, querySelectorAll has to be used
//querySelector() ==> methodcan only be used to access a single element
// to return a single match, querySelector is used.
// const links = document.querySelectorAll("p a")
// console.log(links)
//NodeList(17) [a, a, a, a, a, a, a, a, a, a, a, a, a.mw-redirect, a, a, a, a]

// for (let link of links) {
  // console.log(link.href)
// }

//INNER TEXT HTML


// console.log(document.querySelectorAll('b'))
// let p = document.querySelectorAll('p')
// console.log(p)
// for (let ps of p) {
  //innerText returns all text contained by an element and all its child elements.
  // ps.innerText = "<b>IMD team is incredible</b>"
  //textContents is all text contained by an element and all its children that are for formatting purposes only.
  // ps.textContent = "<b>IMD team is fantastic</b>"
  //innerHtml returns all text, including html tags, that is contained by an element.
  // ps.innerHTML = "<b>IMD team is fascinating by coding</b>"
// }

//ATTRIBUTE SELECTOR

// let newBanner = document.querySelector('img')
// newBanner.id = "newBanner"
// newBanner.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmEvc5X462ESJGvN2pGq3vScK4hDkm6g-QnVntlsz8XHdsGerBazKDoew0YnXgz6jXfQ&usqp=CAU"
// newBanner.alt = "dumb chicken"
// console.log(newBanner)

// let newBanner = document.querySelector("img").getAttribute('id') //get just one paramert
// let newBanner = document.querySelector("img").setAttribute('id', 'newBanner') // set just towe paramert
// console.log(newBanner)

//STYLE

// const allLinks = document.querySelectorAll("a")
// console.log(allLinks)  // all links a
// console.log(allLinks.style.backgroundColor = "pink" )
// for (let link of allLinks) {
  // console.log(link.style)
  // link.style.color = "olive" //inline style     => js
  // link.style.textDecorationColor = "magenta"
  // link.style.textDecorationStyle = "wavy"
// }

//ClassList

// const h2 = document.querySelector("h2")
// console.log(h2)
// h2.setAttribute("class", "purple") 
// h2.setAttribute("class", "border")

// const currentClasses = h2.getAttribute("class")
// console.log(currentClasses)

//we can instead do:
// h2.classList      please check the methods under classList in your console :)

// h2.classList.add("purple")
// h2.classList.add("border")

// h2.classList.remove("border")

// console.log(h2.classList.contains("border")) //for test reasons     => output is a boolean

// h2.classList.toggle("purple") //test it in console      => it is useful when we want to toggle some items or fade them


//PROPERTIES AND METHODS

// const firstBold = document.querySelector("b")
// console.log(firstBold)

// console.log(firstBold.parentElement) // tag p
// console.log(firstBold.parentElement.parentElement) // body
// console.log(firstBold.parentElement.parentElement.parentElement) //html

// const paragraph = firstBold.parentElement
// console.log(paragraph.children) //HTMLCollection(8) [b, b, a, a, a, a, a, a]
// console.log(paragraph.children[0])
// console.log(paragraph.children[3])

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
  // "https://i2-prod.mirror.co.uk/incoming/article21668272.ece/ALTERNATES/s615/0_pepper-dog-1.jpg"
//appendChild
//don't forget body!!!
// document.body.appendChild(newImg)
// it is your very last element of the body
// newImg.classList.add("square")

// const newH3 = document.createElement("h3")
// newH3.innerText = "I am a new h3"
// document.body.appendChild(newH3)

//Append => add in the end of       Prepend => add in the beginning

// const p = document.querySelector("p")
// p.innerText="hihjghjghfghfhfcgcdfgdxdfzsdxgfhbjn/."
// p.append("I am new text hooooooooooorrrraaaaayyyyy", "new new new new new new")

// const newB = document.createElement("b")
// p.append("Hi!")
// console.log(newB)
// newB.prepend("Hi!")

//insertAdjacentElement
//check MDN for those 4 possible actions

const h2 = document.createElement("h2")
h2.append("adorable chickens")
// console.log(h2)
const h1 = document.querySelector("h1")

h1.insertAdjacentElement("beforebegin", h2)    //Before the targetElement itself.
// h1.insertAdjacentElement("afterbegin", h2)   //Just inside the targetElement, before its first child
// h1.insertAdjacentElement("beforeend", h2)    // Just inside the targetElement, after its last child.
// h1.insertAdjacentElement("afterend", h2)    // After the targetElement itself.
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
