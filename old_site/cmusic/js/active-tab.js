/*
 * Simple Check for verifying that user is still in the active tab/window
 *
 *
 */
var isActive = true;


$(window).focus(function() {
 	isActive = true;
	//console.log("playing " +LOAD_PERCENTAGE);
	resumePlayback();
});



$(window).blur(function() {
   isActive = false;
	//console.log("paused " + LOAD_PERCENTAGE);
	pausedPlayback();
});


/*
// Prints Current Tab Status
setInterval(function () {
  console.log(window.isActive ? 'active' : 'inactive');
}, 1000);
*/

var pausedPlayback = function(){
	if (LOAD_PERCENTAGE >= 100){
  		//stopIntervals();
  		if(IS_PAUSED || !isActive){
	  	 	$('#paused').text("Paused");
	    	$('#paused').css('z-index', "100001");
	    }

	}
}

var resumePlayback = function(){
	if (LOAD_PERCENTAGE >= 100){
		//startIntervals();
		if(!IS_PAUSED && isActive){
			$('#paused').text("");
			$('#paused').css('z-index', "-100001");
		}
	}
}