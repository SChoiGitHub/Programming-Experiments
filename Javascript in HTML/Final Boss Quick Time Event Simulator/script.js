var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var timer = 0;
var width = parseInt(canvas.width);
var height = parseInt(canvas.height);
var entities = {};
var num = 0;
var running = false;

draw.fillStyle = "#000000";
draw.font = "68px Arial";
draw.textAlign = "center";
draw.fillText("Click the button below to begin.",width*0.5,height*0.5); 

var mouse = {
	x:0,
	y:0
};

canvas.addEventListener('mousemove', function(event){
	mouse.x = event.clientX;
	mouse.y = event.clientY;
}, false);

class indicatorBlocks{
	constructor(){
		this.blocks = [];
		this.initalVal = parseInt(Math.random()*3) + 1;
		this.cur = 0;
		var beginX;
		
		switch(this.initalVal){
			case 1:
				beginX = 650;
				break;
			case 2:
				beginX = 710;
				break;
			case 3:
				beginX = 770;
				break;
		}
		
		for(var k = 0; k < this.initalVal; k++){

			switch(parseInt(Math.random()*4)){
				case 0:
					this.blocks.push(new Block(beginX,height*0.68,"Circle"));
					break;
				case 1:
					this.blocks.push(new Block(beginX,height*0.68,"Square"));
					break;
				case 2:
					this.blocks.push(new Block(beginX,height*0.68,"Triangle"));
					break;
				case 3:
					this.blocks.push(new Block(beginX,height*0.68,"X"));
					break;
			}

			beginX = beginX - 120;
		}
		
	}
	drawIt(){
		for(var k = 0; k < this.initalVal; k++){
			this.blocks[k].drawIt();
		}
	}
	check(input){
		if(this.blocks[this.cur].s == input){
			this.blocks[this.cur].a = true;
			this.cur++;
			if(this.cur == this.initalVal){
				return 1;
			}else{
				return 0;
			}
		}else{
			return -1;
		}
	}
}


class Block {
	constructor(xOffset, yOffset, shape){
		this.x = width-xOffset;
		this.y = height-yOffset;
		this.s = shape;
		this.a = false;
	}
	
	drawIt(){
		draw.lineWidth=5;
		
		if(this.a){
			if(this.s == "Triangle"){
				draw.fillStyle="#7DF9FF";
			}else if(this.s == "Square"){
				draw.fillStyle="#CCCCFF";
			}else if(this.s == "X"){
				draw.fillStyle="#AAF0D1";
			}else if(this.s == "Circle"){
				draw.fillStyle="#FDEE00";
			}
		}else{
			draw.fillStyle="#EDEDED";
		}
		
		draw.fillRect(this.x-6,this.y-6,112,112);
		
		if(this.s == "Triangle"){
			draw.beginPath();
			draw.strokeStyle="#0000CD";
			draw.strokeRect(this.x,this.y,100,100);
			draw.moveTo(this.x+50,this.y+15);
			draw.lineTo(this.x+85,this.y+85);
			draw.lineTo(this.x+15,this.y+85);
			draw.lineTo(this.x+50,this.y+15);
			draw.stroke();
		}else if(this.s == "Square"){
			draw.beginPath();
			draw.strokeStyle="#DF73FF";
			draw.strokeRect(this.x,this.y,100,100);
			draw.moveTo(this.x+20,this.y+20);
			draw.lineTo(this.x+20,this.y+80);
			draw.lineTo(this.x+80,this.y+80);
			draw.lineTo(this.x+80,this.y+20);
			draw.lineTo(this.x+20,this.y+20);
			draw.stroke();
		}else if(this.s == "X"){
			draw.strokeStyle="#50C878";
			draw.strokeRect(this.x,this.y,100,100);
			draw.beginPath();
			draw.moveTo(this.x+20,this.y+20);
			draw.lineTo(this.x+80,this.y+80);
			draw.stroke();
			draw.beginPath();
			draw.moveTo(this.x+20,this.y+80);
			draw.lineTo(this.x+80,this.y+20);
			draw.stroke();
		}else if(this.s == "Circle"){
			draw.strokeStyle="#DAA520";
			draw.strokeRect(this.x,this.y,100,100);
			draw.beginPath();
			draw.arc(this.x+50,this.y+50,35,0,2*Math.PI);
			draw.stroke();
		}

	}
	inside(x2, y2){
		return ((this.x <= x2 && x2 <= this.x+100) && (this.y <= y2 && y2 <= this.y+100));
	}
}



class Bar {
	constructor(){
		
	}
	drawIt(){
		draw.fillStyle = "#000000";
		draw.fillRect(width*0.25, height*0.55, width*.5, height*0.04);
		draw.fillStyle = "#DAA520";
		draw.fillRect(width*0.26, height*0.56, width*.48*(volume/capacity), height*0.02);
	}
	inside(x2, y2){
		return false;
	}
}



var volume = 0;
var capacity = 3000;
var msPerFrame = 10;
setInterval(frame,msPerFrame);

function frame(){
	if(running){
		volume += msPerFrame;
		if(volume >= capacity){
			lose();
		}else{
			draw.fillStyle="#FFFFFF";
			draw.fillRect(0,0,width,height);
		}
		
		
		for(b in entities){
			entities[b].drawIt();
			
		}
		
	}
}

canvas.onmousedown = function(e){
	for(b in entities){
		if(entities[b].inside(mouse.x,mouse.y)){
			switch(entities["ind"].check(entities[b].s)){
				case 1:
					capacity -= 25;
					volume = 0;
					delete entities.ind;
					entities["ind"] = new indicatorBlocks();
					break;
				case -1:
					lose();
					break;
			}
		}
	}
}

function lose(){
	draw.fillStyle = "#000000";
	draw.font = "68px Arial";
	draw.textAlign = "center";
	draw.fillText("You failed the Quicktime Event.",width*0.5,height*0.1); 
	draw.fillText("Try again by clicking begin again.",width*0.5,height*0.25); 
	running = false;
	for(b in entities){
		delete entities[b];
	}
}
function start(){
	draw.fillStyle = "#000000";
	draw.font = "32px Arial";
	draw.textAlign = "right";
	entities["circ"] = new Block(480,120,"Circle");
	entities["sqr"] = new Block(360,120,"Square");
	entities["tri"] = new Block(240,120,"Triangle");
	entities["x"] = new Block(120,120,"X");
	entities["bar"] = new Bar();
	entities["ind"] = new indicatorBlocks();
	volume = 0;
	capacity = 3000;
	running = true;
}
