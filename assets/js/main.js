/**
* Template Name: Ninestars - v2.3.1
* Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 300, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 300, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 300, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

// new Swiper('.portfolio-details-slider', {
//   speed: 400,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true
//   }
// });

// /**
//  * Clients Slider
//  */
// new Swiper('.clients-slider', {
//   speed: 400,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false
//   },
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 40
//     },
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 60
//     },
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 80
//     },
//     992: {
//       slidesPerView: 6,
//       spaceBetween: 120
//     }
//   }
// });

//counter
// (function ($) {
// 	$.fn.countTo = function (options) {
// 		options = options || {};
		
// 		return $(this).each(function () {
// 			// set options for current element
// 			var settings = $.extend({}, $.fn.countTo.defaults, {
// 				from:            $(this).data('from'),
// 				to:              $(this).data('to'),
// 				speed:           $(this).data('speed'),
// 				refreshInterval: $(this).data('refresh-interval'),
// 				decimals:        $(this).data('decimals')
// 			}, options);
			
// 			// how many times to update the value, and how much to increment the value on each update
// 			var loops = Math.ceil(settings.speed / settings.refreshInterval),
// 				increment = (settings.to - settings.from) / loops;
			
// 			// references & variables that will change with each update
// 			var self = this,
// 				$self = $(this),
// 				loopCount = 0,
// 				value = settings.from,
// 				data = $self.data('countTo') || {};
			
// 			$self.data('countTo', data);
			
// 			// if an existing interval can be found, clear it first
// 			if (data.interval) {
// 				clearInterval(data.interval);
// 			}
// 			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
// 			// initialize the element with the starting value
// 			render(value);
			
// 			function updateTimer() {
// 				value += increment;
// 				loopCount++;
				
// 				render(value);
				
// 				if (typeof(settings.onUpdate) == 'function') {
// 					settings.onUpdate.call(self, value);
// 				}
				
// 				if (loopCount >= loops) {
// 					// remove the interval
// 					$self.removeData('countTo');
// 					clearInterval(data.interval);
// 					value = settings.to;
					
// 					if (typeof(settings.onComplete) == 'function') {
// 						settings.onComplete.call(self, value);
// 					}
// 				}
// 			}
			
// 			function render(value) {
// 				var formattedValue = settings.formatter.call(self, value, settings);
// 				$self.html(formattedValue);
// 			}
// 		});
// 	};
	
// 	$.fn.countTo.defaults = {
// 		from: 0,               // the number the element should start at
// 		to: 0,                 // the number the element should end at
// 		speed: 10,           // how long it should take to count between the target numbers
// 		refreshInterval: 10,  // how often the element should be updated
// 		decimals: 0,           // the number of decimal places to show
// 		formatter: formatter,  // handler for formatting the value before rendering
// 		onUpdate: null,        // callback method for every time the element is updated
// 		onComplete: null       // callback method for when the element finishes updating
// 	};
	
// 	function formatter(value, settings) {
// 		return value.toFixed(settings.decimals);
// 	}
// }(jQuery));

// jQuery(function ($) {
//   // custom formatting example
//   $('.count-number').data('countToOptions', {
// 	formatter: function (value, options) {
// 	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
// 	}
//   });
  
//   // start all the timers
//   $('.timer').each(count);  
  
//   function count(options) {
// 	var $this = $(this);
// 	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
// 	$this.countTo(options);
//   }
// });