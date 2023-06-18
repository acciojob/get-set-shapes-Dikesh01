//complete this code
class Rectangle {
	width;
	height;
	constructor(width, height){
		this.width = width;
		this.height= height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	getArea(){
		return (this.width*this.height);
	}
}

class Square extends Rectangle {
	getPerimeter(){
		return 2*(this.width+this.height);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;


// const cc = new Rectangle(10,20)
// console.log(cc.getArea())

// const p = new Square(30,50)
// console.log(p.getPerimeter());
