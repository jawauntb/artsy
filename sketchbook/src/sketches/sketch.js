// import clr from './colors';
// import Sketch from "react-p5";
import dynamic from "next/dynamic";

// import DotMatrix from '../../assets/DotMatrix-TwoRegular.ttf';
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});
let font;
let lerpedback;
let backcolor;
let lightsteel;
let nightsteel;
let aqua;
let lightgrn;
let allSteels;
let colorset;
var DotMatrix = "./DotMatrix-TwoRegular.ttf";
let fontsize = 25;

const litBuildingTop = "#85F7D3";
const offwhite = "#f2f4f6";
const bluesteel = "#5c7287";
const darkSteel = "#171c21";
const topRedLight = "#D25282";
const purNigthSky = "#0c1445";
const redBrown = "#6B3825";
const techGreen = "#39ff14";
// const lightYellow = '#ffffe0';
// const orangeLights ='#E87A3D';
// const darkBuilding = '#432B39';
// const steelBuilding = '#9BAED8';
// const nightBlue = (0, 24, 72);
// const deepRed = '#FA011F';
// const whiteLight = '#F6F7F1';
// const whiteStar = '#fff4ea';
// const purpleSky = '#5F42C0';
// const steels = [offwhite, bluesteel, darkSteel, darkBuilding, steelBuilding, techGreen];
// const buildingColors = [steelBuilding, nightBlue, topRedLight];
// const lightColors = [litBuildingTop];

