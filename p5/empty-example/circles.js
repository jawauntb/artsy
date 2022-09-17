var x = 0;
var speed = 10;
var d1 = 100;
var d2 = 100;

function setup() {
  createCanvas(1400, 1000);
  background(0);
  frameRate(85)
  createLoop({duration:15,gif:true})
  //saveFrames("aa","png",15,22);
}


function draw() {
    stroke(random(100,255), 0, random(100,190));
    strokeWeight(1.5);
    ellipse(x, 100, d1, d1);
    x = x + speed;
    d1 = d1-0.6;
    if(x > width || x <0) {
      speed = speed*-1;
      fill(speed*51);
    }
    ellipse(x, 300, d1, d1);
    ellipse(x, 200, 50, 50);
}