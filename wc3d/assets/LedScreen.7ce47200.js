import{r as e,G as t,K as a,U as n,c as i,a as o,bt as s,by as r,u as l,bz as d,F as h,ao as c,e as u,S as m,m as p,W as w,a7 as g,aD as v,bo as f,aP as y,A as b,D as x,Q as _,a2 as A,o as P,aq as D,p as C,g as k,n as M,M as z,v as I}from"./vendor.d2781f4b.js";import{_ as S}from"./index.8cd03d2e.js";const E=e=>(C("data-v-09e95cd9"),e=e(),k(),e),F={class:"pick"},R=E((()=>o("div",null,"（^_-）",-1))),q=E((()=>o("option",{value:{}},"选择视频",-1))),B=["value"],W=S({__name:"LedScreen",setup(C){let k=null,S=null,E=null,W=e(null),$=null,j=[{name:"我爱你",src:"https://moveharder.github.io/wc3d/videos/iloveu.mp4",width:130,height:350},{name:"赛博人",src:"https://moveharder.github.io/wc3d/videos/cyber.mp4",width:200,height:200},{name:"Bear River",src:"https://moveharder.github.io/wc3d/videos/bear_river.mp4",width:250,height:140},{name:"Song MV",src:"https://moveharder.github.io/wc3d/videos/mv.mp4",width:256,height:144},{name:"烟花秀",src:"https://static.fatiaoya.com/front/believer/resources/videos/firework.mp4",width:250,height:140},{name:"心跳",src:"https://static.fatiaoya.com/front/believer/resources/videos/heart.mp4",width:160,height:200},{name:"美猴王",src:"https://static.fatiaoya.com/front/believer/resources/videos/monkeyking.mp4",width:144,height:256}],G=e({}),H=e(!1),L=null;var T=null,U=null;let V=[],K=new t,Q=0,Z=0;function J(){V.length&&N(),$&&$.update(),E.render(k,S),window.requestAnimationFrame(J)}function N(){new Promise(((e,t)=>{try{const{width:t=0,height:a=0}=L||{};T||((T=document.createElement("canvas")).id="cvideo",T.width=t,T.height=a,T.title="canvas同步视频",U=T.getContext("2d"),T.style.cssText="\n                    position: absolute;\n                    right: 30px;\n                    top: 20px;\n                    border: solid 2px red;\n                "),U.drawImage(L,0,0,t,a),e(U.getImageData(0,0,t,a).data)}catch(a){t({message:"call get_Image_Data error.",error:a})}})).then((e=>{return t=e,new Promise(((e,a)=>{try{let a=[];for(let e=0;e<L.height;e+=4){let n=[];for(let a=0;a<L.width;a+=4){let i=4*(e*L.width+a),o=t[i],s=t[i+1],r=t[i+2];n.push([o,s,r])}a.push(n)}e(a)}catch(n){a({message:"call turnImageData2Pixel error.",err:n})}}));var t})).then((e=>{let t=e.length,a=e[0].length;Q||Z||(Q=t,Z=a,function(e,t,a,n,i=.1,o=null){V=[];let s=t*(a+i)-i,r=e*(n+i)-i,l=new M(a,n);for(let d=0;d<e;d++){let e=[];for(let h=0;h<t;h++){let c=new z(l,new I);o&&c.material.color.setRGB(...o[d][t-1-h]);let u=h*a-s/2+i*h+a/2,m=d*n-r/2+i*d+n/2,p=25.04;c.userData={x:u,y:m,z:p},c.position.set(u,m,p),e.push(c),K.add(c)}V.push(e)}K.position.set(0,30,0),K.rotateZ(-Math.PI),k.add(K)}(Q,Z,.4,.4,.1));let n=Q;for(let i=0;i<n;i++)for(let t=0;t<Z;t++)if(e[i]&&e[i][t]){let[a,n,o]=e[i][Z-1-t],s=`rgb(${a},${n},${o})`;V[i][t].material.color=new A(s)}}))}function O(e=130,t=350,a="https://xxx.com/video.mp4"){L=function({src:e="",loop:t=!0,muted:a=!1,width:n=640,height:i=480,auto_play:o=!1}){const s=document.createElement("video");if(s.id="source_video",s.src=e,s.loop=t,s.setAttribute("webkit-playsinline",!0),s.setAttribute("playsinline",!0),s.setAttribute("crossorigin","anonymous"),s.muted=a,s.width=n,s.height=i,s.style.cssText="\n        position: absolute;\n        left: 20px;\n        top: 20px;\n        z-index:1001;\n    ",o)try{s.play()}catch(r){}return s}({src:a,muted:!1,width:e,height:t});let n=document.querySelector("#source_video");n&&document.body.removeChild(n),document.body.appendChild(L);try{L.play()}catch(i){}J(),ee()}const X=e=>{const{width:a,height:n,src:i}=G.value;Q=0,Z=0;try{K.removeFromParent()}catch(o){}K=new t,V=[],T=null,U=null,Y(),O(a,n,i)},Y=()=>{L&&(L.pause(),L=null)},ee=()=>{H.value=!0,L&&L.play(),N()};return a((()=>{var e,t;!function(){k=new m;const e="#262837";S=new p(75,window.innerWidth/window.innerHeight,.1,500),S.position.set(0,10,100),E=new w({antialias:!0,logarithmicDepthBuffer:!0}),E.setSize(window.innerWidth,window.innerHeight),E.setPixelRatio(Math.max(window.devicePixelRatio,2)),E.shadowMap.enabled=!0,E.shadowMap.type=g,E.physicallyCorrectLights=!0,E.outputEncoding=v,E.setClearColor(e),E.toneMapping=f,k.fog=new y(e,1,400)}(),function(){const e=new b(16777215,2);k.add(e);const t=new x("#ffffff",1.5);t.position.set(-5,20,10),t.castShadow=!0,k.add(t)}(),W&&(e=S,t=W.value,$=new _(e,t),$.enableDamping=!0,$.minDistance=.01,$.target.set(0,20,0),$.enablePan=!1,$.maxPolarAngle=1.5,$.minPolarAngle=1.5,$.minAzimuthAngle=-.5,$.maxAzimuthAngle=.5,W.value.appendChild(E.domElement))})),n((()=>{Y(),V=[],E.dispose(),window.cancelAnimationFrame(J)})),(e,t)=>(P(),i("div",null,[o("div",{class:"container",ref_key:"container",ref:W},null,512),o("div",F,[R,s(o("select",{class:"videolist",onChange:X,"onUpdate:modelValue":t[0]||(t[0]=e=>d(G)?G.value=e:G=e)},[q,(P(!0),i(h,null,c(l(j),((e,t)=>(P(),i("option",{key:t,value:e},D(e.name),9,B)))),128)),u("> ")],544),[[r,l(G)]])])]))}},[["__scopeId","data-v-09e95cd9"]]);export{W as default};
