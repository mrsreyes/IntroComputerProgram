var $ = function(id) { return document.getElementById(id); };

function calcArea(){
	var length = document.getElementById("length").value;
	var areaC = 6 * (length * length);
	alert(areaC);
}

function calcVolPyramid(){
	var length = document.getElementById("lengthp").value;
	var width = document.getElementById("width").value;
	var height = document.getElementById("height").value;
	var volumeP = ((length * width * height)/3);
	alert(volumeP.toFixed(2););
}

function calcVolSphere(){
	var radius = document.getElementById("radius").value;
	var volumeS = (4/3 * (3.14) * (radius * radius * radius));
	alert(volumeS);
}

window.onload = function() {
	$("calcArea").onclick = calcArea;
    $("calcVolPyramid").onclick = calcVolPyramid;  
	$("calcVolSphere").onclick = calcVolSphere;  
}