var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pi = Math.PI;
ctx.fillStyle='#2bbbad';

var x, y, R, r, d, u;
//u = 0;
//r = 80; маленький круг радиуса r  с отверстием на расстоянии d от центра вращается в большом (радиуса R), называется гипотрохоидой.
//R= 50;
//d=70;
u = 0;
r = 55;
R = 65;
d = 100;

document.getElementById('button').onclick= function(){
     R = document.getElementById('static_circle').value;
     r = document.getElementById('mobile_circle').value;
     d = document.getElementById('tracing_stick').value;
    console.log(R);
    console.log(r);
    console.log(d);
    //console.log();
    u = 0;
    //r = 100;
    //R = 50;
    //d = 50;
    ctx.clearRect(0,0,600,600);
};

function spiro(){
	x = (R-r)*Math.cos(u)+d*Math.cos(u*(R-r)/r);
	y = (R-r)*Math.sin(u)-d*Math.sin(u*(R-r)/r);
	ctx.fillRect(2*x+300,2*y+300, 2,2);
    u = u+ 0.02;
	setTimeout(spiro, 10);
}

spiro();


var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
ctx2.fillStyle='#2bbbad';
var x1, y1, r1, u1;
var timer='';
//u = 0;
//r = 80; маленький круг радиуса r  с отверстием на расстоянии d от центра вращается в большом (радиуса R), называется гипотрохоидой.
//R= 50;
//d=70;
function koord() {
    ctx2.beginPath();
    ctx2.strokeStyle='#ee6e73';
    ctx2.lineWidth = '2';
    ctx2.moveTo(0,300);//начало
    ctx2.lineTo(600,300);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.lineWidth = '2';
    ctx2.moveTo(300,0);//начало
    ctx2.lineTo(300,600);
    ctx2.stroke();
}
koord();

document.getElementById('arhimed').onclick= function(){
    spiralArhimeda();
};
document.getElementById('stop').onclick= function(){
    clearTimeout(timer);
};
document.getElementById('reset').onclick= function(){
    clearTimeout(timer);
    u1 = 0;
    r1 = 10;
    ctx2.clearRect(0,0,600,600);
    koord();
};
u1 = 0;
r1 = 10;
function spiralArhimeda(){

    if(r1<290) {
        x1 = r1 * Math.cos(0.2 * r1),
            y1 = r1 * Math.sin(0.2 * r1);
        ctx2.fillRect(300 + x1, 300 + y1, 2, 2);
        r1 = r1 + 0.1;
        timer = setTimeout(spiralArhimeda, 5);
    }
    else{
        clearTimeout(timer);
    }
}



