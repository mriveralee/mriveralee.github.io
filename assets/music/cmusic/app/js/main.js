/**
 * Cmusic - A Musical Visualization
 * @author Michael Rivera
 * Information Design Final Project - Spring 2012
 * Based on Alexander Chen's Baroque.Me - (http://www.baroque.me)
 **/

// Color of the canvas background.
var CANVAS_COLOR = "#3D1D40";
//"#3f41b0"; //"#543040";
// Color Storage For When In Party Mode
var ORIGINAL_CANVAS_COLOR = CANVAS_COLOR;
// Optional Party Mode - in memory of D. Sharple's Mini Maya Project
var PARTY_MODE = false;
// Did the User Pause Playback?
var IS_PAUSED = false;
// Initialize mouse position on the page (Not constant)
var mouseX = 0, mouseY = 0;

/**
 * Local namespace
 * @type {Object}
 **/

 // Array of pseudo-random colors
var RANDOM_COLOR_ARRAY = ["#E3CBAC", "#9C9985", "#C46D38", "#788880", "#324654" ];
// Tells us if our song has finished playing and is due to restart
var SONG_RESTART = 0;
// Suite is what carries all of our sound data and the sound manager
var suite = {};

// Place of Next Note To Be Played
var SONG_PLACE = 0;
// How often to run our update function? In milliseconds. so 33 would be around 30 frames per second.
var UPDATE_INTERVAL = 225;

// How often we draw our shapes
var UPDATE_CIRCLES_INTERVAL =  15.369;//11.33333338888889;  // try 33 ?

// How many total notes/pitches do we have? Make sure this matches the compiled sound SWF.
var TOTAL_NOTES = 65;

// How Much Of The Sounds We Have Loaded
var LOAD_PERCENTAGE = 0;

// How Many Songs Are Loaded From The Song?
var NUM_NOTES_LOADED =0;

// How many total notes are in the song
var TOTAL_NOTES_IN_SONG = SONG_DATA_ARRAY.length;

// The value to multiply a length of string to move up one half-step, by Pythagorean scale.
var HALF_STEP_MULTIPLIER = 0.94921875;


////////////////////////////////////////
// Defines SetInterval Var For draw()
var DRAW_INTERVAL_CONTROL;

// Defines SetInterval Var For updateLoop()
var UPDATE_LOOP_INTERVAL_CONTROL;
var MATH_PI = Math.PI;

/*
 * Mapping of MIDI notes from SONG_DATA_ARRAY into our musical note scale
 * NOTE: this is note currently used as  MIDI array- this is for later use, if we decide to allow
 * the user to upload a midi file for a visualization.
 */
var MIDI_MAP = {
  // Numerical keys.
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  '11': 11,
  '12': 12,
  '13': 13,
  '14': 14,
  '15': 15,
  '16': 16,
  '17': 17,
  '18': 18,
  '19': 19,
  '20': 20,
  '21': 21,
  '22': 22,
  '23': 23,
  '24': 24,
  '25': 25,
  '26': 26,
  '27': 27,
  '28': 28,
  '29': 29,
  '30': 30,
  '31': 31,
  '32': 32,
  '33': 33,
  '34': 34,
  '35': 35,
  '36': 36,
  '37': 37,
  '38': 38,
  '39': 39,
  '40': 40,
  '41': 41,
  '42': 42,
  '43': 43,
  '44': 44,
  '45': 45,
  '46': 46,
  '47': 47,
  '48': 48,
  '49': 49,
  '50': 50,
  '51': 51,
  '52': 52,
  '53': 53,
  '54': 54,
  '55': 55,
  '56': 56,
  '57': 57,
  '58': 58,
  '59': 59,
  '60': 60,
  '61': 61,
  '62': 62,
  '63': 63,
  '64': 64
};


/**
 * SoundManager initialization.
 */
soundManager.url ='swf/sm2/'; // directory where SM2 .SWFs live
soundManager.flashVersion = 9;
soundManager.useFastPolling = false;
soundManager.useHighPerformance = true;
soundManager.useFlashBlock = true;
soundManager.debugMode = false; // disable debug mode after development/testing..
soundManager.wmode = 'transparent';
soundManager.debugFlash = false;
// When sound manager is ready, it will trigger this.
soundManager.onready(function() {
  suite.indNoteLd = 1;
  // start loading first sound
  suite.smLoadSnd(1);
});

/**
 * Start the process once everything's loaded.
 */
suite.everythingIsReady = function() {
  initializeRadiusArray();
  if (suite.ready) { return; }
  suite.ready = true;

  if (!isActive || IS_PAUSED){
      pausedPlayback();
  }
  animateTitle();
  setInterval(updateLoop, UPDATE_INTERVAL);
  setInterval(draw, UPDATE_CIRCLES_INTERVAL);
  animateSubTitle();

};





