// create 100 button elements
//add each button inside the container element provided in quiz8.html
//use appendChild, here are the steps:

//1- create 100 new button elements
//2- each button must have some text inside of it (it doesn't matter what)
//3- each button must be appended inside the container div

for (let i = 0; i < 100; i++) {
	const newButton = document.createElement("button");
	newButton.append("Button #" + (i + 1));
	newButton.style.width = "100px";
	newButton.style.padding = "5px";
	newButton.style.margin = "5px";
	document.getElementById("container").appendChild(newButton);
}
