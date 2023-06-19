//complete this code
class Rectangle {
	rect_w;
	rect_h;
	constructor(rect_w, rect_h){
		this.rect_w = rect_w;
		this.rect_h= rect_h;
	}class Rectangle {
constructor(width, height) {
this._width = width;
this._height = height;
}

get width() {
return this._width;
}

get height() {
return this._height;
}

getArea() {
return this._width * this._height;
}
}

class Square extends Rectangle {
constructor(side) {
super(side, side);
}

getPerimeter() {
return 4 * this.width;
}
}

const rect = new Rectangle(5, 10);
console.log(rect.width); // output: 5
console.log(rect.height); // output: 10
console.log(rect.getArea()); // output: 50

const square = new Square(7);
console.log(square.width); // output: 7
console.log(square.height); // output: 7
console.log(square.getArea()); // output: 49
console.log(square.getPerimeter()); // output: 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
	get width(){
		return this.rect_w;
	}
	get height(){
		return this.rect_h;
	}
	getArea(){
		return (this.rect_w*this.rect_h);
	}
}

class Square extends Rectangle {
	sq_s;
	constructor(sq_s){
		super(sq_s);
	}
	getPerimeter(){
		return 4*(this.sq_s);
	}
	getArea()
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

// const cc = new Rectangle(10,20)
// console.log(cc.getArea())

// const p = new Square(30)
// console.log(p.getPerimeter());
