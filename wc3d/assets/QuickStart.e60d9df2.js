import{r as a,S as t,m as p,W as i,A as e,D as _,M as r,n as y,q as v,s as o,t as c,v as m,x as d,L as u,E as n,y as s,G as f,z as l,C as g,H as h,O as w,V as b,I as j,J as T,K as q,Q,U as x,c as Y,X as M,Y as I,Z as C,_ as G,o as L,$ as W}from"./vendor.d2781f4b.js";import{p as A}from"./const.dd63a052.js";import{_ as V}from"./index.ed1235c5.js";const X=V({__name:"QuickStart",setup(V){let X=null,O=a(null),K=[];const B=new t,U=new p(75,window.innerWidth/window.innerHeight,.1,1e3);U.position.set(0,12,18),U.lookAt(0,0,0);const P=new i({antialias:!0,logarithmicDepthBuffer:!0});P.setSize(window.innerWidth,window.innerHeight),P.setClearColor("#262837");const S=new e("#ffffff",.5);B.add(S);const E=new _("#f5f5f5",.5);E.position.set(2,7,-4),B.add(E);const R=new r(new y(40,40),new v({color:"#ffffff",side:o}));R.rotation.x=-Math.PI/2,R.position.y=-.01;new r(new c(2,32,32),new m({color:"#777777"})).position.set(0,5,0);new r(new d(1,1,1),new u({color:16711680,transparent:!0,opacity:.4})).position.set(2,2,-4);const z=new d(15,15,15),J=new n(z);new s(J,new u({color:16777215})),new f;let H=(new l).load("images/texture/force_arrow_bg.svg"),k=(new l).load("images/texture/force_ratio_bg.svg");H.wrapT=g,H.wrapS=g,k.wrapT=h,k.wrapS=h,H.offset.x=.5,H.offset.y=0,(new w).position.copy(U.position),new b,new b;let F=null;F=new M,F.domElement.style.position="absolute",F.domElement.style.left="0px",F.domElement.style.top="0px",document.body.appendChild(F.domElement);let D=null;!function(){var a=[{uid:86117,avatar_url:"https://img.fatiaoya.com/face_33.jpg",avatar_type:0,pay_vip_type:0},{uid:50071,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83er65tEOAwCnYgeRmlDttbWZlAPEVKQMjpnp2kwtmXwWfQtFkAYl8tZ2VKvIwWkaTh3cgvnJLwJerw/132",avatar_type:0,pay_vip_type:0},{uid:88137,avatar_url:"https://img.fatiaoya.com/avatar/a56d141afae3c899919546b35bc90294",avatar_type:0,pay_vip_type:0},{uid:74290,avatar_url:"https://img.fatiaoya.com/avatar/e5d17add3ce9757c446e1706a98f49f8",avatar_type:0,pay_vip_type:1},{uid:81986,avatar_url:"https://img.fatiaoya.com/face_9.jpg",avatar_type:0,pay_vip_type:0},{uid:90707,avatar_url:"https://img.fatiaoya.com/face_6.jpg",avatar_type:0,pay_vip_type:0},{uid:17531,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erOaOyTAXv9xRyhianfh68oMu4wdRVyibawu25XoX9xJAOaUO0Yag2QSQfsTfKBBlnj8bvXSUC2n10Q/132",avatar_type:0,pay_vip_type:0},{uid:60628,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/CgYtHKVg1xaUnezUichiaJmtmX0sEQvWjwicqlIbiclibL5ibib9M3uqdnE92ehgicjWgdoX7qn20S3jicYhD7QSm84VqLg/132",avatar_type:0,pay_vip_type:0},{uid:84717,avatar_url:"https://img.fatiaoya.com/avatar/7bce4c9879b404201945e1d366dbbb07",avatar_type:0,pay_vip_type:0},{uid:81929,avatar_url:"https://img.fatiaoya.com/avatar/dfc162c165278507bb3931425cefa14a",avatar_type:0,pay_vip_type:0},{uid:81928,avatar_url:"https://img.fatiaoya.com/avatar/82f163b8cc83f75161dcf18ed4f03bf3",avatar_type:0,pay_vip_type:0},{uid:83116,avatar_url:"https://img.fatiaoya.com/avatar/e3d41aec8771987b735a1e2869cc8d84",avatar_type:0,pay_vip_type:0},{uid:51420,avatar_url:"https://img.fatiaoya.com/avatar/f38337786851b1234484328879c51f55",avatar_type:0,pay_vip_type:1},{uid:76285,avatar_url:"https://img.fatiaoya.com/face_66.jpg",avatar_type:0,pay_vip_type:0},{uid:52768,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/AG4StBDmRJ6jL3uicIdZxyCCuQDt1T78ichWmNeibra0ickzIqibe3ycbOW9eFuOKzkUmciaIlfM3PG0X8LtrY7QQDvQ/132",avatar_type:0,pay_vip_type:99},{uid:79352,avatar_url:"https://img.fatiaoya.com/avatar/2dd625a8860ff6c49748cf0e0bc64efd",avatar_type:0,pay_vip_type:0},{uid:92629,avatar_url:"https://img.fatiaoya.com/face_69.jpg",avatar_type:0,pay_vip_type:0},{uid:28697,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKicnomvOjRpPpicPapvMEKeJcIFgia09WtqAlMMibvYfPX2lmHY48812ibeYQx5p3yg7rk6H1jTX9oLpw/132",avatar_type:0,pay_vip_type:0},{uid:86455,avatar_url:"https://img.fatiaoya.com/face_29.jpg",avatar_type:0,pay_vip_type:0},{uid:75402,avatar_url:"https://img.fatiaoya.com/avatar/c42cfda52acd128a3ca6daad10b440d6",avatar_type:0,pay_vip_type:0},{uid:50414,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYOuLxFCbeNEmkWelwh7UTJDiaKGeico8orkkDOdbFQY68ARdXo9YQic8x3W7jAKP3O50IXpXaibNB9g/132",avatar_type:0,pay_vip_type:1},{uid:18613,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLXxVyBl3heubhPPGic5Zns40YTjuvDx7XHzoXiafQMduVNF4cO81ls1NxVPxNW2JWCRCu7ztvlVicLg/132",avatar_type:0,pay_vip_type:0},{uid:53278,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKQBNpBwFfUqEX7NDibPWFX1Is0ic7cUWoHiavcJWfXEWc0Wkvicp9X9sWLpBvmEHzaQpSCMMtPJbeubQ/132",avatar_type:0,pay_vip_type:0},{uid:78918,avatar_url:"https://img.fatiaoya.com/avatar/9862e551b18973b580def5a447053b6c",avatar_type:0,pay_vip_type:0},{uid:77418,avatar_url:"https://img.fatiaoya.com/face_47.jpg",avatar_type:0,pay_vip_type:0},{uid:89882,avatar_url:"https://img.fatiaoya.com/face_46.jpg",avatar_type:0,pay_vip_type:0},{uid:82487,avatar_url:"https://img.fatiaoya.com/face_11.jpg",avatar_type:0,pay_vip_type:0},{uid:85460,avatar_url:"https://img.fatiaoya.com/face_47.jpg",avatar_type:0,pay_vip_type:0},{uid:42035,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/BtFQqic3TGV05YJpmaQ9qQobXWMdsNthUYSw57UCnIYBoxqJRyic0RWHrfDt2wMR9fovyyX58nOq0ZwcIoRlLpMg/132",avatar_type:0,pay_vip_type:0},{uid:2587,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/H8O52h4iae2WQHCSMKB347KjuiaBnnBlF7QLIeRaFkA8crrjzUReCoOY7a36hEcxJWn9m6hNn3oyWmIj8TeX10gA/132",avatar_type:0,pay_vip_type:0},{uid:76375,avatar_url:"https://img.fatiaoya.com/face_18.jpg",avatar_type:0,pay_vip_type:0},{uid:81061,avatar_url:"https://img.fatiaoya.com/face_53.jpg",avatar_type:0,pay_vip_type:0},{uid:68042,avatar_url:"https://img.fatiaoya.com/face_3.jpg",avatar_type:0,pay_vip_type:0},{uid:87261,avatar_url:"https://img.fatiaoya.com/face_36.jpg",avatar_type:0,pay_vip_type:0},{uid:87264,avatar_url:"https://img.fatiaoya.com/face_27.jpg",avatar_type:0,pay_vip_type:0},{uid:92456,avatar_url:"https://img.fatiaoya.com/avatar/69bd6fc317ccca1b1e21d37190b59089",avatar_type:0,pay_vip_type:0},{uid:16427,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLAe2YVibhNPm5F8EstVQortMHJhSdaGcbMM19Kv4SNpqicIGFTRzBnTmeBjgSyw6GicamlqXHetCicVw/132",avatar_type:0,pay_vip_type:0},{uid:26796,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoU67IRZZHKty8OMjCYJCu3WrvWPzF0rsEV3mSPaNE5Bic7jyKemibIUWKQIb6GhAvsvpgynx7ydMyg/132",avatar_type:0,pay_vip_type:1},{uid:91276,avatar_url:"https://img.fatiaoya.com/face_8.jpg",avatar_type:0,pay_vip_type:0},{uid:91700,avatar_url:"https://img.fatiaoya.com/face_62.jpg",avatar_type:0,pay_vip_type:0},{uid:83287,avatar_url:"https://img.fatiaoya.com/avatar/8f60138361511b785f15679a8ccfb007",avatar_type:0,pay_vip_type:0},{uid:31142,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKN0zk4jLZpUsKX9shbMb6TGX7Ipz2VU9HLicMqtMgchUQaIb88ltbgtBIrkYmTWbRU9bAAt4rjIyw/132",avatar_type:0,pay_vip_type:1},{uid:87992,avatar_url:"https://img.fatiaoya.com/face_3.jpg",avatar_type:0,pay_vip_type:0},{uid:63079,avatar_url:"https://img.fatiaoya.com/avatar/ed040312111dd483407c4ce1e38ed1a3",avatar_type:0,pay_vip_type:0},{uid:85436,avatar_url:"https://img.fatiaoya.com/avatar/ecad802a8b162485a46571bfe41b2d3f",avatar_type:0,pay_vip_type:0},{uid:91150,avatar_url:"https://img.fatiaoya.com/face_6.jpg",avatar_type:0,pay_vip_type:0},{uid:89345,avatar_url:"https://img.fatiaoya.com/face_12.jpg",avatar_type:0,pay_vip_type:0},{uid:68012,avatar_url:"https://img.fatiaoya.com/face_50.jpg",avatar_type:0,pay_vip_type:0},{uid:88249,avatar_url:"https://img.fatiaoya.com/avatar/2f677f204c0cdacb4de7779bce8e5f09",avatar_type:0,pay_vip_type:0},{uid:87594,avatar_url:"https://img.fatiaoya.com/face_66.jpg",avatar_type:0,pay_vip_type:0},{uid:10373,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epicSGUicQ6kKibicRypBR7qYzDQLQHAnv1Ep3iaypmr5PnLiaSBdT7UmRAbKt2VGWZ83onpGn2HicS7ntvw/132",avatar_type:0,pay_vip_type:99},{uid:50579,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIshP2fS9ByRaNozI3ic1O6Hk4MykLozQ3mL7xNThAgzfYicB3QY9uXHY0YbCCmYuEibFF2iaAfMWyzGA/132",avatar_type:0,pay_vip_type:0},{uid:50581,avatar_url:"https://img.fatiaoya.com/avatar/4c20fc72684b50e41c3e3c93f872ca5b",avatar_type:2,pay_vip_type:99},{uid:6959,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL7evlOSOoC79hX9ZO0q6BVWmcZw6Swrk7sgOLCdlSjlLJEpvtac9iaGWV0cGOGRoMiavjhE4MYHXjQ/132",avatar_type:0,pay_vip_type:0},{uid:90502,avatar_url:"https://img.fatiaoya.com/face_50.jpg",avatar_type:0,pay_vip_type:0},{uid:92626,avatar_url:"https://img.fatiaoya.com/face_59.jpg",avatar_type:0,pay_vip_type:0},{uid:91687,avatar_url:"https://img.fatiaoya.com/face_30.jpg",avatar_type:0,pay_vip_type:0},{uid:28950,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJntTKHerEhrbXIOh2KCibM2bicT3VFQcCBq21COHynLH6BgbDs2P2X7EVqBbW35flibKVNtlfKMg7yg/132",avatar_type:0,pay_vip_type:0},{uid:90594,avatar_url:"https://img.fatiaoya.com/face_5.jpg",avatar_type:0,pay_vip_type:0},{uid:59564,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erQjAdTZzZcURLUnbHXFfBn1x7f5u9u4QjLGiateiasGYZhtndROVWltXPVdFI3av8CUJoNKHQNvn2Q/132",avatar_type:0,pay_vip_type:1},{uid:52837,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/t8Eck8uyYXPPQquLjFIHrUkhHd722bb8gmU3ngVgQZsDiaclNdUtwDLhVBDibiaMVoao5oNQkry3o7SPU95C3atmg/132",avatar_type:0,pay_vip_type:1},{uid:88364,avatar_url:"https://img.fatiaoya.com/avatar/ad808e6a02750bf02f745d1de095cb15",avatar_type:0,pay_vip_type:0},{uid:92422,avatar_url:"https://img.fatiaoya.com/face_6.jpg",avatar_type:0,pay_vip_type:0},{uid:63247,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLxUl9saSPWMleCrYftLic5T9wLM67qrkuzRv9f8XzFiaFVVC0kW21gdxzLYo7ssR2o9tJ4RXrn5B4w/132",avatar_type:0,pay_vip_type:1},{uid:89409,avatar_url:"https://img.fatiaoya.com/avatar/6856a4181a99588831dbdfb052043b55",avatar_type:0,pay_vip_type:0},{uid:51313,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erTePiaCjOx8Uke268XicqibibyicdiaIIYyO0jBF3LsiaqboMNswLvC14mC9ic4bmjZORXVnByAxg9LIksfQ/132",avatar_type:0,pay_vip_type:1},{uid:83387,avatar_url:"https://img.fatiaoya.com/avatar/26411e658b23ff6aef2a6f218a8d8456",avatar_type:0,pay_vip_type:0},{uid:92624,avatar_url:"https://img.fatiaoya.com/face_43.jpg",avatar_type:0,pay_vip_type:0},{uid:68879,avatar_url:"https://img.fatiaoya.com/avatar/9a267ceec97a655ae630b32250c5aa92",avatar_type:0,pay_vip_type:0},{uid:78308,avatar_url:"https://img.fatiaoya.com/face_15.jpg",avatar_type:0,pay_vip_type:0},{uid:80075,avatar_url:"https://img.fatiaoya.com/face_16.jpg",avatar_type:0,pay_vip_type:0},{uid:42886,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/8IbIjnhIVNGUMcLgRnpQ7JibyvlOYPRIC9rkVib6qBiabwRBCmvUr9DEEdA4GSYObU5RKgRfWWUicWxgVVvPhibrxRw/132",avatar_type:0,pay_vip_type:99},{uid:56897,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/YnJq5ibyYsyDs4Y4qQdsruuzEwBI1ufE5LwZbOYSQmV6gNf04eD9PRQkCSy59P0bY7YV2bzl7AYyDxGn3Qia3VLQ/132",avatar_type:0,pay_vip_type:99},{uid:90488,avatar_url:"https://img.fatiaoya.com/face_5.jpg",avatar_type:0,pay_vip_type:0},{uid:89316,avatar_url:"https://img.fatiaoya.com/avatar/2fe704f526633d24eb9f83f69d9841bf",avatar_type:0,pay_vip_type:0},{uid:71982,avatar_url:"https://img.fatiaoya.com/face_24.jpg",avatar_type:0,pay_vip_type:0},{uid:88837,avatar_url:"https://img.fatiaoya.com/face_12.jpg",avatar_type:0,pay_vip_type:0},{uid:88312,avatar_url:"https://img.fatiaoya.com/avatar/c0f8b15ff4e337e76818dd40cad5fb09",avatar_type:0,pay_vip_type:0},{uid:91889,avatar_url:"https://img.fatiaoya.com/face_5.jpg",avatar_type:0,pay_vip_type:0},{uid:11331,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/63CbeSL3JlyGfT4iajqve5ZgCgsI5siagl2JibKXhWftK0bIibnMicMQXyiamYP2wEUbdC9TkXDwdpH8VJAI1mMFYSzg/132",avatar_type:0,pay_vip_type:99},{uid:89888,avatar_url:"https://img.fatiaoya.com/face_7.jpg",avatar_type:0,pay_vip_type:0},{uid:85903,avatar_url:"https://img.fatiaoya.com/face_16.jpg",avatar_type:0,pay_vip_type:0},{uid:88280,avatar_url:"https://img.fatiaoya.com/face_67.jpg",avatar_type:0,pay_vip_type:0},{uid:91792,avatar_url:"https://img.fatiaoya.com/face_35.jpg",avatar_type:0,pay_vip_type:0},{uid:85067,avatar_url:"https://img.fatiaoya.com/avatar/00bfd1917f87f9ed9a9e5533df307782",avatar_type:0,pay_vip_type:0},{uid:62087,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ0LH2MG2yTm9pKfg0bjgBziaV01Sd2rkg1ibRC2mnePKORmOsNM9mnKFia23UlzB0yrNknlq82Q0KHQ/132",avatar_type:0,pay_vip_type:0},{uid:90301,avatar_url:"https://img.fatiaoya.com/face_49.jpg",avatar_type:0,pay_vip_type:0},{uid:89679,avatar_url:"https://img.fatiaoya.com/face_30.jpg",avatar_type:0,pay_vip_type:0},{uid:82942,avatar_url:"https://img.fatiaoya.com/face_40.jpg",avatar_type:0,pay_vip_type:0},{uid:89680,avatar_url:"https://img.fatiaoya.com/face_45.jpg",avatar_type:0,pay_vip_type:0},{uid:86244,avatar_url:"https://img.fatiaoya.com/face_54.jpg",avatar_type:0,pay_vip_type:0},{uid:55716,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLg2vgKPQCKenLhLF6AJDfiaewrAulYdGfMIn91BXmsX6EmMUdyCyyKNicMwy2ECGibJ3Zbqibj5pPS4w/132",avatar_type:2,pay_vip_type:99},{uid:73205,avatar_url:"https://img.fatiaoya.com/avatar/f54500a8ae262356a1f01032d7cf17e5",avatar_type:0,pay_vip_type:0},{uid:84285,avatar_url:"https://img.fatiaoya.com/avatar/4d56981b3485d5c02f0aba97b5595129",avatar_type:0,pay_vip_type:0},{uid:20922,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKG1wVUsa5ZRy5zCicMTE6YQo5moFibbC73h6J3rRnuNviaSmJ6aoOEZKdklaL81GMMiajibu0KtMFYh9w/132",avatar_type:0,pay_vip_type:0},{uid:11446,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK3krK0jp1Hpic5B6BcoHXCB3T7icibUe1OYnZAGvibASPbYAsrUrbNvIficqpZIMyB1vws0icsQj4ou3cA/132",avatar_type:0,pay_vip_type:1},{uid:41528,avatar_url:"https://img.fatiaoya.com/avatar/c6382be08fd453bd9200162c65dae33e",avatar_type:0,pay_vip_type:99},{uid:78210,avatar_url:"https://img.fatiaoya.com/face_61.jpg",avatar_type:0,pay_vip_type:0},{uid:61486,avatar_url:"https://img.fatiaoya.com/avatar/4567e1bf03ad788b9f8079b358362a4b",avatar_type:0,pay_vip_type:1},{uid:2139,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVVECYlnlVz6tFhT31D4q6xV0taibicfic3A8Be56eGnTVKZ15JQy7Avo2vjibKWx8yQccib3uoiaduz1A/132",avatar_type:0,pay_vip_type:0},{uid:46526,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83equic4ANSJWk4J70rFiaVwmF4u1rOcDsiccQF9JeTGmQuwmMnviaV5LxOWA4zFGmY8PNqUqwXjibXU7PibA/132",avatar_type:0,pay_vip_type:1},{uid:29511,avatar_url:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLnIliaGJv2zqofddBPbRkqCwlFrtQKJJg3Xheny1Hf2icCxaKFWEQaSICHRJO8Ypt6STTNuSOHWUVg/132",avatar_type:0,pay_vip_type:0},{uid:91268,avatar_url:"https://img.fatiaoya.com/face_69.jpg",avatar_type:0,pay_vip_type:0}];let t=new l,p=(new l).setPath(A.texture);const i=new c(8,32,32),e=new m({map:p.load("2k_moon.jpg"),side:o});D=new r(i,e),B.add(D);const _=[];for(let r=0;r<a.length;r++){const t=Math.acos(2*r/a.length-1),p=Math.sqrt(a.length*Math.PI)*t,i=10*Math.cos(p)*Math.sin(t),e=10*Math.sin(p)*Math.sin(t),y=10*Math.cos(t);_.push(new b(i,e,y))}(new l).setPath("https://static.fatiaoya.com/spaweb/fitness_3d_ai/public/texture/");for(let r=0;r<a.length;r++){let p=t.load(a[r].avatar_url),i=new I({map:p,sizeAttenuation:!0,size:1,transparent:!0});const e=new C((new G).setFromPoints([new b(0,0,0)]),i);e.position.set(_[r].x,_[r].y,_[r].z),D.add(e)}}();let N=new j;N.boradphase=new T(N),N.allowSleep=!0,N.gravity.set(0,-9.82,0);const Z=new W;let $=0;function aa(){const a=Z.getElapsedTime(),t=a-$;$=a,K.map((({mesh:a,body:t})=>{a.position.copy(t.position),a.quaternion.copy(t.quaternion)})),N.step(1/60,t,3),D&&(D.rotation.y+=.003,D.rotation.z+=.003),F&&F.update(),X.update(),P.render(B,U),window.requestAnimationFrame(aa)}const ta=()=>{U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),P.setSize(window.innerWidth,window.innerHeight)};return q((()=>{X=new Q(U,O.value),X.enableDamping=!0,O.value.appendChild(P.domElement),aa(),window.addEventListener("resize",(()=>ta))})),x((()=>{window.removeEventListener("resize",ta)})),(a,t)=>(L(),Y("div",{class:"container",ref_key:"container",ref:O},null,512))}},[["__scopeId","data-v-70f3a57e"]]);export{X as default};
