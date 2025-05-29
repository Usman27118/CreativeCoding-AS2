let p = [];
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0, 20);
  for (let i = 0; i < 5; i++) if (mouseIsPressed) 
    p.push({x: mouseX, y: mouseY, vx: random(-2, 2), vy: random(-2, 2), c: color(random(255), random(255), random(255))});
  
  for (let i = p.length - 1; i >= 0; i--) {
    p[i].x += p[i].vx;
    p[i].y += p[i].vy;
    p[i].vy += 0.1;
    fill(p[i].c);
    circle(p[i].x, p[i].y, 10);
    if (p[i].y > height) p.splice(i, 1);
  }
}