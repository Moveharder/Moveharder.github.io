var e=Object.defineProperty,t=(t,s,i)=>(((t,s,i)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i})(t,"symbol"!=typeof s?s+"":s,i),i);import{B as s}from"./Base.f46e7956.js";import{G as i,V as o,a9 as a,a0 as r,m as h,aw as n,O as c,ax as d,A as l,D as m,ay as p,az as y,aA as u,q as v,s as w,t as g,M as b,aB as k,a3 as f,v as M,ad as A,ae as x,K as V,U as j,c as L,o as P,p as O,g as C,a as H}from"./vendor.d2781f4b.js";import{J as B}from"./JoyStick.9d2b5199.js";import{c as E}from"./common.e4c95d86.js";import{_ as S}from"./index.ed1235c5.js";class K extends s{constructor(e){super(e),t(this,"root",new i),t(this,"museumMesh"),t(this,"playerMixer"),t(this,"playerActions",[]),t(this,"isUp",!1),t(this,"halfPlayerHeight",new o(0,1,0)),t(this,"lastClientX",0),t(this,"isVideoPlaying",!1),t(this,"gltfLoader",(new a).setPath(this.publicPath.model)),t(this,"rgbLoader",(new r).setPath(this.publicPath.hdr)),t(this,"videos",{}),t(this,"tmpCameraVec3",new o),t(this,"tmpVec3",new o),t(this,"betweenObjects",[])}init(){this.camera=new h(45,window.innerWidth/window.innerHeight,.1,300),this.camera.rotation.y=Math.PI,this.loadVideos(),"ontouchstart"in document.documentElement?this.addTouchListener():this.addKeyListener(),this.initCameraControlProps()}initCameraControlProps(){this.tmpVec3=new o,this.tmpQuat=new n,this.move={up:0,right:0},this.look={up:0,right:0},this.yAxis=new o(0,1,0),this.xAxis=new o(1,0,0),this.keys={w:!1,a:!1,d:!1,s:!1,jump:!1,mousedown:!1,mouseorigin:{x:0,y:0}},this.cameraBase=new c;let e=this.camera.position.clone();e.z-=5,e.y+=2,this.cameraBase.position.copy(e),this.cameraBase.quaternion.copy(this.camera.quaternion),this.root.attach(this.cameraBase),this.cameraHigh=new d,this.cameraHigh.position.copy(this.camera.position),this.cameraHigh.position.y+=10,this.cameraHigh.lookAt(this.root.position),this.root.attach(this.cameraHigh)}createLight(){const e=new l(6531525,.5);this.scene.add(e);const t=new m(16777215,1);t.position.set(5,20,-20),this.scene.add(t)}addPointLight(){const e=new p("#00ff00",10,20);this.root.add(e),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,this.root.position.clone().y+=2}createObject(){this.loadHdrBg(),this.loadMuseum(),this.loadPlayer(new o(0,-.3,11.5),Math.PI)}getVideoUrl(e){return`https://static.fatiaoya.com/front/believer/resources/videos/${e}.mp4`}loadVideos(){this.videos.cyber1=E({src:"https://static.fatiaoya.com/front/believer/resources/videos/cyber1.mp4"}),this.videos.video1=E({src:"https://static.fatiaoya.com/front/believer/resources/videos/video1.mp4"}),this.videos.cyber2=E({src:"https://static.fatiaoya.com/front/believer/resources/videos/cyber2.mp4"}),this.videos.firework=E({src:"https://static.fatiaoya.com/front/believer/resources/videos/firework.mp4"})}playVideos(){try{for(let e in this.videos)this.videos[e].play()}catch(e){alert(JSON.stringify(e))}}createVideoMaterial(e){const t=new y(e,u);return new v({map:t,side:w})}create360Video(){let e=E({src:"https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/videos/office-skybox.mp4",loop:!0,muted:!0}),t=createVideoMaterial(e),s=new g(30,32,32),i=new b(s,t);i.position.set(0,0,0),i.geometry.scale(1,1,-1),scene.add(i)}loadHdrBg(){this.rgbLoader.load("museum.hdr",(e=>{let t=new v({map:e}),s=new g(20,32,32),i=new b(s,t);i.position.set(0,0,0),i.geometry.scale(1,1,-1),this.scene.add(i)}))}loadMuseum(){this.gltfLoader.load("changguan/changguan.glb",(e=>{this.museumMesh=e.scene,this.museumMesh.position.set(0,0,0),this.museumMesh.scale.set(1,1,1),this.scene.add(e.scene),e.scene.traverse((e=>{e.castShadow=!0,e.receiveShadow=!0,"2023"==e.name&&(e.material=this.createVideoMaterial(this.videos.firework),e.material.blending=k),"操作台屏幕"==e.name&&(e.material=this.createVideoMaterial(this.videos.cyber2)),["大屏幕01","大屏幕02"].includes(e.name)&&(e.material=this.createVideoMaterial(this.videos.cyber1)),["环形屏幕"].includes(e.name)&&(e.material=this.createVideoMaterial(this.videos.video1))}))}),(e=>{}),(e=>{}))}loadPlayer(e,t){this.root.position.copy(e),this.root.rotation.set(0,t,0,"XYZ"),this.scene.add(this.root),this.gltfLoader.load("changguan/player.glb",(e=>{e.scene.traverse((e=>{e.castShadow=!0,e.receiveShadow=!0})),this.root.add(e.scene),this.root.castShadow=!0,this.createPlayerActions(e)}),(e=>{}),(e=>{}))}seePlayer(e){this.betweenObjects.length&&(this.betweenObjects.map((e=>{e.material.transparent=!1,e.material.opacity=1})),this.betweenObjects=[]),this.tmpVec3.copy(this.root.position).sub(e).normalize();let t=new f(e,this.tmpVec3).intersectObjects(this.scene.children,!0);if(t.length){let s=this.root.position.distanceTo(e);t.map((e=>{e.distance<s-.2&&"地面"!=e.object.name&&(this.betweenObjects.push(e.object),e.object.material.transparent=!0,e.object.material.opacity=.3)}))}}createVideoMaterial(e){const t=new y(e,u);return new M({map:t})}createPlayerActions(e){this.playerMixer=new A(e.scene);const t=x.subclip(e.animations[0],"Idel",31,281);let s=this.playerMixer.clipAction(t);const i=x.subclip(e.animations[0],"Walk",0,30);let o=this.playerMixer.clipAction(i);this.playerActions=[s,o]}addKeyListener(){document.addEventListener("keydown",this.handleKeydown.bind(this)),document.addEventListener("keyup",this.handleKeyup.bind(this)),document.addEventListener("mousedown",this.handleMouseDown.bind(this)),document.addEventListener("mouseup",this.handleMouseUp.bind(this)),document.addEventListener("mousemove",this.handleMouseMove.bind(this))}addTouchListener(){window.addEventListener("contextmenu",(function(e){e.preventDefault()})),document.addEventListener("touchstart",this.playVideos.bind(this)),new B({container:"joystick_ctrl1",game:this,onMove:this.onMove}),new B({container:"joystick_ctrl2",game:this,onMove:this.onLook})}handlePlayerMove(e){if(this.isCollided()?this.root.translateX(this.move.up):this.root.translateZ(this.move.up*e*2),Math.abs(this.move.right)>.1){const t=e*(this.move.right-.1)*1;this.root.rotateY(t)}this.camera.getWorldPosition(this.tmpCameraVec3),this.seePlayer(this.tmpCameraVec3,!0)}updateCamera(e){if(0==this.look.up&&0==this.look.right){let e=.7;this.cameraBase.getWorldPosition(this.tmpVec3),this.cameraBase.getWorldQuaternion(this.tmpQuat),this.camera.position.lerp(this.tmpVec3,e),this.camera.quaternion.slerp(this.tmpQuat,e)}else{const t=1*e;this.camera.rotateOnWorldAxis(this.yAxis,this.look.right*t);const s=this.xAxis.clone().applyQuaternion(this.camera.quaternion);this.camera.rotateOnWorldAxis(s,this.look.up*t),this.root.rotateOnWorldAxis(this.yAxis,this.look.right*t)}}onMove(e,t){e||t?(this.playerActions[0].reset(),this.playerActions[1].play()):(this.playerActions[1].stop(),this.playerActions[0].play()),this.move.up=2*e,this.move.right=-t}onLook(e,t){this.look.up=.25*e,this.look.right=-t}handleMouseDown(e){this.keys.mousedown=!0,this.keys.mouseorigin.x=e.offsetX,this.keys.mouseorigin.y=e.offsetY,this.playVideos()}handleMouseUp(e){this.keys.mousedown=!1,this.look.up=0,this.look.right=0}handleMouseMove(e){if(this.root){if(!this.keys.mousedown)return;let t=e.offsetX-this.keys.mouseorigin.x,s=e.offsetY-this.keys.mouseorigin.y;t<-100&&(t=-100),t>100&&(t=100),t/=100,s<-100&&(s=-100),s>100&&(s=100),s/=100,this.onLook(-s,t)}}handleKeydown(e){switch(e.key){case"w":this.keys.w||(this.playerActions[0].reset(),this.playerActions[1].play()),this.keys.w=!0;break;case"s":this.keys.s||(this.playerActions[0].reset(),this.playerActions[1].play()),this.keys.s=!0;break;case"a":this.keys.a=!0;break;case"d":this.keys.d=!0;break;case"space":this.keys.isJump=!0}}handleKeyup(e){switch(e.key){case"w":this.keys.w&&(this.playerActions[1].stop(),this.playerActions[0].play()),this.keys.w=!1,this.move.up=0;break;case"s":this.keys.s&&(this.playerActions[1].stop(),this.playerActions[0].play()),this.keys.s=!1,this.move.up=0;break;case"a":this.keys.a=!1,this.move.right=0;break;case"d":this.keys.d=!1,this.move.right=0;break;case"Space":this.keys.isJump=!1}}keyHandler(){this.keys.w&&(this.move.up+=.1),this.keys.s&&(this.move.up-=.1),this.keys.a&&(this.move.right+=.1),this.keys.d&&(this.move.right-=.1),this.move.up>1&&(this.move.up=1),this.move.up<-1&&(this.move.up=-1),this.move.right>1&&(this.move.right=1),this.move.right<-1&&(this.move.right=-1)}isCollided(){let e=this.root.position.clone();this.root.translateZ(1);let t=this.root.position.clone();this.root.translateZ(-1);let s=t.sub(e).normalize();this.raycaster=new f(this.root.position.clone().add(this.halfPlayerHeight),s,0,5);let i=this.raycaster.intersectObjects(this.scene.children,!0);if(i.length){let{distance:e,object:t}=i[0];if(e<=5&&(["大屏幕01","大屏幕02"].includes(t.name)?this.videos.cyber1.muted=!1:this.videos.cyber1.muted=!0),e<.6)return!0}return!1}update(e,t){this.playerMixer&&this.playerMixer.update(2*t),this.root&&this.handlePlayerMove(t),this.keys&&this.keyHandler(),this.updateCamera(t)}hide(){for(let e in this.videos)this.videos[e].pause();this.videos={},window.removeEventListener("keydown",this.handleKeydown),window.removeEventListener("keyup",this.handleKeyup),window.removeEventListener("mousemove",this.handleMouseMove)}}const _=e=>(O("data-v-17e4a83e"),e=e(),C(),e),z={class:"container",ref:"container"},W=[_((()=>H("div",{id:"joystick_ctrl1"},null,-1))),_((()=>H("div",{id:"joystick_ctrl2"},null,-1)))],q=S({__name:"Visit2023",setup(e){const t=new K(".container");return V((()=>{t.onMounted(),t.createObject()})),j((()=>t.onUnmounted())),(e,t)=>(P(),L("div",z,W,512))}},[["__scopeId","data-v-17e4a83e"]]);export{q as default};