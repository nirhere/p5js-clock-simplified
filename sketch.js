function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(220);
}

function draw() {
  
  if (second() == 0) background(220);
  let s = map(second(), 0, 60, 360, 0) - 180;

  
  stroke(0);
  line(width/2,height/2,
       width / 2 + sin(s)*width,
       height / 2 + cos(s)*width)
  
}