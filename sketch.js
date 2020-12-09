var diam1 = 0;
var fade;
var fadeAmount = 1

function setup() {
  createCanvas(500, 500);
  textSize(80)
  fade = 0
}

function draw() {
  background("#29BD97");
  fill(41,140,189,fade);
  stroke("#5C92AC");
  strokeWeight(5);
  ellipse(200, 200, diam1, diam1);
  diam1 = diam1 + 4;
  fill("#3AF4AE");
  textSize(100);
  textFont("Optima");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("Virago",mouseY,mouseX, 250, 250)
  if (fade < 0) fadeAmount = 1;
  if (fade > 255) fadeAmount = -10;

  fade += fadeAmount;
  print(fade)

}


function mousePressed() {
  diam1 = diam1 + 4;


}