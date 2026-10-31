const what = document.createElement("img");
what.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZYFODwXaYPGJSb6eyg1ws3vs71Uz2_LIKVFyeG3kXyJTl8Zm4nMq-18&s=10"
// NEW
what.id = "whatthe"
document.body.appendChild(what)





const thing = document.createElement("div");
const popup = document.createElement("div");
const closeButton = document.createElement("div");
const theText = document.createElement("p");



thing.id = "thing";
popup.id = "popup";
closeButton.id = "close-button";

closeButton.textContent = "X"
theText.textContent = "hello"




const otherChild = document.createElement("div")
otherChild.id = "other-child"
otherChild.textContent = "CHILD CREATING BUTTON"

otherChild.addEventListener("click", function() {
    document.body.removeChild(otherChild)
    document.body.appendChild(thing)
})

closeButton.addEventListener("click", function() {
    document.body.removeChild(thing)
    document.body.appendChild(otherChild)
})



document.body.appendChild(thing)
thing.appendChild(popup)
popup.appendChild(closeButton)
popup.appendChild(theText)
