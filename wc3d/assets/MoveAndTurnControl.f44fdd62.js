import{aS as t,aT as e,aw as i,a1 as o}from"./vendor.d2781f4b.js";class s{constructor(){this.isMoving=!1,this.createTL()}go({target:o,destPosition:s,speed:n=5,turnSpeed:a=.1,fixedY:l=0,offsetY:r=0,offsetAngle:p=Math.PI,onStart:h,onUpdate:m,onComplete:M}){this.isMoving&&(this.timeline.kill(),this.createTL());let d=o.position.clone(),c=Math.sqrt(Math.pow(s.x-d.x,2)+Math.pow(s.z-d.z,2))/n,f=new t;f.lookAt(d,s,o.up),f.multiply((new t).makeRotationFromEuler(new e(0,p,0)));let g=(new i).setFromRotationMatrix(f);h&&h(),this.isMoving=!0,this.timeline.to(o.position,{duration:c,ease:"linear",x:s.x,y:0==l?l:s.y+r,z:s.z,onUpdate:()=>{m&&m(g),o.quaternion.slerp(g,a)},onComplete:()=>{this.isMoving=!1,M&&M(o)}})}createTL(){this.timeline=o.timeline()}stop(){this.timeline.kill()}}export{s as M};