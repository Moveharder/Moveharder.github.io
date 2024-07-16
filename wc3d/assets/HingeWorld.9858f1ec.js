import{a6 as e,r as n,S as a,m as s,W as o,A as t,D as i,I as w,J as d,M as r,n as l,q as p,s as m,aE as c,b3 as h,b1 as f,b0 as u,t as b,v,x as y,b4 as g,b2 as x,aF as A,bd as S,K as _,Q as B,af as M,ag as E,c as q,o as C,$ as F}from"./vendor.d2781f4b.js";import{_ as W}from"./index.eeadcf8f.js";const z=W({__name:"HingeWorld",setup(W){new e;let z=null,D=n(null),H=[];const I=new a,j=new s(75,window.innerWidth/window.innerHeight,.1,1e3);j.position.set(10,20,20),j.lookAt(0,0,0);const k=new o;k.setSize(window.innerWidth,window.innerHeight),k.setClearColor("#262837");const R=new t("#ffffff",.5);I.add(R);const J=new i("#f5f5f5",.5);J.position.set(2,7,-4),I.add(J);let K=new w;K.boradphase=new d(K),K.allowSleep=!0,K.gravity.set(0,-20.82,0);const P=new r(new l(100,100),new p({color:"#ffffff",side:m})),Q=new c("ground"),T=new h,$=new f({mass:0,material:Q});$.addShape(T),$.quaternion.setFromEuler(-Math.PI/2,0,0),$.position.y=-3,H.push({mesh:P,body:$});let G=[];const L=new c("wheel"),N=new u(1.2),O=new r(new b(2,16,16),new v({color:"#777777"}));O.name="wheel_leftFront";const U=new f({mass:1,material:L});U.addShape(N),H.push({mesh:O,body:U});const V=new r(new b(2,16,16),new v({color:"#777777"}));V.name="wheel_rightFront";const X=new f({mass:1,material:L});X.addShape(N),H.push({mesh:V,body:X});const Y=new r(new b(2,16,16),new v({color:"#333333"}));Y.name="wheel_leftRear";const Z=new f({mass:1,material:L});U.addShape(N),H.push({mesh:Y,body:Z});const ee=new r(new b(2,16,16),new v({color:"#333333"}));ee.name="wheel_rightRear";const ne=new f({mass:1,material:L});X.addShape(N),H.push({mesh:ee,body:ne});const ae=new r(new y(10,1,4),new v({color:"#777777"})),se=new g(new x(5,.5,2)),oe=new f({mass:1});oe.addShape(se),H.push({mesh:ae,body:oe});const te=new A(Q,L,{friction:.5,restitution:.3});K.addContactMaterial(te);const ie=new x;U.position.set(-5,0,5),X.position.set(-5,0,-5),Z.position.set(5,0,5),ne.position.set(5,0,-5);const we=new x(0,0,1),de=new x(0,0,-1),re=new x(.3,0,.7),le=new x(-.3,0,-.7);re.normalize(),le.normalize(),G.push(new S(oe,U,{pivotA:new x(-5,0,5),axisA:re,pivotB:ie,axisB:we})),G.push(new S(oe,X,{pivotA:new x(-5,0,-5),axisA:le,pivotB:ie,axisB:de})),G.push(new S(oe,Z,{pivotA:new x(5,0,5),axisA:we,pivotB:ie,axisB:we})),G.push(new S(oe,ne,{pivotA:new x(5,0,-5),axisA:de,pivotB:ie,axisB:de})),G.forEach((e=>{K.addConstraint(e)})),H.forEach((({body:e,mesh:n})=>{K.addBody(e),I.add(n),n.name.includes("wheel")&&n.material&&(n.material.wireframe=!0)})),G[0].enableMotor(),G[0].setMotorSpeed(-2),G[1].enableMotor(),G[1].setMotorSpeed(2);const pe=new F;let me=0;function ce(){const e=pe.getElapsedTime(),n=e-me;me=e,H.map((({mesh:e,body:n})=>{e.position.copy(n.position),e.quaternion.copy(n.quaternion)})),K.step(1/60,n,3),z.update(),z.target.copy(ae.position),k.render(I,j),window.requestAnimationFrame(ce)}return _((()=>{z=new B(j,D.value),z.enableDamping=!0,z.minDistance=.01,I.add(new M(1e3)),I.add(new E(320,32)),D.value.appendChild(k.domElement),ce()})),(e,n)=>(C(),q("div",{class:"container",ref_key:"container",ref:D},null,512))}},[["__scopeId","data-v-6bf565b3"]]);export{z as default};
