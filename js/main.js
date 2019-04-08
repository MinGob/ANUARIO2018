function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height() ;

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".not-in-view").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("visible"); 
    } else {
      el.removeClass("visible");
    }
  });
  
});

$(window).on("load" , function(){
    // Select and loop the container element of the elements you want to equalise
    $('.trans-uno-tarjetas').each(function(){  
      // Cache the highest
      var highestBox = 0;
      // Select and loop the elements you want to equalise
      $('.trans-uno-tarjetas-inner', this).each(function(){
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });     
      // Set the height of all those children to whichever was highest 
      $('.trans-uno-tarjetas-inner',this).height(highestBox);         
    }); 

    $('.sus-tarjetas').each(function(){  
      var highestBox = 0;
      $('.sus-tarjetas-inner', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });     
      $('.sus-tarjetas-inner',this).height(highestBox);         
    }); 

    $('.legis-dos-tarjetas').each(function(){  
      var highestBox = 0;
      $('.legis-dos-tarjetas-inner', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });     
      $('.legis-dos-tarjetas-inner',this).height(highestBox);         
    }); 
     $('.sus-tres-carousel').each(function(){  
      var highestBox = 0;
      $('.sus-carousel-item', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });     
      $('.sus-carousel-item',this).height(highestBox);         
    }); 
     $('.trans-tres-tab-tarjetas').each(function(){  
      var highestBox = 0;
      $('.trans-tres-tab-tarjetas-inner', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });     
      $('.trans-tres-tab-tarjetas-inner',this).height(highestBox);         
    }); 
     $('#carouselTa-1').each(function(){  
      var highestBox = 0;
      $('.ta-carousel-tarjetas-inner', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });     
      $('.ta-carousel-tarjetas-inner',this).height(highestBox);         
    }); 
     
});


