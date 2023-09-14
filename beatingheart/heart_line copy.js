class HeartLine {
  constructor(ctx, lines = []) {
    this.ctx = ctx;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.lines = lines || [];
    this.initCanvas();
    this.createLines();
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
    let xRange1 = [-5, 5];
    let yRange1 = [0, 70];
    let yRange2 = [-220, -30];
    let isHide = Math.random() > 0.3;

    if (
      x > xRange1[0] &&
      x < xRange1[1] &&
      ((y > yRange1[0] && y < yRange1[1]) ||
        (y > yRange2[0] && y < yRange2[1])) &&
      isHide
    ) {
      // 清除密集区域
      // this.ctx.clearRect(x, y, 1, 1);
      return;
    }

    this.ctx.fillStyle = color;
    this.ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }

  clear() {
    this.ctx.clearRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  }

  /**
   * 绘制心形线公式，t为弧度
   * x=12*sin(t)-4*sin(3*t)
   * y=13*cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t)
   * @param {Number} level 第几条心形线，默认0
   */
  createHeartLine(level = 0, options = { size: 1, color: "red" }) {
    let currRad = 0;
    let stepRad = Math.PI / 180;

    // 设置绘制起点
    let pointTo = this.getXY(currRad, options.size);
    this.collectPoint({ ...pointTo, ...options, rad: currRad }, level);

    while (currRad <= Math.PI * 2) {
      currRad += stepRad;
      pointTo = this.getXY(currRad, options.size);
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

  /**
   * 绘制心形线
   * @param {Number} interval 绘制延迟毫秒数，0不延迟
   */
  async drawHearts(interval = 0) {
    return new Promise(async (resolve) => {
      console.log("this.heartLineGroupData:", this.heartLineGroupData);
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

          // this.drawRect(randomX, randomY, randomSize, color);

          if (interval) {
            this.ctx.lineWidth = 2;
            // 因为所有线条都延迟会太慢，所以这里节流一下
            if (level == 0) {
              await this.delay(interval);
            }
            this.ctx.stroke();
          }
        }

        this.ctx.closePath();
        if (!interval) {
          this.ctx.stroke();
        }
      }

      resolve("done");
    });
  }

  getXY(rad, size) {
    return {
      x: this.getX(rad, size),
      y: this.getY(rad, size),
    };
  }

  getX(t, scale = 1) {
    return scale * (12 * Math.sin(t) - 4 * Math.sin(3 * t));
  }

  getY(t, scale = 1) {
    return (
      scale *
      (13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t))
    );
  }

  async beating(count) {
    let linesLen = this.lines.length;
    this.lines.map((line, index) => {
      // 控制第N层以内的爱心线才有缩放效果
      if (index > 3) {
        let steps = 60;
        let looper = count % steps;
        let diff = 0.005 * (linesLen - index);

        // 呼吸效果
        if (looper >= 0 && looper <= Math.floor(steps / 2) - 1) {
          line.size += diff;
        } else {
          line.size -= diff;
        }
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
          this.drawRect( point.randomX, point.randomY, that.random(0, 18), color);
        }
      } else {
        this.drawRect( point.randomX, point.randomY, that.random(1, 6), color);
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
    let rsize = this.random(0, 18);
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
    for (let i = 0; i < this.heartLineGroupData.length; i++) {
      this.animate(i);
    }
    requestAnimationFrame(this.run.bind(this));
    return;

    // 以下代码！！！在高刷手机上减速处理！
    setInterval(() => {
      this.clear();
      for (let i = 0; i < this.heartLineGroupData.length; i++) {
        this.animate(i);
      }
    }, 100);
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
    color: i > outerLineCount ? "#fec0cd" : "#fc5452",
  });
}
console.log(lines);
let HL = new HeartLine(hlCtx, lines);

HL.drawHearts(10).then((res) => {
  HL.run();

  let count = 0;
  setInterval(() => {
    count++;
    HL.beating(count);
  }, 10);
});
