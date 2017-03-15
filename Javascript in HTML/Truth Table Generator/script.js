var row,col,table, iVariables, temp, temp2;

function generateTable(){
	
	table = document.getElementById("table");
	for(i = 0; i < row; i++){
		table.deleteRow(-1);
	}
	
	row = 0;
	col = 0;
	
	col = document.getElementById("initialVariables").value;
	row = Math.pow(2,col)+1;
	col++;
	iVariables = col;
	
	for(i = 0; i < row; i++){
		temp = table.insertRow(i);
		temp.id = ("Row#" + i);
		for(j = 0; j < col; j++){
			temp2 = temp.insertCell(j);
			temp2.id = ("Col#" + j + "Row#" + i);
			temp2.align = "center";
			temp2.innerHTML = determineInitialValue(j,i);
			temp2.width = "50px";
		}
	}
	
}

function determineInitialValue(x, y){
	y--;
	x--;
	if(y == -1 && x == -1){
		return "Terms";
	}else if(y == -1){
		return (x+1);
	}else{
		if(x == -1){
			return (y);
		}else if(y % Math.pow(2,col - x - 1) < Math.pow(2,col - x - 2)){
			return "F";
		}else{
			return "T";
		}

	}
}
function createColumn(){
	var LEFT = document.getElementById("operand1").value;
	var RIGHT = document.getElementById("operand2").value;
	var OPERATOR = document.getElementById("operator").value
	//alert(LEFT + " " + OPERATOR + " " + RIGHT);
	
	
	
	if(((1 <= LEFT) && (LEFT < col) || (OPERATOR == "Not")) && (1 <= RIGHT) && (RIGHT < col)){
		for(i = 1; i < row; i++){
			temp = document.getElementById("Row#" + i);
			temp2 = temp.insertCell(-1);
			temp2.id = ("Col#" + (col) + "Row#" + i)
			temp2.align = "center";
			if(OPERATOR == "Implies"){
				if(!cellTruthValue(LEFT,i) || cellTruthValue(RIGHT,i)){
					temp2.innerHTML = "T";
				}else{
					temp2.innerHTML = "F";
				}
			}else if(OPERATOR == "Not"){
				LEFT = ""; //Ignore Left!
				if(!cellTruthValue(RIGHT,i)){
					temp2.innerHTML = "T";
				}else{
					temp2.innerHTML = "F";
				}
			}else if(OPERATOR == "And"){
				if(cellTruthValue(LEFT,i) && cellTruthValue(RIGHT,i)){
					temp2.innerHTML = "T";
				}else{
					temp2.innerHTML = "F";
				}
			}else if(OPERATOR == "Or"){
				if(cellTruthValue(LEFT,i) || cellTruthValue(RIGHT,i)){
					temp2.innerHTML = "T";
				}else{
					temp2.innerHTML = "F";
				}
			}else if(OPERATOR == "Xor"){
				if(cellTruthValue(LEFT,i) != cellTruthValue(RIGHT,i)){
					temp2.innerHTML = "T";
				}else{
					temp2.innerHTML = "F";
				}
			}else if(OPERATOR == "Bi-Implicates"){
				if(cellTruthValue(LEFT,i) == cellTruthValue(RIGHT,i)){
					temp2.innerHTML = "T";
				}else{
					temp2.innerHTML = "F";
				}
			}
		}
		
		//Column #x, where x is the number the column is!
		temp = document.getElementById("Row#" + 0);
		temp2 = temp.insertCell(-1);
		temp2.id = ("Col#" + col + "Row#" + i);
		temp2.align = "center";
		
		if(OPERATOR == "Implies"){
			OPERATOR = " &#8594 ";
		}else if(OPERATOR == "Not"){
			OPERATOR = "&#172;";
		}else if(OPERATOR == "And"){
			OPERATOR = " &and; ";
		}else if(OPERATOR == "Or"){
			OPERATOR = " &or; ";
		}else if(OPERATOR == "Xor"){
			OPERATOR = " &#8853; ";
		}else if(OPERATOR == "Bi-Implicates"){
			OPERATOR = " &harr; ";
		}
		
		temp2.innerHTML = col + " = (" + LEFT + OPERATOR + RIGHT + ")";
		
		col++;
	}else{
		alert("The columns you want to operate on are not valid.");
	}
}
function removeColumn(){
	if(iVariables != col){
		for(i = 0; i < row; i++){
			temp = document.getElementById("Row#" + i);
			temp.deleteCell(-1);
		}
		col--;
	}else{
		alert("You cannot delete any rows unless you create them.");
	}
}
function cellTruthValue(x, y){
	
	return (document.getElementById(("Col#" + x + "Row#" + y)).innerHTML == "T");
}

var kMap;

function binaryStringToInt(theString){
	var toReturn = 0;
	
	for(q = 0; q < theString.length; q++){
		if(theString.charAt(q) == '1'){
			toReturn += Math.pow(2,(theString.length-(1+q)));
		}
	}
	
	return toReturn;
}

function intToBinaryString(theInt){

}

function generateKMap(){
	alert("Warning: This is not ready yet.");
/*	var whichColumn = prompt("Which column do you want to make a K-Map of?");
	kMap = document.getElementById("kMap");
	
	for(i = 0; i < 5; i++){
		kMap.deleteRow(-1);
	}
	
	
	if((1 <= whichColumn) && (whichColumn < col)){
		var kMapX = Math.pow(2,(Math.floor((iVariables-1)/2)));
		var kMapY = Math.pow(2,(Math.floor((iVariables)/2)));
		
		for(i = 0; i <= kMapY; i++){
			temp = kMap.insertRow(i);
			temp.id = ("kRow#" + i);
			for(j = 0; j <= kMapX; j++){
				temp2 = temp.insertCell(j);
				temp2.id = ("kCol#" + j + "Row#" + i);
				temp2.align = "center";
				temp2.width = "100px";
				if(i == 0 && j == 0){
					temp2.innerHTML = ("Column " + whichColumn);
				}else if(i == 0){
				}else if(j == 0){

				}else{
					//alert(document.getElementById("kCol#" + j + "Row#" + 0).innerHTML + document.getElementById("kCol#" + 0 + "Row#" + i).innerHTML); 
					//alert(binaryStringToInt(document.getElementById("kCol#" + j + "Row#" + 0).innerHTML + document.getElementById("kCol#" + 0 + "Row#" + i).innerHTML)); //this is the term of a cell
					//alert(cellTruthValue(whichColumn,binaryStringToInt(document.getElementById("kCol#" + j + "Row#" + 0).innerHTML + document.getElementById("kCol#" + 0 + "Row#" + i).innerHTML)));
					//temp2.innerHTML = binaryStringToInt(document.getElementById("kCol#" + j + "Row#" + 0).innerHTML + document.getElementById("kCol#" + 0 + "Row#" + (i)).innerHTML);
					try{
						if(cellTruthValue(whichColumn,binaryStringToInt(document.getElementById("kCol#" + j + "Row#" + 0).innerHTML + document.getElementById("kCol#" + 0 + "Row#" + i).innerHTML)+1)){
							temp2.innerHTML = "1";
						}else if(row <= binaryStringToInt(document.getElementById("kCol#" + j + "Row#" + 0).innerHTML + document.getElementById("kCol#" + 0 + "Row#" + i).innerHTML)+1){
							temp2.innerHTML = "d";
						}
					}catch(whoops){
						temp2.innerHTML = "d";
					}
				}
			}
		}
	}else{
		alert("Error: Invalid Column. Choose a different one.");
	} */
}



