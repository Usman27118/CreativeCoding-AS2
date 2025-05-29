function setup() {
  createCanvas(600, 400);
  background(10, 10, 30); 
  noFill();
  strokeWeight(2);
  
  drawBackground();

  let phrase = "BATH SPA UNIVERSITY";
  let x = 30;
  let y = 200;

  for (let i = 0; i < phrase.length; i++) {
    let letter = phrase.charAt(i);
    let col = color(random(100,255), random(100,255), random(100,255));
    stroke(col);

    drawCustomLetter(letter, x, y);
    x += 30; 
  }
}

function drawBackground() {
  
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(30, 80);
    noStroke();
    fill(random(100, 200), random(100, 200), random(100, 255), 30);
    ellipse(x, y, size);
  }
}

function drawCustomLetter(letter, x, y) {
  
  push();
  translate(x, y);
  
  switch(letter) {
    case 'A':
      triangle(0, 20, 10, -20, 20, 20);
      line(5, 0, 15, 0);
      break;
    case 'B':
      rect(0, -20, 10, 40);
      ellipse(10, -10, 20, 20);
      ellipse(10, 10, 20, 20);
      break;
    case 'T':
      line(0, -20, 20, -20);
      line(10, -20, 10, 20);
      break;
    case 'H':
      line(0, -20, 0, 20);
      line(20, -20, 20, 20);
      line(0, 0, 20, 0);
      break;
    case 'S':
      arc(10, -10, 20, 20, PI, TWO_PI);
      arc(10, 10, 20, 20, 0, PI);
      break;
    case 'P':
      rect(0, -20, 10, 40);
      ellipse(10, -10, 20, 20);
      break;
    case 'U':
      arc(10, 0, 20, 40, 0, PI);
      line(0, -20, 0, 0);
      line(20, -20, 20, 0);
      break;
    case 'N':
      line(0, -20, 0, 20);
      line(20, -20, 20, 20);
      line(0, -20, 20, 20);
      break;
    case 'I':
      line(10, -20, 10, 20);
      break;
    case 'V':
      line(0, -20, 10, 20);
      line(20, -20, 10, 20);
      break;
    case 'E':
      line(0, -20, 0, 20);
      line(0, -20, 20, -20);
      line(0, 0, 15, 0);
      line(0, 20, 20, 20);
      break;
    case 'R':
      rect(0, -20, 10, 40);
      ellipse(10, -10, 20, 20);
      line(0, 0, 20, 20);
      break;
    case 'Y':
      line(0, -20, 10, 0);
      line(20, -20, 10, 0);
      line(10, 0, 10, 20);
      break;
    case ' ':
      
      break;
    default:
     
      rect(0, -20, 20, 40);
  }

  pop();
}
