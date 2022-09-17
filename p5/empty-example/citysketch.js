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
	frameRate(2);
	// noLoop();
}
// var counter = 0

function draw() {
	// make a new color object
	var lerpedback = lerpColor(color('pink'), color('skyblue'), random(180) / random(10, 830));
	// make a background color;
	var backcolor = lerpColor(lerpedback, color('black'), random(300
	) / random(9, 88));
	var ooo = lerpColor(backcolor, color('darkblue'), random(300
	) / random(600));
	var lll = lerpColor(ooo, backcolor, random(-50, 600
	) / random(11, 200));
	// var otherColors =  ['black', 'grey', 'orange', '#e4533b', purNigthSky, lightYellow]
	// var oidx = random(otherColors.length - 1);
	// var newclr = otherColors[oidx];
	// // var cc = color(newclr);
	var choices = [lerpedback, backcolor];
	var coloridxx = random(choices.length - 1);
	var colur = choices[coloridxx];
  	background(lll);
	noFill();
	stroke(255);
	// for (var i=0; i < 50; i++) {
	// 	strokeWeight(6);
    // 	stroke(whiteStar)
	// 	text(random(2), random(width-width*2+20, height), height);
	// }
	noStroke();
	// makeShimmer();
	fill(0);
	
// rect(0, height - 1, width, 1);
	makeCity(random(88), random(-76, 55));
	makeCity(random(289), random(-55, 400));
	makeCity(random(500), random(-22, 88));
	makeCity(random(266), random(500));
	makeCity(random(155), random(-33));
	makeCity(random(88), random(350));
	makeCity(random(77), random(-77));
	makeCity(random(60), random(107, 1000));
	makeCity(random(50), random(-22, 88));
	makeCity(random(34), random(20));
	makeCity(random(77), random(-55, 89));
	makeCity(random(22), random(-200, 200));
	makeCity(random(17), random(-10, 80));
	makeCity(random(12), random(40));

	// makeCity(random(20, 24), -60);
	// makeCity(random(8, 30), 30);
	//saveCanvas("test", "jpg");
	// counter++
}

function makeShimmer(){
  ambientLight(random(233));
  directionalLight(lightYellow, random(20, width/2), random(100, height/2), random(280));
  specularMaterial(random(240, 250));
  shininess(400);
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
		color('beige')
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
				var a = random(0, 200);				
				var b = random(0, 200);
				var c = random(0, 200);
				var d = a + (!!(random(0, 2)) ? random(75) : 0);
				var e = a + (!!(random(0, 2)) ? 0: random(15));
				stroke(d, e, c);
				strokeWeight(bW * 0.05);
				point(tmp+5+j+((bW-10)/5)/2, height-100-bH+20+k);
			}
		}
		tmp += bW;
	}
}