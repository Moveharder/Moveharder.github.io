import{r as e,a6 as n,S as a,m as t,W as o,A as s,D as i,M as d,n as r,q as l,s as c,t as w,v as p,aW as m,z as u,x as f,a9 as y,ad as b,a3 as g,V as h,a1 as v,K as A,Q as k,af as M,ag as C,U as S,c as x,o as K,aX as j,$ as D}from"./vendor.d2781f4b.js";import{M as E}from"./MoveAndTurnControl.f44fdd62.js";import{C as T}from"./ClickAnchorRender.c5feb3b6.js";import{p as W}from"./const.dd63a052.js";import{_}from"./index.40bc08d4.js";const z=_({__name:"GodViewMove",setup(_){let z=null,P=e(null);const F=window.innerWidth,L=window.innerHeight,Y=new n({name:"My GUI"});Y.addFolder("Test Field");const q={bgSound:()=>{H()}};Y.add(q,"bgSound");const R=new Audio("sounds/game/Ambient.m4a"),G=new Audio("sounds/game/Default.m4a");new Audio("sounds/game/Game.m4a");const H=()=>{R.volume=Math.random(),R.currentTime=0,R.play(),R.loop=!0,G.play(),G.loop=!0},I=new a,U=new t(75,F/L,.1,200);U.position.set(0,4,8),U.lookAt(0,0,0);const V=new o;V.setSize(F,L),V.setClearColor("#262837");const X=new s("#ffffff",.5);I.add(X);const Z=new i("#f5f5f5",.5);Z.position.set(2,7,-4),I.add(Z);const $=new d(new r(50,50),new l({color:"#ffffff",side:c}));$.rotation.x=-Math.PI/2,$.position.y=-.01,I.add($);const O=new d(new w(2,32,32),new p({color:"#777777"}));O.position.set(6,5,0),I.add(O);let Q=new m({map:(new u).setPath(W.texture).load("fty_logo.jpg"),side:c}),B=new p({color:16711680,transparent:!0,opacity:.4});const J=[B,B,B,B,B,Q],N=new d(new f(1,1,1),J);N.position.set(0,.5,0),I.add(N);const ee=(new y).setPath(`${W.model}CesiumMan/glTF/`);let ne=null,ae=null,te=[],oe=null;ee.load("CesiumMan.gltf",(e=>{ae=e.scene,ae.position.set(0,0,0),ae.scale.set(1,1,1),te=e.animations,ne=new b(e.scene),I.add(e.scene)}),(e=>{}),(e=>{}));let se=!1,ie=!1,de=!1,re=!1;window.addEventListener("keydown",(e=>{switch(e.code){case"KeyW":se=!0;break;case"KeyS":ie=!0;break;case"KeyA":de=!0;break;case"KeyD":re=!0;break;case"Space":N.translateY(1)}})),window.addEventListener("keyup",(e=>{switch(e.code){case"KeyW":se=!1;break;case"KeyS":ie=!1;break;case"KeyA":de=!1;break;case"KeyD":re=!1;break;case"Space":N.position.set(0,.5,0),N.quaternion.set(0,0,0,0),ae.position.set(0,.5,0),ae.quaternion.set(0,0,0,0),U.position.set(0,5,10),U.lookAt(0,0,0)}}));let le=new g,ce=new h,we=new E(v),pe=new T(I);window.addEventListener("mousedown",(function(e){ce.x=e.clientX/F*2-1,ce.y=-(e.clientY/L*2-1),ce.z=1,le.setFromCamera(ce,U);let n=[$],a=le.intersectObjects(n,!1);if(a.length>0){let e=a[0],{point:n,distance:t}=e;t=Math.min(e.distance,10),pe.create(n),we.go({target:ae,destPosition:n,fixedY:0,onStart:()=>{z.enabled=!1},onUpdate:e=>{var n;n=0,ae&&n!=oe&&(null!==oe&&ne.clipAction(te[oe]).stop(),ne.clipAction(te[n]).play(),oe=n)},onComplete:()=>{z.enabled=!0,pe.destroy(),(()=>{for(let e of te)ne.clipAction(e).stop();oe=null})()}})}}),!1);const me=new D;let ue=0;function fe(){const e=me.getElapsedTime(),n=e-ue;ue=e,se&&N.translateZ(-.1),ie&&N.translateZ(.1),de&&N.rotateY(j.degToRad(1)),re&&N.rotateY(-j.degToRad(1)),ae&&z.target.copy(ae.position),U.position.y=4,ne&&ne.update(2*n),z.update(),V.render(I,U),window.requestAnimationFrame(fe)}const ye=()=>{U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),V.setSize(window.innerWidth,window.innerHeight)};return A((()=>{z=new k(U,P.value),z.enableDamping=!0,z.enablePan=!1,z.enableRotate=!1,z.maxDistance=6,z.minDistance=6,I.add(new M(1e3)),I.add(new C(320,32)),P.value.appendChild(V.domElement),fe(),window.addEventListener("resize",(()=>ye))})),S((()=>{window.removeEventListener("resize",ye)})),(e,n)=>(K(),x("div",{class:"container",ref_key:"container",ref:P},null,512))}},[["__scopeId","data-v-54e81d73"]]);export{z as default};
