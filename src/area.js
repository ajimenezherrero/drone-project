class Area {
  constructor(x, y) {
    this.maxX = x;
    this.maxY = y;
  }

  isPointInArea(x, y) {
    return x >= 0 && x <= this.maxX && y >= 0 && y <= this.maxY;
  }

}

module.exports = Area;
