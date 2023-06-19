//complete this code
class Rectangle {
	width;
	height;
	constructor(rect_w, rect_h){
		this.width = rect_w;
		this.height= rect_h;
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
		return 4*(this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;


// const cc = new Rectangle(10,20)
// console.log(cc.getArea())

// const p = new Square(30)
// console.log(p.getPerimeter());
