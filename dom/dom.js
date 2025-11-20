const container = document.querySelector("#container");
const p = document.createElement("p");
const h3 = document.createElement("h3");

p.classList.add("paragraph");

p.style.color = "red";
p.textContent = "Hey I'm red!";

h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(p);
container.appendChild(h3);

const childContainer = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");

childContainer.style.borderColor = "black";
childContainer.style.backgroundColor = "pink";
h1.textContent = "I'm in a div";
p2.textContent = "ME TOO!";
childContainer.appendChild(h1);
childContainer.appendChild(p2);
container.appendChild(childContainer);
