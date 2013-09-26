/*Script creates parallax effect when scrolling for both horizontal or vertical.
*
*
*/

$(window).bind('scroll',function(e) {
	parallaxEffect();
});

function parallaxEffect() {
	//Enable or disable horizontall scrolling with mouse wheel
	var settings = new Array();	
	settings.HorizontalScrolling = false;	
	
	if (settings.HorizontalScrolling == false) {
	    // Positioning and Styling all Parallax Layers
	    $('.parallax-layer').css({width:100%; top:0; left:0; right:0; });
	    layerPositioning();
	
	    // Repositioning Layers on scrolling
		scrollControl('top');	
	}
	else if (settings.HorizontalScrolling == true) {
		//Disabling vertical scroll for horizontall scroll
		$("html, body").mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});

	    // Positioning and Styling all Parallax Layers
	    $('.parallax-layer').css({height:100%; top:0; bottom:0; left:0; });
	    layerPositioning();
	
	    // Repositioning Layers on scrolling
		scrollControl('left');	
	}
}

function layerPositioning() {
    // Positioning and Styling all Parallax Layers
	$('#layer-1').css({z-index:4; position:relative; });
	$('#layer-2').css({z-index:3; position:fixed; });
	$('#layer-3').css({z-index:2; position:fixed; });
	$('#layer-4').css({z-index:1; position:fixed; });	
}

function scrollControl(spot) {
	// Repositioning Layers on scrolling
	var scrolled = $(window).scrollTop();
	$('#layer-4').css(spot,(0-(scrolled*.25))+'px');
	$('#layer-3').css(spot,(0-(scrolled*.5))+'px');
	$('#layer-2').css(spot,(0-(scrolled*.75))+'px');	
}