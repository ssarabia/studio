$( document ).ready(function() {
    
/* Navigation scroll */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});    
    
    if ( $(window).width() < 767) {
     $('.nav-container').removeClass('container');
    }else {
        $('.nav-container').addClass('container');
    }
    
    
var total = $('.slick-slideshow img').length,
    rand = Math.floor( Math.random() * total );
    
    $('.clients').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        variableWidth: true,
        pauseOnHover:false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false
              }
            }
        ]

    });

    
    $('.studio').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: 'linear',
        variableWidth: true,
        pauseOnHover:false,
        arrows: false

    });


 var img = new Image();
img.onload = function() { 
    $(".navbar").removeClass("invisible");
    $(".header-logo").removeClass("invisible");
    
    $('.header-logo').animateCss('rotateIn', function() {
        $('.header-title').toggleClass('invisible');
        $('.header-title').animateCss('bounceInDown', function() {
            $('.title').toggleClass('invisible');
            $('.title').animateCss('fadeIn', function() {
            }); 
        }); 
    });
}
img.src = "./resources/img/cover3.png";


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
        
        $(this).find(".service-name")
            .animate({marginTop:"20px"},
                     400);
        
        $(this).find(".service-desc")
        .css("display", "block");
    }, function(){
        $(this).find(".service-container")
            .animate({marginTop:"175px",
                      width: "210px",
                      height: "45px",
                     backgroundColor: "rgba(39, 37, 37, 0.5)"},
                     400);
        $(this).find(".service-outline")
            .animate({height: "28px"},
                     400);
        
        $(this).find(".service-name")
            .animate({marginTop:"0"},
                     400);
        $(this).find(".service-desc")
        .animate({display: "none"},
                 400);
        $(this).find(".service-desc")
        .css("display", "none");

    });
    
    $('.client-logo').hover(function(){
        $(this).removeClass('grey-filter');
    }, function(){
        $(this).addClass('grey-filter');
    });

});


 $(window).resize(function() {
    if ( $(window).width() < 767) {
     $('.nav-container').removeClass('container');
    }else {
        $('.nav-container').addClass('container');
    }
 });