var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;

var ms_per_frame = 33;
var tower_num = 0;
var enemy_num = 0;
var projectile_num = 0;

var mouse = {x:0,y:0};
document.onmousemove = function(e){
	mouse.x = e.clientX;
	mouse.y = e.clientY;
}


class Enemy{
	constructor(ID,HP,SPD,X,Y){
		this.id = ID;
		this.health = HP;
		this.speed = SPD;
		this.x = X;
		this.y = Y;
		enemy_num++;
	}
	draw(){
		context.fillStyle = "#AA0000";
		context.fillRect(this.x,this.y,20,20);
	}
	act(){
		this.x += this.speed;
	}
}

class Tower{
	constructor(ID,inX,inY,DMG,AS,RNG){
		this.id = ID;
		this.x = inX;
		this.y = inY;
		this.damage = DMG;
		this.attack_speed = AS;
		this.range = RNG;
		this.recharge = 0;
		tower_num++;
	}
	draw(){
		context.fillStyle = "#00AA00";
		context.fillRect(this.x,this.y,40,40);
	}
	act(){
		if(this.recharge < this.attack_speed){
			this.recharge += ms_per_frame;
		}else{
			var target = getNearestTarget(this.x,this.y);
			everything["p" + projectile_num] = new Projectile("p" + projectile_num,this.x,this.y,80,10,600,Math.atan2((target.y-this.y),(target.x-this.x)));
			context.strokeRect(target.x-5,target.y-5,30,30);
			
			this.recharge = 0;
		}
	}
}

function getNearestTarget(inX, inY){
	var s_dist = 9999999;
	var c_dist = 0;
	var target;
	for(var k in everything){
		if(k.charAt(0) == 'e'){
			var xd = Math.abs(everything[k].x - inX);
			var yd = Math.abs(everything[k].y - inY);
			c_dist = Math.sqrt(xd*xd+yd*yd);
			if(c_dist < s_dist){
				s_dist = c_dist;
				target = everything[k];
			}
		}
	}
	return target;
}


class Projectile{
	constructor(ID,inX,inY,DMG,SPD,RNG,ANGLE){
		this.id = ID;
		this.x = inX;
		this.y = inY;
		this.damage = DMG;
		this.range = RNG;
		this.speed = SPD;
		this.x_spd = SPD*Math.cos(ANGLE);
		this.y_spd = SPD*Math.sin(ANGLE);
		projectile_num++;
	}
	draw(){
		context.fillStyle = "#000000";
		context.fillRect(this.x,this.y,5,5);
	}
	act(){
		this.x += this.x_spd;
		this.y += this.y_spd;
		this.range -= this.speed;
		if(this.range <= 0){
			delete everything[this.id];
		}
	}
}
alert("HEY!");
var everything = {};
everything["t" + tower_num] = new Tower("t" + tower_num,Math.random()*width,Math.random()*height,100,10,200);
everything["e" + enemy_num] = new Enemy("e" + enemy_num,200,5,0,Math.random()*height);


setInterval(frame,ms_per_frame);

function frame(){
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,width,height);
	
	if(Math.random()*100 > 90){
		everything["e" + enemy_num] = new Enemy("e" + enemy_num,200,5,0,Math.random()*height);
	}
	
	
	for(var k in everything){
		everything[k].draw();
		everything[k].act();
	}
		

}







