var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;

setInterval(frame,25);

class Ball{
	constructor(InX,InY,InR){
		this.X = InX;
		this.y = InY;
		this.r = InR;
		this.vx = 0;
		this.vy = 0;
	}
	fall(){
		this.vx += Math.random()*4-2;
		this.vy += 1;
		this.X += this.vx;
		this.y += this.vy;
		if(this.y >= height){
			this.vy -= this.vy*2;
		}	
	}
}
var b = new Ball(600,588,5);

function frame(){
	b.fall();
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,width,height);
	context.beginPath();
	context.arc(b.X,b.y,b.r,0,2*Math.PI);
	context.stroke();
}

