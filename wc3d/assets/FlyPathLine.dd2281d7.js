var e=Object.defineProperty,t=(t,s,i)=>(((t,s,i)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i})(t,"symbol"!=typeof s?s+"":s,i),i);import{B as s}from"./Base.f46e7956.js";import{a9 as i,a0 as a,O as o,V as l,m as r,am as h,aZ as n,_ as c,L as p,a_ as d,M as w,a$ as y,v as m,aw as f,K as M,U as g,c as u,o as P}from"./vendor.d2781f4b.js";import{M as A}from"./modelActionControl.e6c0dc48.js";import{_ as C}from"./index.512f3ce0.js";class b extends s{constructor(e){super(e),t(this,"gltfLoader",(new i).setPath(this.publicPath.model)),t(this,"rgbLoader",(new a).setPath(this.publicPath.hdr)),t(this,"flyLines",[]),t(this,"followCamera",new o),t(this,"followCameraPosition",new l(0,1,-4)),t(this,"isFollowView",!1),t(this,"followTarget",null),t(this,"playerMesh"),t(this,"playerMixer",null),t(this,"playerActions",{lastAction:"Idle"}),t(this,"propellerMesh")}init(){this.camera=new r(75,this.width/this.height,.1,500),this.camera.position.set(0,5,20),this.camera.lookAt(0,0,0),this.renderer.domElement.addEventListener("click",(()=>{if(this.isFollowView)this.followTarget=null,this.camera.position.set(0,5,20),this.camera.lookAt(0,0,0),Math.random()>.5&&this.getOffPlane();else{let e=Math.floor(Math.random()*this.flyLines.length);this.followTarget=this.flyLines[e],this.loadFollowCamera(this.followTarget)}this.isFollowView=!this.isFollowView})),this.ActCtrl=new A(this)}createObject(){this.createGridHelper(),this.loadHdrBg(),this.loadPlayer(),this.loadPlane()}loadHdrBg(){this.rgbLoader.load("satara_night_1k.hdr",(e=>{e.mapping=h,this.scene.background=e,this.scene.environment=e}))}loadFlyLines(){let e=[new l(-10,0,10),new l(-5,5,5),new l(0,0,0),new l(5,5,5),new l(10,0,10)];this.createFlyLine(e,80,16711680);let t=[new l(-20,0,-10),new l(-10,10,-5),new l(0,0,0),new l(10,10,-5),new l(20,0,-10)];this.createFlyLine(t,80,65280)}createFlyLine(e=[],t=60,s=65280){let i=new n(e,!0);const a=i.getPoints(t),o=(new c).setFromPoints(a),r=new p({color:16777215}),h=new d(o,r);let f=new w(new y(.3,.3,.5),new m({color:s}));f=this.planeMesh?this.planeMesh.clone():this.planeMesh,this.scene.add(h),this.scene.add(f),this.flyLines.push({curve:i,curveMesh:h,flyMesh:f,flyMeshPosition:new l,flyMeshTarget:new l})}flyMeshMove(e,t){let{curve:s,flyMesh:i,flyMeshPosition:a,flyMeshTarget:o}=e,l=.1*t;s.getPointAt(l%1,a),s.getPointAt((l+.01)%1,o),i.position.copy(a),i.lookAt(o)}loadFollowCamera(e){let{flyMesh:t}=e;this.followCamera.removeFromParent(),this.followCamera.position.copy(this.camera.position),t.add(this.followCamera),this.getOnPlane(t),this.followCamera.position.copy(this.followCameraPosition)}updateCameraByFC(){this.camera.position.lerp(this.followCamera.getWorldPosition(new l),1),this.camera.quaternion.slerp(this.followCamera.getWorldQuaternion(new f),1),this.camera.lookAt(this.followTarget.flyMesh.position)}loadPlane(){this.gltfLoader.load("airplanes/microplane.glb",(e=>{this.planeMesh=e.scene,this.planeMesh.position.set(0,0,0),this.planeMesh.scale.set(.6,.6,.6),this.loadFlyLines()}),(e=>{}),(e=>{}))}loadPlayer(){this.gltfLoader.load("Robot.glb",(e=>{this.playerMesh=e.scene,this.playerMesh.position.set(0,0,0),this.playerMesh.scale.set(.3,.3,.3);const{mixer:t,actions:s}=this.ActCtrl.createModelActions("robot",e);this.playerMixer=t,this.playerActions=s,this.playerActions=this.ActCtrl.toggleModelAction(this.playerActions,"wave"),this.scene.add(e.scene)}),(e=>{}),(e=>{}))}getOnPlane(e){this.playerMesh.removeFromParent(),e.add(this.playerMesh),this.playerMesh.position.set(0,.1,0),this.playerActions=this.ActCtrl.toggleModelAction(this.playerActions,"thumbsup")}getOffPlane(){this.playerMesh.removeFromParent(),this.playerMesh.position.set(0,0,0),this.scene.add(this.playerMesh),this.playerActions=this.ActCtrl.toggleModelAction(this.playerActions,"wave")}updatePropeller(e,t){const{flyMesh:s}=e;s.getObjectByName("propeller").rotateZ(1)}update(e,t){this.planeMesh&&this.flyLines.length&&this.flyLines.map((t=>{this.flyMeshMove(t,e),this.updatePropeller(t,e)})),this.isFollowView&&this.followTarget&&this.updateCameraByFC(),this.propellerMesh&&this.updatePropeller(e),this.playerMixer&&this.playerMixer.update(1.5*t)}hide(){}}const F={class:"container",ref:"container"},L=C({__name:"FlyPathLine",setup(e){const t=new b(".container");return M((()=>{t.onMounted(),t.createObject()})),g((()=>{t.hide()})),(e,t)=>(P(),u("div",F,null,512))}},[["__scopeId","data-v-1346b5d6"]]);export{L as default};
