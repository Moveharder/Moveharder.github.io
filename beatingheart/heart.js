/**
 * 思路
 * 1.根据画心形函数绘制一条心形线，并存取线上每个点的坐标；
 * 2.帧率40，改变爱心函数参数，控制心形线形状，模拟跳动；
 * 3.在心形线内部生成随机跳动粒子；
 * 4.在心形线外部生成随机跳动粒子（呼吸间歇控制浓密）；
 */

class HeartLine {
  constructor(ctx, lines = []) {
    this.ctx = ctx;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.lines = lines || [];
    this.initCanvas();
    this.createLines();
    this.randomPoints = [];
  }

  initCanvas() {
    // 坐标变换
    this.ctx.translate(this.width / 2, this.height / 2);
    this.ctx.scale(1, -1);
    this.ctx.lineCap = "round";
  }

  createLines() {
    this.heartLineGroupData = [];
    this.lines.map((line, index) => {
      this.createHeartLine(index, line);
    });
  }

  /**
   * 居中画方形
   * @param {*} x
   * @param {*} y
   * @param {*} size
   * @param {*} color
   */
  drawRect(x = 0, y = 0, size = 2, color = "#000") {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }

  clear() {
    let rangeX = [-this.width / 2, this.width];
    let rangeY = [-this.height / 2, this.height];
    this.ctx.clearRect(rangeX[0], rangeY[0], rangeX[1], rangeY[1]);
    // this.ctx.beginPath();
    // this.ctx.strokeStyle = "white";
    // this.ctx.moveTo(rangeX[0], 0);
    // this.ctx.lineTo(rangeX[1], 0);
    // this.ctx.stroke();

    // this.ctx.beginPath();
    // this.ctx.strokeStyle = "white";
    // this.ctx.moveTo(0, rangeY[0]);
    // this.ctx.lineTo(0, rangeY[1]);
    // this.ctx.stroke();
  }

  /**
   * 绘制心形线公式，t为弧度
   * x=12*sin(t)-4*sin(3*t)
   * y=13*cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t)
   * @param {Number} level 第几条心形线，默认0
   */
  createHeartLine(level = 0, options = { size: 1, fat: 2, color: "red" }) {
    let currRad = 0;
    let stepRad = Math.PI / 180;

    // 设置绘制起点
    let pointTo = this.getXY(currRad, options.size, options.fat);
    this.collectPoint({ ...pointTo, ...options, rad: currRad }, level);

    while (currRad <= Math.PI * 2) {
      currRad += stepRad;
      pointTo = this.getXY(currRad, options.size, options.fat);
      this.collectPoint({ ...pointTo, ...options, rad: currRad }, level);
    }
  }

  /**
   * 收集心形线打点坐标。
   * 可能有多条心形线，因此collectPoint是二维数组
   * @param {Object} point {x,y,size,color}
   * @param {Number} level 第几条心形线，默认0
   */
  collectPoint(point, level = 0) {
    let newPoint = this.randPos(point);
    if (!this.heartLineGroupData[level]) {
      this.heartLineGroupData[level] = [newPoint];
    } else {
      this.heartLineGroupData[level].push(newPoint);
    }
  }

  creatStepPoints(x, y, range, size, stepV) {
    let rangeX = [x, x];
    let rangeY = [y, y];
    if (x > 0 && y > 0) {
      rangeX = [x - range, x];
      rangeY = [y - range, y];
    }
    if (x > 0 && y < 0) {
      rangeX = [x - range, x];
      rangeY = [y, y + range];
    }
    if (x < 0 && y < 0) {
      rangeX = [x, x + range];
      rangeY = [y, y + range];
    }
    if (x < 0 && y > 0) {
      rangeX = [x, x + range];
      rangeY = [y - range, y];
    }

    let stepX = (rangeX[1] - rangeX[0]) / stepV;
    let stepY = (rangeY[1] - rangeY[0]) / stepV;

    let nextX = x;
    let nextY = y;
    while (nextX < rangeX[1]) {
      nextX += stepX;
      nextY -= stepY;
      this.drawRect(nextX, nextY, size, "#ff84a2");
    }
  }

  creatRandomPoints(x, y, range, size, num) {
    for (let i = 0; i < num; i++) {
      let rangeX = [x, x];
      let rangeY = [y, y];
      if (
        (x > -15 && x < 15 && (y >= 0 || y <= 0)) ||
        (y > -30 && y < 10 && (x >= 0 || x <= 0)) ||
        (y == 0 && x >= 0) ||
        (y == 0 && x <= 0)
      ) {
        rangeX = [x, x];
        rangeY = [y, y];
        return;
      } else {
        if (x > 0 && y > 0) {
          rangeX = [x - range * (i + 1), x];
          rangeY = [y - range * (i + 1), y];
        }
        if (x > 0 && y < 0) {
          rangeX = [x - range * (i + 1), x];
          rangeY = [y, y + range * (i + 1)];
        }
        if (x < 0 && y < 0) {
          rangeX = [x, x + range * (i + 1)];
          rangeY = [y, y + range * (i + 1)];
        }
        if (x < 0 && y > 0) {
          rangeX = [x, x + range * (i + 1)];
          rangeY = [y - range * (i + 1), y];
        }
      }
      let rx = this.random(rangeX[0], rangeX[1]);
      let ry = this.random(rangeY[0], rangeY[1]);

      this.drawRect(rx, ry, size, "orange");
    }
  }

