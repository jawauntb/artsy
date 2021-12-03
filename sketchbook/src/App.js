// import CityGen from './sketches/sketch';
import dynamic from "next/dynamic";
import { makeCity } from "./helpers/cityHelpers";
// import RalewayDots from "./assets/fonts/RalewayDots-Regular.otf";
// import Sketch from "react-p5";
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});
const App = () => {
  // const fontPath = "./assets/fonts/RalewayDots-Regular.otf";

  let typeface;
  let fontsize = 25;

  const setup = (s, canvasParentRef) => {
    s.createCanvas(2000, 2000, s.WEBGL).parent(canvasParentRef);
    const sf = s.loadFont("./assets/fonts/RalewayDots-Regular.otf");
    s.textFont(sf);
    s.textSize(fontsize);
    s.textAlign(s.CENTER, s.CENTER);
    // s.frameRate(20);
    // s.noLoop();
  };

  const draw = (s) => {
    const blueish = s.lerpColor(
      s.color("#0c1445"),
      s.color("#5c7287"),
      s.random(700) / s.random(10, 800)
    );
    const backcolor = s.lerpColor(
      blueish,
      s.color("black"),
      s.random(3700) / s.random(16, 4000)
    );
    s.background(backcolor);
    s.noFill();
    s.stroke(255);
    s.noStroke();
    s.fill(0);
    s.rect(1200, s.height - 100, s.width, 100);
    makeCity(40, -5, s);
    // makeCity(s.random(100), -1 * s.random(20), s);
    makeCity(100, 45, s);
    makeCity(15, -10, s);
    makeCity(89, 23, s);
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default App;
