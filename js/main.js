(function($) {

	"use strict";


    // preloader
    // $(window).on('load', function(){
    //   $('#preloader').fadeOut('slow',function(){$(this).remove();});
    // });

    // Smoothly scroll
    $("#scroll").click(function (){
          $('html, body').animate({
              scrollTop: $("#get-ticket").offset().top
          }, 1200);
      });


    // Navbar Animation
     jQuery('#main-nav').stellarNav({
        theme: 'light',
        breakpoint: 991,
        openingSpeed: 200,
        closingDelay: 50,
        position: 'right',
        sticky: false
    });

    // Navbar Scroll To Fixed
    $('.sticky-header').scrollToFixed();


    //quick support jquery
    $('.tooglequicksupport a').click(function(){
        $('.notification-bar').addClass( "highlight" );
    });
    $('.notification-close a').click(function(){
        $('.notification-bar').removeClass( "highlight" );
    });



    // fit_modal
    $('.my-modal').fit_modal();




    // masonry
    var $grid = $('.grid').imagesLoaded( function() {
      // init Masonry after all images have loaded
      $grid.masonry({
        itemSelector: '.grid-item',
      });
    });


    // Photo carousel
    if($('.photo-carousel').length){
        $('.photo-carousel').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            center: false,
            navText: [
              '<i class="fa fa-long-arrow-left"></i>',
              '<i class="fa fa-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }


    // Gallery-slider
    if($('.gallery-slider').length){
        $('.gallery-slider').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 700,
            // navText: [
            //   '<i class="arrow_left"></i>',
            //   '<i class="arrow_right"></i>'
            // ],
            responsive: {
                0: {
                    items: 2,
                    center: false
                },
                575:{
                    items:3,
                    center: false
                },
                600: {
                    items: 3,
                    center: false
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        })
    }



    // Tab
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').click(function (g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
    } );


    // Background Image Call Script
    if ($('.background-image').length > 0) {
        $('.background-image').each(function () {
            var src = $(this).attr('data-src');
            $(this).css({
                'background-image': 'url(' + src + ')'
            });
        });
    }

    // CounterUp
    $('.counter').counterUp({
          delay: 10,
          time: 1000
      });


    // Parallax background
    // $('.jarallax').jarallax({
    //     speed: 0.5
    // });


    //Scroll-Up
    dyscrollup.init({
        showafter : 500,
        scrolldelay : 1000,
        position : 'right',
        shape : 'squre',
        width : "20",
        height : "20"
    });



    // Parallax Animation
    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);
    // var scene = document.getElementById('scene-2');
    // var parallaxInstance = new Parallax(scene);







})(window.jQuery);