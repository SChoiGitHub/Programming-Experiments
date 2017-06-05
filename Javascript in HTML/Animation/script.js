var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var timer = 0;
var width = parseInt(canvas.width);
var height = parseInt(canvas.height);

var entities = [];
var num = 0;

var mouse = {
	x:0,
	y:0
};

function line(x0,y0,x1,y1){
	draw.beginPath();
    draw.moveTo(x0, y0);
    draw.lineTo(x1, y1);
    draw.closePath();
    draw.stroke();
}

canvas.addEventListener('mousemove', function(event){
	mouse.x = event.clientX;
	mouse.y = event.clientY;
}, false);

function something(h,s,location){
	this.x = 0;
	this.y = Math.random() * height;
	this.hp = h;
	this.spd = s;
}

setInterval(frame,20);

function frame(){
	entities.push(new something(Math.random()*100,Math.random()*25+1),num);
	num += 1;
	draw.fillStyle="#FFFFFF";
	draw.fillRect(0,0,width,height);
	
	draw.fillStyle="#00FF00";
	
	entities.forEach(function(a){
		act(a);
		draw.fillRect(a.x,a.y,15,15);
		line(mouse.x,mouse.y,a.x,a.y);
		if(a.x > width){
			entities.splice(entities.indexOf(a),1);
		}
	});
}
function act(s){
	s.x += s.spd;
}
