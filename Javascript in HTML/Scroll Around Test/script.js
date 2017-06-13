var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;

var keys = {};
var cameraCenter = {x:0,y:0};
var mouse = {x:0,y:0};

document.onmousemove = function(e){
	mouse.x = e.clientX;
	mouse.y = e.clientY;
}

canvas.onclick = function(){
	for(key1 in f.g){
		for(key2 in f.g[key1]){
			if(f.g[key1][key2].clicked()){
				f.g[key1][key2].activate();
				break;
			}
		}
	}
	draw();
}

document.onkeydown = function(e){
	keys[e.keyCode] = true;
	draw();
}
document.onkeyup = function(e){
	keys[e.keyCode] = false;
	draw();
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
				this.g[y][x] = new grid(this, "b",x,y);
			}
		}
	}
	draw(){
		for(var y = 0; y < this.r; y++){
			for(var x = 0; x < this.c; x++){
				this.g[y][x].draw();
			}
		}
	}
}

class grid{
	constructor(f, type, xIn, yIn){
		this.f = f;
		this.t = type;
		this.w = null;
		this.s = 0;
		this.x = xIn;
		this.y = yIn;
		this.a = false;
	}
	draw(){
		context.lineWidth = 3;
		if(this.a){
			context.strokeStyle = "#3333FF";
		}else{
			context.strokeStyle = "#000000";
		}
		context.strokeRect(cameraCenter.x+this.x*60+5,cameraCenter.y+this.y*60+5,50,50);
	}
	clicked(){
		return ((cameraCenter.x+this.x*60+5 < mouse.x && mouse.x < cameraCenter.x+this.x*60+55) && (cameraCenter.y+this.y*60+5 < mouse.y && mouse.y < cameraCenter.y+this.y*60+55));
	}
	activate(){
		this.a = !this.a;
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
draw();

function draw(){ 
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,width,height);
	scroll(keys);
	f.draw();
}
