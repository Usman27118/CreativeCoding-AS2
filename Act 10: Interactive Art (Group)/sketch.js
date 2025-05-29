let particles = [];
let uniColors = ['#1F3A93', '#4B77BE', '#F5F7FA', '#22313F']; 
let bgColor;
let welcomeText = "Welcome to Bath Spa University";
let font;
let textSizeVal;
let textY;

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(245, 245, 245);
  textSizeVal = min(width * 0.08, 80);
  textY = height / 2;
  
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
  
  textFont('Helvetica, Arial, sans-serif');
  textAlign(CENTER, CENTER);
}

function draw() {
  background(bgColor.levels[0], bgColor.levels[1], bgColor.levels[2], 20);
  
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
  
  drawWelcomeText();
  
  if (mouseIsPressed) {
    createRipple(mouseX, mouseY);
  }
  
  if (frameCount % 5 === 0) {
    particles.push(new Particle());
  }
  
  if (particles.length > 500) {
    particles.splice(0, 50);
  }
}

function drawWelcomeText() {
  fill(0, 30);
  noStroke();
  for (let i = 0; i < 5; i++) {
    textSize(textSizeVal + i);
    text(welcomeText, width/2 + i*2, textY + i*2);
  }
  
  let gradient = drawingContext.createLinearGradient(0, textY - textSizeVal, 0, textY + textSizeVal);
  gradient.addColorStop(0, uniColors[0]);
  gradient.addColorStop(0.5, uniColors[1]);
  gradient.addColorStop(1, uniColors[2]);
  
  drawingContext.fillStyle = gradient;
  textSize(textSizeVal);
  text(welcomeText, width/2, textY);
}
function createRipple(x, y) {
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle(x, y));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSizeVal = min(width * 0.08, 80);
  textY = height / 2;
}

function mouseMoved() {
  if (frameCount % 3 === 0) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.pos = x && y ? 
      createVector(x, y) : 
      createVector(random(width), random(height));
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
    this.size = random(5, 15);
    this.color = color(random(uniColors));
    this.life = random(100, 200);
    this.alpha = 255;
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.life--;
    this.alpha = map(this.life, 0, 200, 0, 255);
    
    if (random() < 0.05) {
      this.vel.add(p5.Vector.random2D().mult(0.5));
    }
  
    if (this.pos.x > width + this.size) this.pos.x = -this.size;
    if (this.pos.x < -this.size) this.pos.x = width + this.size;
    if (this.pos.y > height + this.size) this.pos.y = -this.size;
    if (this.pos.y < -this.size) this.pos.y = height + this.size;
  }
  
  display() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
    
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = this.color;
  }
}