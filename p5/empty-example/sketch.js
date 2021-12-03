let font,
  fontsize = 15;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('../assets/consolas/Consolas.ttf');
}

function setup() {
  var lerpedback = lerpColor(color(purNigthSky), color(bluesteel), random(10)/random(10,80));
  backcolor = lerpColor(lerpedback, color('black'), random(56)/random(16,400))
  let cnv = createCanvas(1400, 875, WEBGL);
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  frameRate(15)
  createLoop({
    duration:10,
    gif:{
      render:true,
      fileName:'city'+counter.toString()+'.gif',
      startLoop:0,
      endLoop:22,
      // download:true,
    }
  })
  // animLoop.noiseFrequency(0.4)
  // noLoop()
}
var nightBlue = (0, 24, 72)
var purpleSky = '#5F42C0'

var litBuildingTop= '#85F7D3'
var whiteStar = '#fff4ea'
var orangeLights = '#E87A3D'
var offwhite = '#f2f4f6'
var bluesteel = '#5c7287'
var whiteLight = '#F6F7F1'
var darkSteel = '#171c21'
var topRedLight = '#D25282'
var lightYellow = '#ffffe0'
var deepRed = '#FA011F'

var darkBuilding = '#432B39'

var steelBuilding = '#9BAED8'
var purNigthSky = '#0c1445'
var redBrown = '#6B3825'
var techGreen = '#39ff14'
var steels = [offwhite, bluesteel, darkSteel,darkBuilding, steelBuilding,techGreen]

var buildingColors = [steelBuilding, nightBlue, topRedLight]
var lightColors = [litBuildingTop]
var counter = 0
function draw() {
  background(backcolor);
	noFill();
	stroke(255);
  drawSun(17)
	for (var i=0; i < 1400; i++) {
		strokeWeight(random(1, 15));
    stroke(whiteStar)
		text(random(2), random(width-width*2+20, height));
	}
	noStroke();
	fill(0);
	rect(1200, height - 100, width, 100);
  makeCity(random(-120,30), random(-50, 35));
  makeCity(40, -5);
  // makeCity(80, 47);
  makeCity(random(1000), random(-10, 25));
  // makeCity(20, -800);
  // makeCity(random(30), 10);
	// makeCity(random(56,80), -1300);
  // makeCity(random(30), random(-6,-10));
  counter++
}

function makeShimmer(){
  ambientLight(random(233));
  directionalLight(offwhite, random(20, width/2), random(100, height/2), random(70));
  specularMaterial(random(240, 250));
  shininess(400);
}

function createCharAtPositionInColor(x,y,value, color){
  makeShimmer()
  fill(color)
  text(value, x, y)
}

function fillCoordWithDigits(x, y, w, h, colory, increment){
  for (var yc=0; yc<x-40; yc+=increment) {
    for (var xc=0; xc<w-10; xc+=w/(increment/2)){
    // for each point within bounds, draw a number between 0 and random range,
    //increment points after
      var colorIdx = floor(random(colory.length))
      var num2sho = floor(random(2))
      createCharAtPositionInColor(xc, yc, num2sho, colory[colorIdx])
    }
  }
}

function makeCity(bN, off) {
	var tmp = off || 0
	var bW = width / random(bN-6, bN+35);
	for (var i = 0; i < bN; i++) {
    lightsteel = lerpColor(color(offwhite), color(bluesteel), bN/50);
    nightsteel = lerpColor(color(bluesteel), color(darkSteel), bN/50);
    lightgrn = lerpColor(color('white'), color(techGreen), bN/50);
    aqua = lerpColor(color(bluesteel), color(techGreen), bN/50);
    var allSteels = [lightsteel, nightsteel, aqua, lightgrn]
    var bH = random(10, height + 100)
    let rx = tmp + random(5)
    let ry = height - random(95,100) - bH
    let rw = bW - random(10,11)
    let rh = bH
    fill(nightsteel)
    noStroke()
    // rect(rx, ry, rw, rh)
    fillCoordWithDigits(rx, ry, rw, rh, allSteels, 10)

		for (var k = 0; k < bH - 40; k += 10) {
			for (var j = 0; j < bW - 10; j += (bW-10)/5) {
				addWindowLight(bW, bH, k, j, tmp)
			}
		}
    var c = random(100) < 50? topRedLight: 'black';
    stroke(c)
    point((bW-bW/2), bH+1)
		tmp += bW;
	}
}

function addWindowLight(bW, bH, k,j, tmp){
  var ctmp = random(0, 255);
  stroke(ctmp, ctmp, 0);
  var pointWidth = tmp+5+j+((bW-10)/5)/10
  var pointHeight = height-100-bH+20+k
  if (pointHeight * random(10)%13 < 3 && pointHeight > bH*.77){
    stroke(litBuildingTop)
  }
  if (pointHeight%random(pointHeight/7) < 3){
    stroke('white')
  }
  if (pointHeight%random(pointHeight/5) < random(25)){
    stroke(bluesteel)
  }
  strokeWeight(bW*0.135);
  point(pointWidth, pointHeight)
}

function drawSun(val) {
  var color = random(val)%2 > 0? lightYellow: offwhite
  //sun
  fill(color)
  ellipse(-500 , -200, 200)
  // //ground
  fill(55, 235, 0)
  rect(0, 350, 400, 50)
}