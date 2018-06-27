
class Drone {
  constructor(area, x, y, direction) {
    this.area = area;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.movements = {
      N: {
        L: () => this.changeDirection('O'),
        R: () => this.changeDirection('E'),
        M: () => this.move('y', 1)
      },
      E: {
        L: () => this.changeDirection('N'),
        R: () => this.changeDirection('S'),
        M: () => this.move('x', 1)
      },
      S: {
        L: () => this.changeDirection('E'),
        R: () => this.changeDirection('O'),
        M: () => this.move('y', -1)
      },
      O: {
        L: () => this.changeDirection('S'),
        R: () => this.changeDirection('N'),
        M: () => this.move('x', -1)
      }
    };
  }

  changeDirection(direction) {
    this.direction = direction;
  }

  move(axis, movement) {
    const point = {
      x: this.x + movement,
      y: this.y
    };

    if (axis === 'y') {
      point.x = this.x;
      point.y = this.y + movement;
    }

    if (this.area.isPointInArea(point.x, point.y)) {
      this[axis] += movement;
    }

  }

  droneStatus() {
    return `${this.x} ${this.y} ${this.direction}`;
  }

  executeCommand(cmd) {
    this.movements[this.direction][cmd]();
  }
}


module.exports = Drone;
