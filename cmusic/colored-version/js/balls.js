// Balls.js
//var rightDown = false;
//var leftDown = false;

// Holds NoteCircle Objects
var NOTE_CIRCLE_ARRAY = new Array();
// Keeps Track of Every 8-Note Phrase in the Song
var NUM_CYCLE = 0;
// Map that keeps track of radius of a particulkar note
var RADIUS_ARRAY_MAP = new Array();
// Size of the Radius Array Map
RADIUS_ARRAY_MAP.length = TOTAL_NOTES_IN_SONG;


// Initializes the Radius Array with all notes having equal radius
function initializeRadiusArray()
{
	for(var i = 0; i < RADIUS_ARRAY_MAP.length; i++){
		RADIUS_ARRAY_MAP[i] = 12;
	}
}

var generateNoteCircle = function(color, note)
{
	var checkX = Math.random();
	var negationX = checkX > 0.5 ? 1 : -1;
	var checkY = Math.random();
	var negationY = checkY < 0.5 ? 1 : -1;
	//var nextCircle = new NoteCircle(suite.canvasEl.width/2, suite.canvasEl.height/2, 10, color,note, negationX, negationY);
	//var nextCircle = new NoteCircle(Math.floor(Math.random()*suite.canvasEl.width), 0.0, 10, color,note, negationX, negationY);
	var place = NUM_CYCLE % 8;
	// Increment the number in this 
	NUM_CYCLE++;
	// Move Screen Start Location
	var screenStep = (suite.canvasEl.width)/20.0;
	// Compute current location
	var loc = screenStep*place+20+suite.canvasEl.width/3;
	// Construct the circle (USING RADIUS_ARRAY_MAP radius)
	var nextCircle = new NoteCircle(loc, 0.0, RADIUS_ARRAY_MAP[note], color,note, negationX, negationY);
	//console.log("MAP VALUE: " +RADIUS_ARRAY_MAP[note]);
	// Add to our Note Circle Array
	NOTE_CIRCLE_ARRAY.push(nextCircle);
	// Increment RADIUS Map value
	RADIUS_ARRAY_MAP[note] += 0.45;

}

// Circle Class	
var NoteCircle = function(x,y,r, color, note, negX, negY)
{
	this.x = x;
	this.y = y;
	this.radius = r;
	this.color = color;
	this.c1 = Math.round(Math.random()*255);
	this.c2 = Math.round(Math.random()*255);
	this.c3 = Math.round(Math.random()*255);
	this.note = note;
	this.dx = 1.0;//Math.floor(Math.random()*1000)+10;//negX*10*(440*(Math.pow(2,(note-49)/12)))/1000;
	this.dy = 10*(440*(Math.pow(2,(note-49)/12)))/1000;
	this.opacity = 1.000;
	this.time = 0;
	this.isBaseNote = note <= 26 ? 1 : 0;
	this.isMovingLeft = 1; // 1 for Right; 0 for Left
	this.motionTimer = 0;
	this.startX = x;
	this.startY = y;
	this.angle = 0.0;
	this.opacitySpeed = 0.001 + (note/1000)*(HALF_STEP_MULTIPLIER/11);
	/*
	this.dx = Math.ceil(Math.random()*7);
	this.dy = Math.ceil(Math.random()*7);
	*/
	this.draw = function()
	{	//int opa = 
		//or (int i)
		suite.canvasObj.beginPath();
		//suite.canvasObj.fillStyle = this.color;
		suite.canvasObj.fillStyle = "rgba("+this.c1+","+this.c2+","+this.c3+"," +this.opacity+")";
		suite.canvasObj.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
		suite.canvasObj.closePath();
		suite.canvasObj.fill();
		this.opacity -= this.opacitySpeed;
		this.time++;
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
		
		
		if (this.isBaseNote){
			this.startY += this.dy;
			this.x = this.startX + Math.cos(this.angle) * 100.0;
			this.y = this.startY + Math.sin(this.angle) * 10.0;
			this.angle += 0.1;

		/*	// If is moving left, move left by dx;
			if (this.isMovingLeft){
				this.x += this.dx;
				this.motionTimer++;
			}
			// else if is moving right, move right by dx;
			else if (!this.isMovingLeft){
				this.x -= this.dx;
				this.motionTimer--;
			}
			// If we reach bounds go opposite direction.
			if (this.motionTimer <= -25 || this.motionTimer >= 25){ 
				this.isMovingLeft = (!this.isMovingLeft);
			}
		*/	
		}
		else {
			this.y += this.dy;
		}
		
		if(this.y > suite.canvasEl.height || this.y < 0){
			this.dy = this.dy*-1;
			this.opacity =0;
		}
		/*if(this.x > suite.canvasEl.width || this.x < 0)
		{
			this.dx = this.dx*-1;
		}*/
	}
}


// Draw Function
var draw = function()
{	if(isActive && !IS_PAUSED){
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
}


var clear = function() 
{	
	var a = 8;
	var b = 75;
	var c = 138;
	//suite.canvasObj.fillStyle = "rgba("+CANVAS_RED+","+CANVAS_GREEN+","+CANVAS_BLUE+"," +0.9+")";
	suite.canvasObj.fillStyle = hex2rgb(CANVAS_COLOR, 0.9);
	clearEmptyNoteCircles();
	//suite.canvasObj.fillStyle = "#084B8A";
	suite.canvasObj.fillRect(0, 0,suite.canvasEl.width,  suite.canvasEl.height);
	// This clears the drawing, remove if we want to keep circle track history
	// suite.canvasObj.fillRect(0, 0, suite.canvasEl.width, suite.canvasEl.height); 
}

var eraseNoteCircleArray = function()
{
	NOTE_CIRCLE_ARRAY = new Array();
	initializeRadiusArray();
	NUM_CYCLE = 0;
	clear();
}

var clearEmptyNoteCircles = function(){
	for (i=0; i<NOTE_CIRCLE_ARRAY.length; i++)
	{
		if(NOTE_CIRCLE_ARRAY[i].opacity <= 0){
			NOTE_CIRCLE_ARRAY.splice(i,1);
			i--;
		}
	}	
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