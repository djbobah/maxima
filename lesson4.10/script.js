let pointA = {
  x: 2,
  y: 3,
};

let pointB = {
  x: 4,
  y: -1,
};

let pointC = {
  x: 10,
  y: 0,
};

class Point {
  constructor(xN, yN) {
    this.x = xN;
    this.y = yN;
  }
  getInfo() {
    return `Точка с координатами {${this.x}, ${this.y}}`;
  }
}

let cnt = getRandom(11);

let arr = [];
while (cnt--) {
  arr.push(new Point(getRandom(11, -10), getRandom(11, -10)));
}

// arr.forEach((el) => console.log(el.getInfo()));

// console.log(arr);
class Point3D extends Point {
  constructor(xN = 0, yN = 0, zN = 0) {
    super(xN, yN);
    this.z = zN;
  }
  getInfo() {
    return `3D Точка с координатами {${this.x}, ${this.y}, ${this.z}}`;
  }
}

let ppp = new Point3D(1, 1, 1);
