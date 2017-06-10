var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;

var keys = {};
var cameraCenter = {x:0,y:0};

document.onkeydown = function(e){
	keys[e.keyCode] = true;
}
document.onkeyup = function(e){
	keys[e.keyCode] = false;
}

class field{
	constructor(id,rows,cols){
		this.n = id;
		this.r = rows;
		this.c = cols;
		this.g = {};
		for(var y = 0; y < this.r; y++){
			this.g[y] = {};
			for(var x = 0; x < this.c; x++){
				this.g[y][x] = new grid("b");
			}
		}
	}
	draw(){
		for(var y = 0; y < this.r; y++){
			for(var x = 0; x < this.c; x++){
				this.g[y][x].draw(x,y);
			}
		}
	}
}

class grid{
	constructor(type){
		this.t = type;
		this.who = null;
	}
	draw(xIn,yIn){
		if(this.t == "b"){
			context.strokeStyle = "#000000";
			context.strokeRect(cameraCenter.x+xIn*60+5,cameraCenter.y+yIn*60+5,50,50);
		}
	}
}

function scroll(k){
	if(k[87]){
		cameraCenter.y -= 10;
	}else if(k[83]){ 
		cameraCenter.y += 10;
	}
	
	if(k[68]){ 
		cameraCenter.x += 10;
	}else if(k[65]){ 
		cameraCenter.x -= 10;
	}
}



var f = new field("1",10,13);


setInterval(function(){ 
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,width,height);
	scroll(keys);
	f.draw();
}, 30);
