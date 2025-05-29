function setup() {
  createCanvas(400, 400);
  background(20);
  noLoop(); 
  rectMode(CENTER);
}

function draw() {
  let spacing = 40;

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      
      let r = random(1); 
      let angle = random(TWO_PI); 
      let size = random(10, 35); 
      let col = color(random(255), random(255), random(255), 200); 

      if (r > 0.3) { 
        push();
        translate(x, y);
        rotate(angle);
        fill(col);
        noStroke();
        rect(0, 0, size, size);
        pop();
      }
    }
  }
}
