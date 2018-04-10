function setup() {
  // put setup code here
  createCanvas(100, 100);
  frameRate(2);
}

function draw() {
  
  // Draw four squares of random colors
  fill(getRandomColor());
  rect(0, 0, 50, 50);
  fill(getRandomColor());
  rect(0, 50, 50, 50);
  fill(getRandomColor());
  rect(50, 50, 50, 50); 
  fill(getRandomColor());
  rect(50, 0, 50, 50); 
}