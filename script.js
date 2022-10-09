const body = document.body;
const div = document.createElement("div");

// // div.innerText = "Hello World";
// // div.textContent = "Hello World";
// // div.innerHTML = "<strong>Hello World Bold<strong/>";
// strong = document.createElement("strong");
// strong.innerText = "Hello World Bold 2";
// div.append(strong);

// body.append(div);

// const div = document.querySelector("div");
// console.log(div.textContent);
// console.log(div.innerText);

const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// spanBye.remove();
// div.removeChild(spanHi);
// div.append(spanBye);
// console.log(spanHi.getAttribute("id"));
// console.log(spanHi.id);
// console.log(spanHi.getAttribute("title"));
// console.log(spanHi.title);
// spanHi.setAttribute("id", "iSetThisAttribute");
// spanHi.id = "iSetThisAttributeV2";
// spanHi.removeAttribute("id");
// console.log(spanHi.dataset.test);
// console.log(spanHi.dataset.longerName);
// spanHi.dataset.newName = "hi";

// spanBye.classList.add("new-class");
// spanBye.classList.remove("bye");
// spanBye.classList.toggle("bye3", true);

spanBye.style.color = "red";
spanHi.style.backgroundColor = "yellow";
