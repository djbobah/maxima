const wrap = document.querySelector(".wrapper");

const square = document.createElement("div");
square.className = "square";
square.innerHTML = "@";

const square2 = document.createElement("div");
square2.className = "square";
square2.innerHTML = "%";
square2.style.borderColor = "blue";

wrap.append(square, square2);

const square3 = document.createElement("div");
square3.className = "square";
square3.innerHTML = "&";
square3.style.borderColor = "orange";

wrap.insertBefore(square3, square2);

const redClone = square.cloneNode(true);
wrap.append(redClone);

square3.remove();

console.log(square);
