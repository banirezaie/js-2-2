/* In quiz7.html you will find 6 li elements, two of which have the 'highlight' class applied to them.

1- Please use JS and classList property to invert which elements have the highlight class.
Basically iterate over all the li elements and toggle the class of highlight on each one.

=> your end result will be all blueish ones will be purple, and all purples will be blue :)
 */

/* ------------------------------ Best Practice ----------------------------- */

document.querySelectorAll("ul li").forEach(({ classList }) => classList.toggle("highlight"));

/* -------------------------------- Long Way -------------------------------- */

/* 
const liTags = document.querySelectorAll("ul li");
for (const li of liTags) {
	li.classList.toggle("highlight");
}
 */
