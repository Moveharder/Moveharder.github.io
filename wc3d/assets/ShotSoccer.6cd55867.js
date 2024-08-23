var e=Object.defineProperty,t=(t,s,i)=>(((t,s,i)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i})(t,"symbol"!=typeof s?s+"":s,i),i);import{aX as s,V as i,z as o,G as a,C as r,b5 as n,b6 as l,q as h,s as d,M as c,H as u,m as p,a0 as g,am as m,n as w,b3 as y,b1 as v,b2 as b,b7 as f,aW as A,v as S,x,D as M,a1 as _,t as C,b0 as L,a5 as P,aI as T,aJ as E,aK as j,r as B,b8 as z,K as k,U as G,c as I,a as X,e as F,aq as U,u as W,w as O,ap as Y,o as q}from"./vendor.d2781f4b.js";import{B as D}from"./Base.f46e7956.js";import{S as R}from"./SoundControl.48b26f99.js";import{C as H}from"./CameraAnimation.f6d1e21f.js";import{_ as V}from"./index.512f3ce0.js";class K{constructor(e){this.domElement=document.createElement("div"),this.domElement.style.position="fixed",this.domElement.style.top="40px",this.domElement.style.width="50%",this.domElement.style.left="50%",this.domElement.style.transform="translateX(-50%)",this.domElement.style.height="15px",this.domElement.style.display="none",this.domElement.style.alignItems="center",this.domElement.style.justifyContent="center",this.domElement.style.zIndex="1111";const t=document.createElement("div");t.style.background="#aaa",t.style.width="100%",t.style.minWidth="100px",t.style.borderRadius="10px",t.style.height="15px",t.style.overflow="hidden",this.domElement.appendChild(t);const s=document.createElement("div");s.style.transition="all .1s",s.style.background="coral",s.style.width="0%",s.style.borderRadius="10px",s.style.height="100%",s.style.width="0",t.appendChild(s),this.strengthBar=s,this._strength=0,document.body.appendChild(this.domElement)}update(){this.visible&&(this._strength+=.01,this.strength=this._strength)}get strength(){return 1.4*this._strength}set strength(e){e<0&&(e=0),e>1&&(e=1),this._strength=e;const t=100*e;this.strengthBar.style.width=`${t}%`}set visible(e){e?(this.visible||(this._strength=0),this.domElement.style.display="flex"):this.domElement.style.display="none"}get visible(){return"flex"==this.domElement.style.display}}class ${constructor(e,r="guidearrow"){t(this,"baseRotateX",s.degToRad(-90)),t(this,"_direction",new i),t(this,"textureLoader",(new o).setPath("images/texture/")),t(this,"arrowGroup",new a),this.target=e,this.guideArrow=this.createArrow(),this.guideArrow.name=r}get mesh(){return this.guideArrow}get visible(){return this.guideArrow.visible}get direction(){return this._direction}createArrow(){let e=this.textureLoader.load("force_arrow_bg.svg");e.wrapT=r,e.wrapS=r;let t=.5,s=1.1;e.offset.x=t,e.offset.y=s;let i=new n,o=3.1;i.moveTo(0,2.95-o,0),i.lineTo(-.12,3.92-o,0),i.lineTo(0,4-o,0),i.lineTo(.12,3.94-o,0),i.lineTo(0,2.95-o,0);let a=new l(i),u=new h({emissive:16777215,map:e,transparent:!0,opacity:1,side:d}),p=new c(a,u);return p.scale.set(4,4),p.rotateX(this.baseRotateX),this.arrowGroup.add(p),this.arrowGroup}createArrowBg(){let e=this.textureLoader.load("force_ratio_bg.svg");e.wrapT=u,e.wrapS=u}toggleVisible(){this.guideArrow.visible=!this.guideArrow.visible}show(e){this.target=e,this.setPosition(),this.guideArrow.visible=!0}hide(){this.guideArrow.visible=!1}updateAngleX(e){this.guideArrow.rotation.x=e,this.setPosition()}updateAngleY(e){this.guideArrow.rotation.y=e,this.setPosition()}updateLength(e){this.setPosition()}setPosition(){let e=this.target.position.clone();e.y=e.y+.1,e.z=e.z-.5,this.guideArrow.position.copy(e),this.guideArrow.getWorldDirection(this._direction),this._direction.negate()}}class J extends D{constructor(e){super(e),t(this,"soccer",null),t(this,"soccerMaterial",null),t(this,"soccerGeometry",null),t(this,"objects",[]),t(this,"score",0),t(this,"state","idel"),t(this,"scoreChecker",(e=>{})),t(this,"floorwidth",50),t(this,"floorLength",50),t(this,"controls",null),t(this,"guideLine",null),t(this,"guideArrow",null),t(this,"textureLoader",(new o).setPath(this.publicPath.texture)),t(this,"soundCtrl",null),t(this,"targetPointMesh",null),t(this,"labelSprite",null),t(this,"mode","target_point"),this.strengthBar=new K}init(){this.camera=new p(60,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(-10,50,80),this.initBallMaterialAndGeometry(),this.loadSounds(),this.createWorld(),this.createEnv(),this.createFloor(),this.createWalls(),this.createDoor(),document.addEventListener("click",(()=>{this.playBgSound()})),this.createSoccer(),this.randomCreateTarget(),this.createLights(),this.guideArrow=new $(this.soccer.mesh,"guideline"),this.scene.add(this.guideArrow.mesh)}test(){let e=new a,t=(new o).load("images/texture/force_arrow_bg.svg");t.wrapT=r,t.wrapS=r,t.offset.x=.5,t.offset.y=0;var s=new n;s.moveTo(0,1.5,0),s.lineTo(-.15,1.42,0),s.lineTo(0,2.95-2.5,0),s.lineTo(.15,1.44,0),s.lineTo(0,1.5,0);var i=new l(s),u=new h({emissive:16777215,map:t,transparent:!0,opacity:.8,side:d}),p=new c(i,u);p.scale.set(2,2),e.add(p),e.position.set(0,0,0),e.rotateX(-Math.PI/3),this.scene.add(e)}loadSounds(){this.soundCtrl=new R(this.camera,"sounds/game/"),this.soundCtrl.load("goal","mp3",!1,1),this.soundCtrl.load("hit_soccer","mp3",!1,1,!0),this.soundCtrl.load("Game","m4a",!0)}createEnv(){(new g).setPath(this.publicPath.hdr).load("soccer_env.hdr",(e=>{e.mapping=m,this.scene.background=e,H.animate({camera:this.camera,newCameraPosition:{x:0,y:6,z:12},cameraLookAt:{x:0,y:0,z:-5},duration:3})}))}createFloor(){const{scene:e,world:t,floorwidth:s,floorLength:i}=this;let o=this.textureLoader.load("grass.jpg");o.wrapS=o.wrapT=r,o.repeat.set(15,15);const a=new c(new w(s,i),new h({map:o}));a.rotation.x=-Math.PI/2,a.position.y=-.4,a.receiveShadow=!0,a.name="floor",e.add(a);const n=new y,l=new v;l.mass=2,l.addShape(n),l.position.copy(a.position),l.quaternion.setFromAxisAngle(new b(1,0,0),-Math.PI/2),t.addBody(l)}createWalls(){const{floorwidth:e}=this,t=new f(1,.8,8,6),s=new h({color:"#fff000",flatShading:!0});for(let i=0;i<8;i++){let o=new c(t,s);o.position.set(-e/2+2,3,6*(i-4+.5)),this.scene.add(o)}for(let i=0;i<8;i++){let o=new c(t,s);o.position.set(e/2-2,3,6*(i-4+.5)),this.scene.add(o)}}createDoor(){let{floorLength:e}=this,t=new A({map:this.textureLoader.load("fty_logo.jpg"),side:d}),s=new S({color:16777215,side:d,transparent:!0,opacity:0});s.name="front_door";let i=new S({color:16119285,side:d,transparent:!0,opacity:.8});const o=[i,i,i,i,s,t],a=new c(new x(12,5,3.5),o);a.position.set(0,1.5,1.25-e/2),a.receiveShadow=!0,a.castShadow=!0,a.name="door",this.scene.add(a)}createSoccer(e=.4,t={x:0,y:.02,z:0}){this.createShpereObject(e,t),this.updateStrengthBar(0,!0),this.soccer.mesh.add(this.soundCtrl.sounds.hit_soccer),this.guideLine&&this.guideLine.show(this.soccer.mesh),this.guideArrow&&this.guideArrow.show(this.soccer.mesh)}createLights(){let e=new M(16777215,1);e.position.set(5,10,-4),e.shadow.mapSize.height=256,e.shadow.mapSize.width=256,e.castShadow=!0,this.scene.add(e)}removeSoccer(){const{body:e,mesh:t}=this.soccer;e.velocity.set(0,0,0),e.angularVelocity.set(0,0,0),e.removeEventListener("collide",this.onCollide.bind(this)),this.scene.remove(t),this.soccer=null}updateScore(){this.playGoalSound(),this.score++,this.scoreChecker&&this.scoreChecker(this.score)}shot(e,t,s,i=()=>{}){if(this.scoreChecker=i,!this.soccer)return void alert("请先创建足球");const{body:o,mesh:a}=this.soccer,r=new b;r.copy(this.guideArrow.direction.normalize()),r.scale(20*s,r),o.applyForce(r,o.position),this.guideArrow.hide(),this.stateMachine("rolling"),this.playHitSound()}updateStrengthBar(e,t){this.strengthBar.strength=e,this.strengthBar.visible=t,this.strengthBar.update()}playBgSound(){this.soundCtrl.play("Game")}playHitSound(){this.soundCtrl.play("hit_soccer")}playGoalSound(){this.soundCtrl.play("goal")}onCollide(e){e&&e.contact.getImpactVelocityAlongNormal()}checkGoal(){const{mesh:e,body:t}=this.soccer,s=this.floorLength/2;if(Math.abs(e.position.z)<s){this.raycaster.ray.origin.set(e.position.x,e.position.y,e.position.z);const t=this.raycaster.intersectObjects(this.scene.children.filter((e=>"soccer"!=e.name&&"guideline"!=e.name&&"label"!=e.name)),!1);if(t.length){let e=t[0];if("front_door"==this.mode){let t=(Array.isArray(e.object.material)?e.object.material:[e.object.material]).filter((e=>"front_door"==e.name));t.length?this.onScore(t):this.onMissed()}else"target_point"==e.object.name?(this.hideAndShowTargetPoint(e.object),this.onScore()):this.onMissed()}}else this.onMissed()}onScore(e){this.stateMachine("idel"),this.updateScore(),this.removeSoccer(),"target_point"==this.mode&&e&&(_.fromTo(e,{opacity:1,duration:1,yoyo:!0,ease:"power2"},{opacity:.2,duration:1,yoyo:!0,ease:"power2"}),setTimeout((()=>{_.to(e,{opacity:0,duration:.5})}),2e3)),setTimeout((()=>{this.createSoccer()}),500)}onMissed(){this.stateMachine("idel"),this.createSoccer()}stateMachine(e){let{state:t}=this;e?this.state=e:"idel"!=t?"rolling"!=t||(this.state="idel"):this.state="rolling"}initBallMaterialAndGeometry(){const e=new C(1,32,32),t=this.textureLoader.load("soccer.png");t.mapping=m,this.soccerMaterial=new h({color:16777215,map:t,side:d}),this.soccerGeometry=e}createShpereObject(e,t){const{scene:s,world:i}=this,o=new c(this.soccerGeometry,this.soccerMaterial);o.scale.set(e,e,e),o.position.copy(t),o.castShadow=!0,o.name="soccer",s.add(o);const a=new L(e),r=new v({mass:.2,position:new b(0,0,0),shape:a,material:this.world.defaultContactMaterial});r.position.copy(t),i.addBody(r),this.soccer={mesh:o,body:r},this.objects.push({mesh:o,body:r})}createObject(){super.createObject()}randomCreateTarget(e=0,t=2,i=4-this.floorLength/2){if("front_door"==this.mode)return;if(!this.targetPointMesh){let e=new P(1.2,32,32),t=new h({side:d,map:(new o).setPath(this.publicPath.texture).load("target.svg")}),s=new c(e,t);s.name="target_point",this.targetPointMesh=s,this.scene.add(this.targetPointMesh)}this.targetPointMesh.scale.set(0,0,0),this.targetPointMesh.visible=!0;let a=s.randInt(-3.6,3.6),r=s.randInt(2.4,2.6);this.targetPointMesh.position.set(a,r,i),_.to(this.targetPointMesh.scale,{x:1,y:1,z:1,ease:"power2.out",duration:.4,onUpdate:()=>{if(this.targetPointMesh.scale.x>.5){let e=this.targetPointMesh.position.clone();e.y+=.5,e.z+=1,this.createLabel(e)}}})}hideAndShowTargetPoint(){_.to(this.targetPointMesh.scale,{x:0,y:0,z:0,ease:"power2.out",duration:.4,onComplete:()=>{this.targetPointMesh.visible=!1,this.randomCreateTarget()}})}createLabel(e){if(!this.labelSprite){let e=new T(this.getCanvas());e.needsUpdate=!0;let t=new E({map:e});this.labelSprite=new j(t),this.labelSprite.name="label",this.labelSprite.scale.set(3,3,1),this.scene.add(this.labelSprite)}this.labelSprite.position.x=e.x,this.labelSprite.position.y=e.y,this.labelSprite.position.z=e.z}getCanvas(e="⚽️黄金右脚🦶"){let t=document.createElement("canvas");t.width=160,t.height=160;let s=t.getContext("2d");return s.fillStyle="#00ff00",s.font="Bold 26px Arial",s.fillText(e,0,20),t}updateGuidelineDirection(){this.controls.getPolarAngle();const e=this.controls.getAzimuthalAngle();this.guideLine.updateAngleY(e)}update(){if(!this.soccer)return;this.objects.map((({mesh:e,body:t})=>{e.position.copy(t.position),e.quaternion.copy(t.quaternion)}));const{mesh:e,body:t}=this.soccer;"rolling"==this.state&&(this.checkGoal(),t.applyForce(new b(0,-1,2),t.position)),this.controls&&this.controls.update()}hide(){this.soundCtrl.stopAll(),document.removeEventListener("click",(()=>{this.playBgSound()}))}}const N={id:"percent"},Q={style:{width:"50px","text-align":"center"}},Z={style:{"font-size":"35px","font-weight":"bold"}},ee=V({__name:"ShotSoccer",setup(e){const t=new J(".container");let s=B(null),i=B(25),o=B(.5),a=B(0),r=B(34),n=B(t.score);z((()=>l(a.value))),z((()=>l(r.value)));const l=e=>Math.round(180*e/Math.PI);let h=null;const d=()=>{r.value=34,h=_.timeline(),h.to(r,{value:-34,duration:1.5,repeat:-1,yoyo:!0,ease:"linear",onUpdate:()=>{r.value=(r.value/100).toFixed(2),t.guideLine&&t.guideLine.updateAngleY(r.value),t.guideArrow&&t.guideArrow.updateAngleY(r.value)}})};let c=null;let u=null;const p=()=>{h.kill(),a.value=0,c=_.timeline(),c.to(a,{value:80,duration:3,ease:"linear",onUpdate:()=>{a.value=(a.value/100).toFixed(2),t.guideLine&&t.guideLine.updateAngleX(a.value),t.guideArrow&&t.guideArrow.updateAngleX(a.value)}}),o.value=1,u=_.timeline(),u.to(o,{value:i.value,duration:3,repeat:0,ease:"power2.out",onUpdate:()=>{o.value=Math.round(o.value),t.updateStrengthBar(o.value/i.value,!0)}})},g=()=>{u.kill(),c.kill(),t.shot(a.value,r.value,o.value,(e=>{n.value=e})),d(),m()},m=()=>{r.value=34,t.guideLine&&t.guideLine.updateAngleY(r.value),t.guideArrow&&t.guideArrow.updateAngleY(r.value),a.value=0,t.guideLine&&t.guideLine.updateAngleX(a.value),t.guideArrow&&t.guideArrow.updateAngleX(a.value),o.value=.5,t.updateStrengthBar(o.value/i.value,!0)};return k((()=>{t.onMounted(),d()})),G((()=>{t.onUnmounted()})),(e,t)=>(q(),I("div",{class:"container",ref_key:"container",ref:s},[X("div",N,[X("p",Q,[F("Score "),X("span",Z,U(W(n)),1),F(" 分")])]),X("div",{id:"forcebtn",onMousedown:O(p,["prevent"]),onMouseup:O(g,["prevent"]),onTouchstart:O(p,["prevent"]),onTouchend:O(g,["prevent"]),style:Y(`border:solid ${W(o)/W(i)*30}px coral`)},null,36)],512))}},[["__scopeId","data-v-ff5f80d4"]]);export{ee as default};
