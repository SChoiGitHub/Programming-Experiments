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
		this.vx = 3;
		
		this.X += this.vx;
		this.y += this.vy;
		if(this.y+this.r >= height && this.vy >= 0){
			this.vy = -0.95*this.vy;
			this.y = height-this.r;
		}else{
			this.vy += 1;
		}
		context.fillStyle = "#000000";
		context.fillText(this.X,100,100,100);
		
		if(this.X <= 0){
			this.X = width - 1;
		}else if(this.X >= width){
			this.X = 1;
		}
	}
}
var b = new Ball(600,588,5);

function frame(){
	
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,width,height);
	context.beginPath();
	context.arc(b.X,b.y,b.r,0,2*Math.PI);
	context.stroke();
	b.fall();
}

