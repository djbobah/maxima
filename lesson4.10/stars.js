const box = document.querySelector(".sky");

// console.log(box.getBoundingClientRect());
const domStars = document.getElementsByClassName("star");
const activeStars = document.getElementsByClassName("star active");

const bounds = box.getBoundingClientRect();
const center = {
  x: Math.floor(bounds.width / 2),
  y: Math.floor(bounds.height / 2),
};

let centerPoint = document.createElement("div");
// centerPoint.className = "star active";
centerPoint.style.left = center.x + "px";
centerPoint.style.top = center.y + "px";

box.append(centerPoint);
// console.log(centerPoint.offsetWidth, centerPoint.offsetHeight);

centerPoint.style.top = center.y - centerPoint.offsetWidth / 2 + "px";
centerPoint.style.left = center.x - centerPoint.offsetHeight / 2 + "px";
// console.log(centerPoint.getBoundingClientRect());

let size = 20;
let maxX = Math.floor(center.x / size),
  maxY = Math.floor(center.y / size);

const showStar = (obj) => {
  const tag = document.createElement("div");
  tag.className = "star";
  tag.style.width = obj.size + "px";
  tag.style.height = obj.size + "px";
  const pos = obj.getPosition(center, size);
  tag.style.left = pos.left + "px";
  tag.style.top = pos.top + "px";
  box.append(tag);
};

class Star {
  constructor(x, y, size = 30) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  getPosition(center, size = 20) {
    return {
      left: center.x + size * this.x - this.size / 2,
      top: center.y + size * this.y - this.size / 2,
    };
  }
}

async function getData() {
  const response = await fetch(
    "https://fakerapi.it/api/v1/custom?_quantity=1000&x=number&y=number&size=number"
  );
  const data = await response.json();
  console.log(data);
  let stars = data.data.filter(
    (point) => point.size <= 100 && point.x <= 100 && point.y <= 100
  );
  // console.log(stars);
  stars.forEach((s) => showStar(new Star(s.x, s.y, s.size)));

  setInterval(() => {
    for (let i = 0; i < activeStars; i++) {
      activeStars[i].classList.remove("active");
    }
    domStars[getRandom(length)].classList.add("active");
  }, 1000);
}

getData();
// let cnt2 = Math.ceil(Math.random() * 200);
// // console.log(cnt2);
// let starsData = [];
// while (cnt2--) {
//   let sz = getRandom(4, 30);
//   starsData.push(
//     new Star(
//       getRandom(maxX, maxX * -1),
//       getRandom(maxY, maxY * -1),
//       sz % 2 ? sz + 1 : sz
//     )
//   );
// }

// starsData.forEach((star) => showStar(star));

// console.log(center);
// console.log(cnt2);
// console.log(maxX, maxY);
// console.log(starsData);
// console.log(do mStars);

// const length = domStars.length;
// for (let i = 0; i < cnt3; i++) {}
