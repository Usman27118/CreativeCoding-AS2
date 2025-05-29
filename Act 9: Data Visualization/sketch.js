let courses = ["CC", "Cyber Security", "Psycology", "Creative Media", "Business", "Accounting"];
let enrollments = [];
let maxEnrollment;
let totalEnrollment;
let barWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
  textSize(16);
  noStroke();

  
  for (let i = 0; i < courses.length; i++) {
    enrollments[i] = int(random(50, 300));
  }

  totalEnrollment = enrollments.reduce((a, b) => a + b, 0);
  maxEnrollment = max(enrollments);
  barWidth = width / courses.length;
}

function draw() {
  background(20);
  fill(255);
  textSize(24);
  text("Course Enrollments at Bath Spa University", width / 2, 40);

  for (let i = 0; i < courses.length; i++) {
    let x = i * barWidth + barWidth / 2;
    let barHeight = map(enrollments[i], 0, maxEnrollment, 0, height - 180);
    let y = height - barHeight - 50;
    let percent = ((enrollments[i] / totalEnrollment) * 100).toFixed(1) + "%";

    
    if (
      mouseX > x - barWidth / 2 &&
      mouseX < x + barWidth / 2 &&
      mouseY > y &&
      mouseY < height - 50
    ) {
      fill(255, 100, 200);
    } else {
      fill(100, 200, 255);
    }

    
    rect(x - barWidth / 3, y, barWidth / 1.5, barHeight);

    
    fill(255);
    textSize(14);
    text(percent, x, y - 20);

    
    text(courses[i], x, height - 25);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  barWidth = width / courses.length;
}
