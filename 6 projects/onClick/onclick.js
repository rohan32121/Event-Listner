//click event

//An element receives a click event when a pointing device button (such as mouse primary mouse button)
//is both pressed and released while the pointer is located inside the element.

// if the button is pressed on one element and the pointer moved outside the element before the button is released

//the element is fired on the most specific ancestor element that contained both elements.

const boxElement = document.getElementById("box")

//add A click add event listener to the element

boxElement.addEventListener("click",function(){
    alert("You just clicked me 👍")
})