// JavaScript Document

/* Image Arrays */
var tl = ["images/spring-valley.gif", "images/fall-leaves.gif", "images/winter-lake.gif", "images/summer-shore.gif"];
var tr = ["images/spring-trees.gif", "images/fall-bird.gif", "images/winter-girl.gif", "images/summer-puddle.gif"];
var bl = ["images/spring-drink.gif", "images/fall-spooky.webp", "images/winter-drink.gif", "images/summer-drink.gif"];
var br = ["images/spring-bunny.gif", "images/fall-drink.gif", "images/winter-bunny.gif", "images/summer-beach.webp"];
var i = 0;
/* Season Change */
setInterval(function() {
	document.getElementById("tl").style.backgroundImage = "url(" + tl[i] + ")";
	document.getElementById("tr").style.backgroundImage = "url(" + tr[i] + ")";
	document.getElementById("bl").style.backgroundImage = "url(" + bl[i] + ")";
	document.getElementById("br").style.backgroundImage = "url(" + br[i] + ")";
	i++;
	if (i > 3){
		i = 0;
	}
}, 4000)

/* Light Switch */
function lightSwitch() {
	var wall = document.body.style.backgroundColor;
	var window = document.getElementById("container").style.backgroundColor;
	document.getElementById("lamp").style.backgroundImage = "url(images/lamplight.png)";
	
	if (wall != "aliceblue" && wall != "midnightblue") {
		document.body.style.backgroundColor = "midnightblue";
	} 
	else if (wall == "aliceblue") {
		wall = "midnightblue";
		document.body.style.backgroundColor = wall;
		document.getElementById("lamp").style.backgroundImage = "url(images/lamplight.png)";
	}
	else if (wall == "midnightblue") {
		wall = "aliceblue";
		document.body.style.backgroundColor = wall;
		document.getElementById("lamp").style.backgroundImage = "url(images/lamp.png)";
	}
	
	if (window != "lavender" && window != "rebeccapurple") {
		document.getElementById("container").style.backgroundColor = "rebeccapurple";
	}
	else if (window == "lavender") {
		window = "rebeccapurple";
		document.getElementById("container").style.backgroundColor = window;
		document.getElementById("lamp").style.backgroundImage = "url(images/lamplight.png)";
	} 
	else if (window == "rebeccapurple") {
		window = "lavender";
		document.getElementById("container").style.backgroundColor = window;
		document.getElementById("lamp").style.backgroundImage = "url(images/lamp.png)";
	}
}