// // 创建渲染器
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // 创建主相机
// var camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 100, 200); // 设置相机位置

// // 创建小地图相机
// const miniMapSize = 200;
// var mapCamera = new THREE.OrthographicCamera(
//   -miniMapSize / 2,
//   miniMapSize / 2,
//   miniMapSize / 2,
//   -miniMapSize / 2,
//   0.1,
//   1000
// );
// mapCamera.position.set(0, 500, 0); // 设置相机位置
// mapCamera.lookAt(new THREE.Vector3(0, 0, 0)); // 设置相机朝向

// // 创建场景
// var scene = new THREE.Scene();

// // 创建小地图画布和渲染器
// var mapCanvas = document.createElement("canvas");
// mapCanvas.width = miniMapSize;
// mapCanvas.height = miniMapSize;
// var mapContext = mapCanvas.getContext("2d");
// var mapTexture = new THREE.CanvasTexture(mapCanvas);
// var mapMaterial = new THREE.MeshBasicMaterial({ map: mapTexture });
// var mapGeometry = new THREE.PlaneGeometry(miniMapSize, miniMapSize);
// var mapMesh = new THREE.Mesh(mapGeometry, mapMaterial);
// mapMesh.position.set(0, 150, -200); // 设置小地图位置
// scene.add(mapMesh);
// var mapRenderer = new THREE.WebGLRenderer({ alpha: true });
// mapRenderer.setClearColor(0x000000, 0); // 设置背景色为透明
// mapRenderer.setSize(200, 200);

// // 将小地图画布添加到DOM中
// var mapContainer = document.createElement("div");
// mapContainer.style.position = "absolute";
// mapContainer.style.top = "10px";
// mapContainer.style.right = "10px";
// mapContainer.style.border = "solid 1px white";
// mapContainer.appendChild(mapRenderer.domElement);
// document.body.appendChild(mapContainer);

// // 创建玩家实体
// var playerGeometry = new THREE.BoxGeometry(10, 10, 10);
// var playerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// var playerMesh = new THREE.Mesh(playerGeometry, playerMaterial);
// playerMesh.position.set(0, 10, 0); // 设置玩家位置
// scene.add(playerMesh);

// // 渲染函数
// function render() {
//   requestAnimationFrame(render);

//   // 更新玩家实体位置和朝向
//   // 这里假设玩家向右移动了10个单位，朝向为正x轴方向
//   playerMesh.position.x += 0.1;
//   playerMesh.rotation.y += 0.1;

//   // 更新小地图画布
//   mapContext.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
//   mapContext.fillStyle = "#ffffff";
//   mapContext.fillRect(0, 0, mapCanvas.width, mapCanvas.height);
//   mapContext.save();
//   mapContext.translate(mapCanvas.width / 2, mapCanvas.height / 2);
//   // 缩小比例
//   mapContext.scale(0.05, 0.05);
//   // 将玩家实体在小地图中的位置计算出来并绘制到画布上
//   var x = playerMesh.position.x;
//   var z = playerMesh.position.z;
//   var size = 2;
//   mapContext.fillStyle = "#ff0000";
//   mapContext.fillRect(x - size / 2, z - size / 2, size, size);
//   mapContext.restore();

//   // 渲染主场景和小地图场景
//   renderer.render(scene, camera);
//   mapRenderer.render(scene, mapCamera);
// }
// render();

// 初始化场景、渲染器和相机
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 10, 30);

// 初始化小地图相机和渲染器
const miniMapSize = 20;
var mapCamera = new THREE.OrthographicCamera(
  -miniMapSize / 2,
  miniMapSize / 2,
  miniMapSize / 2,
  -miniMapSize / 2,
  1,
  1000
);
mapCamera.position.set(0, 100, 0);
mapCamera.lookAt(new THREE.Vector3(0, 0, 0));
var mapRenderer = new THREE.WebGLRenderer({ alpha: true });
mapRenderer.setSize(miniMapSize * 10, miniMapSize * 10);
mapRenderer.domElement.style.position = "absolute";
mapRenderer.domElement.style.right = "10px";
mapRenderer.domElement.style.top = "10px";
mapRenderer.domElement.id = "mapcanvas";
document.body.appendChild(mapRenderer.domElement);

