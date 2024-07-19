var e=Object.defineProperty,t=(t,s,i)=>(((t,s,i)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i})(t,"symbol"!=typeof s?s+"":s,i),i);import{B as s}from"./Base.f46e7956.js";import{V as i,a9 as a,aD as o,m as n,O as r,aU as l,aY as h,a3 as p,r as d,K as c,c as y,o as m}from"./vendor.d2781f4b.js";import{_ as u}from"./index.8b78e890.js";class g{constructor(){t(this,"name",null),t(this,"loaded",0),t(this,"total",0),t(this,"percent",0),t(this,"displayDom",null)}init(){let e=document.createElement("div");e.innerText=`${this.percent}%`,e.style.position="fixed",e.style.left=0,e.style.top=0,e.style.right=0,e.style.bottom=0,e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.fontSize="100px",e.style.color="white",e.style.background="rgba(0,0,0,0.3)",this.displayDom=e,document.body.appendChild(this.displayDom)}update(e,t,s){return this.displayDom?this.displayDom.style.display="flex":this.init(),this.name=e,this.loaded=t,this.total=s,this.percent=t/s,this.displayDom.innerText=100*this.percent+"%",1==this.percent&&(setTimeout((()=>{this.displayDom.style.display="none"}),300),!0)}}class b extends s{constructor(e){super(e),t(this,"playerMesh"),t(this,"propellerMesh"),t(this,"isActive",!1),t(this,"isSpace",!1),t(this,"cameraControl",null),t(this,"cameraTarget",null),t(this,"temPos",new i),t(this,"loadingBar",new g),t(this,"gltfLoader",(new a).setPath("models/airplanes/"))}init(){this.setupBasis(),this.addLights(),this.setupCameraControl(),this.addListeners()}setupBasis(){this.renderer.outputEncoding=o,this.camera=new n(75,this.width/this.height,.1,1e3),this.camera.position.set(-4.37,0,-4.75),this.camera.lookAt(0,0,6)}setupCameraControl(){this.cameraControl=new r,this.cameraControl.add(this.camera),this.cameraTarget=new i(0,0,6),this.scene.add(this.cameraControl)}addLights(){const e=new l(16777215,12303359,4);this.scene.add(e)}addListeners(){window.addEventListener("keydown",this.handleKeydown.bind(this)),window.addEventListener("keyup",this.handleKeyup.bind(this))}createObject(){this.loadSkyBox(),this.loadAirPlane()}loadSkyBox(){this.scene.background=(new h).setPath(`${this.publicPath.image}skybox/paintedsky.parts/`).load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"],(()=>{this.renderer.setAnimationLoop(this.update.bind(this))}))}loadAirPlane(){this.gltfLoader.setPath(this.publicPath.model).load("airplanes/microplane.glb",(e=>{this.playerMesh=e.scene,this.playerMesh.position.set(0,0,0),this.playerMesh.scale.set(1,1,1),this.scene.add(e.scene),this.propellerMesh=this.playerMesh.getObjectByName("propeller")}),(e=>{e.total&&e.loaded&&this.loadingBar.update("plane",e.loaded,e.total)}),(e=>{}))}playBgSound(e=.1){const t=new Audio("sounds/airplane/assets_plane_engine.mp3");t.volume=e,t.currentTime=0,t.loop=!0,t.pause&&(t.play(),t.pause=!1),this.bgSound=t}updateCameraControl(){this.cameraControl&&this.cameraTarget&&(this.cameraControl.position.copy(this.playerMesh.position),this.cameraControl.position.y=0,this.cameraTarget.copy(this.playerMesh.position),this.cameraTarget.z+=6,this.camera.lookAt(this.cameraTarget))}updatePropeller(e){this.propellerMesh.rotateZ(1)}handlePlayerMove(e){this.playerMesh.rotation.set(0,0,.5*Math.sin(e),"XYZ"),this.isActive?(this.playerMesh.position.z-=.02*e,this.isSpace?this.playerMesh.position.y+=.01:this.playerMesh.position.y-=.01):this.playerMesh.position.y=.3*Math.cos(e)}getPlayerPosition(){this.playerMesh.getWorldPosition(this.temPos)}handleKeydown(e){switch(e.code){case"Enter":this.isActive=!this.isActive,this.isActive&&this.playBgSound();break;case"Space":this.isSpace=!0}}handleKeyup(e){if("Space"===e.code)this.isSpace=!1}isCollided(){let e=this.playerMesh.position.clone();this.playerMesh.translateZ(1);let t=this.playerMesh.position.clone();this.playerMesh.translateZ(-1);let s=t.sub(e).normalize();this.raycaster=new p(this.playerMesh.position.clone().add(this.halfPlayerHeight),s,0,5);let i=this.raycaster.intersectObjects(this.scene.children,!0);if(i.length){let{distance:e,object:t}=i[0];if(e<.6)return!0}return!1}update(e,t){this.playerMesh&&(this.handlePlayerMove(e),this.updateCameraControl()),this.propellerMesh&&this.updatePropeller(e)}hide(){window.removeEventListener("keydown",this.handleKeydown),window.removeEventListener("keyup",this.handleKeyup)}}const w=u({__name:"PlaneGame",setup(e){const t=new b(".container");let s=d(null);return c((()=>{t.onMounted(),t.createObject()})),(e,t)=>(m(),y("div",{class:"container",ref_key:"container",ref:s},null,512))}},[["__scopeId","data-v-d1cab87b"]]);export{w as default};
