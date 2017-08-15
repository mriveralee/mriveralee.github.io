/*
 * Note-Circle.js
 * @author Michael Rivera
 * @Description: Contains all the necessities for a musical note's representation/motion on the canvas
 */

// Holds NoteCircle Objects
var NOTE_CIRCLE_ARRAY = new Array();
// Keeps Track of Every 8-Note Phrase in the Song
var NUM_CYCLE = 0;
// Map that keeps track of radius of a particulkar note
var RADIUS_ARRAY_MAP = new Array();
// Size of the Radius Array Map
RADIUS_ARRAY_MAP.length = TOTAL_NOTES_IN_SONG;
var CIRCLE_COLOR = {r:204, g:0, b:102, cssColor:"#CC0066"};
var BLACK = {r:0, g:0, b:0, cssColor:"#000000"};
var WHITE = {r:255, g:255, b:255, cssColor:"#FFFFFF"};


// Initializes the Radius Array with all notes having equal radius
function initializeRadiusArray()
{
	for(var i = 0; i < RADIUS_ARRAY_MAP.length; i++){
		RADIUS_ARRAY_MAP[i] = 12;
	}
}

var generateNoteCircle = function(note)
{
	var place = NUM_CYCLE % 8;
	// Increment the number in this 
	NUM_CYCLE++;
	// Set up the color percentage
	var color_percentage = Math.round((note/87)*100);
	var color_separation = Math.round(color_percentage*0.25);
	// Create Color
	var color = (note <= 40) ? makeGradientColor(BLACK,CIRCLE_COLOR, color_percentage+color_separation) : makeGradientColor(CIRCLE_COLOR, WHITE, (color_percentage-46)+color_separation);
	// Move Screen Start Location
	var screenStep = (suite.canvasEl.width)/20.0;
	// Compute current location
	var loc = screenStep*place+20+suite.canvasEl.width/3;
	// Construct the circle (USING RADIUS_ARRAY_MAP radius)
	var nextCircle = new NoteCircle(loc, 0.0, RADIUS_ARRAY_MAP[note], color, note);
	//console.log("MAP VALUE: " +RADIUS_ARRAY_MAP[note]);
	// Add to our Note Circle Array
	NOTE_CIRCLE_ARRAY.push(nextCircle);
	// Increment RADIUS Map value
	RADIUS_ARRAY_MAP[note] += 0.45;

}

// Circle Class	
var NoteCircle = function(x,y,r, color, note)
{
	this.x = x;
	this.y = y;
	this.radius = r;
	this.color = color;
	this.note = note;
	this.dx = 1.0;										//Math.floor(Math.random()*1000)+10;//negX*10*(440*(Math.pow(2,(note-49)/12)))/1000;
	this.dy = 10*(440*(Math.pow(2,(note-49)/12)))/1000;	//59 has no significance nor does 12; they just worked out correctly
	this.opacity = 1.000;
	this.time = 0;
	this.isBaseNote = note <= 26 ? 1 : 0;
	this.startX = x;
	this.startY = y;
	this.angle = 0.0;
	this.opacitySpeed = 0.001 + (note/1000)*(HALF_STEP_MULTIPLIER/11);
	this.draw = function()
	{	suite.canvasObj.beginPath();
		//suite.canvasObj.fillStyle = this.color;
		suite.canvasObj.fillStyle = "rgba("+this.color.r+","+this.color.g+","+this.color.b+"," +this.opacity+")";
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
		if (this.isBaseNote){
			this.startY += this.dy;
			this.x = this.startX + Math.cos(this.angle) * 100.0;
			this.y = this.startY + Math.sin(this.angle) * 10.0;
			this.angle += 0.1;
		}
		else {
			this.y += this.dy;
		}
		
		if(this.y > suite.canvasEl.height || this.y < 0){
			this.dy = this.dy*-1;
			this.opacity =0;
		}
	}
}


// Draw Function
var draw = function()
{	if(isActive && !IS_PAUSED){
		clearCanvas();
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

// Erases the Canvas 
var clearCanvas = function() 
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

// Clears out the Note-Circle Array and re-initializes it
var eraseNoteCircleArray = function()
{
	NOTE_CIRCLE_ARRAY = new Array();
	initializeRadiusArray();
	NUM_CYCLE = 0;
	clear();
}

// Erases all note circles that are no longer drawn.
var clearEmptyNoteCircles = function(){
	for (i=0; i<NOTE_CIRCLE_ARRAY.length; i++)
	{
		if(NOTE_CIRCLE_ARRAY[i].opacity <= 0){
			NOTE_CIRCLE_ARRAY.splice(i,1);
			i--;
		}
	}	
}









// Interpolates between two colors given a percentage
var makeGradientColor = function(color1, color2, percent) {
    var newColor = {};

    var makeChannel = function(a, b) {
        return(a + Math.round((b-a)*(percent/100)));
    }

    var makeColorPiece = function(num) {
        num = Math.min(num, 255);   // not more than 255
        num = Math.max(num, 0);     // not less than 0
        var str = num.toString(16);
        if (str.length < 2) {
            str = "0" + str;
        }
        return(str);
    }

    newColor.r = makeChannel(color1.r, color2.r);
    newColor.g = makeChannel(color1.g, color2.g);
    newColor.b = makeChannel(color1.b, color2.b);
    newColor.cssColor = "#" + 
                        makeColorPiece(newColor.r) + 
                        makeColorPiece(newColor.g) + 
                        makeColorPiece(newColor.b);
    return(newColor);
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