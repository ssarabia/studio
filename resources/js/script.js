$( document ).ready(function() {

  $(document).on("scroll", function() {

  	if($(document).scrollTop()>100) {
  		$("nav").removeClass("navbar-large");
  		$("nav").addClass("navbar-small");
  	} else {
  		$("nav").addClass("navbar-large");
        $("nav").removeClass("navbar-small");
  		
  	}

  });

});
