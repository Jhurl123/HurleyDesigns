$(document).ready(function() {
	
	function head(){
	var message1 = $('.message1');
	var message2 = $('.message2');
	var message3 = $('.message3');
	
	
	message1.delay(500).fadeIn(1000);
	message2.delay(2500).fadeIn(1000);
	message3.delay(4500).fadeIn(1000);
	
	}
	head();
	
	var $animationElements = $('.animation-element');
	var $window = $(window);
	
	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);
		
		$.each($animationElements, function(){
			
			var $element = $(this);
		
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top ;
			var element_bottom_position = (element_top_position + element_height);
			
			//check to see if the curre containeris within viewport
           if((element_bottom_position >= window_top_position) &&
		   (element_top_position <= window_bottom_position)) {
			   $element.addClass('inView');
			  
	
			   	
		}
		
		    else {
				$element.removeClass('inView');
						
			}
	});
	}
	$window.on('scroll', check_if_in_view);
	
	$window.on('scroll resize', check_if_in_view);
	
	$window.trigger('scroll');
	
	
	
function readyFn(){
	 var text = $(".text");
	 
	 text.removeClass("hidden");
	 
	 
}
$( window ).on( "load", readyFn );



	
$(function() {
  var text = $(".text");
  var didScroll = false;
    var height = $(document).height();
  var winHeight = $(window).height();
    var winWidth = $(document).width();  
 
  if( winWidth <= 900){
	  console.log("hhgj");
      text.css("position" , "absolute");
  }
  $(window).scroll(function() {
	  didScroll = true;
  });
  
  setInterval(function() {
	  
	  if(didScroll == true){
    var scroll = $(window).scrollTop();
	}

	
	else{
		var scroll = 0;
	}
	
	
	if(scroll <= 50) {
		
		text.removeClass("hidden");
	}
	else if( scroll ==(height-winHeight)){
		text.removeClass("hidden");
	}
   else  {
      text.addClass("hidden");
	  
    }
  }, 250);
  
 
  
});


$(function() {
  function filterPath(string) {
    return string
      .replace(/^\//,'')  
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')  
      .replace(/\/$/,'');
  }
  $('a[href^=\\#]').each(function() {
    if ( filterPath(location.pathname) == filterPath(this.pathname)
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
	  
       if ($target) {
         var targetOffset = $target.offset().top;
		 
         $(this).click(function() {
           $('html, body').animate({scrollTop: targetOffset}, 2000);
           return false;
		   
         });
      }
    }
  });

	
	});
	
});
	
	
	
	
