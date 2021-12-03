let font,
  fontsize = 25;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('../assets/consolas/Consolas.ttf');
}

function setup() {
  var lightgrn = lerpColor(color('white'), color(techGreen), random(45)/50);
  var lerpedback = lerpColor(color(purNigthSky), color(bluesteel), random(700)/random(10,800));
  var backcolor = lerpColor(lerpedback, color('black'), random(3700)/random(16,4000))
  var lightsteel = lerpColor(color(offwhite), color(bluesteel), random(700));
  var nightsteel = lerpColor(color(bluesteel), color(darkSteel), random(700));
  var aqua = lerpColor(color(bluesteel), color(techGreen), random(700)/random(10,800));
  var lightgrn = lerpColor(color('white'), color(techGreen), random(700)/random(10,800));
  var allSteels = [lightsteel, nightsteel, aqua, lightgrn]
  let cnv = createCanvas(1400, 1400, WEBGL);
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  frameRate(15)
  createLoop({
    duration:10,
    // framesPerSecond: random(10),
      gif:{
      render:true,
      fileName:'city' + Math.floor(random(10)).toString()+'.gif',
      startLoop:0,
      endLoop:1,
      download:true,
    }
  })
  animLoop.noiseFrequency(10)
  // noLoop()
}

var counter = 0
function draw() {
  background(backcolor);
	noFill();
	stroke(255);
  drawSun(random(15,23))
  randomFills()
	noStroke();
	fill(0);
	rect(1200, height - 100, width, 100);
  makeCity(random(17,38), random(-15, 20));
  // makeCity(80, 47);
  // makeCity(random(1000), random(-10, 25));
  makeCity(200, -1 * random(80, 1200));
  // makeCity(random(30), 1000);
  // random()
  makeCity(random(59), random(-100,-10));
	makeCity(random(80), -1 * random(20));
  // makeCity(random(200, 250), random(-5,15));
  // fill(random(40,255), random(1, 255), random(5,90))
}

function makeShimmer(){
  ambientLight(random(233), random(220), random(100));
  // specularMaterial(random(240, 250));
  shininess(random(150));
}

function createCharAtPositionInColor(x,y,value, color){
  makeShimmer()
  textSize(random(8,17));
  fill(color)
  text(value, x, y)
}

function fillCoordWithDigits(x, y, w, h, colory, increment){
  for (var yc=0; yc<y+random(13,50); yc+=increment) {
    for (var xc=0; xc<w-random(3,22); xc+=w/(increment/2)){
    // for each point within bounds, draw a number between 0 and random range,
    //increment points after
      var colorIdx = floor(random(colory.length))
      var num2sho = floor(random(2))
      transform(1);
      createCharAtPositionInColor(xc, yc, num2sho, colory[colorIdx])
    }
  }
}

function makeBuildings(bH, bW, tmp){
  for (var k = 0; k < bH - 40; k += 10) {
    for (var j = 0; j < bW - 10; j += (bW-10)/6) {
      makeShimmer()
      textSize(random()*random(13))
      createCharAtPositionInColor(tmp+5+j+((bW-10)/5)/10, height-100-bH+20+k, floor(random(2)), color(allSteels[floor(random(allSteels.length))]))
      addWindowLight(bW, bH, k, j, tmp)
    }
  }
}

function setCoords(tmp, bW){
  var bH = random(10, height + 100)
  let rx = tmp + random(5)
  let ry = height - random(95,100) - bH
  let rw = bW - random(10,11)
  let rh = bH
  return bH, rx, ry, rw, rh
}

function makeCity(bN, off) {
	var tmp = off || 0
	var bW = width / random(bN-6, bN+35);
	for (var i = 0; i < bN; i++) {
    let bH, rx, ry, rw, rh = setCoords(tmp, bW)
    fill(nightsteel)
    noStroke()
    fillCoordWithDigits(rx, ry, rw, rh, allSteels, 10)
    makeBuildings(bH, bW, tmp)
    addBuildingDecor(bW, rx, ry)
		tmp += bW;
	}
}

function addBuildingDecor(bW, rx, ry){
  var c = arbitraryRule(25)? topRedLight: litBuildingTop;
  stroke(c)
  strokeWeight(bW*random(5,9)*.03)
  point((rx-random(bW/10)), ry+1)
}

function setWindowWidthAndHeight(bW, bH, k,j, tmp){
  let W = tmp+5+j+((bW-10)/5)/10;
  let H = height-100-bH+20+k;
  return W, H
}

function getColorFromRule(expr, color){
  if (expr){
    return color
  }
}

const arbitraryRule = (n) = random(n)/random(100) > random(10)
const colorset = [redBrown, 'white', bluesteel]


function setStrokeColor(colorset){
  let idx = floor(random(colorset.length))
  stroke(colorset[idx])
}

function addWindowLight(bW, bH, k,j, tmp){
  setStrokeColor([(random(0, 255), random(0, 255), 0)])
  let pointWidth, pointHeight = [...setWindowWidthAndHeight(bW, bH, k,j, tmp)]
  setStrokeColor(colorset)
  strokeWeight(bW*random(.04));
  point(pointWidth, pointHeight)
}

function drawSun(val) {
  var color = arbitraryRule(3)? arbitraryRule(5)? arbitraryRule(8)? 'yellow': lightYellow: orangeLights : offwhite
  fill(color)
  ellipse(random(20,300) , -1*random(10,100), random(2,100))
}

function randomFills(){
  for (var i=-0; i < 1400; i++) {
    // push()
    textSize(random(3,66));
    fill(arbitraryRule(5)? arbitraryRule(9)? lightgrn: techGreen: 'white')
		text(floor(random(2)), random(height)*5, random(width));
    noFill()
    // pop()
	}
}