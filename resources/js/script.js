$( document ).ready(function() {

  $(document).on("scroll", function() {

  	if($(document).scrollTop()>100) {
  		$("nav").removeClass("navbar-large");
  		$("nav").addClass("navbar-small");
        $(".navbar-nav>li>a").addClass("nav-li-small");
        $(".logo").addClass("logo-small");
        $(".navbar-brand").css("padding-top", "12px");
        
        $(".navbar-toggle").addClass("navbar-toggle-small");
  	} else {
  		$("nav").addClass("navbar-large");
        $("nav").removeClass("navbar-small");
  		$(".navbar-nav>li>a").removeClass("nav-li-small");
        $(".logo").removeClass("logo-small");
        $(".navbar-brand").css("padding-top", "15px");
        
        $(".navbar-toggle").removeClass("navbar-toggle-small");
  	}

  });
    
    $.fn.extend({
      animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
          var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
          };

          for (var t in animations) {
            if (el.style[t] !== undefined) {
              return animations[t];
            }
          }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);

          if (typeof callback === 'function') callback();
        });

        return this;
      },
    });
    
    $('.header-logo').animateCss('rotateIn', function() {
        $('.header-title').toggleClass('invisible');
        $('.header-title').animateCss('bounceInDown', function() {
            $('.title').toggleClass('invisible');
            $('.title').animateCss('fadeIn', function() {
            }); 
        }); 
    });
    
    $('.sv').hover(function(){
        $(this).find(".service-container")
            .animate({marginTop:"0", 
                      width: "100%", 
                      height: "100%",
                      backgroundColor: "rgba(39, 37, 37, 0.9)"},
                     400);
        
        $(this).find(".service-outline")
            .animate({height: "100%",
                     marginTop:"0"},
                     400);
        
        $(this).find(".service-desc")
        .css("display", "block");
    }, function(){
        $(this).find(".service-container")
            .animate({marginTop:"50%",
                      width: "190px",
                      height: "45px",
                     backgroundColor: "rgba(39, 37, 37, 0.5)"},
                     400);
        $(this).find(".service-outline")
            .animate({height: "28px"},
                     400);
        $(this).find(".service-desc")
        .animate({display: "none"},
                 400);
        $(this).find(".service-desc")
        .css("display", "none");

    });

});
