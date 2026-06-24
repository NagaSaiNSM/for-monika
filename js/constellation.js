const canvas =
document.getElementById("constellationCanvas");

if(canvas){

const ctx = canvas.getContext("2d");

function resize(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particles = [];

const TOTAL_PARTICLES = 800;

for(let i=0;i<TOTAL_PARTICLES;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

tx:0,
ty:0,

size:Math.random()*2+1

});

}

function createMonikaPoints(){

const points=[];

const startX = canvas.width/2 - 350;
const startY = canvas.height/2;

const spacing=120;

function pushLetter(x,y,w,h,type){

for(let i=0;i<100;i++){

let px,py;

switch(type){

case "M":

if(i<25){
px=x;
py=y+(i*4);
}
else if(i<50){
px=x+w;
py=y+((i-25)*4);
}
else if(i<75){
px=x+(i-50)*2;
py=y+((75-i)*2);
}
else{
px=x+w-(i-75)*2;
py=y+((i-75)*2);
}
break;

case "O":

const angle=Math.random()*Math.PI*2;

px=x+w/2+Math.cos(angle)*(w/2);
py=y+h/2+Math.sin(angle)*(h/2);

break;

case "N":

const t=Math.random();

px=x+t*w;

py=y+t*h;

break;

case "I":

px=x+w/2;

py=y+Math.random()*h;

break;

case "K":

if(i<50){

px=x;
py=y+(i*2);

}else{

const t=(i-50)/50;

px=x+t*w;

py=y+h/2+t*h/2;

}

break;
case "A":

if(i < 35){

    const t = i / 35;

    px = x + (w/2) * t;

    py = y + h - h * t;

}
else if(i < 70){

    const t = (i - 35) / 35;

    px = x + w/2 + (w/2) * t;

    py = y + h * t;

}
else{

    const t = (i - 70) / 30;

    px = x + w*0.25 + (w*0.5)*t;

    py = y + h*0.55;

}

break;

break;
break;

}

points.push({x:px,y:py});

}

}

pushLetter(startX,startY,80,180,"M");
pushLetter(startX+spacing,startY,80,180,"O");
pushLetter(startX+spacing*2,startY,80,180,"N");
pushLetter(startX+spacing*3,startY,80,180,"I");
pushLetter(startX+spacing*4,startY,80,180,"K");
pushLetter(startX+spacing*5,startY,80,180,"A");

return points;

}

const targets=createMonikaPoints();

particles.forEach((p,index)=>{

const t=targets[index%targets.length];

p.tx=t.x;
p.ty=t.y;

});

let formed=false;

setTimeout(()=>{

formed=true;

},4000);

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

if(formed){

p.x+=(p.tx-p.x)*0.02;
p.y+=(p.ty-p.y)*0.02;

}

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fillStyle="white";

ctx.shadowBlur=10;
ctx.shadowColor="white";

ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

}