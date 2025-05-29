function setup() {
  createCanvas(600, 400);
  background(0);
  noFill();
  strokeWeight(2);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  
  fill(0, 0, 0, 5);
  rect(0, 0, width, height);
  noFill();

  if (mouseIsPressed) {
    for (let i = 0; i < 8; i++) {
      let x = mouseX + random(-20, 20);
      let y = mouseY + random(-20, 20);
      let size = random(10, 50);

      let hue = random(360);
      stroke(hue, 80, 100, 80); 
      ellipse(x, y, size);
    }
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('glow_bubble_trail', 'png');
  }
}
