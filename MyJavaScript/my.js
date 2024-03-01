let newbutton = document.createElement("button");

newbutton.innerText="click me!";

newbutton.style.backgroundColor="red";
newbutton.style.color="white";

document.querySelector("body").prepend(newbutton);