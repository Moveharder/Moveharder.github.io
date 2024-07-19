var e=Object.defineProperty,t=(t,s,i)=>(((t,s,i)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i})(t,"symbol"!=typeof s?s+"":s,i),i);import{B as s}from"./Base.f46e7956.js";import{_ as i,an as a,V as o,v as n,s as r,M as l,z as h,G as c,bn as d,a9 as p,a0 as m,ab as u,aa as y,ay as b,a3 as g,a4 as w,m as f,a1 as M,O as v,n as j,q as A,C,am as P,a8 as x,aX as k,ad as S,az as L,aA as I,r as _,a6 as T,K as R,U as V,c as O,a as z,o as q}from"./vendor.d2781f4b.js";import{M as B}from"./MoveAndTurnControl.f44fdd62.js";import{C as F}from"./ClickAnchorRender.c5feb3b6.js";import{M as Y}from"./MiniMap.783e9150.js";import{C as Z,a as G,m as J,c as W}from"./common.9712fc3c.js";import{C as H}from"./CameraAnimation.f6d1e21f.js";import{J as N}from"./JoyStick.9d2b5199.js";import{K as D}from"./keyboardMove.b62e2423.js";import{_ as E}from"./index.1414d8c9.js";class U{constructor(e){t(this,"isReady",!1),t(this,"meshs",[]),this.textureLoader=(new h).setPath(e.publicPath.texture)}create(e=1,t=2,s=new o,i=1){let a=new c;return a.add(this.createTeleport(e)),a.add(this.createHalo(e,t)),a.position.copy(s),a.userData.speed=i,this.isReady=!0,this.meshs.push(a),a}createTeleport(e=1){let t=new d(e,32),s=new n({map:this.textureLoader.load("teleport.png"),transparent:!0,side:r,depthWrite:!1}),i=new l(t,s);return i.rotateX(.5*-Math.PI),i}createHalo(e=1,t=2){let s=this.getCylinderGeo(.7*e,t),i=new n({map:this.textureLoader.load("halo.png"),transparent:!0,side:r,wireframe:!1,depthWrite:!1});return new l(s,i)}getCylinderGeo(e=1,t=1,s=32){let o=[],n=[],r=[],l=[],h=2*Math.PI/s,c=1/(s-1);for(var d=0;d<s;d++){let s=Math.cos(h*d)*e,i=Math.sin(h*d)*e;o.push(s,0,i),r.push(d*c,0),n.push(s,t,i),l.push(d*c,1)}o=o.concat(n),r=r.concat(l);let p=[];for(d=0;d<s;d++)d!=s-1?(p.push(d+s+1,d,d+s),p.push(d,d+s+1,d+1)):(p.push(s,d,d+s),p.push(d,s,0));let m=new i;return m.setAttribute("position",new a(new Float32Array(o),3)),m.setAttribute("uv",new a(new Float32Array(r),2)),m.setIndex(new a(new Uint16Array(p),1)),m}update(e=1){this.isReady&&this.meshs.map((t=>{t.rotateY(e*t.userData.speed)}))}}let X=null,K=null;class Q extends s{constructor(e){super(e),t(this,"gltfLoader",(new p).setPath(this.publicPath.model)),t(this,"rgbLoader",(new m).setPath(this.publicPath.hdr)),t(this,"mtlLoader",(new u).setPath(this.publicPath.model)),t(this,"objLoader",(new y).setPath(this.publicPath.model)),t(this,"models",[{name:"trees",path:"car_test/TreeGroup.glb",scale:[1,1,1],position:[0,.01,0],quaternion:{axis:new o(1,0,0),angle:-Math.PI/2},traverseCb:e=>{e.castShadow=!0,e.receiveShadow=!0;let t=e.name;if(t.includes("shadeBrown"));else{if(t.includes("shadeGreen"))return;t.includes("floor")||e.isMesh&&e.material.color}return e}},{name:"Creative",path:"car_test/Creative.glb",scale:[4,4,4],position:[0,.1,0],quaternion:{axis:new o(0,0,0),angle:0},traverseCb:e=>{e.position.set(-1.8,0,-5),e.castShadow=!0,e.receiveShadow=!0}},{name:"Stone Pillar",path:"car_test/StonePillar.glb",scale:[2,2,2],position:[-30,0,30],quaternion:{axis:new o(1,0,0),angle:-Math.PI/2},traverseCb:e=>{e.castShadow=!0,e.receiveShadow=!0}},{name:"ThreeLittleMan",path:"Blender/threelittleman.glb",scale:[1,1,1],position:[12,9.6,-39.8],quaternion:{axis:new o(0,1,0),angle:0},traverseCb:e=>{e.castShadow=!0,e.receiveShadow=!0,e.isMesh&&e.material.color},extend:e=>{let t=new b(16777215,100);t.position.copy(e.position),t.position.y+=2,e.add(t)}},{name:"ThreeLittleMan2",path:"Blender/threelittleman.glb",scale:[1,1,1],position:[-12,9.6,-39.8],quaternion:{axis:new o(0,1,0),angle:0},traverseCb:e=>{e.castShadow=!0,e.receiveShadow=!0,e.isMesh&&e.material.color}}]),t(this,"NPCs",[]),t(this,"videos",{}),t(this,"objects",[]),t(this,"badges",[]),t(this,"player",null),t(this,"playerRaycaster",new g),t(this,"playerMixer",null),t(this,"playerActions",{lastAction:"Idle"}),t(this,"playerLight",null),t(this,"mouseVector",new w),t(this,"mouseRaycaster",new g),t(this,"bgSound",null),t(this,"joyStick",null),t(this,"js",{forward:0,turn:0}),t(this,"ctrlType","JoyStick"),t(this,"tmpCameraVec3",new o),t(this,"tmpVec3",new o),t(this,"betweenObjects",[])}init(){this.setupCameraAndRender(),this.addListeners(),X=new B,K=new F(this.scene,{color:"#ffffff",opacity:1}),"ontouchstart"in document.documentElement?this.joyStick=new N({game:this,onMove:this.joyStickCallback}):this.keyCtrl=new D({game:this,onMove:this.joyStickCallback,onViewChange:this.onViewChangeCallback})}setupCameraAndRender(){this.camera=new f(60,this.width/this.height,.1,800),this.camera.position.set(0,75,-250),this.renderer.setClearColor("#fa9d5a")}toggleView(){H.animate({camera:this.camera,newCameraPosition:new o(-15,150,0),cameraLookAt:new o(-15,0,0),duration:3,cb:()=>{this.player.traverse((e=>{e.isMesh&&M.to(e.material,{opacity:1,duration:1})}))}})}createCloud(){this.mesh=new v,this.nClouds=25;for(var e=2*Math.PI/this.nClouds,t=0;t<this.nClouds;t++){var s=new Z,i=e*t,a=1+15*Math.random();s.mesh.position.y=Math.sin(i)*a,s.mesh.position.x=100-200*Math.random(),s.mesh.position.z=Math.cos(i)*a,s.mesh.rotation.x=i+Math.PI/2;var o=.2*Math.random();s.mesh.scale.set(o,o,o),this.mesh.add(s.mesh)}this.scene.add(this.mesh)}setupControls(){this.createOrbitControls(),this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/2.5,this.controls.enableZoom=!1}joyStickCallback(e,t){"Click"!=this.ctrlType&&(this.js.forward=1.2*e,this.js.turn=1.2*-t,0==e&&0==t&&(this.playerActions=this.toggleModelAction(this.playerActions,"Idle")),this.camera.getWorldPosition(this.tmpCameraVec3),this.seePlayer(this.tmpCameraVec3))}seePlayer(e){this.betweenObjects.length&&(this.betweenObjects.map((e=>{e.material.transparent=!1,e.material.opacity=1})),this.betweenObjects=[]),this.tmpVec3.copy(this.player.position).sub(e).normalize();let t=new g(e,this.tmpVec3).intersectObjects(this.objects,!0);if(t.length){let s=this.player.position.distanceTo(e);t.map((e=>{e.distance<s-.4&&"floor"!=e.object.name&&"ground"!=e.object.name&&(this.betweenObjects.push(e.object),e.object.material.transparent=!0,e.object.material.opacity=.3)}))}}createObject(){this.createGround(),this.loadHdrBg(),this.loadModels(),this.createTeleports(),this.loadPlayer(),this.loadNPCs(),this.loadWall(),this.loadStairs(),this.loadVideos(),this.loadScreen()}createTeleports(){this.teleport=new U(this);let e=this.teleport.create(2,4,new o(-100,.01,0),1);this.scene.add(e);let t=this.teleport.create(3,5,new o(0,.05,0),.5);this.scene.add(t)}createGround(e=1e3,t=1e3){const s=new j(e,t),i=new A({color:"#fa9d5a",side:r}),a=new l(s,i);a.quaternion.setFromAxisAngle(new o(1,0,0),-Math.PI/2),a.name="baseground",a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),this.ground=a,this.objects.push(a)}addListeners(){document.addEventListener("touchstart",this.handleMouseClick.bind(this)),document.addEventListener("click",this.handleMouseClick.bind(this))}loadWall(){let e=(new h).load("https://img.fatiaoya.com/badge/vs/season3/badge_banner.jpg");e.wrapT=C,e.wrapS=C,e.repeat.set(1/4,1);const t=function({height:e=10,path:t=[],material:s,expand:h=!0}){let c=null;c=h?t.reduce(((t,[s,i,a])=>t.concat([[[s,i,a],[s,i+e,a]]])),[]):t;const d=c.reduce(((e,t,s)=>s===c.length-1?e:e.concat([[t,c[s+1]]])),[]).reduce(((e,t)=>{const[[s,i],[a,o]]=t;return e.concat(...i,...s,...o,...s,...a,...o)}),[]),p=new i,m=new Float32Array(d);p.setAttribute("position",new a(m,3));const u=new Array(d.length/3/6).fill(0).map(((e,t)=>d.slice(3*t*6,3*(t+1)*6))).map(((e,t)=>new Array(e.length/3).fill(0).map(((t,s)=>e.slice(3*s,3*(s+1))))));p.computeBoundingBox();const{min:y,max:b}=p.boundingBox,g=b.x-y.x,w=[].concat(...u.map((e=>{const t=e[0],s=e[5],i=new o(...t).distanceTo(new o(...s))/(g/10);return[0,1,0,0,i,1,0,0,i,0,i,1]})));p.setAttribute("uv",new a(new Float32Array(w),2));const f=s||new n({color:10066329,side:r}),M=new l(p,f);return M.name="wall",M.castShadow=!0,M.receiveShadow=!0,M}({height:10,path:[[-80,0,-20],[-80,0,-80],[80,0,-80],[80,0,80],[-80,0,80],[-80,0,20]],material:new A({map:e,flatShading:!0,side:r})}),s=t.clone();s.scale.set(1.3,1,1.3),this.scene.add(t),this.objects.push(t),this.scene.add(s),this.objects.push(s)}loadStairs(){let e=G({num:20,size:[6,.4,.8]});e.position.set(-12,0,-15),this.scene.add(e),this.objects.push(e);let t=G({num:20,size:[6,.4,.8]});t.position.set(-12,0,15),t.rotateY(Math.PI),this.scene.add(t),this.objects.push(t);let s=G({num:20,size:[6,.4,.8]});s.position.set(12,0,-15),this.scene.add(s),this.objects.push(s);let i=G({num:20,size:[6,.4,.8]});i.position.set(12,0,15),i.rotateY(Math.PI),this.scene.add(i),this.objects.push(i);let a=G({num:20,size:[6,.4,.8]});a.position.set(0,0,15),a.rotateY(Math.PI),this.scene.add(a),this.objects.push(a)}loadScreen(){const e=new l(new j(12,6),this.createVideoMaterial(this.videos.video1));e.name="screen1",e.position.set(12,11,31),this.scene.add(e),this.ground=e,this.objects.push(e);const t=new l(new j(12,6),this.createVideoMaterial(this.videos.video2));t.name="screen2",t.position.set(-12,11,31),this.scene.add(t),this.ground=t,this.objects.push(t);const s=new l(new j(12,6),this.createVideoMaterial(this.videos.firework));s.name="screen3",s.position.set(0,11,31),this.scene.add(s),this.ground=s,this.objects.push(s)}loadHdrBg(){this.rgbLoader.load("satara_night_1k.hdr",(e=>{e.mapping=P,this.scene.background=e,this.scene.environment=e}))}loadModels(){const{models:e,gltfLoader:t}=this,s=new x;s.setDecoderPath("draco/"),t.setDRACOLoader(s),e.map((e=>{t.load(e.path,(t=>{e.traverseCb&&t.scene.traverse(e.traverseCb),e.extend&&e.extend(t.scene);let s=t.scene;s.position.set(...e.position),s.scale.set(...e.scale),s.quaternion.setFromAxisAngle(e.quaternion.axis,e.quaternion.angle),this.scene.add(s),this.objects.push(s)}),(e=>{}),(e=>{}))}))}loadBadges(){let e=new p;e.load("https://img.fatiaoya.com/badge/vs/season1/badge_3d.gltf",(e=>{let t=e.scene;t.scale.set(.01,.01,.01),t.position.set(20,5,0),t.quaternion.setFromAxisAngle(new o(0,1,0),-Math.PI/2),this.scene.add(t),this.objects.push(t),this.badges.push(t)}),(e=>{}),(e=>{})),e.load("https://img.fatiaoya.com/badge/vs/season2/badge_3d.gltf",(e=>{let t=e.scene;t.scale.set(.01,.01,.01),t.position.set(-20,5,0),t.quaternion.setFromAxisAngle(new o(0,1,0),-Math.PI/2),this.scene.add(t),this.objects.push(t),this.badges.push(t)}),(e=>{}),(e=>{})),e.load("https://img.fatiaoya.com/badge/vs/season3/badge_3d.gltf",(e=>{let t=e.scene;t.scale.set(.008,.008,.008),t.position.set(-5,5,-30),t.quaternion.setFromAxisAngle(new o(0,1,0),-Math.PI/2),this.scene.add(t),this.objects.push(t),this.badges.push(t)}),(e=>{}),(e=>{})),e.load("https://img.fatiaoya.com/badge/vs/season4/badge_3d.gltf",(e=>{let t=e.scene;t.scale.set(.008,.008,.008),t.position.set(5,5,-30),t.quaternion.setFromAxisAngle(new o(0,1,0),-Math.PI/2),this.scene.add(t),this.objects.push(t),this.badges.push(t)}),(e=>{}),(e=>{}))}loadPlayer(){this.gltfLoader.load("Robot.glb",(e=>{this.player=e.scene,this.player.position.set(-100,0,0),this.player.scale.set(.3,.3,.3),this.scene.add(e.scene);let{mixer:t,actions:s}=this.createModelActions(e);this.playerMixer=t,this.playerActions=s,this.playerActions=this.toggleModelAction(this.playerActions,"Idle"),this.player.rotateY(k.degToRad(90)),this.player.add(this.camera);let i=new o(0,15,-30),a=this.player.position.clone();a.x-=5,a.y+=4,this.player.traverse((e=>{e.isMesh&&(e.material.transparent=!0,e.material.opacity=0)})),H.animate({camera:this.camera,newCameraPosition:i,cameraLookAt:a,duration:3,cb:()=>{this.player.traverse((e=>{e.isMesh&&M.to(e.material,{opacity:1,duration:1})}))}}),this.miniMap=new Y({target:this.player,scene:this.scene,mapRotateZ:-90,mapSyncRotateZ:!1})}),(e=>{}),(e=>{}))}loadHouse(){this.loadObjModel({mtlPath:"room/gem_miner_room/gem_miner_room.mtl?v=3",objPath:"room/gem_miner_room/gem_miner_room.obj?v=1",position:[-30,-.01,-10],scale:[2,2,2]})}loadMountain(){this.loadObjModel({mtlPath:"mountain/mount.blend1.mtl",objPath:"mountain/mount.blend1.obj"})}loadNPCs(){for(let e=0;e<3;e++)this.gltfLoader.load("Robot.glb",(t=>{let s=t.scene;s.scale.set(.25,.25,.25),s.position.set(3*e-3,0,0),s.name="Hi, I'm 巡店鸭",s.position.clone().y+=1;let i=J(s.name,{color:"red",fontSize:20});i.position.x=s.position.x,i.position.y=s.position.y+6,i.position.z=s.position.z,this.scene.add(i);let{mixer:a,actions:n}=this.createModelActions(t),r={mesh:s,mixer:a,actions:n,raycaster:new g,npcMTCtrl:new B,nameLabel:i};r.move=e=>{const{nameLabel:t,mesh:s,npcMTCtrl:i,actions:a,raycaster:n,move:r}=e;i.go({target:s,destPosition:new o(50*Math.random()-25,0,50*Math.random()-25),speed:1,fixedY:0,turnSpeed:.1,onStart:()=>{e.actions=this.toggleModelAction(a,"Walking")},onUpdate:()=>{t&&(e.nameLabel.position.x=s.position.x+.7,e.nameLabel.position.y=s.position.y+1,e.nameLabel.position.z=s.position.z),this.checkCollide(s,n)&&(i.stop(),e.actions=this.toggleModelAction(a,"No"),setTimeout((()=>{r(e)}),1e3))},onComplete:()=>{e.actions=this.toggleModelAction(a,"Idle"),setTimeout((()=>{r(e)}),1e3)}})},this.NPCs.push(r),this.scene.add(r.mesh),r.actions=this.toggleModelAction(r.actions,"Idle"),r.move(r)}),(e=>{}),(e=>{}))}loadObjModel({mtlPath:e,objPath:t,position:s=[],scale:i=[]}){this.mtlLoader.load(e,(e=>{e.preload(),this.objLoader.setMaterials(e),this.objLoader.load(t,(e=>{e.traverse((e=>{e.castShadow=!0})),e.position.set(...s),e.scale.set(...i),this.scene.add(e),this.objects.push(e)}))}))}createModelActions(e){let t=new S(e.scene),s={lastAction:""};return e.animations.map((e=>{s[e.name]=t.clipAction(e)})),{mixer:t,actions:s}}toggleModelAction(e,t){const{lastAction:s}=e;return t!=s&&(s&&e[s].fadeOut(.3),e[t].reset(),e[t].setEffectiveWeight(1),e[t].play(),e[t].fadeIn(.3),e.lastAction=t),e}playBgSound(){const e=new Audio("sounds/game/Ambient.m4a");e.volume=.1,e.currentTime=0,e.loop=!0,e.pause&&(e.play(),e.pause=!1),this.bgSound=e}loadVideos(){this.videos.video1=W({src:"https://static.fatiaoya.com/front/believer/resources/videos/cyber1.mp4"}),this.videos.video2=W({src:"https://static.fatiaoya.com/front/believer/resources/videos/cyber2.mp4"}),this.videos.firework=W({src:"https://static.fatiaoya.com/front/believer/resources/videos/firework.mp4"})}playVideos(){for(let e in this.videos)this.videos[e].play()}createVideoMaterial(e){const t=new L(e,I);return new A({map:t,side:r})}handleMouseClick(e){if(this.playVideos(),"JoyStick"==this.ctrlType)return;this.playBgSound();const{width:t,height:s}=this;this.mouseVector.x=e.clientX/t*2-1,this.mouseVector.y=-(e.clientY/s*2-1),this.mouseRaycaster.setFromCamera(this.mouseVector,this.camera);let i=this.mouseRaycaster.intersectObjects(this.scene.children,!0);if(i.length){let e=i[0],{point:t,distance:s,object:a}=e;if(!["floor","ground","baseground","stair"].includes(a.name)&&!a.name.includes("floor"))return;K.create(t),X.go({target:this.player,destPosition:t,fixedY:1e-4,speed:8,turnSpeed:.1,onStart:()=>{this.playerActions=this.toggleModelAction(this.playerActions,"Running")},onUpdate:e=>{this.checkStairCollide(this.player),this.isCollided()&&(X.stop(),K.destroy(),this.playerActions=this.toggleModelAction(this.playerActions,"Punch"))},onComplete:()=>{K.destroy(),this.playerActions=this.toggleModelAction(this.playerActions,"Idle")}})}}isCollided(){let e=this.player.position.clone();this.player.translateZ(1);let t=this.player.position.clone();this.player.translateZ(-1);let s=t.sub(e).normalize(),i=this.player.position.clone().add(new o(0,.2,0));this.playerRaycaster.ray.origin.copy(i),this.playerRaycaster.ray.direction.copy(s);let a=this.playerRaycaster.intersectObjects(this.objects,!0);if(a.length){let{distance:e,object:t}=a[0];if(e<1)return"stair"==t.name?(this.checkStairCollide(this.player),!1):(this.player.translateZ(-1),!0)}return!1}checkCollide(e,t,s=1,i=!0){let a=this.js.forward>=0,n=e.position.clone().add(new o(0,1,0)),r=new o;e.getWorldDirection(r),r.normalize(),a||r.negate(),t.ray.origin.copy(n),t.ray.direction.copy(r);let l=t.intersectObjects(this.objects,i);if(l.length){let{distance:t,object:i}=l[0];if("stair"==i.name)return!1;if(t<s)return a?(e.translateZ(-.5),e.rotateY(-Math.PI/4)):(e.translateZ(.5),e.rotateY(+Math.PI/4)),!0}return!1}checkStairCollide(e){let t=e.position.clone().add(new o(0,50,0)),s=new o(0,-1,0),i=new g(t,s).intersectObjects(this.objects,!0);if(i.length){let{distance:s,object:a}=i[0],o=a.name;const n=.4,r=8;let l=t.y-s,h=e.position.y;if(o.includes("floor")||o.includes("ground")){"Click"==this.models&&X.stop();let t=e.position.y;return void M.to(e.position,{y:0,duration:t/r})}if(o.includes("stair")){if(l-h>=2*n)return;l>h?M.to(e.position,{y:l,ease:"linear",duration:.1}):l<h&&(e.position.y-=.1)}}}updatePlayer(){this.keyCtrl&&this.keyCtrl.update();const{turn:e,forward:t}=this.js;if(t||e){if(this.checkStairCollide(this.player),this.checkCollide(this.player,this.playerRaycaster))return void(this.playerActions=this.toggleModelAction(this.playerActions,"Punch"));t&&this.player.translateZ(.2*t),e&&this.player.rotateY(.02*e),this.playerActions=this.toggleModelAction(this.playerActions,"Running")}}update(e,t){this.playerMixer&&(this.playerMixer.update(1.5*t),"JoyStick"==this.ctrlType&&this.updatePlayer(t),this.controls&&this.controls.target.copy(this.player.position),this.miniMap&&this.miniMap.update()),this.NPCs.map((e=>{e.mixer&&e.mixer.update(1.5*t)})),this.badges.map((e=>{e.rotation.y+=.01})),this.teleport&&this.teleport.update(t)}hide(){this.miniMap.destory(),window.removeEventListener("click",this.handleMouseClick),this.scene.remove(this.scene.children)}}const $=E({__name:"InfinityGame",setup(e){const t=new Q(".container");let s=_(null),i=_(null);const a=(new T).addFolder("Test Field");return a.add({ctrlType:"JoyStick"},"ctrlType").options(["Click","JoyStick"]).onChange((function(e){t.ctrlType=e,"JoyStick"==e?(s.value.style.cursor="none",i.value.style.display="block"):(s.value.style.cursor="crosshair",i.value.style.display="none")})),a.open(),R((()=>{t.onMounted(),t.createObject(),s.value.style.cursor="none"})),V((()=>{t.onUnmounted()})),(e,t)=>(q(),O("div",{class:"container",ref_key:"container",ref:s},[z("div",{id:"joystick_ctrl",ref_key:"jscontainer",ref:i},null,512)],512))}},[["__scopeId","data-v-78f65457"]]);export{$ as default};