var startIntervals = function(){
  DRAW_INTERVAL_CONTROL = setInterval(updateLoop, UPDATE_INTERVAL);
  UPDATE_LOOP_INTERVAL_CONTROL= setInterval(draw, UPDATE_CIRCLES_INTERVAL);

}

var stopIntervals = function(){
  clearInterval(DRAW_INTERVAL_CONTROL);
  clearInterval(UPDATE_LOOP_INTERVAL_CONTROL);
}


/**
 * Start the loading process.
 */
suite.init = function() {

  suite.ready = false;
  suite.initMidiMap();
  // set v=# in  url
  suite.urlVersion = parseInt(getQueryVariable('v'));

  // add resize listener
  window.addEventListener('resize', rsize, false);
  // mouse actions // IN CASE WE WANT TO ADD ONCLICK LISTENERS
  document.addEventListener('mousemove', function (e) {
    mouseX = e.pageX; mouseY = e.pageY;
    //console.log("MOUSE (" + mouseX + ", "+ mouseY + ")");
  }, false);
  document.addEventListener('mousedown', function (e) {
    mousePressed = true;
    //if (suite.machine.mouseDown != undefined) suite.machine.mouseDown(e);
    e.preventDefault();
  }, false);
  document.addEventListener('mouseup', function (e) {
    mousePressed = false;
    /*if (suite.machine.mouseUp != undefined) suite.machine.mouseUp(e);
  */}, false);

  // PARTY MODE && PAUSED MODE
  document.addEventListener('keydown', function(e) {
    //console.log("KEY PRESSED");

    // If Key == {O}
    if(e.which == 79) {
      PARTY_MODE = (!PARTY_MODE);
      if (PARTY_MODE)
        CANVAS_COLOR = "##2e30a6";
      else
        CANVAS_COLOR = ORIGINAL_CANVAS_COLOR;
    }
    // If Key == {P}
    if (e.which == 80 ){
      IS_PAUSED = (!IS_PAUSED);
      if(IS_PAUSED)
          pausedPlayback();
      else
        resumePlayback();
    }
  },false);
  // initialize canvas
  suite.canvasEl = document.getElementById('main-canvas');
  suite.canvasObj = suite.canvasEl.getContext('2d');
  // Create guitar class.
  //suite.machine = new Machine(suite.canvasObj);
  suite.indNoteLd = 0;
  // invoke resize listener once now
  rsize();
  // Build our machine.
 /* suite.machine.build();
  suite.machine.beginLoading();
 */ // Begin update loop.
  //setInterval(updateLoop, UPDATE_INTERVAL);
};

/**
 * Convert our MIDI_MAP into a numerical-indexed lookup array.
 * Note this is not currently a midi array
 */
suite.initMidiMap = function() {
  suite.arrMidiMap = new Array();
  var n;
  for (key in MIDI_MAP) {
    n = parseInt(key);
    suite.arrMidiMap[n] = MIDI_MAP[key];
  }
};

/**
 * Update loop run via setInterval (see everythingIsReady)
 */
var updateLoop = function() {
  if (suite.ready && SONG_RESTART == 0 && isActive && !IS_PAUSED){
    var val = parseInt(SONG_DATA_ARRAY[SONG_PLACE]);
    suite.smPlayNote(val, 1.00, 0);
    //console.log("updateLoop: Played SONG_PLACE- " + SONG_PLACE);

    //var color_selector = (Math.round(Math.random()*1000) + (SONG_PLACE-1))%5;
    //var next_color = RANDOM_COLOR_ARRAY[color_selector];
    //generateNoteCircle(next_color, SONG_DATA_ARRAY[SONG_PLACE]);
    generateNoteCircle(SONG_DATA_ARRAY[SONG_PLACE]);
    SONG_PLACE++;
    //$("#test").css("background-color", next_color);
    if (SONG_PLACE >= SONG_DATA_ARRAY.length){
      SONG_PLACE = 0;
      SONG_RESTART = 44;
      eraseNoteCircleArray();
    }
  }
  else if (SONG_RESTART >0 && isActive && suite.ready && !IS_PAUSED){
    SONG_RESTART--;
  }

  //suite.machine.upd();
};

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

// tempoary - put this in init function called from body.onLoad
init = function() {
  suite.init();
};

/**
 * Start loading of given sound.
 */
suite.smLoadSnd = function(indPm) {
  //var pre = indPm < 10 ? "0" : "";
  var audioFolder = "audio/piano";
  var snd = soundManager.createSound({
    id: 'note'+indPm,
    url: audioFolder+'/'+indPm+".mp3",
    autoLoad: true,
    multiShot: true,
    multiShotEvents: false,
    onload: function() { suite.smLoadedSnd(this['ahcInd']); }
  });
  snd['ahcInd'] = indPm; // store its index number
  NUM_NOTES_LOADED++;

}