  /**
   * 绘制心形线
   * @param {Number} interval 绘制延迟毫秒数，0不延迟
   */
  async drawHearts(interval = 0, type = "dot") {
    return new Promise(async (resolve) => {
      // 设置绘制起点
      let startPoint = this.heartLineGroupData[0][0];
      this.ctx.moveTo(startPoint.x, startPoint.y);
      let levels = this.heartLineGroupData.length;

      // 绘制所有心形线
      for (let level = 0; level < levels; level++) {
        this.ctx.beginPath();
        let levelData = this.heartLineGroupData[level];
        for (let i = 0; i < levelData.length; i++) {
          let { x, y, color, randomX, randomY, randomSize } = levelData[i];
          this.ctx.strokeStyle = color;
          this.ctx.lineTo(x, y);
          this.creatRandomPoints(x, y, 20, randomSize, 3);
          // this.creatStepPoints(x, y, 20, 3, 10)

          type == "dot" && this.drawRect(randomX, randomY, randomSize, color);

          if (interval) {
            this.ctx.lineWidth = 2;
            // 因为所有线条都延迟会太慢，所以这里节流一下
            if (level == 0) {
              await this.delay(interval);
            }
            type == "line" && this.ctx.stroke();
          }
        }

        this.ctx.closePath();
        if (!interval) {
          type == "line" && this.ctx.stroke();
        }
      }

      resolve("done");
    });
  }

  getXY(rad, size, fat) {
    return {
      x: this.getX(rad, size + 1),
      y: this.getY(rad, size, fat),
    };
  }

  getX(t, scale = 1) {
    return scale * (12 * Math.sin(t) - 4 * Math.sin(3 * t));
  }

  getY(t, scale = 1, fat = 2) {
    return (
      scale *
      (13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        fat * Math.cos(3 * t) -
        Math.cos(4 * t))
    );
  }

  async beating(count) {
    let linesLen = this.lines.length;
    this.lines.map((line, index) => {
      let steps = 2000;
      let looper = count % steps;
      let diff = 0.008 * (linesLen - index);
      let fatDiff = 0.02;

      // 呼吸效果
      if (looper >= 0 && looper <= Math.floor(steps / 2) - 1) {
        line.size += diff;
        line.fat += fatDiff;
      } else {
        line.size -= diff;
        line.fat -= fatDiff;
      }
      if (line.size > 11) {
        line.size = 11;
      }
      if (line.size < 9) {
        line.size = 9;
      }
      if (line.fat > 4) {
        line.fat = 4;
      }
      if (line.fat < 2) {
        line.fat = 2;
      }
      return line;
    });
    this.createLines();
  }

  animate(index) {
    let that = this;
    let len = this.heartLineGroupData.length;
    this.heartLineGroupData[index].map(async (point, pindex) => {
      let {
        x,
        y,
        randomX,
        rangeX,
        randomY,
        rangeY,
        randomSize,
        stepX,
        stepY,
        color,
      } = point;
      this.drawRect(x, y, randomSize, color);
      return point;

      //控制x在某个区域往复
      // if (randomX > rangeX[0] && randomX < rangeX[1]) {
      //   if (randomX < x) {
      //     randomX += stepX;
      //   } else {
      //     randomX = rangeX[0];
      //   }
      // } else {
      //   randomX = this.random(rangeX[0], rangeX[1]);
      // }

      //控制y在某个区域往复
      if (randomY > rangeY[0] && randomY < rangeY[1]) {
        if (randomY > y) {
          randomY -= stepY;
        } else {
          randomY = rangeY[0];
        }
      } else {
        randomY = this.random(rangeY[0], rangeY[1]);
      }

      if (index > 4 && index < len - 10) {
        point.randomX = this.random(rangeX[0], rangeX[1]);
        point.randomY = this.random(rangeY[0], rangeY[1]);
      } else {
        point.randomX = randomX;
        point.randomY = randomY;
      }

      // 控制内圈心形线的密度（由外向内，逐层递减）
      if (index > len / 4) {
        if (pindex % (2 + Math.floor(index / 4)) == 0) {
          this.drawRect(
            point.randomX,
            point.randomY,
            that.random(0, 18),
            color
          );
        }
      } else {
        this.drawRect(point.randomX, point.randomY, that.random(1, 6), color);
      }

      return point;
    });
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randPos(point) {
    const { x, y } = point;
    let rangeX = [x - 1, x + 1];
    let rangeY = [y - 10, y + 10];
    let stepV = 20;
    let rx = this.random(rangeX[0], rangeX[1]);
    let ry = this.random(rangeY[0], rangeY[1]);
    let rsize = this.random(2, 3);
    return {
      ...point,
      randomX: rx,
      randomY: ry,
      rangeX,
      rangeY,
      randomSize: rsize,
      stepX: Math.abs(x - rx) / stepV,
      stepY: Math.abs(y - ry) / stepV,
    };
  }

  delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }

  run() {
    this.clear();
    this.drawHearts().then((res) => {
      this.beating(+new Date());
    });
    // requestAnimationFrame(this.run.bind(this));

    setInterval(() => {
      this.run();
    }, 60);
  }
}

// test
let hlCanvas = document.querySelector("#heart_line");
let hlCtx = hlCanvas.getContext("2d");
let lines = [];
let lineR = 10; //线条半径
let lineGap = 0.5; //每条线间距
let lineCount = lineR / lineGap; //需要生成的线条数量
let outerLineCount = 4; //外围线条数量
for (let i = 0; i < lineCount - 2; i++) {
  lines.push({
    size: lineR - i * lineGap,
    fat: 2,
    color: i > outerLineCount ? "#fec0cd" : "#fc5452",
  });
}
console.log(lines);
let HL = new HeartLine(hlCtx, [
  {
    size: 9,
    fat: 2,
    color: "#ff84a2",
    name: "bone",
  },
]);

HL.run();
