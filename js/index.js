$(document).ready(function(){
  //Initiate Masonry on the div with ID imageGrid
  $('#imageGrid').masonry({
   //Make each div with the class item a Masonry block	
   itemSelector: '.item'
  });
});

$("sticky_nav").stick_in_parent();
	.on("sticky_kit:stick")
	
	});
});

AnimOnScroll( document.getElementById( 'imageGrid' ), {
		minDuration : 0.4,
		maxDuration : 0.7,
		viewportFactor : 0.2
	} );
});
