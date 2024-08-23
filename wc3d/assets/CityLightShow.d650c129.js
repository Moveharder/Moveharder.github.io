var t=Object.defineProperty,e=(e,s,o)=>(((e,s,o)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o})(e,"symbol"!=typeof s?s+"":s,o),o);import{a9 as s,a0 as o,z as i,O as a,V as n,m as l,bo as r,aP as h,aW as d,_ as c,an as p,Y as u,Z as m,am as w,a5 as y,q as g,M as f,A as v,D as x,ay as C,bs as b,t as P,aK as M,aJ as L,v as F,a2 as S,G as A,n as G,aZ as _,L as k,a_ as I,x as j,a1 as V,aw as D,aX as z,r as B,K as T,U as O,c as q,a as R,bt as U,bu as Z,u as H,aq as $,as as E,F as W,o as K}from"./vendor.d2781f4b.js";import{B as X}from"./Base.f46e7956.js";import{b as Y,d as J,c as N}from"./common.9712fc3c.js";import{S as Q}from"./SoundControl.48b26f99.js";import{C as tt}from"./CameraAnimation.f6d1e21f.js";import{M as et}from"./modelActionControl.e6c0dc48.js";import{_ as st}from"./index.3fe0440b.js";const{randInt:ot,randFloat:it}=z;class at extends X{constructor(t){super(t),e(this,"gltfLoader",(new s).setPath(this.publicPath.model)),e(this,"rgbLoader",(new o).setPath(this.publicPath.hdr)),e(this,"textureLoader",(new i).setPath(`${this.publicPath.texture}love/`)),e(this,"videos",[{name:"我爱你",src:"https://static.fatiaoya.com/front/believer/resources/videos/iloveu.mp4?v=1",width:130,height:350},{name:"心跳",src:"https://static.fatiaoya.com/front/believer/resources/videos/heart.mp4",width:160,height:200},{name:"赛博人",src:"https://static.fatiaoya.com/front/believer/resources/videos/cyber1.mp4",width:200,height:200},{name:"烟花秀",src:"https://static.fatiaoya.com/front/believer/resources/videos/firework.mp4",width:250,height:140},{name:"美猴王",src:"https://static.fatiaoya.com/front/believer/resources/videos/monkeyking.mp4",width:144,height:256}]),e(this,"quality",5),e(this,"canvas",null),e(this,"ctx",null),e(this,"ledGroup",null),e(this,"ledPixels",[]),e(this,"slient",!0),e(this,"soundLoaded",!1),e(this,"flyLines",[]),e(this,"canDropGift",!1),e(this,"followCamera",new a),e(this,"followCameraPosition",new n(-1,3.5,-5)),e(this,"isFollowView",!1)}init(){const t="#262837";this.camera=new l(75,this.width/this.height,.1,1e3),this.camera.position.set(0,500,500),this.renderer.setClearColor(t),this.renderer.toneMapping=r,this.scene.fog=new h(t,1,400),this.createOrbitControls(),this.setupControls(),this.createObject()}sayILoveU(){this.slient=!1,this.loadVideo(),this.loadFirework({distance:90,sound:"explode",explodeRadus:25}),setTimeout((()=>{this.loadFirework({distance:75,position:new n(-20,0,0),sound:"explode2"})}),100),setTimeout((()=>{this.loadFirework({distance:65,position:new n(16,0,0),sound:"explode"})}),1e3),tt.animate({camera:this.camera,controls:this.controls,newCameraPosition:{x:0,y:50,z:120},newControlsTarget:{x:0,y:20,z:0},duration:3,cb:()=>{this.controls.autoRotate=!0}}),this.loadFlyLines()}addListener(){this.renderer.domElement.addEventListener("click",(()=>{this.toggleView()}))}toggleView(){this.isFollowView?(this.camera.position.set(0,50,120),this.camera.lookAt(0,20,0),this.controls?(this.controls.object=this.camera,this.controls.reset()):(this.createOrbitControls(),this.setupControls(),this.controls.enabled=!0,this.controls.autoRotate=!0)):this.loadFollowCamera(this.planeMesh),this.isFollowView=!this.isFollowView}setupControls(){this.controls.target.set(0,20,0),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.controls.maxPolarAngle=1.5,this.controls.minPolarAngle=.75}createObject(){this.ActCtrl=new et(this),this.loadSounds(),this.loadPlane(),this.loadHdrBg(),this.loadStars(),this.loadGround(),this.createLight(),this.loadBuildings(),this.loadGiftImgs()}loadGiftImgs(){this.mats=[new d({map:this.textureLoader.load("gift_1.svg")}),new d({map:this.textureLoader.load("gift_2.svg")}),new d({map:this.textureLoader.load("gift_3.jpg")}),new d({map:this.textureLoader.load("love_bg.png")})]}loadStars(){const t=new Float32Array(1200);for(let i=0;i<400;i++)t[3*i+0]=ot(-200,200),t[3*i+1]=ot(-150,150),t[3*i+2]=ot(-100,100);const e=new c;e.setAttribute("position",new p(t,3));const s=new u({color:"pink",sizeAttenuation:!0,size:.5}),o=new m(e,s);this.stars=o,this.scene.add(o)}loadHdrBg(){this.rgbLoader.load("satara_night_1k.hdr",(t=>{t.mapping=w,this.scene.environment=t}))}loadGround(){let t=new y(140,32),e=this.textureLoader.load("heart_sky.jpg"),s=new g({map:e}),o=new f(t,s);o.receiveShadow=!0,o.position.set(0,.01,0),o.rotateX(.5*-Math.PI),this.scene.add(o)}createLight(){const t=new v("#262837",.5);this.scene.add(t);const e=new x("#262837",.4);e.position.set(-15,20,-20),e.castShadow=!0;const s=new x(16777215,.4);s.position.set(15,20,20),s.castShadow=!0;let o=new C(16777215,1200,100);o.position.set(0,80,15),this.scene.add(o);let i=new b(16777215,1e3);i.position.set(0,80,20),i.angle=0,i.penumbra=.05,i.decay=2,i.distance=200,i.castShadow=!0,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,i.shadow.camera.near=10,i.shadow.camera.far=200,this.spotLight=i,this.scene.add(i)}loadSounds(){this.soundCtrl=new Q(this.camera,this.publicPath.sound);let t=this.soundCtrl.loadFromUrl("angel","https://static.fatiaoya.com/front/believer/resources/sounds/angel.mp3?v=1",!0,.4,!1),e=this.soundCtrl.load("explode","mp3",!1,.2,!1),s=this.soundCtrl.load("explode2","mp3",!1,.1,!1),o=this.soundCtrl.load("plane_engine","mp3",!0,.7,!0);Promise.all([t,e,s,o]).then((t=>{this.soundLoaded=!0,document.querySelector(".pick").innerHTML="Zoey<br/>亲启"})).catch((t=>{}))}loadFirework(t={}){const{distance:e=80,position:s=new n(0,0,0),tailLength:o=15,explodeRadus:i=15,explodePixel:a=20,sound:l="explode"}=t;let r=new P(i,a,a);const{array:h,count:d}=r.attributes.position,c=[],p=[16715775,65280,16711695,16776960];for(let n=0;n<d;n++){const t=new M(new L({color:p[Math.floor(Math.random()*p.length)]}));t.position.copy(s),t.scale.set(.05,.05,.05),this.scene.add(t),c.push(t)}const u=t=>{const i=c[t];i.position.set(s.x,ot(s.y,s.y+o),s.z),i.scale.set(Math.random()*i.position.y/o+1,Math.random()*i.position.y/o+1,Math.random()*i.position.y/o+1),V.to(i.position,{y:e,duration:1,ease:"expo.in",onStart:()=>{l&&this.soundCtrl.play(l)},onComplete:()=>{e-i.position.y<=10&&(V.to(i.position,{x:s.x+h[3*t+0]+ot(-2,2),y:s.y+e+h[3*t+1]+ot(-1,1),z:s.z+h[3*t+2]+ot(-2,2),duration:1.5,ease:"elastic.out(1, 1)",onComplete:()=>{}}),V.to(i.scale,{x:.1,y:.1,z:.1,duration:1.5,ease:"power1.out",onComplete:()=>{this.slient||(l&&this.soundCtrl.stop(l),u(t))}}))}})};for(let n=0;n<d;n++)u(n)}loadBuildings(t=15){for(let i=0;i<t;i++){let t=ot(1,12),e=ot(8,28),s=ot(5,8),o=ot(-20,16),a=new n(8*i-50,e/2+.01,o),l=it(-3.14,3.14),r=Y(t,e,s,a,l,10066329);this.scene.add(r)}let e=new n(0,25,18),s=Y(14,50,8,e,0,1063755);J(s,"Valentine's",4,1),this.scene.add(s);let o=new n(-28,19,16);const a=new F({color:11763344}),l=new d({map:this.textureLoader.load("love_bg.png")});let r=Y(20,38,15,o,.5,11763344,[a,a,a,a,l,a]);J(r,"Happy",4.2,1),this.scene.add(r);let h=new n(26,17.5,18);const c=new d({map:(new i).load("https://static.fatiaoya.com/front/believer/resources/logo.jpg")});let p=Y(18,35,13,h,-.3,11763344,[a,a,a,a,c,a]);J(p,"Day",3.5,1),this.scene.add(p)}handlePlaySound(){this.soundCtrl.play("angel"),this.soundCtrl.play("explode"),this.soundCtrl.play("explode2"),this.soundCtrl.play("plane_engine")}handleChangeVideo(t={}){const{width:e,height:s,src:o}=t;this.row=0,this.col=0;try{this.ledGroup.removeFromParent()}catch(i){}this.ledGroup=null,this.pixelx=[],this.canvas=null,this.ctx=null,this.video=null,this.loadVideo(e,s,o)}loadVideo(t=130,e=350,s="https://static.fatiaoya.com/front/believer/resources/videos/iloveu.mp4"){let o=N({src:s,muted:!0,width:t,height:e});this.video=o;try{this.video.play()}catch(i){}this.video.onplay=()=>{this.loopSync()}}loopSync(){this.syncToCanvas().then((t=>this.turnImageData2Pixel(t))).then((t=>{let e=t.length,s=t[0].length;this.row||this.col||(this.row=e,this.col=s,this.createLedScreen(e,s,.4,.4,.1));let o=e;for(let i=0;i<o;i++)for(let e=0;e<s;e++)if(this.ledPixels[i]&&this.ledPixels[i][e]){let[o,a,n]=t[i][s-1-e],l=`rgb(${o},${a},${n})`;this.ledPixels[i][e].material.color=new S(l)}}))}createLedScreen(t,e,s,o,i=.1,a=null){this.ledPixels=[];let n=e*(s+i)-i,l=t*(o+i)-i;this.ledGroup=new A;let r=new G(s,o);for(let h=0;h<t;h++){let t=[];for(let d=0;d<e;d++){let c=new f(r,new F);a&&c.material.color.setRGB(...a[h][e-1-d]);let p=d*s-n/2+i*d+s/2,u=h*o-l/2+i*h+o/2,m=25.04;c.userData={x:p,y:u,z:m},c.position.set(p,u,m),t.push(c),this.ledGroup.add(c)}this.ledPixels.push(t)}this.ledGroup.position.set(0,30,0),this.ledGroup.rotateZ(-Math.PI),this.scene.add(this.ledGroup)}syncToCanvas(){return new Promise(((t,e)=>{try{const{width:e=0,height:s=0}=this.video||{};if(!this.canvas){let t=document.createElement("canvas");t.id="cvideo",t.width=e,t.height=s,t.title="canvas同步视频",this.canvas=t,this.ctx=t.getContext("2d"),this.canvas.style.cssText="\n              position: absolute;\n              right: 30px;\n              top: 20px;\n              border: solid 2px red;\n          "}this.ctx.drawImage(this.video,0,0,e,s);t(this.ctx.getImageData(0,0,e,s).data)}catch(s){e({message:"call get_Image_Data error.",error:s})}}))}turnImageData2Pixel(t){return new Promise(((e,s)=>{try{let s=this.quality,o=[];for(let e=0;e<this.video.height;e+=s){let i=[];for(let o=0;o<this.video.width;o+=s){let s=4*(e*this.video.width+o),a=t[s],n=t[s+1],l=t[s+2];i.push([a,n,l])}o.push(i)}e(o)}catch(o){s({message:"call turnImageData2Pixel error.",err:o})}}))}loadPlane(){this.gltfLoader.load("airplanes/microplane.glb",(t=>{this.planeMesh=t.scene,this.planeMesh.position.set(0,30,40),this.planeMesh.scale.set(4.5,4.5,4.5),this.planeMesh.add(this.soundCtrl.sounds.plane_engine),this.loadPlayer(this.planeMesh)}),(t=>{}),(t=>{}))}loadFlyLines(){let t=50,e=[new n(0,80,0),new n(0,t,45),new n(50,t,60),new n(55,t,0),new n(35,t,-40),new n(0,t,-58),new n(-35,t,-40),new n(-55,t,0),new n(-50,t,60),new n(0,t,45)];this.createFlyLine(e,80,16711680),setInterval((()=>{this.canDropGift=Math.random()>.5}),500)}createFlyLine(t=[],e=60,s=65280){let o=new _(t,!0);const i=o.getPoints(e),a=(new c).setFromPoints(i),l=new k({color:16777215}),r=new I(a,l);let h=this.planeMesh;this.scene.add(h),this.flyLines.push({curve:o,curveMesh:r,flyMesh:h,flyMeshPosition:new n,flyMeshTarget:new n})}flyMeshMove(t,e){let{curve:s,flyMesh:o,flyMeshPosition:i,flyMeshTarget:a}=t,n=.1*e;s.getPointAt(n%1,i),s.getPointAt((n+.01)%1,a),o.position.copy(i),o.lookAt(a);let l=n%1;this.canDropGift&&l>.1&&l<.9?(this.dropGift(o),this.canDropGift=!1):this.canDropGift=!1}dropGift(t,e=6){let s=t.position.clone(),o=new f(new j(1,1,1),this.mats[ot(0,2)]);o.scale.set(1,1,1),o.position.copy(s);let i=e,a=e+ot(-2,2),n=e+ot(-1,1);V.to(o.scale,{x:i,y:a,z:n,duration:1.5}),V.to(o.position,{y:a/2,duration:3,ease:"bounce.out"}),V.to(o.rotation,{y:Math.PI*Math.random()*4+1,duration:2.8}),this.scene.add(o)}updatePropeller(t,e){const{flyMesh:s}=t;s.getObjectByName("propeller").rotateZ(1)}loadPlayer(t){this.gltfLoader.load("Robot.glb",(e=>{this.playerMesh=e.scene,this.playerMesh.position.set(0,0,0),this.playerMesh.scale.set(.3,.3,.3);const{mixer:s,actions:o}=this.ActCtrl.createModelActions("robot",e);this.playerMixer=s,this.playerActions=o,this.playerActions=this.ActCtrl.toggleModelAction(this.playerActions,"wave"),t.add(this.playerMesh)}),(t=>{}),(t=>{}))}loadFollowCamera(t){this.controls=null,this.followCamera.removeFromParent(),this.followCamera.position.copy(this.camera.position),t.add(this.followCamera),this.followCamera.position.copy(this.followCameraPosition)}updateCameraByFC(){this.camera.position.lerp(this.followCamera.getWorldPosition(new n),1),this.camera.quaternion.slerp(this.followCamera.getWorldQuaternion(new D),1),this.camera.lookAt(this.planeMesh.position)}update(t,e){this.ledPixels.length&&this.loopSync(),this.spotLight&&(this.spotLight.angle+=.1),this.stars&&this.stars.rotateY(.01),this.planeMesh&&this.flyLines.length&&(this.flyLines.map((e=>{this.flyMeshMove(e,t),this.updatePropeller(e,t)})),this.isFollowView&&this.updateCameraByFC()),this.playerMixer&&this.playerMixer.update(e)}hide(){this.slient=!0,this.ledPixels=null,this.spotLight=null,this.stars=null,this.soundCtrl.stopAll()}}const nt=st({__name:"CityLightShow",setup(t){const e=new at(".container");let s=B(null);B(e.videos),B({});let o=B(!1),i=B("C");const a=()=>{e.soundLoaded?(o.value=!0,e.video&&e.video.play(),e.handlePlaySound(),e.sayILoveU(),e.loopSync()):alert("再等一下资源就加载完成啦^0^")},n=()=>{e.toggleView(!0),e.isFollowView?i.value="F":i.value="C"};return T((()=>{e.onMounted()})),O((()=>{e.onUnmounted()})),(t,e)=>(K(),q(W,null,[R("div",{class:"container",ref_key:"container",ref:s},null,512),U(R("div",{onClick:a,class:"pick"},"小氛围载入...",512),[[Z,!H(o)]]),H(o)?(K(),q("div",{key:0,class:"toggleview",onClick:n},$(H(i)),1)):E("",!0)],64))}},[["__scopeId","data-v-eb5d5f5a"]]);export{nt as default};
