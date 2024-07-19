import{c as e,a as t,w as o,b as a,d as n,u as r,F as s,o as i,e as _,R as l,f as c,p as m,g as p,h as d,i as u,j as h,k as f,B as E,P as g,l as v,T as P,N as w}from"./vendor.d2781f4b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const y=(e,t)=>{const o=e.__vccOpts||e;for(const[a,n]of t)o[a]=n;return o},L=e=>(m("data-v-02e9ca9d"),e=e(),p(),e),b=L((()=>t("h4",null,"demos",-1))),V=L((()=>t("h4",null,"全景视图",-1))),I=L((()=>t("h4",null,"物体移动",-1))),A=L((()=>t("h4",null,"物理世界",-1))),O=L((()=>t("h4",null,"美如画",-1))),R=L((()=>t("h4",null,"小玩意儿",-1))),T=y({__name:"App",setup(m){const p=()=>{};return(m,d)=>(i(),e(s,null,[t("header",null,[t("nav",{onClick:o(p,["prevent"])},[b,a(r(l),{to:"/led_screen"},{default:n((()=>[_("led_screen")])),_:1}),a(r(l),{to:"/quickstart"},{default:n((()=>[_("quickstart")])),_:1}),a(r(l),{to:"/loadmodel"},{default:n((()=>[_("加载模型")])),_:1}),V,a(r(l),{to:"/360"},{default:n((()=>[_("360")])),_:1}),a(r(l),{to:"/vrhouse"},{default:n((()=>[_("VR看房")])),_:1}),a(r(l),{to:"/coolwebpage"},{default:n((()=>[_("🕸️3D.Web")])),_:1}),I,a(r(l),{to:"/ghouse"},{default:n((()=>[_("鬼屋NPC")])),_:1}),a(r(l),{to:"/xpersonview"},{default:n((()=>[_("第一人称视角")])),_:1}),a(r(l),{to:"/godviewmove"},{default:n((()=>[_("上帝视角")])),_:1}),a(r(l),{to:"/thirdpersonmove"},{default:n((()=>[_("第三人称视角")])),_:1}),a(r(l),{to:"/visit2023"},{default:n((()=>[_("沉浸式场馆")])),_:1}),a(r(l),{to:"/planegame"},{default:n((()=>[_("✈️小飞机")])),_:1}),a(r(l),{to:"/flypathline"},{default:n((()=>[_("飞跃前线")])),_:1}),A,a(r(l),{to:"/gravityball"},{default:n((()=>[_("重力弹球")])),_:1}),a(r(l),{to:"/hingethings"},{default:n((()=>[_("铰链物体")])),_:1}),a(r(l),{to:"/shotsoccer"},{default:n((()=>[_("⚽️点球")])),_:1}),a(r(l),{to:"/cargame"},{default:n((()=>[_("🏎️赛车")])),_:1}),a(r(l),{to:"/infinitygame"},{default:n((()=>[_("🌍小世界")])),_:1}),O,a(r(l),{to:"waterview"},{default:n((()=>[_("🏖水天一色小岛")])),_:1}),a(r(l),{to:"citylightshow"},{default:n((()=>[_("🏠城市灯光秀")])),_:1}),R,a(r(l),{to:"pathsearch"},{default:n((()=>[_("🎲移动迷宫")])),_:1}),a(r(l),{to:"modeldiy"},{default:n((()=>[_("🪞模型外观自定义")])),_:1}),a(r(l),{to:"audioaics"},{default:n((()=>[_("数字客服")])),_:1})])]),a(r(c))],64))}},[["__scopeId","data-v-02e9ca9d"]]),j={},D=function(e,t,o){if(!t||0===t.length)return e();const a=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/wc3d/"+e}(e))in j)return;j[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(!!o)for(let o=a.length-1;o>=0;o--){const n=a[o];if(n.href===e&&(!t||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((t,o)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},k=()=>D((()=>import("./CoolWebpage.ad9cfb75.js")),["assets/CoolWebpage.ad9cfb75.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/CoolWebpage.cd02fca7.css"]),S=[{path:"/",name:"home.coolwebpage",component:k},{path:"/quickstart",name:"quickstart",component:()=>D((()=>import("./QuickStart.4bc35ee2.js")),["assets/QuickStart.4bc35ee2.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/const.dd63a052.js","assets/QuickStart.ce5e744a.css"])},{path:"/vrhouse",name:"vrhouse",component:()=>D((()=>import("./VRHouseView.c83cc64b.js")),["assets/VRHouseView.c83cc64b.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/CameraAnimation.f6d1e21f.js","assets/VRHouseView.7b400853.css"])},{path:"/360",name:"360",component:()=>D((()=>import("./360View.106304dc.js")),["assets/360View.106304dc.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/const.dd63a052.js","assets/360View.96a91b70.css"])},{path:"/coolwebpage",name:"coolwebpage",component:k},{path:"/loadmodel",name:"loadmodel",component:()=>D((()=>import("./LoadModel.4f619bab.js")),["assets/LoadModel.4f619bab.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/const.dd63a052.js","assets/LoadModel.39b382ac.css"])},{path:"/rrweb",name:"rrweb",component:()=>D((()=>import("./rrweb.f2854390.js")),["assets/rrweb.f2854390.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/rrweb.0bd19011.css"])}],C=[{path:"/visit2023",name:"visit2023",component:()=>D((()=>import("./Visit2023.fa1f668f.js")),["assets/Visit2023.fa1f668f.js","assets/Base.f46e7956.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/JoyStick.9d2b5199.js","assets/common.9712fc3c.js","assets/Visit2023.a89871ab.css"])},{path:"/ghouse",name:"ghost_house",component:()=>D((()=>import("./GhostHouse.4456de53.js")),["assets/GhostHouse.4456de53.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/MoveAndTurnControl.f44fdd62.js","assets/GhostHouse.a84cecc5.css"])},{path:"/xpersonview",name:"xpersonview",component:()=>D((()=>import("./XPersonView.1f9704d8.js")),["assets/XPersonView.1f9704d8.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/XPersonView.6240bfb6.css"])},{path:"/godviewmove",name:"godviewmove",component:()=>D((()=>import("./GodViewMove.ae88a21e.js")),["assets/GodViewMove.ae88a21e.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/MoveAndTurnControl.f44fdd62.js","assets/ClickAnchorRender.c5feb3b6.js","assets/const.dd63a052.js","assets/GodViewMove.8655ec0d.css"])},{path:"/thirdpersonmove",name:"thirdpersonmove",component:()=>D((()=>import("./ThirdPersonMove.826acb25.js")),["assets/ThirdPersonMove.826acb25.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/MoveAndTurnControl.f44fdd62.js","assets/ClickAnchorRender.c5feb3b6.js","assets/const.dd63a052.js","assets/ThirdPersonMove.aa8d9a57.css"])},{path:"/planegame",name:"planegame",component:()=>D((()=>import("./PlaneGame.4c74c0f8.js")),["assets/PlaneGame.4c74c0f8.js","assets/Base.f46e7956.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/PlaneGame.034afcef.css"])},{path:"/flypathline",name:"flypathline",component:()=>D((()=>import("./FlyPathLine.f8d9f58e.js")),["assets/FlyPathLine.f8d9f58e.js","assets/Base.f46e7956.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/modelActionControl.e6c0dc48.js","assets/FlyPathLine.7eeae775.css"])}],q=[{path:"/gravityball",name:"gravity_ball",component:()=>D((()=>import("./GravityWorld.48010260.js")),["assets/GravityWorld.48010260.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/GravityWorld.d211a7e8.css"])},{path:"/shotsoccer",name:"shotsoccer",component:()=>D((()=>import("./ShotSoccer.ff9b9bfc.js")),["assets/ShotSoccer.ff9b9bfc.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/Base.f46e7956.js","assets/SoundControl.48b26f99.js","assets/CameraAnimation.f6d1e21f.js","assets/ShotSoccer.4a113b79.css"])},{path:"/hingethings",name:"hingethings",component:()=>D((()=>import("./HingeWorld.a1ac7503.js")),["assets/HingeWorld.a1ac7503.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/HingeWorld.1ec0b606.css"])},{path:"/cargame",name:"cargame",component:()=>D((()=>import("./CarGame.43c36cfc.js")),["assets/CarGame.43c36cfc.js","assets/Base.f46e7956.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/JoyStick.9d2b5199.js","assets/keyboardMove.b62e2423.js","assets/SoundControl.48b26f99.js","assets/MiniMap.783e9150.js","assets/common.9712fc3c.js","assets/CarGame.17a6ff76.css"])},{path:"/infinitygame",name:"infinitygame",component:()=>D((()=>import("./InfinityGame.79dc9166.js")),["assets/InfinityGame.79dc9166.js","assets/Base.f46e7956.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/MoveAndTurnControl.f44fdd62.js","assets/ClickAnchorRender.c5feb3b6.js","assets/MiniMap.783e9150.js","assets/common.9712fc3c.js","assets/CameraAnimation.f6d1e21f.js","assets/JoyStick.9d2b5199.js","assets/keyboardMove.b62e2423.js","assets/InfinityGame.59257aa7.css"])}],G=[{path:"/waterview",name:"waterview",component:()=>D((()=>import("./WaterView.2edb7254.js")),["assets/WaterView.2edb7254.js","assets/Base.f46e7956.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/CameraAnimation.f6d1e21f.js","assets/WaterView.4aaa0f47.css"])},{path:"/citylightshow",name:"citylightshow",component:()=>D((()=>import("./CityLightShow.69b4b795.js")),["assets/CityLightShow.69b4b795.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/Base.f46e7956.js","assets/common.9712fc3c.js","assets/SoundControl.48b26f99.js","assets/CameraAnimation.f6d1e21f.js","assets/modelActionControl.e6c0dc48.js","assets/CityLightShow.19fa647c.css"])}],N=[{path:"/pathsearch",name:"pathsearch",component:()=>D((()=>import("./PathSearch.f6d8fe46.js")),["assets/PathSearch.f6d8fe46.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/Base.f46e7956.js","assets/MiniMap.783e9150.js","assets/ClickAnchorRender.c5feb3b6.js","assets/PathSearch.3680932d.css"])},{path:"/modeldiy",name:"modeldiy",component:()=>D((()=>import("./ModelDIY.c3525c39.js")),["assets/ModelDIY.c3525c39.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/Base.f46e7956.js","assets/ModelDIY.ff3ef5c9.css"])},{path:"/audioaics",name:"audioaics",component:()=>D((()=>import("./AudioAICustomerService.19c0e74e.js")),["assets/AudioAICustomerService.19c0e74e.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/SoundControl.48b26f99.js","assets/modelActionControl.e6c0dc48.js","assets/common.9712fc3c.js","assets/AudioAICustomerService.350137ca.css"])}],W=[{path:"/led_screen",name:"led_screen",component:()=>D((()=>import("./LedScreen.5c22deb5.js")),["assets/LedScreen.5c22deb5.js","assets/vendor.d2781f4b.js","assets/vendor.58deb96e.css","assets/LedScreen.0f81ccb8.css"])}],$=d({history:u(),routes:[...S,...C,...q,...G,...N,...W]}),M=h(T);M.use(f()),M.use($),M.use(E),M.use(g),M.use(v),M.use(P),M.use(w),M.config.globalProperties.$toast=P,M.config.globalProperties.$notify=w,window.$vm=M.config.globalProperties,M.mount("#app");export{y as _};
