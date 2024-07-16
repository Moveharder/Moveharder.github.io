import{a6 as e,r as n,S as a,m as t,W as o,a7 as s,A as d,D as i,M as l,n as c,q as r,s as w,a8 as p,a9 as f,aa as m,ab as u,ac as h,ad as g,ae as b,K as v,Q as P,af as S,ag as A,U as F,c as M,o as W,$ as x}from"./vendor.d2781f4b.js";import{p as y}from"./const.dd63a052.js";import{_ as D}from"./index.4cf543bf.js";const L=D({__name:"LoadModel",setup(D){const L=new e;let R=null,$=n(null);L.addFolder("Test Field");const k={Survey:()=>{V(0)},Walk:()=>{V(1)},Run:()=>{V(2)},Stop:()=>{X()}};L.add(k,"Survey"),L.add(k,"Walk"),L.add(k,"Run"),L.add(k,"Stop");const _=new a,z=new t(75,window.innerWidth/window.innerHeight,.1,1e3);z.position.set(0,30,20),z.lookAt(0,0,0);const C=new o;C.setSize(window.innerWidth,window.innerHeight),C.setClearColor("#262837"),C.shadowMap.enabled=!0,C.shadowMap.type=s;const T=new d("#ffffff",.5);_.add(T);const j=new i("#ffffff",1);j.position.set(3,7,-4),_.add(j),j.castShadow=!0;const E=new l(new c(80,80),new r({color:"#ffffff",side:w}));E.rotation.x=-Math.PI/2,E.position.y=-.01,E.receiveShadow=!0,_.add(E);let H=null,I=null;const q=new p;q.setDecoderPath("draco/");const B=(new f).setPath(`${y.model}/`),O=(new f).setPath("/models/").setDRACOLoader(q),K=(new f).setPath(`${y.model}/Fox/glTF/`),N=(new f).setPath(`${y.model}/Lantern/glTF-Draco/`);(new f).setPath(`${y.model}/Sponza/glTF/`),(new m).setPath(`${y.model}/room/`),(new u).setPath(`${y.model}/room/`),N.setDRACOLoader(q),N.load("Lantern.gltf",(e=>{H=e.scene,H.position.set(10,0,10),H.scale.set(.5,.5,.5),H.rotateY(-Math.PI),_.add(e.scene)}),(e=>{}),(e=>{})),B.load("Robot.glb",(e=>{e.scene.position.set(-10,0,5),e.scene.scale.set(1,1,1),e.scene.castShadow=!0;let n=e.scene;_.add(n),U(e)}),(e=>{}),(e=>{})),new h;let Q=null;const U=e=>{Q=new g(e.scene);const n=b.subclip(e.animations[0],"Idel",0,5);Q.clipAction(n);const a=b.subclip(e.animations[0],"Walk",0,100);let t=Q.clipAction(a);t.play()};let Y=null,G=[],J=null;K.load("Fox.gltf",(e=>{I=e.scene,G=e.animations,Y=new g(e.scene),I.position.set(8,0,5),I.scale.set(.05,.05,.05),_.add(e.scene),V(0)}),(e=>{}),(e=>{}));const V=e=>{I&&e!=J&&(null!==J&&Y.clipAction(G[J]).stop(),Y.clipAction(G[e]).play(),J=e)},X=()=>{for(let e of G)Y.clipAction(e).stop();J=null};O.load("NewBoko.glb",(e=>{let n=e.scene;n.position.set(-15,1,5),_.add(n)}),(e=>{}),(e=>{})),O.load("MiniRoomFull.glb",(e=>{let n=e.scene;n.position.set(15,15,5),_.add(n)}),(e=>{}),(e=>{})),O.load("MiniRoomBox.glb",(e=>{let n=e.scene;n.position.set(15,0,5),_.add(n)}),(e=>{}),(e=>{}));const Z=new x;let ee=0;function ne(){const e=Z.getElapsedTime(),n=e-ee;ee=e,Y&&Y.update(n),Q&&Q.update(n),R.update(),C.render(_,z),window.requestAnimationFrame(ne)}const ae=()=>{z.aspect=window.innerWidth/window.innerHeight,z.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight)};return v((()=>{R=new P(z,$.value),R.enableDamping=!0,R.minDistance=.01,_.add(new S(1e3)),_.add(new A(320,32)),$.value.appendChild(C.domElement),ne(),window.addEventListener("resize",(()=>ae))})),F((()=>{window.removeEventListener("resize",ae)})),(e,n)=>(W(),M("div",{class:"container",ref_key:"container",ref:$},null,512))}},[["__scopeId","data-v-2f223c0a"]]);export{L as default};
