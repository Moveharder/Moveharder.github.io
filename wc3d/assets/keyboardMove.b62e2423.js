class e{constructor(e={}){this.game=e.game,this.rotationDamping=e.rotationDamping||.06,this.moveDamping=e.moveDamping||.01,this.onMove=e.onMove,this.onViewChange=e.onViewChange,this.move={up:0,right:0},this.keys={w:!1,a:!1,d:!1,s:!1,e:!1,c:!1,enter:!1,space:!1},this.addKeyListener()}addKeyListener(){document.addEventListener("keydown",this.onKeydown.bind(this)),document.addEventListener("keyup",this.onKeyup.bind(this))}onKeydown(e){switch(e.key){case"w":this.keys.w=!0;break;case"s":this.keys.s=!0;break;case"a":this.keys.a=!0;break;case"d":this.keys.d=!0;break;case"e":this.keys.e=!0;break;case"c":this.keys.c=!0;break;case"enter":this.keys.enter=!0;break;case"space":this.keys.space=!0}}onKeyup(e){switch(e.key){case"w":this.keys.w=!1,this.move.up=0;break;case"s":this.keys.s=!1,this.move.up=0;break;case"a":this.keys.a=!1,this.move.right=0;break;case"d":this.keys.d=!1,this.move.right=0;break;case"e":this.keys.e=!1;break;case"c":this.keys.c=!1;let e=!0;this.onViewChange.call(this.game,e);break;case"enter":this.keys.enter=!1;break;case"space":this.keys.space=!1}}update(){this.keys.w&&(this.move.up+=this.moveDamping),this.keys.s&&(this.move.up-=this.moveDamping),this.keys.a&&(this.move.right+=this.rotationDamping),this.keys.d&&(this.move.right-=this.rotationDamping),this.move.up>.6&&(this.move.up=.6),this.move.up<-.6&&(this.move.up=-.6),this.move.right>1&&(this.move.right=1),this.move.right<-1&&(this.move.right=-1),1==Math.abs(this.move.right)&&Math.abs(this.move.up)>.3&&(this.move.up*=.8);const{up:e,right:s}=this.move;void 0!==this.onMove&&this.onMove.call(this.game,e,-s)}destory(){document.removeEventListener("keydown",this.onKeydown.bind(this)),document.removeEventListener("keyup",this.onKeyup.bind(this))}}export{e as K};