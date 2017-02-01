function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  if (mouseIsPressed) {
	}else {
	}
	var x=mouseX
	var y=mouseY
  ellipse (mouseX,mouseY,100,100);
  ellipse (x+20,y-10,20,20);
  ellipse (x-20,y-10,20,20);
arc(x,y+13, 50, 50, 0, PI);
}
