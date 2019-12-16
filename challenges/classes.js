// 1. Copy and paste your prototype in here and refactor into class syntax.

// function Cuboid(length, width, height) {
//   this.length = length;
//   this.width = width;
//   this.height = height;
// }

// Cuboid.prototype.volume = function() {
//   return this.length * this.width * this.height;
// };

// Cuboid.prototype.surfaceArea = function() {
//   return (
//     2 *
//     (this.length * this.width +
//       this.length * this.height +
//       this.width * this.height)
//   );
// };

// const cuboid = new Cuboid(4, 5, 5);

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
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

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(attributes) {
    super(length, width, height);
  }
}

const cuboid = new Cuboid(4, 5, 5);
const cuboid2 = new CubeMaker(4, 5, 5);
