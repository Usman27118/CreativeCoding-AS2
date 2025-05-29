let mic, sound, fft;
let useMic = true;
let toggleButton;

function preload() {
  sound = loadSound('Jungle.mp3'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);

  toggleButton = createButton("🎙️ Switch to Audio File");
  toggleButton.position(20, 20);
  toggleButton.style('padding', '10px');
  toggleButton.mousePressed(toggleSource);
}

function toggleSource() {
  if (useMic) {
    mic.stop();
    sound.loop();
    fft.setInput(sound);
    toggleButton.html("🎧 Switch to Microphone");
  } else {
    sound.stop();
    mic.start();
    fft.setInput(mic);
    toggleButton.html("🎙️ Switch to Audio File");
  }
  useMic = !useMic;
}

function draw() {
  background(0, 0, 15); 

  let spectrum = fft.analyze();
  let waveform = fft.waveform();
  translate(width / 2, height / 2);
  noStroke();

  
  let bands = 24;
  let angleStep = 360 / bands;
  for (let i = 0; i < bands; i++) {
    let amp = spectrum[i * 10];
    let radius = map(amp, 0, 255, 50, height / 2.2);
    let nextRadius = map(spectrum[(i + 1) * 10], 0, 255, 50, height / 2.2);

    let a1 = i * angleStep;
    let a2 = (i + 1) * angleStep;

    fill((a1 + frameCount) % 360, 80, 90, 0.8);
    beginShape();
    vertex(0, 0);
    vertex(radius * cos(a1), radius * sin(a1));
    vertex(nextRadius * cos(a2), nextRadius * sin(a2));
    endShape(CLOSE);
  }

  
  noFill();
  stroke(180, 100, 100);
  strokeWeight(2);
  beginShape();
  let waveRadius = 100;
  for (let i = 0; i < waveform.length; i++) {
    let angle = map(i, 0, waveform.length, 0, 360);
    let r = waveRadius + waveform[i] * 150;
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

  
  let bass = fft.getEnergy("bass");
  let centerSize = map(bass, 0, 255, 30, 70);
  stroke(0, 0, 100);
  strokeWeight(3);
  fill(0);
  ellipse(0, 0, centerSize);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
