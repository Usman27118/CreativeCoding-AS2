// P5.js sketch for creating an advanced 4-door car
function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Create gradient background
  background(220);
  createGradientBackground();
  drawRoad();
  
  // Position the car
  push();
  translate(width/2, height - 100);
  drawCar();
  pop();  // Corrected line here
  
  // Add environment reflections
  drawReflections();
  
  // Only draw once
  noLoop();
}

function createGradientBackground() {
  // Create a gradient sky
  for (let y = 0; y < height - 60; y++) {
    let inter = map(y, 0, height - 60, 0, 1);
    let c = lerpColor(color(100, 150, 255), color(180, 200, 255), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawRoad() {
  // Road background
  fill(50);
  noStroke();
  rect(0, height - 60, width, 60);
  
  // Asphalt texture
  for (let i = 0; i < 300; i++) {
    stroke(random(30, 60));
    point(random(width), random(height - 60, height));
  }
  
  // Road markings
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, height - 30, i + 20, height - 30);
  }
  
  // Road shadow
  noStroke();
  fill(20, 20, 20, 50);
  rect(0, height - 60, width, 10);
}

function drawReflections() {
  // Car reflection on the road
  push();
  translate(width/2, height - 100);
  scale(1, -0.2);
  translate(0, -80);
  noStroke();
  fill(200, 200, 200, 30);
  beginShape();
  vertex(-140, 0);
  vertex(-150, -20);
  vertex(-130, -40);
  vertex(-110, -80);
  vertex(110, -80);
  vertex(130, -40);
  vertex(150, -20);
  vertex(140, 0);
  endShape(CLOSE);
  pop();
}

function drawCar() {
  // Car body - main chassis with more aerodynamic shape
  fill(20, 20, 30); // Dark color for modern look
  stroke(0);
  strokeWeight(1);
  
  // Main body with more curves
  beginShape();
  vertex(-160, 0);
  bezierVertex(-160, -10, -165, -20, -155, -30);
  bezierVertex(-145, -40, -125, -60, -110, -70);
  bezierVertex(-90, -80, -50, -85, 0, -85);
  bezierVertex(50, -85, 90, -80, 110, -70);
  bezierVertex(125, -60, 145, -40, 155, -30);
  bezierVertex(165, -20, 160, -10, 160, 0);
  endShape(CLOSE);
  
  // Carbon fiber roof effect
  fill(15, 15, 20);
  beginShape();
  vertex(-85, -85);
  bezierVertex(-60, -105, 60, -105, 85, -85);
  endShape(CLOSE);
  
  // Carbon fiber pattern
  push();
  translate(-85, -95);
  scale(1.7, 0.5);
  drawCarbonFiberPattern();
  pop();
  
  // Windows with curved edges
  fill(100, 200, 255, 200); // Light blue tinted windows
  
  // Windshield
  beginShape();
  vertex(-85, -85);
  bezierVertex(-70, -105, 70, -105, 85, -85);
  vertex(85, -60);
  bezierVertex(0, -55, -85, -60, -85, -85);
  endShape(CLOSE);
  
  // Side windows with subtle curvature
  // Front door window
  beginShape();
  vertex(-85, -85);
  vertex(-85, -45);
  bezierVertex(-85, -45, -45, -45, -5, -45);
  vertex(-5, -85);
  endShape(CLOSE);
  
  // Rear door window
  beginShape();
  vertex(-5, -85);
  vertex(-5, -45);
  bezierVertex(-5, -45, 45, -45, 85, -45);
  vertex(85, -85);
  endShape(CLOSE);
  
  // Door lines with subtle curves
  stroke(40);
  strokeWeight(1);
  
  // Front door divider
  beginShape();
  vertex(-5, -85);
  bezierVertex(-5, -70, -5, -55, -5, -20);
  endShape();
  
  // Rear door lines
  beginShape();
  vertex(85, -85);
  bezierVertex(85, -70, 85, -55, 85, -20);
  endShape();
  
  // Front door line
  beginShape();
  vertex(-85, -85);
  bezierVertex(-85, -70, -85, -55, -85, -20);
  endShape();
  
  // Door handles - flush with body
  fill(50);
  stroke(60);
  strokeWeight(0.5);
  
  // Front door handle
  push();
  translate(-45, -55);
  rotate(PI/20);
  rect(0, 0, 20, 5, 2);
  pop();
  
  // Rear door handle
  push();
  translate(35, -55);
  rotate(PI/20);
  rect(0, 0, 20, 5, 2);
  pop();
  
  // Draw futuristic wheels
  drawAdvancedWheel(-90, 0);
  drawAdvancedWheel(90, 0);
  
  // LED headlights
  fill(255, 255, 255);
  // Main headlight
  push();
  translate(-145, -40);
  rotate(-PI/10);
  rect(0, 0, 25, 8, 4);
  pop();
  
  // LED strip
  stroke(255, 255, 255, 180);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(-145, -45);
  bezierVertex(-135, -50, -120, -55, -110, -60);
  endShape();
  
  // LED taillights
  fill(255, 30, 30);
  // Main taillight
  push();
  translate(145, -40);
  rotate(PI/10);
  rect(0, 0, 25, 8, 4);
  pop();
  
  // LED strip
  stroke(255, 30, 30, 180);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(145, -45);
  bezierVertex(135, -50, 120, -55, 110, -60);
  endShape();
  
  // Additional details
  
  // Front splitter
  fill(20);
  noStroke();
  beginShape();
  vertex(-160, 0);
  vertex(-165, 5);
  vertex(165, 5);
  vertex(160, 0);
  endShape(CLOSE);
  
  // Side skirts
  rect(-160, 0, 320, 5, 2);
  
  // Grill - more aggressive
  fill(10);
  beginShape();
  vertex(-155, -30);
  vertex(-145, -40);
  vertex(-135, -30);
  vertex(-155, -30);
  endShape(CLOSE);
  
  // Grill pattern
  stroke(40);
  strokeWeight(1);
  for (let i = -155; i < -135; i += 3) {
    line(i, -30, i + 10, -40);
  }
  
  // Side mirrors
  fill(20, 20, 30);
  noStroke();
  push();
  translate(-90, -60);
  rotate(-PI/4);
  ellipse(0, 0, 10, 20);
  pop();
  
  // Hood line
  stroke(40);
  strokeWeight(0.5);
  line(-85, -85, -155, -30);
  
  // Trunk line
  line(85, -85, 155, -30);
  
  // Exhaust tips
  fill(80);
  noStroke();
  rect(150, -10, 8, 6, 1);
  rect(140, -10, 8, 6, 1);
  
  // Advanced diffuser
  fill(20);
  for (let i = 0; i < 5; i++) {
    rect(120 - i*15, 0, 3, 10 - i*1.5);
  }
}

function drawAdvancedWheel(x, y) {
  push();
  translate(x, y);
  
  // Wheel well/arch with more detail
  stroke(15);
  strokeWeight(1);
  fill(10, 10, 10, 100);
  arc(0, -15, 70, 30, 0, PI);
  
  // Tire
  fill(20);
  ellipse(0, 0, 60, 60);
  
  // Tire tread pattern
  stroke(10);
  strokeWeight(0.5);
  for (let i = 0; i < 20; i++) {
    let angle = TWO_PI / 20 * i;
    let x1 = cos(angle) * 30;
    let y1 = sin(angle) * 30;
    let x2 = cos(angle) * 28;
    let y2 = sin(angle) * 28;
    line(x1, y1, x2, y2);
  }
  
  // Sport rim - more modern design
  fill(200);
  ellipse(0, 0, 45, 45);
  
  // Sport rim pattern
  fill(30);
  for (let i = 0; i < 8; i++) {
    push();
    rotate(TWO_PI / 8 * i);
    beginShape();
    vertex(0, 0);
    vertex(5, 15);
    vertex(-5, 15);
    endShape(CLOSE);
    pop();
  }
  
  // Center cap
  fill(50);
  ellipse(0, 0, 15, 15);
  
  // Brake caliper
  fill(255, 30, 30);
  arc(0, 0, 50, 50, PI + PI/4, TWO_PI - PI/4);
  
  // Brake rotor
  fill(80);
  ellipse(0, 0, 35, 35);
  
  // Brake rotor pattern
  stroke(60);
  strokeWeight(1);
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI / 8 * i;
    let x1 = cos(angle) * 12;
    let y1 = sin(angle) * 12;
    let x2 = cos(angle) * 16;
    let y2 = sin(angle) * 16;
    line(x1, y1, x2, y2);
  }
  
  pop();
}

function drawCarbonFiberPattern() {
  // Simple carbon fiber pattern
  stroke(30);
  strokeWeight(0.5);
  for (let i = 0; i < 20; i++) {
    line(0, i*5, 100, i*5);
    line(i*5, 0, i*5, 100);
  }
}
