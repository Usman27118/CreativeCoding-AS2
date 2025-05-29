let floatY = 0;
let floatSpeed = 0.05;
let eyeOpen = true;
let blinkTimer = 0;
let alienColor;
let handWaveAngle = 0;
let handDirection = 1;
let currentPose = 0;

function setup() {
  createCanvas(400, 400);
  alienColor = color(0, 255, 100);
  frameRate(60);
}

function draw() {
  background(10, 10, 30);
  drawStars();
  drawMoon();
  drawPlanets();

  floatY = sin(frameCount * floatSpeed) * 5;

  updateBlinking();
  updateWaving();

  drawTractorBeam(floatY);
  drawAlien(floatY);
}

// ----------------- ALIEN -----------------
function drawAlien(offsetY) {
  let centerX = 200;
  let white = color(255);
  let black = color(0);
  let glow = color(red(alienColor), green(alienColor), blue(alienColor), 50);

  push();
  translate(0, offsetY);

  // Shadow
  fill(0, 50);
  ellipse(centerX, 380, 60, 10);

  // Body
  fill(alienColor);
  ellipse(centerX, 250, 100, 140);

  // Head
  ellipse(centerX, 150, 90, 110);

  // Eyes
  fill(glow);
  ellipse(centerX - 20, 140, 40, 55);
  ellipse(centerX + 20, 140, 40, 55);

  fill(white);
  if (eyeOpen) {
    ellipse(centerX - 20, 140, 25, 40);
    ellipse(centerX + 20, 140, 25, 40);
    fill(black);
    ellipse(centerX - 20, 145, 10, 15);
    ellipse(centerX + 20, 145, 10, 15);
  } else {
    // Blinking
    fill(black);
    ellipse(centerX - 20, 140, 25, 10);
    ellipse(centerX + 20, 140, 25, 10);
  }

  // Smile
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(centerX, 170, 40, 20, 0, PI);

  // Antennas
  stroke(alienColor);
  strokeWeight(4);
  line(centerX - 20, 100, centerX - 30, 60);
  line(centerX + 20, 100, centerX + 30, 60);
  fill(alienColor);
  noStroke();
  ellipse(centerX - 30, 60, 12, 12);
  ellipse(centerX + 30, 60, 12, 12);

  // Arms
  stroke(alienColor);
  strokeWeight(10);

  // Waving hands with angle
  let leftArmX = 110 + sin(handWaveAngle) * 5;
  let rightArmX = 290 + sin(handWaveAngle + PI) * 5;
  line(centerX - 50, 250, leftArmX, 280); // Left arm
  line(centerX + 50, 250, rightArmX, 280); // Right arm

  // Hands
  noStroke();
  fill(alienColor);
  ellipse(leftArmX - 5, 285, 25, 25);
  ellipse(rightArmX + 5, 285, 25, 25);

  // Legs
  stroke(alienColor);
  strokeWeight(10);
  if (currentPose === 0) {
    line(centerX - 20, 320, centerX - 25, 370); // Left leg
    line(centerX + 20, 320, centerX + 25, 370); // Right leg
  } else {
    line(centerX - 20, 320, centerX - 35, 360);
    line(centerX + 20, 320, centerX + 5, 360);
  }

  // Feet
  noStroke();
  fill(alienColor);
  ellipse(centerX - 25, 375, 30, 12);
  ellipse(centerX + 25, 375, 30, 12);

  pop();
}

// ----------------- UFO BEAM -----------------
function drawTractorBeam(offsetY) {
  push();
  translate(0, offsetY);
  noStroke();
  fill(0, 255, 150, 40);
  beginShape();
  vertex(180, 320);
  vertex(220, 320);
  vertex(260, 400);
  vertex(140, 400);
  endShape(CLOSE);
  pop();
}

// ----------------- STARS -----------------
function drawStars() {
  stroke(255, 150);
  for (let i = 0; i < 50; i++) {
    point(random(width), random(height));
  }
}

// ----------------- MOON -----------------
function drawMoon() {
  fill(200, 200, 255);
  noStroke();
  ellipse(60, 60, 80, 80);
}

// ----------------- PLANETS -----------------
function drawPlanets() {
  fill(255, 100, 100);
  ellipse(330, 70, 40, 40);
  fill(100, 150, 255);
  ellipse(320, 150, 25, 25);
}

// ----------------- EYE BLINK -----------------
function updateBlinking() {
  if (frameCount % 120 === 0) {
    eyeOpen = false;
  }
  if (frameCount % 120 === 10) {
    eyeOpen = true;
  }
}

// ----------------- HAND WAVE -----------------
function updateWaving() {
  handWaveAngle += 0.05 * handDirection;
  if (handWaveAngle > PI / 4 || handWaveAngle < -PI / 4) {
    handDirection *= -1;
  }
}

// ----------------- INTERACTION -----------------
function keyPressed() {
  // Change alien color on key press
  alienColor = color(random(50, 255), random(150, 255), random(100, 255));

  // Change pose
  currentPose = (currentPose + 1) % 2;
}
