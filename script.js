var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("bd");
var btn = document.getElementById("btn");


body.style.background ="linear-gradient(to right," + color1.value + "," + color2.value + ")" ;
css.textContent = body.style.background;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function changeBackgroundColor(){
	body.style.background ="linear-gradient(to right," + color1.value + "," + color2.value + ")" ;
	css.textContent = body.style.background;
}

function randomChange(){
	var r1 = getRandomColor();
	var r2 = getRandomColor();
	color1.value = r1;
	color2.value = r2;
	changeBackgroundColor();
}

color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);
btn.addEventListener("click", randomChange);