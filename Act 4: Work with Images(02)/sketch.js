let img;

function preload() {
  
  img = loadImage("pio.png");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  
  let x = random(width);
  let y = random(height);

  
  let c = img.get(int(x), int(y));

  
  fill(c[0], c[1], c[2], 50);
  ellipse(x, y, 30, 30);
}
