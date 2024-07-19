var e=Object.defineProperty,t=(t,s,a)=>(((t,s,a)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a})(t,"symbol"!=typeof s?s+"":s,a),a);import{B as s}from"./Base.f46e7956.js";import{a0 as a,m as i,bo as n,aP as o,A as r,D as l,V as c,n as h,bp as d,z as u,C as m,bq as p,br as g,aX as w,a9 as f,aH as b,K as S,U as v,c as y,o as C}from"./vendor.d2781f4b.js";import{C as M}from"./CameraAnimation.f6d1e21f.js";import{_ as P}from"./index.ec5260c9.js";class x extends s{constructor(e){super(e),t(this,"groundMesh"),t(this,"playerMesh"),t(this,"water"),t(this,"sun"),t(this,"sky"),t(this,"bgSound",null),t(this,"gltfLoader",null),t(this,"rgbLoader",new a)}init(){this.createCamera(),super.createOrbitControls(),this.setupControls(),this.addListeners()}createCamera(){this.camera=new i(55,this.width/this.height,1,2e4),this.camera.position.set(0,1e3,1e3),this.renderer.toneMapping=n;const e="#ffffff";this.renderer.setClearColor(e),this.scene.fog=new o(e,1,3e3)}setupControls(){this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.controls.maxPolarAngle=1.5,this.controls.minDistance=50,this.controls.maxDistance=1200}createLight(){const e=new r(16777215,.8);this.scene.add(e);const t=new l(16777215,1);t.color.setHSL(.1,1,.95),t.position.set(-1,1.75,1),t.position.multiplyScalar(30),this.scene.add(t)}createObject(){this.createSun(),this.createWater(),this.createSky(),this.loadMainModel()}createSun(){this.sun=new c}createWater(){const e=new h(1e4,1e4),t=new d(e,{textureWidth:512,textureHeight:512,waterNormals:(new u).setPath(this.publicPath.texture).load("water_normals.jpg",(e=>{e.wrapS=e.wrapT=m})),sunDirection:this.sun,sunColor:16711680,waterColor:29439,distortionScale:4,fog:void 0!==this.scene.fog});t.rotation.x=-Math.PI/2,t.position.y=1,this.water=t,this.scene.add(t)}createSky(){const e=new p;e.scale.setScalar(1e4),this.scene.add(e);const t=e.material.uniforms;t.turbidity.value=20,t.rayleigh.value=2,t.mieCoefficient.value=.005,t.mieDirectionalG.value=.8;const s=this.sun,a=new g(this.renderer),i=w.degToRad(88),n=w.degToRad(190);s.setFromSphericalCoords(1,i,n),e.material.uniforms.sunPosition.value.copy(s),this.water.material.uniforms.sunDirection.value.copy(s).normalize(),this.scene.environment=a.fromScene(e).texture}loadMainModel(){const e=new b;e.onProgress=async(e,t,s)=>{100===Math.floor(t/s*100)?(this.loadingProcess=Math.floor(t/s*100),M.animate({camera:this.camera,controls:this.controls,newCameraPosition:{x:0,y:40,z:140},newControlsTarget:{x:0,y:0,z:0},duration:2})):this.loadingProcess=Math.floor(t/s*100)},this.gltfLoader=new f(e).setPath(this.publicPath.model),this.gltfLoader.load("island/island.glb",(e=>{this.groundMesh=e.scene,this.groundMesh.position.set(0,0,0),this.groundMesh.scale.set(30,30,30),this.scene.add(e.scene),e.scene.traverse((e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.metalness=.4,e.material.roughness=.6)}))}),(e=>{}),(e=>{}))}addListeners(){window.addEventListener("click",this.playBgSound.bind(this))}playBgSound(){const e=new Audio("sounds/game/Ambient.m4a");e.volume=.2,e.currentTime=0,e.loop=!0,e.paused&&e.play(),this.bgSound=e}update(e,t){this.water&&(this.water.material.uniforms.time.value+=1/60)}hide(){this.bgSound&&!this.bgSound.paused&&this.bgSound.pause(),window.removeEventListener("click",this.playBgSound)}}const L={class:"container",ref:"container"},j=P({__name:"WaterView",setup(e){const t=new x(".container");return S((()=>{t.onMounted(),t.createObject()})),v((()=>{t.onUnmounted()})),(e,t)=>(C(),y("div",L,null,512))}},[["__scopeId","data-v-c1378aad"]]);export{j as default};
