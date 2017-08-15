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

        // Defaults
        var defaults = {
            "width": 600,
            "height": 300,
            "pagination": true,
            "fadetime": 350,
            "delay": 5000,
            "container-id": $(this).attr('id')
        };
        var options = $.extend(defaults, inOptions);

        return this.each(function () {

            // Vars
            var $this = $(this);
            var $slides = $this.find("ul li");
            var $images = $this.find(".project-img-slides");

            $slides.not(':first').hide();

            // Pagination
            function paginate() {
                $this.append("<div id='pagination' />");
                
                var i = 1;
                $slides.each(function () {
                    $(this).attr("id", "slide" + i);
                    $("#pagination").append("<span><a class='no-selection' data-slide=" + i + ">" + " " + "</a></span>");
                    $( "div" ).data( "test", { first: 16, last: "pizza!" } );

                    i++;
                });
                
                $("#pagination span a:first").addClass("active");

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
                var $pagination = $("#pagination span a");
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

                    console.log("Clicked slide:"+currentSlideNum);
                    var $current = $('#slide'+currentSlideNum);
                    if ($current.is(":hidden")) {
                        $slides.fadeOut(options.fadetime);
                        $current.fadeIn(options.fadetime);
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
                currentSlideNum = (currentSlideNum < maxSlideNum) ?
                currentSlideNum : 1;

                console.log("Image slide:"+currentSlideNum);
                var $pagination = $("#pagination span a");
                var $currentImage = $('#slide'+currentSlideNum);
                if ($currentImage.is(":hidden")) {
                    $slides.fadeOut(options.fadetime);
                    $currentImage.fadeIn(options.fadetime);
                    $pagination.removeClass("active");
                    var pageIndicator = $this.find('a[data-slide="'+currentSlideNum+'"]');
                    pageIndicator.addClass("active");
                    $(".caption").css("bottom", "-37px");
                    $currentImage.find(".caption").delay(300).animate({
                        bottom: 0
                    }, 300);
                }
            }

            // Width
            $this.width(options.width);
            $this.find("ul, li img").width(options.width);

            // Height
            $this.height(options.height);
            $this.find("ul, li").height(options.height);

            // Check Boolean values
            if (options.pagination === true) {
                paginate();
            } else {
                auto();
            }

            captions(); manual();

            //Add click listener for images
            $images.click(function(){
                nextSlide();
            });

        });
    };
})(jQuery);