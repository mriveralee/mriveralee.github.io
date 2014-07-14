/*
* Craftyslide
* Originally created by: Abid Din - http://craftedpixelz.co.uk
* Modifications by Michael Rivera - http://mikeriv.com 
* Version: 1.0
* Copyright: Crafted Pixelz 
* License: MIT license
* Updated: 7th June 2011
*/

(function ($) {
    $.fn.craftyslide = function (inOptions) {
        var currentSlideNum = 1;
        var maxSlideNum = 0;
        var $nextImage = null;
        var fadeOutCount = 0;

        // Defaults
        var defaults = {
            "pagination": true,
            "fadetime": 520,
            "delay": 5000,
            "container-id": $(this).attr('id')
        };
        var options = $.extend(defaults, inOptions);

        return this.each(function () {

            // Vars
            var $this = $(this);
            var $slides = $this.find("li");

            // Pagination
            function paginate() {
                var numSlides = $slides.length;
                var i = (numSlides > 1) ? 1 : 0;
                $this.append("<div class='pagination' />");
                if (numSlides > 1) {

                    i = 1;
                    $slides.each(function () {
                        $(this).attr("id", "slide" + i);
                        $(".pagination").append("<span><a class='no-selection' data-slide=" + i + ">" + " " + "</a></span>");
                        i++;
                    });
                    
                    $(".pagination span a:first").addClass("active");
                }
                    // Max slide num is i
                    currentSlideNum = 1;
                    maxSlideNum = i;
            }

            // Add captions
            function captions() {
                $slides.each(function () {
                    $caption = $(this).find("img").attr("title");
                    if ($caption !== undefined) {
                        $(this).prepend("<p class='caption'>" + $caption + "</p>");
                    }
                    $slides.filter(":first").find(".caption").css("bottom", 0);
                });
            }

            // Manual mode
            function manual() {
                var $pagination = $(".pagination span a");
                $pagination.click(function (e) {
                    e.preventDefault();
                    var targetAnchor = e.target;
                    if (!targetAnchor) return;
                    prevSlideNum = currentSlideNum;
                    currentSlideNum = $(targetAnchor).data('slide');

                    if (currentSlideNum == prevSlideNum) {
                        // Do nothing if we clicked the same
                        return;
                    }

                    //console.log("Clicked slide:"+currentSlideNum);
                    var $current = $('#slide'+currentSlideNum);
                    if ($current.is(":hidden")) {
                        $slides.toggleClass(CSS_ANIMATION.FadeInInstant, false);
                        $slides.toggleClass(CSS_ANIMATION.FadeOutInstant, true);
                        $nextImage = $current;
                        fadeOutCount = 0;
                        $pagination.removeClass("active");
                        $(this).addClass("active");
                        $(".caption").css("bottom", "-37px");
                        $current.find(".caption").delay(300).animate({
                            bottom: 0
                        }, 300);
                    }
                });
            }

            // Auto mode
            function auto() {
                setInterval(function () {
                    $slides.filter(":first-child").fadeOut(options.fadetime).next("li").fadeIn(options.fadetime).end().appendTo(".project-slideshow ul");

                    $slides.each(function () {
                        if ($slides.is(":visible")) {
                            $(".caption").css("bottom", "-37px");
                            $(this).find(".caption").delay(300).animate({
                                bottom: 0
                            }, 300);
                        }
                    });

                }, options.delay);
            }

            // Move to next page
            function nextSlide() {
                // increment slide number
                prevSlideNum = currentSlideNum;
                currentSlideNum = currentSlideNum + 1;
                
                // Cycle the slides, if necessary
                currentSlideNum = (currentSlideNum < maxSlideNum) ? currentSlideNum : 1;

                //console.log("Image slide:"+currentSlideNum);
                var $pagination = $(".pagination span a");
                var $currentImage = $('#slide'+currentSlideNum);

                // if ($currentImage.is(":hidden")) {
                    //$slides.fadeOut(options.fadetime);
                    $slides.toggleClass(CSS_ANIMATION.FadeInInstant, false);
                    $slides.toggleClass(CSS_ANIMATION.FadeOutInstant, true);

                    $nextImage = $currentImage;
                    fadeOutCount = 0;
                    //$slides.css({'display': 'none'});
                    // $currentImage.toggleClass(CSS_ANIMATION.FadeOutInstant, false);
                    // $currentImage.toggleClass(CSS_ANIMATION.FadeInInstant, true);
                    // $currentImage.css({'display': 'block'});
                    //$currentImage.fadeIn(options.fadetime);
                    $pagination.removeClass("active");
                    var pageIndicator = $this.find('a[data-slide="'+currentSlideNum+'"]');
                    pageIndicator.addClass("active");
                    $(".caption").css("bottom", "-37px");
                    $currentImage.find(".caption").delay(300).animate({
                        bottom: 0
                    }, 300);
                // }
            }


            function initAnimationListeners() {
                // ANIMATION END - Bind Display:none event to the animationend iff it is fade-out
                for (var i = 0; i < $slides.length; i++) {
                  $($slides).bind(CSS_ANIMATION.EndEvent, function(){
                    // this => element that just animated
                    var classes = this.classList;
                    for (var i = 0; i < classes.length; i++) {
                      var animClass = classes[i];
                      // When we finish the fade-out, remove the class, swap the content,
                      // then trigger a fade-in
                      switch(animClass) {
                        case CSS_ANIMATION.FadeOutInstant:
                          // Remove fade-out
                          $(this).css({'display': 'none'});
                          fadeOutCount++;
                          if (fadeOutCount == $slides.length) {
                            $nextImage.toggleClass(CSS_ANIMATION.FadeOutInstant, false);
                            $nextImage.css({'display': 'block'});
                            $nextImage.toggleClass(CSS_ANIMATION.FadeInInstant, true);

                          }
                          break;
                        case CSS_ANIMATION.FadeInInstant:
                            break;
                      }
                    }
                  });
                }
            }


            // Check Boolean values
            if (options.pagination === true) {
                paginate();
            } else {
                auto();
            }

            captions(); manual();

            //Add click listener for images
            $slides.click(function(){
                nextSlide();
            });

            

            initAnimationListeners();
            // Toggle visibility for slides

            var $startImg = $('#slide'+currentSlideNum);

            $slides.toggleClass(CSS_ANIMATION.FadeOutInstant, true);
            $slides.toggleClass(CSS_ANIMATION.FadeOutInstant, true);
            $slides.css({'display': 'none'});
            $startImg.toggleClass(CSS_ANIMATION.FadeOutInstant, false);
            $startImg.toggleClass(CSS_ANIMATION.FadeInInstant, true);
            $startImg.css({'display': 'block'});





        });
    };
})(jQuery);