const canvas = document.querySelector("#container");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const num = 400;
const maxConnectDistance = 80; //粒子相距小于这个值则相连
let mouseParticle = null;
class Particle {
  constructor({ x, y, size = 1, color = "white", speedX = 0.5, speedY = 0.5 }) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  // 绘制粒子
  draw() {
    const { x, y, size, color } = this;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    //   ctx.beginPath();
    //   ctx.fillStyle = color;
    //   ctx.fillRect(x, y, 10, 10);
    //   ctx.closePath();
  }

  // 更新粒子位置
  update() {
    if (this.x < 0 || this.x > canvas.width) {
      this.speedX *= -1;
    }
    this.x += this.speedX;

    if (this.y < 0 || this.y > canvas.width) {
      this.speedY *= -1;
    }
    this.y += this.speedY;

    this.draw();
  }
}

let particles = [];
function createParticles() {
  for (let i = 0; i < num; i++) {
    let particle = new Particle({
      x: randomNum(0, canvas.width),
      y: randomNum(0, canvas.height),
      size: randomNum(0.5, 2),
      color: "#ffffff",
      speedX: randomNum(-0.5, 0.5),
      speedY: randomNum(-0.5, 0.5),
    });

    particles.push(particle);
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    // 为了提高性能，位置更新在这里的外层遍历进行
    particles[i].update();

    // 判断距离，连线
    for (let j = i + 1; j < particles.length; j++) {
      let p1 = particles[i];
      let p2 = particles[j];
      let distance = Math.sqrt(
        Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
      );
      if (distance < maxConnectDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${
          1 - distance / maxConnectDistance
        })`; //距离越远，线条颜色越淡
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }
}

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function handleMouseOver(e) {
  if (!mouseParticle) {
    console.log("create a mouseParticle");
    mouseParticle = new Particle({
      x: e.clientX,
      y: e.clientY,
      size: 3,
      color: "white",
      speedX: randomNum(-0.5, 0.5),
      speedY: randomNum(-0.5, 0.5),
    });

    particles.push(mouseParticle);
  }
}
function handleMouseMove(e) {
  mouseParticle.x = e.clientX;
  mouseParticle.y = e.clientY;
}
function handleMouseOut(e) {
  mouseParticle.x = null;
  mouseParticle.y = null;
}
function addListeners() {
  canvas.addEventListener("mouseover", handleMouseOver);
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseout", handleMouseOut);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // for (let i = 0; i < particles.length; i++) {
  //   particles[i].update();
  // }
  connectParticles();
  requestAnimationFrame(animate);
}

createParticles();
addListeners();

animate();
