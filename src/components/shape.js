class Shape {
  constructor(length, breadth, colour, name) {
    this.length = length;
    this.breadth = breadth;
    this.colour = colour;
    this.name = name;
  }

  drawShape() {
    return "The shape" + this.name + "is drawn";
  }

  calculateArea() {
    var area1 = this.length * this.breadth;
    console.log("the area is" + area1);
  }
}

module.exports(Shape);
// export class using module.exports
