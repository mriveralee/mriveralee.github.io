// Balls.js
//var rightDown = false;
//var leftDown = false;
var NOTE_CIRCLE_ARRAY = new Array();


// Main Function To Start
function start()
{
/*	g = $('#canvas')[0].getContext("2d");
	WIDTH = $("#canvas").width();
	HEIGHT = $("#canvas").height();
	carray[0] = new Circle(150,150,20);
	carray[1] = new Circle(150,150,15);
	carray[2] = new Circle(150,150,10);
	carray[3] = new Circle(150,150,5);
	//return setInterval(draw, 10);
*/
}

/*
// Get Key Input
function onKeyDown(evt) 
{
	if(evt.keyCode == 39) rightDown = true;
	else if(evt.keyCode == 37) leftDown = true;
	dx = dx*-1;
}

function onKeyUp(evt) 
{
	if (evt.keyCode == 39) rightDown = false;
	else if (evt.keyCode == 37) leftDown = false;
	dx = dx*-1;
}
*/

var generateNoteCircle = function(color, note)
{
	var checkX = Math.random();
	var negationX = checkX>0.5 ? 1 : -1;
	var checkY = Math.random();
	var negationY = checkY<0.5 ? 1 : -1;
	var nextCircle = new NoteCircle(suite.canvasEl.width/2, suite.canvasEl.height/2, 10, color,note, negationX, negationY);
	NOTE_CIRCLE_ARRAY.push(nextCircle);

}




// Circle Class	
var NoteCircle = function(x,y,r, color, note, negX, negY)
{
	this.x = x;
	this.y = y;
	this.r = r;
	this.color = color;
	this.c1 = Math.round(Math.random()*255);
	this.c2 = Math.round(Math.random()*255);
	this.c3 = Math.round(Math.random()*255);
	this.note = note;
	this.dx = negX*10*(440*(Math.pow(2,(note-49)/12)))/1000;
	this.dy = negY*10*(440*(Math.pow(2,(note-49)/12)))/1000;
	this.opacity = 1.000;
	this.time = 0;
	/*
	this.dx = Math.ceil(Math.random()*7);
	this.dy = Math.ceil(Math.random()*7);
	*/
	this.draw = function()
	{
		suite.canvasObj.beginPath();
		//suite.canvasObj.fillStyle = this.color;
		suite.canvasObj.fillStyle = "rgba("+this.c1+","+this.c2+","+this.c3+"," +this.opacity+")";
		suite.canvasObj.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
		suite.canvasObj.closePath();
		suite.canvasObj.fill();
		this.opacity -= 0.001;
		time++;
	}
	
	this.getX = function()
	{
		return this.x;
	}
	
	this.getY = function()
	{
		return this.y;
	}
	
	this.move = function()
	{	
		//this.x += this.dx;
		this.y += this.dy;
	
		if(this.x > suite.canvasEl.width || this.x < 0)
		{
			this.dx = this.dx*-1;
		}
		
		if(this.y > suite.canvasEl.height || this.y < 0)
		{
			this.dy = this.dy*-1;
			this.life 
		}
	}
}


// Draw Function
var draw = function()
{
	clear();
	var i;
	for (i=0; i<NOTE_CIRCLE_ARRAY.length; i++)
	{
		if(NOTE_CIRCLE_ARRAY[i].opacity > 0){
			NOTE_CIRCLE_ARRAY[i].move();
			NOTE_CIRCLE_ARRAY[i].draw();
		}
	}	
}


var clear = function() 
{
	suite.canvasObj.fillStyle = "#084B8A";
	//suite.canvasObj.fillRect(0, 0, WIDTH, HEIGHT);
	// This clears the drawing, remove if we want to keep circle track history
	// suite.canvasObj.fillRect(0, 0, suite.canvasEl.width, suite.canvasEl.height); 
}

var eraseNoteCircleArray = function()
{
	NOTE_CIRCLE_ARRAY = new Array();
	clear();
}


// Use JQuery to wait for document load
/*$(document).ready(function()
{
	start();
});
*/
/*
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
*/