// 创建小地图背景平面
var mapGeometry = new THREE.PlaneGeometry(miniMapSize, miniMapSize);
var mapMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  map: new THREE.TextureLoader().load("./mini_map_1241_colorful.png"),
  side: THREE.DoubleSide,
});
var mapMesh = new THREE.Mesh(mapGeometry, mapMaterial);
mapMesh.rotation.x = -Math.PI / 2;
mapMesh.position.y = -0.1;
scene.add(mapMesh);

// 创建玩家实体
var playerRoot = new THREE.Group();
var playerGeometry = new THREE.ConeGeometry(1, 3, 3);
var playerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var playerMesh = new THREE.Mesh(playerGeometry, playerMaterial);
playerMesh.rotation.x = -Math.PI / 2;
playerMesh.rotation.reorder("YXZ");
playerRoot.position.set(0, 0.5, 0);
playerRoot.add(playerMesh);
scene.add(playerRoot);

let isUp = false,
  isDown = false,
  isLeft = false,
  isRight = false,
  isJump = false;

// 键盘事件
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyW":
      console.log("前进");
      isUp = true;
      break;
    case "KeyS":
      console.log("后退");
      isDown = true;
      break;
    case "KeyA":
      console.log("左移");
      isLeft = true;
      break;
    case "KeyD":
      console.log("右移");
      isRight = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "KeyW":
      console.log("前进");
      isUp = false;
      break;
    case "KeyS":
      console.log("后退");
      isDown = false;
      break;
    case "KeyA":
      console.log("左移");
      isLeft = false;
      break;
    case "KeyD":
      console.log("右移");
      isRight = false;
      break;
  }
});

const objMove = () => {
  if (isUp) {
    playerRoot.translateZ(-0.1); //不用.position.z，无法模拟真实效果
  }
  if (isDown) {
    playerRoot.translateZ(+0.1);
  }
  if (isLeft) {
    playerRoot.rotateY(THREE.MathUtils.degToRad(2)); //不用.position.y，无法模拟真实效果
  }
  if (isRight) {
    playerRoot.rotateY(-THREE.MathUtils.degToRad(2));
  }
};

// 渲染函数，每帧更新小地图上玩家实体的位置和朝向
function render() {
  // 计算玩家实体在小地图中的位置和朝向
  //   var mapPosition = new THREE.Vector3();
  //   mapPosition.setFromMatrixPosition(playerMesh.matrixWorld);
  //   mapPosition.setY(0.5);
  //   var mapDirection = new THREE.Vector3(0, 0, 1);
  //   mapDirection.applyMatrix4(playerMesh.matrixWorld);
  //   mapDirection.sub(mapPosition);

  //   playerMesh.position.x += 0.01;
  //   playerMesh.position.z += 0.01;

  // 更新小地图上玩家实体的位置和朝向
  //   let mapCanvas = document.querySelector("#mapcanvas");
  //   let mapContext = mapCanvas.domElement.getContext("2d");
  //   mapContext.clearRect(0, 0, 200, 200);
  //   mapContext.save();
  //   mapContext.translate(100, 100);
  //   mapContext.rotate(-playerMesh.rotation.y);
  //   mapContext.translate(-mapPosition.x / 10, mapPosition.z / 10);
  //   mapContext.beginPath();
  //   mapContext.moveTo(0, 0);
  //   mapContext.lineTo(0, -5);
  //   mapContext.lineTo(2, -3);
  //   mapContext.lineTo(0, 3);
  //   mapContext.lineTo(-2, -3);
  //   mapContext.lineTo(0, -5);
  //   mapContext.fill();
  //   mapContext.restore();

  objMove();

  // 渲染主场景和小地图
  renderer.render(scene, camera);
  mapRenderer.render(scene, mapCamera);

  requestAnimationFrame(render);
}
render();
