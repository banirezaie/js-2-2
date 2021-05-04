// change the word Delicious to Disgusting
const word = document.getElementsByTagName("span")
console.log(word)
for (let delicious of word) {
  delicious.innerText = "Disgusting"
}