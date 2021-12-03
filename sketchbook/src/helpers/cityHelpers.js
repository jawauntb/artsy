import {
  litBuildingTop,
  topRedLight,
  nightsteel,
  colorset,
  allSteels,
} from "./colors";

const arbitraryRule = (n, s) => {
  return s.random(n) / s.random(100) > s.random(10);
};

const createCharAtPositionInColor = (x, y, value, color, s) => {
  // makeShimmer()
  const sf = s.loadFont("./assets/fonts/RalewayDots-Regular.otf");
  s.textFont(sf);
  s.textSize(s.random(8, 17));
  s.fill(color);
  s.text(value, x, y);
};

const fillCoordWithDigits = (x, y, w, h, colory, increment, s) => {
  for (let yc = 0; yc < y + s.random(13, 50); yc += increment) {
    for (let xc = 0; xc < w - s.random(3, 22); xc += w / (increment / 2)) {
      // for each point within bounds, draw a number between 0 and random range,
      //increment points after
      let colorIdx = s.floor(s.random(colory.length));
      let num2sho = s.floor(s.random(2));
      createCharAtPositionInColor(xc, yc, num2sho, colory[colorIdx], s);
    }
  }
};

const setStrokeColor = (s) => {
  s.stroke(
    s.floor(s.random(30, 220)),
    s.floor(s.random(30, 220)),
    s.floor(s.random(30, 220))
  );
};

const setWindowWidthAndHeight = (bW, bH, k, j, tmp, s) => {
  let W = tmp + 5 + j + (bW - 10) / 5 / 10;
  let H = s.height - 100 - bH + 20 + k;
  return [W, H];
};

const addWindowLight = (bW, bH, k, j, tmp, colorset, s) => {
  setStrokeColor(s);
  let pointWidth,
    pointHeight = [...setWindowWidthAndHeight(bW, bH, k, j, tmp, s)];
  setStrokeColor(s);
  s.strokeWeight(bW * s.random(0.04));
  s.point(pointWidth, pointHeight);
};

const makeBuildings = (bH, bW, tmp, s) => {
  for (let k = 0; k < bH - 40; k += 10) {
    for (let j = 0; j < bW - 10; j += (bW - 10) / 6) {
      // makeShimmer()
      s.textSize(s.random() * s.random(13));
      let astl = allSteels(s);
      createCharAtPositionInColor(
        tmp + 5 + j + (bW - 10) / 5 / 10,
        s.height - 100 - bH + 20 + k,
        s.floor(s.random(2)),
        s.color(astl[s.floor(s.random(astl.length))]),
        s
      );
      addWindowLight(bW, bH, k, j, tmp, colorset, s);
    }
  }
};

const setCoords = (tmp, bW, s) => {
  let bH = s.random(10, s.height + 100);
  let rx = tmp + s.random(5);
  let ry = s.height - s.random(95, 100) - bH;
  let rw = bW - s.random(10, 11);
  let rh = bH;
  return [bH, rx, ry, rw, rh];
};

const addBuildingDecor = (bW, rx, ry, s) => {
  let c = arbitraryRule(25, s) ? topRedLight : litBuildingTop;
  s.stroke(c);
  s.strokeWeight(bW * s.random(5, 9) * 0.03);
  s.point(rx - s.random(bW / 10), ry + 1);
};

const makeCity = (bN, off, s) => {
  let tmp = off || 0;
  let bW = s.width / s.random(bN - 6, bN + 35);
  for (let i = 0; i < bN; i++) {
    let [bH, rx, ry, rw, rh] = [...setCoords(tmp, bW, s)];
    s.fill(nightsteel(s));
    s.noStroke();
    fillCoordWithDigits(rx, ry, rw, rh, allSteels(s), 10, s);
    makeBuildings(bH, bW, tmp, s);
    addBuildingDecor(bW, rx, ry, s);
    tmp += bW;
  }
};

export {
  makeCity,
  addBuildingDecor,
  setCoords,
  makeBuildings,
  addWindowLight,
  setWindowWidthAndHeight,
  createCharAtPositionInColor,
  fillCoordWithDigits,
  setStrokeColor,
};
