// import using require

// declare class
class Circle extends Shape{
constructor(radius,colour,name){
super(radius,radius,colour,name);
this.radius=radius;
this.colour=colour;
this.name=name;
}
 calculateArea() { var area=2*3.14*this.radius;
console.log("the area is"+area);}
}
let Cr= new Circle(2,2,'blue','circle');
Cr.calculateArea();
module.exports= Circle;


// export class using module.exports
