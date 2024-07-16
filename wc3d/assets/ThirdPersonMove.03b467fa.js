import{r as e,a6 as n,S as t,m as a,W as o,A as s,D as i,M as d,n as r,q as c,s as l,t as w,v as p,aW as m,z as f,x as u,a9 as y,ad as g,V as h,a3 as b,a1 as v,K as A,af as k,ag as M,U as C,c as S,o as K,aX as j,$ as x}from"./vendor.d2781f4b.js";import{M as T}from"./MoveAndTurnControl.f44fdd62.js";import{C as E}from"./ClickAnchorRender.c5feb3b6.js";import{p as P}from"./const.dd63a052.js";import{_ as W}from"./index.4cf543bf.js";const _=W({__name:"ThirdPersonMove",setup(W){let _=e(null);const z=window.innerWidth,Y=window.innerHeight,F=new n({name:"My GUI"});F.addFolder("Test Field");const L={bgSound:()=>{I()}};F.add(L,"bgSound");const q=new Audio("sounds/game/Ambient.m4a"),D=new Audio("sounds/game/Default.m4a");new Audio("sounds/game/Game.m4a");const I=()=>{q.volume=Math.random(),q.currentTime=0,q.play(),q.loop=!0,D.play(),D.loop=!0},H=new t,R=new a(75,z/Y,.1,200);R.position.set(0,4,8),R.lookAt(0,0,0);const U=new o;U.setSize(z,Y),U.setClearColor("#262837");const G=new s("#ffffff",.5);H.add(G);const X=new i("#f5f5f5",.5);X.position.set(2,7,-4),H.add(X);const Z=new d(new r(50,50),new c({color:"#ffffff",side:l}));Z.rotation.x=-Math.PI/2,Z.position.y=-.01,H.add(Z);const $=new d(new w(2,32,32),new p({color:"#777777"}));$.position.set(6,5,0),H.add($);let O=new m({map:(new f).setPath(P.texture).load("fty_logo.jpg"),side:l}),V=new p({color:16711680,transparent:!0,opacity:.4});const B=[V,V,V,V,V,O],J=new d(new u(1,.5,2),B);J.position.set(0,.5,0),H.add(J);const N=(new y).setPath(`${P.model}CesiumMan/glTF/`);let Q=null,ee=null,ne=[],te=null;N.load("CesiumMan.gltf",(e=>{ee=e.scene,ee.position.set(0,0,0),ee.scale.set(1,1,1),ee.rotateY(Math.PI),ne=e.animations,Q=new g(e.scene),H.add(e.scene),ee.add(R),R.position.set(0,3,-4),R.lookAt(new h(0,0,-1))}),(e=>{}),(e=>{}));let ae=!1,oe=!1,se=!1,ie=!1;window.addEventListener("keydown",(e=>{switch(e.code){case"KeyW":ae=!0;break;case"KeyS":oe=!0;break;case"KeyA":se=!0;break;case"KeyD":ie=!0;break;case"Space":J.translateY(1)}})),window.addEventListener("keyup",(e=>{switch(e.code){case"KeyW":ae=!1;break;case"KeyS":oe=!1;break;case"KeyA":se=!1;break;case"KeyD":ie=!1;break;case"Space":J.position.set(0,.5,0),J.quaternion.set(0,0,0,0),ee.position.set(0,.5,0),ee.quaternion.set(0,0,0,0)}}));let de=new b,re=new h,ce=new T(v),le=new E(H);window.addEventListener("mousedown",(function(e){re.x=e.clientX/z*2-1,re.y=-(e.clientY/Y*2-1),re.z=1,de.setFromCamera(re,R);let n=[Z],t=de.intersectObjects(n,!1);if(t.length>0){let e=t[0],{point:n,distance:a}=e;a=Math.min(e.distance,10),le.create(n),ce.go({target:ee,destPosition:n,fixedY:0,onStart:()=>{},onUpdate:e=>{var n;n=0,ee&&n!=te&&(null!==te&&Q.clipAction(ne[te]).stop(),Q.clipAction(ne[n]).play(),te=n)},onComplete:()=>{le.destroy(),(()=>{for(let e of ne)Q.clipAction(e).stop();te=null})()}})}}),!1);const we=new x;let pe=0;function me(){const e=we.getElapsedTime(),n=e-pe;pe=e,ae&&J.translateZ(-.1),oe&&J.translateZ(.1),se&&J.rotateY(j.degToRad(1)),ie&&J.rotateY(-j.degToRad(1)),Q&&Q.update(2*n),U.render(H,R),window.requestAnimationFrame(me)}const fe=()=>{R.aspect=window.innerWidth/window.innerHeight,R.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight)};return A((()=>{H.add(new k(1e3)),H.add(new M(320,32)),_.value.appendChild(U.domElement),me(),window.addEventListener("resize",(()=>fe))})),C((()=>{window.removeEventListener("resize",fe)})),(e,n)=>(K(),S("div",{class:"container",ref_key:"container",ref:_},null,512))}},[["__scopeId","data-v-d5b754e6"]]);export{_ as default};