const help = (s) => {
  const arbitraryRule = (n) => {
    return s.random(n) / s.random(100) > s.random(10);
  };

  const createCharAtPositionInColor = (x, y, value, color) => {
    // makeShimmer()
    s.textSize(s.random(8, 17));
    s.fill(color);
    s.text(value, x, y);
  };

  const fillCoordWithDigits = (x, y, w, h, colory, increment) => {
    for (let yc = 0; yc < y + s.random(13, 50); yc += increment) {
      for (let xc = 0; xc < w - s.random(3, 22); xc += w / (increment / 2)) {
        // for each point within bounds, draw a number between 0 and random range,
        //increment points after
        let colorIdx = s.floor(s.random(colory.length));
        let num2sho = s.floor(s.random(2));
        createCharAtPositionInColor(xc, yc, num2sho, colory[colorIdx]);
      }
    }
  };

  const makeBuildings = (bH, bW, tmp) => {
    for (let k = 0; k < bH - 40; k += 10) {
      for (let j = 0; j < bW - 10; j += (bW - 10) / 6) {
        // makeShimmer()
        s.textSize(s.random() * s.random(13));
        createCharAtPositionInColor(
          tmp + 5 + j + (bW - 10) / 5 / 10,
          s.height - 100 - bH + 20 + k,
          s.floor(s.random(2)),
          s.color(allSteels[s.floor(s.random(allSteels.length))])
        );
        addWindowLight(bW, bH, k, j, tmp, colorset);
      }
    }
  };

  const setCoords = (tmp, bW) => {
    let bH = s.random(10, s.height + 100);
    let rx = tmp + s.random(5);
    let ry = s.height - s.random(95, 100) - bH;
    let rw = bW - s.random(10, 11);
    let rh = bH;
    return [bH, rx, ry, rw, rh];
  };

  const makeCity = (bN, off) => {
    let tmp = off || 0;
    let bW = s.width / s.random(bN - 6, bN + 35);
    for (let i = 0; i < bN; i++) {
      let [bH, rx, ry, rw, rh] = [...setCoords(tmp, bW)];
      s.fill(nightsteel);
      s.noStroke();
      fillCoordWithDigits(rx, ry, rw, rh, allSteels, 10);
      makeBuildings(bH, bW, tmp);
      addBuildingDecor(bW, rx, ry);
      tmp += bW;
    }
  };

  const addBuildingDecor = (bW, rx, ry) => {
    let c = arbitraryRule(25) ? topRedLight : litBuildingTop;
    s.stroke(c);
    s.strokeWeight(bW * s.random(5, 9) * 0.03);
    s.point(rx - s.random(bW / 10), ry + 1);
  };

  const setWindowWidthAndHeight = (bW, bH, k, j, tmp) => {
    let W = tmp + 5 + j + (bW - 10) / 5 / 10;
    let H = s.height - 100 - bH + 20 + k;
    return [W, H];
  };

  const setStrokeColor = (colorset) => {
    let idx = s.floor(s.random(colorset.length));
    s.stroke(colorset[idx]);
  };

  const addWindowLight = (bW, bH, k, j, tmp, colorset) => {
    setStrokeColor([(s.random(0, 255), s.random(0, 255), 0)]);
    let pointWidth,
      pointHeight = [...setWindowWidthAndHeight(bW, bH, k, j, tmp)];
    setStrokeColor(colorset);
    s.strokeWeight(bW * s.random(0.04));
    s.point(pointWidth, pointHeight);
  };

  // const drawSun = () => {
  //   let color = arbitraryRule(3)? arbitraryRule(5)? arbitraryRule(8)? 'yellow': lightYellow: orangeLights : offwhite
  //   s.fill(color)
  //   s.ellipse(s.random(20,300) , -1*s.random(10,100), s.random(2,100))
  // }

  // const randomFills = () => {
  //   for (let i=-0; i < 1400; i++) {
  //     // push()
  //     s.textSize(s.random(3,66));
  //     let c = arbitraryRule(5)? (arbitraryRule(9)? lightgrn: techGreen): 'white';
  //     let nuclr = s.color(c)
  //     s.fill(nuclr)
  //     s.text(s.floor(s.random(2)), s.random(s.height)*5, s.random(s.width));
  //     s.noFill()
  //     // pop()
  //   }
  // }
  return { makeCity };
};
const CityGen = () => {
  //artsy/sketchbook/public/DotMatrix-TwoRegular.ttf
  const preload = (p5) => {
    font = p5.loadFont(DotMatrix, (font, error) => {
      if (error) {
        console.log(error.message, DotMatrix);
      } else {
        console.log(`loaded ${font}`);
      }
      // Set text characteristics
    });
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    // font = s.loadFont(DotMatrix, font =>{
    //   console.log(`loaded ${font}`)
    // } );
  };

  const setup = (s, canvasParentRef) => {
    s.createCanvas(1400, 1400, s.WEBGL).parent(canvasParentRef);
    s.frameRate(20);
    s.textFont(font);
    s.textSize(fontsize);
    s.textAlign(s.CENTER, s.CENTER);
    // s.createLoop({
    //   duration:10,
    //   // framesPerSecond: random(10),
    //     gif:{
    //     render:true,
    //     fileName:'city' + Math.floor(s.random(10)).toString()+'.gif',
    //     startLoop:0,
    //     endLoop:1,
    //     download:true,
    //   }
    // })
    // s.animLoop.noiseFrequency(10)
    // noLoop()
  };

  const draw = (s) => {
    lerpedback = s.lerpColor(
      s.color(purNigthSky),
      s.color(bluesteel),
      s.random(700) / s.random(10, 800)
    );
    backcolor = s.lerpColor(
      lerpedback,
      s.color("black"),
      s.random(3700) / s.random(16, 4000)
    );
    lightsteel = s.lerpColor(
      s.color(offwhite),
      s.color(bluesteel),
      s.random(700)
    );
    nightsteel = s.lerpColor(
      s.color(bluesteel),
      s.color(darkSteel),
      s.random(700)
    );
    aqua = s.lerpColor(
      s.color(bluesteel),
      s.color(techGreen),
      s.random(700) / s.random(10, 800)
    );
    lightgrn = s.lerpColor(
      s.color("white"),
      s.color(techGreen),
      s.random(700) / s.random(10, 800)
    );
    allSteels = [lightsteel, nightsteel, aqua, lightgrn];
    colorset = [redBrown, "white", bluesteel];

    s.background(backcolor);
    s.noFill();
    s.stroke(255);
    // help(s).drawSun()
    // help(s).randomFills()
    s.noStroke();
    s.fill(0);
    s.rect(1200, s.height - 100, s.width, 100);
    help(s).makeCity(s.random(80), -1 * s.random(20));
    s.noLoop();
  };
  return <Sketch setup={setup} draw={draw} preload={preload} />;
};

export default CityGen;

// makeCity(random(200, 250), random(-5,15));
// makeCity(random(17,38), random(-15, 20));
// makeCity(80, 47);
// makeCity(random(1000), random(-10, 25));
// makeCity(200, -1 * random(80, 1200));
// makeCity(random(30), 1000);
// random()
// makeCity(random(59), random(-100,-10));
// fill(random(40,255), random(1, 255), random(5,90))

// export default CityMaker;

// const getColorFromRule = (expr, color) => {
//   if (expr){
//     return color
//   }
// }
// const makeShimmer = () => {
//   s.ambientLight(s.random(233), s.random(220), s.random(100));
//   // specularMaterial(random(240, 250));
//   s.shininess(s.random(150));
// }

// const lightYellow = '#ffffe0';
// const orangeLights ='#E87A3D';
// const darkBuilding = '#432B39';
// const steelBuilding = '#9BAED8';
// const nightBlue = (0, 24, 72);
// const deepRed = '#FA011F';
// const whiteLight = '#F6F7F1';
// const whiteStar = '#fff4ea';
// const purpleSky = '#5F42C0';
// const steels = [offwhite, bluesteel, darkSteel, darkBuilding, steelBuilding, techGreen];
// const buildingColors = [steelBuilding, nightBlue, topRedLight];
// const lightColors = [litBuildingTop];
