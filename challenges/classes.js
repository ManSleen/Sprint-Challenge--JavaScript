console.log(
  "%cCLASSES.JS",
  "color: lime; font-weight: bold; font-size: 3rem; text-shadow: 2px 2px 4px rgba(204,204,204, 0.6);"
);

// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(props) {
    (this.length = props.length),
      (this.width = props.width),
      (this.height = props.height);
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
  constructor(cubeMakerAttrs) {
    super(cubeMakerAttrs);
  }
  cubeVolume() {
    return Math.pow(this.length, 3);
  }
  cubeSurfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
}

const cube = new CubeMaker({
  length: 12
});

console.log(cube.cubeVolume()); // 1728
console.log(cube.cubeSurfaceArea()); // 864

console.log("=============================================================");

var svgbiz = `PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgICAgIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiA
gICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHg9IjEwIiA9Ij
EwIiAgICAgICAgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiICAgICAgICByeD0iMTUiIHJ5PSIxN
SIvPjwvc3ZnPg==`;
var datsvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" fill="none" stroke="#fff" stroke-linecap="round" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="b"><animate id="a" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin"/></path><path id="c"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+1s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+1s"/></path><path id="d"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+2s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+2s"/></path><path id="e"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+3s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+3s"/></path><path id="f"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+4s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+4s"/></path><path id="g"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+5s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+5s"/></path></defs><use xlink:href="#b"/><use xlink:href="#b" transform="rotate(60 160 160)"/><use xlink:href="#b" transform="rotate(120 160 160)"/><use xlink:href="#b" transform="rotate(180 160 160)"/><use xlink:href="#b" transform="rotate(240 160 160)"/><use xlink:href="#b" transform="rotate(300 160 160)"/><use xlink:href="#c" transform="rotate(30 160 160)"/><use xlink:href="#c" transform="rotate(90 160 160)"/><use xlink:href="#c" transform="rotate(150 160 160)"/><use xlink:href="#c" transform="rotate(210 160 160)"/><use xlink:href="#c" transform="rotate(270 160 160)"/><use xlink:href="#c" transform="rotate(330 160 160)"/><use xlink:href="#d"/><use xlink:href="#d" transform="rotate(60 160 160)"/><use xlink:href="#d" transform="rotate(120 160 160)"/><use xlink:href="#d" transform="rotate(180 160 160)"/><use xlink:href="#d" transform="rotate(240 160 160)"/><use xlink:href="#d" transform="rotate(300 160 160)"/><use xlink:href="#e" transform="rotate(30 160 160)"/><use xlink:href="#e" transform="rotate(90 160 160)"/><use xlink:href="#e" transform="rotate(150 160 160)"/><use xlink:href="#e" transform="rotate(210 160 160)"/><use xlink:href="#e" transform="rotate(270 160 160)"/><use xlink:href="#e" transform="rotate(330 160 160)"/><use xlink:href="#f"/><use xlink:href="#f" transform="rotate(60 160 160)"/><use xlink:href="#f" transform="rotate(120 160 160)"/><use xlink:href="#f" transform="rotate(180 160 160)"/><use xlink:href="#f" transform="rotate(240 160 160)"/><use xlink:href="#f" transform="rotate(300 160 160)"/><use xlink:href="#g" transform="rotate(30 160 160)"/><use xlink:href="#g" transform="rotate(90 160 160)"/><use xlink:href="#g" transform="rotate(150 160 160)"/><use xlink:href="#g" transform="rotate(210 160 160)"/><use xlink:href="#g" transform="rotate(270 160 160)"/><use xlink:href="#g" transform="rotate(330 160 160)"/></svg>';
svgbiz = window.btoa(datsvg);
var cssbiz =
  "background: url('data:image/svg+xml;base64," +
  svgbiz +
  "') left top no-repeat; font-size: 260px;";
console.log("%c     ", cssbiz);
