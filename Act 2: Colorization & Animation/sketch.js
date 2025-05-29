let x = 100;
let y = 100;
let speed = 2;

function setup() {
  createCanvas(420, 420);
  rectMode(CORNER);
}

function draw() {
  background(255);

  
  fill(100, 150, 255);  
  stroke(0);            
  strokeWeight(2);

  
  rect(x, y, 200, 200);

  x += speed;
  y += speed;

  if (x + 200 > width || x < 0) {
    speed *= -1;
  }
}