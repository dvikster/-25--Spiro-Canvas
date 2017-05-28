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
	ctx.fillRect(2*x+250,2*y+250, 2,2);
    u = u+ 0.02;
	setTimeout(spiro, 10);
}

spiro();

