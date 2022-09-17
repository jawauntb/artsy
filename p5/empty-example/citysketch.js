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

function setup() {
	createCanvas(800, 500);
	// frameRate(14)s
	// noLoop();
}
// var counter = 0

function draw() {
	var lerpedback = lerpColor(color('#D48ECD'), color('darkblue'), random(180) / random(10, 830));
	var backcolor = lerpColor(lerpedback, color(lightYellow), random(300
	) / random(16, 400))
  	background(backcolor);
	noFill();
	stroke(255);
	// for (var i=0; i < 50; i++) {
	// 	strokeWeight(6);
    // 	stroke(whiteStar)
	// 	text(random(2), random(width-width*2+20, height), height);
	// }
	noStroke();
	fill(0);
	// rect(0, height - 1, width, 1);
	// makeCity(random(40), random(107));
	makeCity(random(19, 50), random(-22));
	makeCity(random(11, 22), random(20));
	makeCity(random(33, 36), random(-10));
	makeCity(random(20, 24), -60);
	makeCity(random(18, 30), 30);
	//saveCanvas("test", "jpg");
	// counter++
}

function makeCity(bN, off) {
	var tmp = off || 0
	var bW = width / bN;
	var lightsteel = lerpColor(color(offwhite), color(bluesteel), bN/50);
    var nightsteel = lerpColor(color(bluesteel), color(darkSteel), bN/50);
    var lightgrn = lerpColor(color('blue'), color('black'), bN/50);
    var aqua = lerpColor(color('pink'), color('yellow'), bN/50);
	var allSteels = [
		lightsteel,
		nightsteel,
		aqua,
		lightgrn,
		color('black'),
		color('grey'),
		color('#1B1725'),
		color('#534b62'),
		color('#d0bcd5'),
		color('	#226ce0'),
		color(litBuildingTop),
		color(whiteStar),
		color(bluesteel),
		color(whiteLight),
		color(darkBuilding),
		color(redBrown),
		color(nightBlue),
		color(lightYellow),
		color('darkblue'),
	]
	for (var i = 0; i < bN; i++) {
		// var fll = lerpColor(color(0,0,0), backcolor, bN/50);
		var colorIdx = floor(random(allSteels.length - 1))
		// fill(color)
		fill(allSteels[colorIdx]);
		noStroke();
		var bH = random(50, height - 130)
		rect(tmp + 5, height - 100 - bH, bW - 10, bH);
		for (var k = 0; k < bH - 40; k += 10) {
			for (var j = 0; j < bW - 10; j += (bW-10)/5) {
				var a = random(0, 255);
				var b = random(0, 200);
				var c = random(0, 255);
				stroke(a, a, c);
				strokeWeight(bW*0.05);
				point(tmp+5+j+((bW-10)/5)/2, height-100-bH+20+k);
			}
		}
		tmp += bW;
	}
}