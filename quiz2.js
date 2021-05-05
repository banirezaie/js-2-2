/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
        --> should log a list of nodes with a length of 6
    2. the first div element node
        --> should log the ".site-header" node
    3. the element with id "jumbotron-text"
        --> should log the "#jumbotron-text" node
    4. all the "p" elements of contained inside  the .primary-content element node
        --> should log a list of nodes with a length of 3
*/

const p = document.querySelectorAll("p");
console.log(p);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const selectWithId = document.querySelector("#jumbotron-text");
console.log(selectWithId);

const oldWay = document.getElementById("jumbotron-text");
console.log(oldWay);

const allPInsideClass = document.querySelectorAll(".primary-content p");
console.log(allPInsideClass);

/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for vulnerable!"
*/

document.getElementById("alertBtn").onclick = () => alert("Thanks for visiting Bikes for vulnerable!");

/*
Task 3
=======
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// A random color with rgb

document.getElementById("bgrChangeBtn").onclick = () => changeColor();

const changeColor = () => (document.body.style.backgroundColor = color());
const color = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
const randomNum = () => Math.floor(Math.random() * 255) + 1;

// A random color with hex code

/* 
const changeColor = () => (document.body.style.backgroundColor = color());
const color = () => "#" + randomNum();
const randomNum = () => Math.floor(Math.random() * 16777215).toString(16);
 */

/*
Task 4
======
When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

document.getElementById("addTextBtn").onclick = () => addText();
function addText() {
	const buttons = document.getElementById("buttons");
	const p = document.createElement("p");
	p.append("Read more below.");
	buttons.insertAdjacentElement("afterend", p);
}

/*
Task 5
======
When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

document.getElementById("largerLinksBtn").onclick = () => largerLinks();
function largerLinks() {
	document.querySelectorAll("a").forEach(({ style }) => (style.fontSize = "larger"));
}
