var e=Object.defineProperty,t=(t,a,i)=>(((t,a,i)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i})(t,"symbol"!=typeof a?a+"":a,i),i);import{$ as a,S as i,m as s,W as o,a7 as n,Q as r,A as l,D as c,af as d,ag as h,X as u,aH as m,a9 as p,a0 as y,ac as w,z as g,a$ as b,aG as A,an as f,M as E,x as v,q as _,C as B,b7 as x,G as k,aM as S,b9 as F,ba as C,bc as D,bF as M,s as L,t as q,a2 as j,bG as P,a1 as I,ad as T,ae as O,bH as H,a4 as R,r as V,K as z,U,c as G,a as Q,F as N,ao as W,u as $,w as Y,ap as X,b as K,d as J,bz as Z,bI as ee,bJ as te,o as ae,aq as ie,e as se,p as oe,g as ne,bK as re}from"./vendor.d2781f4b.js";import{S as le}from"./SoundControl.48b26f99.js";import{M as ce}from"./modelActionControl.e6c0dc48.js";import{e as de}from"./common.9712fc3c.js";import{_ as he}from"./index.40bc08d4.js";class ue{constructor(e){t(this,"width",window.innerWidth),t(this,"height",window.innerHeight),t(this,"loadingProcess",0),t(this,"sceneReady",!1),t(this,"containerSelector",null),t(this,"container",null),t(this,"scene",null),t(this,"camera",null),t(this,"renderer",null),t(this,"controls",null),t(this,"ground",null),t(this,"stats",null),t(this,"clock",new a),t(this,"oldElapsedTime",0),t(this,"publicPath",{model:"https://static.fatiaoya.com/front/believer/resources/models/",hdr:"hdr/",image:"images/",texture:"images/texture/",sound:"sounds/"}),this.containerSelector=e,this.initTHREE(),window.onerror=e=>{}}initTHREE(){const e=new i,t=new s(75,window.innerWidth/window.innerHeight,.1,500);t.position.set(0,6,12),t.lookAt(0,0,0);const a=new o({antialias:!0,logarithmicDepthBuffer:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio),a.shadowMap.enabled=!0,a.shadowMap.type=n,a.physicallyCorrectLights=!0,this.scene=e,this.camera=t,this.renderer=a,this.createLight(),this.initStats()}createOrbitControls(){let e=new r(this.camera,this.container);e.enableDamping=!0,e.minDistance=.01,this.controls=e}createLight(){const e=new l(16777215,2);this.scene.add(e);const t=new c("#ffffff",1.5);t.position.set(-5,20,10),t.castShadow=!0,this.scene.add(t)}addHelpers(){this.createAxesHelper(),this.createGridHelper()}createAxesHelper(e=1e3){this.scene.add(new d(e))}createGridHelper(e=320,t=32,a,i){this.scene.add(new h(e,t))}createObject(){}createLoadingManager(){const e=new m;e.onProgress=async(e,t,a)=>{100===Math.floor(t/a*100)?(this.loadingProcess=Math.floor(t/a*100),this.sceneReady=!0):this.loadingProcess=Math.floor(t/a*100)},this.loadingManager=e}initStats(){this.stats=new u,this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)}onResize(){window.addEventListener("resize",(()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}))}animate(){const{scene:e,camera:t,renderer:a,clock:i,oldElapsedTime:s}=this,o=i.getElapsedTime(),n=o-s;this.oldElapsedTime=o,this.stats&&this.stats.update(),this.update&&this.update(o,n),this.controls&&this.controls.update(),a.render(e,t),window.requestAnimationFrame(this.animate.bind(this))}onMounted(){this.container=document.querySelector(this.containerSelector),this.container.appendChild(this.renderer.domElement),this.init&&this.init(),this.onResize(),this.animate()}onUnmounted(){this.hide&&this.hide()}}class me extends ue{constructor(e){super(e),t(this,"gltfLoader",(new p).setPath("https://static.fatiaoya.com/AI_customer_service/models/")),t(this,"rgbLoader",(new y).setPath(this.publicPath.hdr)),t(this,"fbxLoader",(new w).setPath("https://static.fatiaoya.com/AI_customer_service/models/")),t(this,"textureLoader",(new g).setPath(this.publicPath.texture)),t(this,"ftduckTextureLoader",(new g).setPath("https://static.fatiaoya.com/AI_customer_service/env/")),this.morphValue1=0,this.morphValue2=1}init(){this.renderer.setClearColor("#fdd003"),this.camera=new s(75,this.width/this.height,.01,1e3),this.camera.position.set(0,0,10),this.createOrbitControls(),this.setupControls(),this.addListeners(),this.createObject()}addListeners(){window.addEventListener("click",this.handleClick.bind(this))}setupControls(){this.controls.target.set(0,1,0),this.controls.enableDamping=!0,this.controls.enablePan=!1}useAction(e){return[value,updateValue]}loadAudios(e){this.soundCtrl=new le(this.camera);let t=[];e.map((e=>{t.push((()=>this.soundCtrl.easyLoad(!1,{name:e.name,url:e.url,onEnd:()=>{}})))})),de(t,2).then((e=>{this.soundLoaded=!0})).catch((e=>{}))}async loadAudio(e,t){await this.soundCtrl.loadFromUrl(e,t,!1,1,!1)}createObject(){this.loadHdrBg(),this.create360Box(),this.ActCtrl=new ce(this),this.createGround(),this.loadFTYModel()}createMorphObject(){var e=new b(2,2,2),t=new A({morphTargets:!0,color:16711680}),a=new b(2,10,2),i=new b(8,2,8);e.morphAttributes.position=[new f(i.attributes.position.array,3),new f(a.attributes.position.array,3)],this.cube=new E(e,t),this.scene.add(this.cube)}createGround(e=3){let t=new v(4*e,.2*e,4*e),a=new _({color:16119285}),i=new E(t,a);i.receiveShadow=!0,i.position.set(0,-2.25,0);let s=this.textureLoader.load("chair/wood_.jpg");s.repeat.set(3,3,3),s.wrapS=B,s.wrapT=B;const o=new x(2.5*e,2.5*e,.7*e,6),n=new _({map:s,flatShading:!0});let r=new E(o,n);r.receiveShadow=!0,r.position.set(0,-3,-1),this.scene.add(r)}createAudioGraph(){var e=new k;for(let n=0;n<64;n++){var t=new v(.05,1,.2),a=new S({color:255}),i=new E(t,a);i.position.set(n/10,0,0),e.add(i)}e.position.set(0,2,0),this.audioFrequencyGroup=e,this.scene.add(this.audioFrequencyGroup);var s=new F,o=new C(s);(new D).load("https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E6%80%8E%E4%B9%88%E6%94%B6%E8%B4%B9.mp3",(e=>{o.setBuffer(e),o.setLoop(!1),o.setVolume(.5),o.play(),this.analyser=new M(o,1024)}))}updateAudioGraph(){if(this.analyser){var e=this.analyser.getFrequencyData();this.audioFrequencyGroup.children.forEach(((t,a)=>{t.scale.y=e[a]/100,t.material.color.r=e[a]/200}))}}soundAmt(){const e=new(window.AudioContext||window.webkitAudioContext),t=document.querySelector("audio");t.crossOrigin="anonymous",t.volume=1,t.muted=!1,t.play();const a=e.createMediaElementSource(t),i=e.createAnalyser();i.fftSize=2048,a.connect(i);const s=document.querySelector("canvas"),o=s.getContext("2d");o.translate(s.width/2,s.height),o.scale(1,-1),function e(){const t=new Uint8Array(i.frequencyBinCount);i.getByteFrequencyData(t),o.clearRect(0,0,s.width,s.height),o.lineWidth=2,o.strokeStyle="#84019a",o.beginPath();const a=1*s.width/t.length;let n=0;for(let i=0;i<t.length;i++){const e=t[i]/128*s.height/2;0===i?o.moveTo(n,e):o.lineTo(n,e),n+=a}o.stroke(),requestAnimationFrame(e)}()}setBgImgUrl(){return"ftduck_env.jpg"}loadHdrBg(){this.scene.background=this.ftduckTextureLoader.load(this.setBgImgUrl())}create360Box(){let e=new _({map:this.ftduckTextureLoader.load(this.setBgImgUrl()),side:L}),t=new q(50,32,32),a=new E(t,e);a.position.set(0,10,0),a.geometry.scale(1,1,-1),this.scene.add(a),this.bgMesh=a}loadMainModel(){this.gltfLoader.load("Robot.glb",(e=>{this.model=e.scene,this.model.position.set(0,0,0),this.model.scale.set(1,1,1),this.scene.add(e.scene);let t=this.model.getObjectByName("Head_4");Object.keys(t.morphTargetDictionary);e.scene.traverse((e=>{e.isMesh&&"HandR_1"==e.name&&(e.material.color=new j(16633856))}));let{mixer:a,actions:i}=this.ActCtrl.createModelActions("robot",e,(e=>{this.onAmtFinished()}));for(let s in i)"idle"!=s&&i[s]&&(i[s].clampWhenFinished=!0,i[s].loop=P);this.playerMixer=a,this.playerActions=i,this.playerActions=this.ActCtrl.toggleModelAction(this.playerActions,"idle")}),(e=>{}),(e=>{}))}loadFTYModel(){this.gltfLoader.load("ftduck07.gltf",(e=>{this.model=e.scene,this.model.scale.set(1,1,1),this.model.position.set(0,-2,0),this.scene.add(e.scene),this.duckTalk(this.model),this.duckBlink(this.model),this.duckFatiao(this.model),this.duckArm(this.model,"手01"),this.duckFoot(this.model,"脚板02",{y:.3}),this.model.traverse((e=>{e.isMesh&&(e.castShadow=!0)}))}),(e=>{}),(e=>{}))}duckTalk(e,t="嘴巴"){let a=e.getObjectByName(t);return I.to(a.scale,{x:1.1,y:.8,z:.95,duration:.2,repeat:-1,yoyo:!0,ease:"power2"})}duckBlink(e,t="眼睛"){let a=e.getObjectByName(t);I.to(a.scale,{x:.8,y:1.15,z:1.02,duration:.4,delay:1,repeat:-1,yoyo:!0,ease:"power2"})}duckFatiao(e,t="发条01"){let a=e.getObjectByName(t);I.to({y:0},{y:2*Math.PI,duration:10,repeat:-1,ease:"linear",onUpdate:()=>{a.rotateY(+Math.random()/10)}})}duckArm(e,t="手01"){let a=e.getObjectByName(t);I.to(a.rotation,{x:-1.5,z:-.5,duration:1,repeat:-1,yoyo:!0,ease:"power2.out"})}duckFoot(e,t="脚板01",a={y:-.3}){let i=e.getObjectByName(t);I.to(i.rotation,{...a,duration:1,repeat:-1,yoyo:!0,ease:"power2.out"})}loadHXYModel(){this.fbxLoader.load("数字人/hangxiaoyi.fbx",(e=>{this.model=e,this.model.position.set(-.8,1,0),this.model.scale.set(.015,.015,.015),this.model.rotateY(Math.PI/7),this.scene.add(this.model),this.expressionsControl(this.model)}),(e=>{}),(e=>console.error))}loadFBXDuck(){this.fbxLoader.load("ftduck02.fbx",(e=>{this.model=e,this.model.position.set(0,0,-10),this.scene.add(this.model)}),(e=>{}),(e=>console.error))}expressionsControl(e){this.playerMixer=new T(e);let t=O.subclip(e.animations[1],"talk",0,5e3);this.playerMixer.clipAction(t).play();let a=e.getObjectByName("dead");const i=a.morphTargetInfluences,s=(Object.keys(a.morphTargetDictionary),new H);s.close();for(const[o,n]of Object.entries(a.morphTargetDictionary))s.add(i,n,0,1,.01).name(o.replace("blendShape1.","")).listen(i),I.to(a.morphTargetInfluences,{[n]:.3,duration:Math.random(),repeat:-1,yoyo:!0})}onAmtFinished(e){this.playerActions=this.ActCtrl.toggleModelAction(this.playerActions,"idle")}playUserAnimate(e){Array.isArray(e)?this.ActCtrl.playActionQueue(this.playerActions,e,(e=>this.onAmtFinished(e))):this.playerActions=this.ActCtrl.toggleModelAction(this.playerActions,e)}handleClick(e){let t=new R;t.x=e.clientX/window.innerWidth*2-1,t.y=-e.clientY/window.innerHeight*2+1}update(e,t){this.playerMixer&&this.playerMixer.update(2*t),this.model,this.bgMesh&&this.bgMesh.rotateY(.001),this.morphValue2-=.005,this.cube&&(this.cube.morphTargetInfluences[0]=this.morphValue1,this.cube.morphTargetInfluences[1]=this.morphValue2,this.morphValue1>1&&(this.morphValue1=0),this.morphValue2<=0&&(this.morphValue2=1)),this.updateAudioGraph()}hide(){window.removeEventListener("click",this.handleClick)}}class pe{constructor({rootSelector:e="",prefix:t="",duration:a=60,autoScroll:i=!0}){if(this.globalRootSelector=e,this.globalAutoScroll=i,this.globalPrefix=t||"",this.globalDuration=a,this.insertDefaultStyles(),!e)throw new Error("未指定的根结点[rootSelector] （.tagname or #tagname）")}insertDefaultStyles(){document.styleSheets[0].insertRule("@-webkit-keyframes believer_terminalprinter_typing_amt {\n            0%,\n            100% {\n                color: rgba(255, 255, 255, 0.9);\n            }\n    \n            50% {\n                color: transparent;\n            }\n            }",0),document.styleSheets[0].insertRule("@keyframes believer_terminalprinter_typing_amt {\n            0%,\n            100% {\n                color: rgba(255, 255, 255, 0.9);\n            }\n    \n            50% {\n                color: transparent;\n            }\n            }",0),document.styleSheets[0].insertRule("\n          .believer_terminalprinter_actor {\n              position: relative;\n              display: block;\n              line-height: 100%;\n              text-align: left;\n              width: auto;\n              padding: 10px 0;\n              font-family: Monaco, Menlo, 'Courier New', monospace, sans-serif, \"Arial\";\n              color: black;\n              font-size: 14px;\n              white-space: pre-line;\n          }\n          ",0),document.styleSheets[0].insertRule("\n          .believer_terminalprinter_on_typing_tail {\n              display: none;\n              width: 5px;\n              height: 12px;\n              margin-bottom: -2px;\n              margin-left: 3px;\n              background-color: rgba(255, 255, 255, 0.8);\n          }\n          "),document.styleSheets[0].insertRule("\n          .believer_terminalprinter_on_typing_tail_active {\n              display: inline-block !important;\n              animation: believer_terminalprinter_typing_amt 0.2s steps(1) infinite;\n            }\n          ")}async linePrint({rootSelector:e,lineSelector:t,word:a,hasOnTypingStyle:i=!0,prefix:s="",duration:o,lineStyleObject:n={},tagName:r="code",onLineStart:l=null,onLinePrint:c=null,onLineFinished:d=null}){let h=document.querySelector(e);if(!h)throw new Error("未找到指定的根结点[rootSelector]元素");let u=document.querySelector(t);u||(u=document.createElement(r),u.classList.add("believer_terminalprinter_actor"),h.appendChild(u));let m=null;i&&(m=document.createElement("span"),m.innerText="",m.classList.add("believer_terminalprinter_on_typing_tail"),m.classList.add("believer_terminalprinter_on_typing_tail_active")),t&&t.startsWith(".")&&u.classList.add(t.replace(/./,""));for(const w in n)Object.hasOwnProperty.call(n,w)&&(u.style[w]=n[w]);const p=()=>{this.globalAutoScroll&&u.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},y=()=>{i&&(u.classList.contains("believer_terminalprinter_on_typing")&&u.classList.remove("believer_terminalprinter_on_typing"),m.classList.remove("believer_terminalprinter_on_typing_tail_active"))};return new Promise((async e=>{let t=a.length,i="";l&&l(),p();for(let n=0;n<t;n++){if(this.canceled)return y(),e("user canceled!");i=a.substring(0,n+1),u.innerHTML=`${s||this.globalPrefix} ${i}`,u.appendChild(m),c&&c(u),p(),await this.sleep(null!=o?o:this.globalDuration)}y(),d&&d(),p(),e(a)}))}run(e){if(this.free(),!document.querySelector(this.globalRootSelector))throw new Error("未找到指定的根结点[rootSelector]元素");return new Promise((async t=>{for(let a=0;a<e.length;a++){if(this.canceled)return t("user canceled!");e[a].rootSelector||(e[a].rootSelector=this.globalRootSelector),await this.linePrint(e[a])}t("words print completed!")}))}sleep(e=1e3){return new Promise((t=>{setTimeout((()=>{t(e)}),e)}))}free(){this.canceled=!1}async stop(){this.canceled=!0,await this.sleep(300)}}const ye=(e=>(oe("data-v-39fab921"),e=e(),ne(),e))((()=>Q("div",{class:"chatboard"}," 想了解发条鸭的哪些方面呢？ ",-1))),we=["onClick"],ge=he({__name:"AudioAICustomerService",setup(e){let t=V(!1),a=V(!1),i=V(!1),s=V(!1),o=V(!1),n=V(""),r=V("回答内容显示在这里..."),l=V("a Super cute sports boy wearing a diving suit,big eyes,whole body,clean bright and undersea world background,dreamy,excited,lP by pop mart,high detail,hyper quality, Bright color, mockup blind box toy, disney style,fine luster,3D render, oc render,best quality,8kbrightfront lighting,Face Shotfine luster,ultra detoiled --ar 3:4"),c=V(""),d=V(!1),h=new pe({rootSelector:".chatboard",prefix:"[ fatiaoya ]",duration:30});const u=new me(".container");let m=V(null),p=V([{name:"怎么收费",q:"请问怎么收费？",a:"来得少，可以按次付费，不浪费；来得多，可以办169元小鸭月卡，超划算。不限运动时长哦~",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E6%80%8E%E4%B9%88%E6%94%B6%E8%B4%B9.mp3",action:[{name:"thumbsup",delay:0},{name:"wave",delay:2e3},{name:"dance",delay:2e3},{name:"jump",delay:2e3}]},{name:"临时出去",q:"如果临时出去一下，回来还要再收一次费吗？",a:"出门不超过15分钟，再次进场时是免费的。",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E4%B8%B4%E6%97%B6%E5%87%BA%E5%8E%BB.mp3",action:"walking"},{name:"不满10分钟",q:"进场不满10分钟就走了，怎么退款？",a:"若您使用微信小程序进场的话，系统会自动退款。（离场后1小时完成退款） \n若您使用团购券进场的话，请在【美团/点评app】-【我的订单】中申请退款。",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E4%B8%8D%E6%BB%A110%E5%88%86%E9%92%9F.mp3",action:[{name:"thumbsup",delay:0},{name:"wave",delay:2e3},{name:"dance",delay:2e3},{name:"jump",delay:2e3}]},{name:"有什么器械",q:"店里边有什么器械？如果不会用怎么办？",a:"有氧器械包括跑步机、划船机、椭圆机、单车，无氧区域以插片式器械为主，配套齐全。\n器械上都贴有使用方法，您可以扫码观看使用视频。 为了安全考虑，我们没有配备杠铃等自由重训器械。 如果还是不能解决你的问题，请添加页面上方的客服微信联系我们喔～",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E6%9C%89%E4%BB%80%E4%B9%88%E5%99%A8%E6%A2%B0.mp3",action:[{name:"thumbsup",delay:0},{name:"wave",delay:2e3},{name:"dance",delay:2e3},{name:"jump",delay:2e3}]},{name:"淋浴间、卫生间",q:"有没有淋浴间、卫生间和更衣室？",a:"有更衣室的。 但是出于安全隐患以及卫生情况的考虑，没有设置淋浴间和卫生间。 店内洗手池上方有最近的厕所路线图，若您中途外出上厕所，15分钟内再次进场是不收费的。",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E6%B7%8B%E6%B5%B4%E9%97%B4%E3%80%81%E5%8D%AB%E7%94%9F%E9%97%B4.mp3",action:[{name:"thumbsup",delay:0},{name:"wave",delay:2e3},{name:"dance",delay:2e3},{name:"jump",delay:2e3}]},{name:"怎么扫码入场",q:"怎么扫码入场？",a:"闸机两侧的外墙上有小程序码，扫码后点击【开门按钮】即可进场哦~",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E6%80%8E%E4%B9%88%E6%89%AB%E7%A0%81%E5%85%A5%E5%9C%BA.mp3",action:"jump"},{name:"团购券",q:"团购券怎么用？",a:"团购需先自助核销后才可以使用。 小程序上点击【用团购券进场】，输入团购券码，成功后就可以进场了。 闸机上也贴有【团购券怎么用】的指引，您也可以看一下。",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E5%9B%A2%E8%B4%AD%E5%88%B8.mp3",action:"wave"},{name:"禁止行为",q:"发条鸭禁止哪些行为？",a:"禁止夹带，一人一码。 禁止吸烟，禁止宠物。 禁止赤膊，禁止吼叫。",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E7%A6%81%E6%AD%A2%E8%A1%8C%E4%B8%BA.mp3",action:"no"},{name:"有什么活动",q:"目前发条鸭有什么活动呢？",a:"你好鸭～现在可以办理小鸭月卡，原价199元，现春日特惠169元，可跨店通用哦～ 【开通方法】打开微信小程序-发条鸭无人健身房，在“我的”界面中进行开通哦～",url:"https://static.fatiaoya.com/AI_customer_service/%E5%8F%91%E6%9D%A1%E9%B8%ADQA%E8%AF%AD%E9%9F%B3/%E6%9C%89%E4%BB%80%E4%B9%88%E6%B4%BB%E5%8A%A8.mp3",action:"yes"}]);u.loadAudios(p.value);const y=async e=>{u.soundCtrl.stopAll(),e.name&&u.soundCtrl.play(e.name);let t=[{lineSelector:`.line_${+new Date}_${Math.floor(1e3*Math.random())}`,tagName:"pre",prefix:"你: ",word:e.q,lineStyleObject:{fontSize:"12px",color:"#fdd000"}},{lineSelector:`.line_${+new Date}_${Math.floor(1e3*Math.random())}`,tagName:"pre",prefix:"小鸭头: ",word:e.a,duration:160,lineStyleObject:{fontSize:"12px",color:"aqua"}}];d.value&&await h.stop();let a=u.duckTalk(u.model);d.value=!0,h.run(t).then((e=>{d.value=!1,a.kill()}))},w=e=>{switch(e){case"chat":t.value=!0;break;case"image":a.value=!0;break;case"service":i.value=!0}},g=()=>{ee("click-overlay")},b=()=>{ee("click-close-icon")},A=async()=>{if(!n.value)return void ee("你想问什么？");let e=await E(n.value);r.value=e.data.data,v(r.value)},f=async()=>{if(!l.value)return void ee("你想画什么？");let e=await _(l.value);c.value=e.data,B()},E=e=>{s.value=!0;let t=[{role:"user",content:e}];return re.post("https://ai.fatiaoya.com/openai/ftyaichatsdk",{messages:t})},v=e=>{re.post("https://testnode.ninainfo.cn/node/tts/texttospeech",{text:e}).then((async e=>{const{data:t}=e.data;await u.loadAudio(t.key,t.url),B(),y({name:t.key,q:n.value,a:r.value})})).catch((e=>{ee(e.message||"tts失败"),B(),y({name:"",q:n.value,a:r.value})})).finally((()=>{n.value=""}))},_=async e=>(o.value=!0,re.post("https://ai.fatiaoya.com/openai/image",{q:e})),B=()=>{s.value=!1,t.value=!1,o.value=!1,a.value=!1};return z((()=>{u.onMounted()})),U((()=>{u.onUnmounted()})),(e,i)=>{const r=te("van-field"),d=te("van-button"),h=te("van-popup");return ae(),G(N,null,[ye,Q("div",{class:"questions f_r_s_s",style:X(`background-image:url(${$(c)})`)},[(ae(!0),G(N,null,W($(p),((e,t)=>(ae(),G("div",{key:e,class:"audio_item",onClick:Y((t=>y(e)),["prevent"])},ie(e.name),9,we)))),128)),Q("div",{class:"audio_item ask_item",onClick:i[0]||(i[0]=Y((e=>w("chat")),["prevent"]))},"我想问·AI"),Q("div",{class:"audio_item image_item",onClick:i[1]||(i[1]=Y((e=>w("image")),["prevent"]))},"换背景"),Q("div",{class:"audio_item service_item",onClick:i[2]||(i[2]=Y((e=>w("service")),["prevent"]))},"联系客服")],4),K(h,{show:$(t),"onUpdate:show":i[4]||(i[4]=e=>Z(t)?t.value=e:t=e),position:"bottom",style:{height:"300px",padding:"15px"},closeable:"",onClickOverlay:g,onClickCloseIcon:b},{default:J((()=>[K(r,{modelValue:$(n),"onUpdate:modelValue":i[3]||(i[3]=e=>Z(n)?n.value=e:n=e),style:{border:"solid 2px #ccc","border-radius":"8px","margin-top":"35px"},rows:"4",type:"textarea",maxlength:"100",placeholder:"请输入问题描述","show-word-limit":""},null,8,["modelValue"]),K(d,{loading:$(s),type:"success","loading-text":"正在思考...",style:{position:"absolute",bottom:"20px",width:"calc(100% - 30px)"},onClick:A},{default:J((()=>[se("发送问题")])),_:1},8,["loading"])])),_:1},8,["show"]),K(h,{show:$(a),"onUpdate:show":i[6]||(i[6]=e=>Z(a)?a.value=e:a=e),position:"bottom",style:{height:"300px",padding:"15px"},closeable:"",onClickOverlay:g,onClickCloseIcon:b},{default:J((()=>[K(r,{modelValue:$(l),"onUpdate:modelValue":i[5]||(i[5]=e=>Z(l)?l.value=e:l=e),style:{border:"solid 2px #ccc","border-radius":"8px","margin-top":"35px"},rows:"4",type:"textarea",maxlength:"500",placeholder:"请输入图片描述","show-word-limit":""},null,8,["modelValue"]),K(d,{loading:$(o),type:"success","loading-text":"正在创作...",style:{position:"absolute",bottom:"20px",width:"calc(100% - 30px)"},onClick:f},{default:J((()=>[se("开始创作")])),_:1},8,["loading"])])),_:1},8,["show"]),Q("div",{class:"container",ref_key:"container",ref:m},null,512)],64)}}},[["__scopeId","data-v-39fab921"]]);export{ge as default};
