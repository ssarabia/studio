$( document ).ready(function() {

  $(document).on("scroll", function() {

  	if($(document).scrollTop()>100) {
  		$("nav").removeClass("navbar-large");
  	} else {
  		$("nav").addClass("navbar-large");
  	}

  });

});
