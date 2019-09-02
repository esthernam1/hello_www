var contents = "";
var cnv = createCanvas(400, 400);
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  fill(255);
  textSize(24);
  text(contents, 50, 50, 300, 300);
}
function keyTyped() {
  contents += key;
}

// 
// 
// 
// 
// 
// day 2 clock ANALOG


function setup() {
  var myCanvas = createCanvas(800, 800);
  myCanvas.parent("canvasContainer");

}
function draw() {
  strokeWeight(2);
  translate(width/2, height/2);
  background(249, 246, 215);
  
  var radius = int(min(width, height) / 2);
  var totalPoints = 60;
  var angle = TWO_PI/totalPoints;
  
  var secondsRadius = radius * 0.72;
  var minutesRadius = radius * 0.60;
  var hoursRadius = radius * 0.50;
  var clockDiameter = radius * 1.8;
  
  noFill();
  stroke(41, 83, 166);
  strokeWeight(8);
  ellipse(0, 0, clockDiameter, clockDiameter);
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  strokeWeight(20);
  stroke(41, 83, 166);
  
  strokeWeight(1);
  line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
  strokeWeight(2);
  line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
  strokeWeight(4);  // hour hand should be thicker
  line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);

}






