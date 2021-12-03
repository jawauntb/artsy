const litBuildingTop = "#85F7D3";
const topRedLight = "#D25282";
const offwhite = "#f2f4f6";
const bluesteel = "#5c7287";
const darkSteel = "#171c21";
const purNigthSky = "#0c1445";
const redBrown = "#6B3825";
const techGreen = "#39ff14";

const lightsteel = (s) =>
  s.lerpColor(s.color(offwhite), s.color(bluesteel), s.random(700));
const nightsteel = (s) =>
  s.lerpColor(s.color(bluesteel), s.color(darkSteel), s.random(700));
const aqua = (s) =>
  s.lerpColor(
    s.color(bluesteel),
    s.color(techGreen),
    s.random(700) / s.random(10, 800)
  );
const lightgrn = (s) =>
  s.lerpColor(
    s.color("white"),
    s.color(techGreen),
    s.random(700) / s.random(10, 800)
  );
const allSteels = (s) => [lightsteel(s), nightsteel(s), aqua(s), lightgrn(s)];
const colorset = (s) => [redBrown, "white", bluesteel];

module.exports = {
  litBuildingTop,
  topRedLight,
  offwhite,
  bluesteel,
  darkSteel,
  purNigthSky,
  redBrown,
  techGreen,
  lightsteel,
  nightsteel,
  aqua,
  lightgrn,
  colorset,
  allSteels,
};