/**
 * Triggered after a sound has been loaded.
 */
suite.smLoadedSnd = function(indPm) {
  suite.indNoteLd = indPm; // Store note last loaded.
  // Are we done?
  if (suite.indNoteLd >= TOTAL_NOTES-1) {
    // done loading
    suite.smLoadedAll();
  } else {
    // Which sound to load next.
    suite.indNoteLd++;
    suite.smLoadSnd(suite.indNoteLd); // Else load the next one.
    updateLoadingPercentage();
  }
  /*
  // Tell it we are done, so update loop will load next sound.
  suite.currSoundLoaded = true;
  */
}

/**
 * Tell Sound Manager to play a particular note at given pitch, volume, pan.
 */
suite.smPlayNote = function(pitchPm, volPm, panPm) {
  // what sound do we want to play?
  var snd = soundManager.getSoundById('note'+pitchPm);
  if (snd == null) return;
  // stop it first
  // ** Will want to change this so it only stops if more than a few
  // notes are playing
  //snd.stop();
  // play normally
  snd.play({
    volume:100.0*volPm,
    pan:100.0*panPm
  });
};

/**
 * Sound manager is loaded
 */
suite.smLoadedAll = function() {
  suite.soundAvailable = true;
  suite.soundReady = true;
  //console.log("smLoadedAll: EVERYTHING IS READY");
  suite.everythingIsReady();
};

/**
 * Resize event, whenever browser is resized.
 * Stores new window width and height.
 */
var rsize = function() {
  width = window.innerWidth;
  height = window.innerHeight;
  suite.canvasEl.width = window.innerWidth;
  suite.canvasEl.height = window.innerHeight;
   //$('#loader').css('z-index', "-1000");
  // INSERT RESIZE FOR LOADING IF NEEDED

  //if (suite.machine != null) suite.machine.rsize();
};

// Updates the Loading Sequence Percentage OnLoad
var updateLoadingPercentage = function(){
  // Set current percentage of sound files loaded
  LOAD_PERCENTAGE = Math.round(NUM_NOTES_LOADED/64 * 100);
  // Update percentage that appears on screen
  $('#loader').text("Loading " + "("+LOAD_PERCENTAGE + "%)");
  // If we have all sound files hide the loader info & launch the title
  if (LOAD_PERCENTAGE >= 100){
    $('#loader').text("");
    $('#loader').css('z-index', "-1000");
    $('#loader').css('display', "none");
    // Launch the title animation
  }
}

// Animates the Title Sequence
var animateTitle = function(){
  $('#title').html("<span style='font-family: Helvetica'>Prelude in C Major</span><br> by J.S. Bach");
   $('#title').animate({
    opacity: 1.0
  }, 3000, function() {
    // Animation complete.
  });
     $('#title').animate({
    opacity: 0.0},
    4000,
    function() {
    // Animation complete.
  });
}

// Animates Visualization The SubTitle
var animateSubTitle = function(){
  $('#visual-title').text('A Musical Visualization');
  $('#visual-title').animate({
    opacity: 1.0},
    3000,
    function() {
    // Animation complete.
  });
  $('#visual-title').animate({
    opacity: 0.0},
    4000,
    function() {
    // Animation complete.
  });
}


// Help Dialog Ready/Construction
$(document).ready(function() {
// Help Dialog
 $("#help-launcher").click(function () { showHelpDialog();});


// Displays the Help Information Dialogue
 var showHelpDialog = function(){
    $('#help-dialog').dialog('open');
  }

// Sets up the help-dialog
$(function() {
    $("#help-dialog").dialog({
      autoOpen: false,    // set to false
      minHeight: 350,
      maxHeight: 350,
      minWidth: 600,
      maxWidth: 600,
      modal: false,
      open: function(event, ui) {
              $('#sheet-link').blur();
              //$('.ui-dialog :button').blur();
          },
      navigation: true

        })
    });
});


// Convert Hex String to RGB/RGBa Value
function hex2rgb(hex, opacity) {
  var rgb = hex.replace('#', '').match(/(.{2})/g);

  var i = 3;
  while (i--) {
    rgb[i] = parseInt(rgb[i], 16);
  }

  if (typeof opacity == 'undefined') {
    return 'rgb(' + rgb.join(', ') + ')';
  }

  return 'rgba(' + rgb.join(', ') + ', ' + opacity + ')';
};

/**
 * For version testing purposes, get a variable out of URL
 * @param {Element} variable string (e.g. "id")
 * @return {number} variable value (e.g. 25)
 */
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return null;
}
