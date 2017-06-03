var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var timer = 0;
var width = parseInt(canvas.width);
var height = parseInt(canvas.height);

function block(){
  this.x = Math.random()*width;
  this.y = Math.random()*height;
  this.speed = Math.random()*20-10;
}

var rendered = [];
rendered.push(new block());
setInterval(frame,10);


function frame() {
	rendered.push(new block());
	draw.fillStyle = "#FFFFFF";
	draw.fillRect(0,0,width,height);
	
	draw.fillStyle = "#FF0000";
	rendered.forEach(function(b){
		draw.fillRect(b.x,b.y,10,10);
		b.y += b.speed;
		if(b.y <= 0 || 600 <= b.y){
			delete b;
		}
	});
}
