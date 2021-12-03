function setup() {
  backcolor = color(0, 24, 72);
  createCanvas(800, 500);
  noLoop();
}

function draw() {
  background(backcolor);
  noFill();
  stroke(255);
  for (var i = 0; i < 800; i++) {
    strokeWeight(random(1, 3));
    point(random(width), random(height));
  }
  noStroke();
  fill(0);
  rect(0, height - 100, width, 100);
  makeCity(40, -5);
  makeCity(20);
  makeCity(10, 20);
  //saveCanvas("test", "jpg");
}

function makeCity(bN, off) {
  var tmp = off || 0;
  var bW = width / bN;
  for (var i = 0; i < bN; i++) {
    var fll = lerpColor(color(0, 0, 0), backcolor, bN / 50);
    fill(fll);
    noStroke();
    var bH = random(50, height - 130);
    rect(tmp + 5, height - 100 - bH, bW - 10, bH);
    for (var k = 0; k < bH - 40; k += 10) {
      for (var j = 0; j < bW - 10; j += (bW - 10) / 5) {
        var ctmp = random(0, 255);
        stroke(ctmp, ctmp, 0);
        strokeWeight(bW * 0.05);
        point(tmp + 5 + j + (bW - 10) / 5 / 2, height - 100 - bH + 20 + k);
      }
    }
    tmp += bW;
  }
}
