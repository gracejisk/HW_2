function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}
var x=200
var y=200
var d=3;
function draw (){
	background (300);
	ellipse (x,y,50,50);
	x=x+d;
		if (x>350){
	d*=-5;
		}
}
