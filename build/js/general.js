// JavaScript Document
"use strict";
// jQuery = jQuery.noConflict();

var DataSync = {
    /*
     Function Name : init
     script to functions call on page load
     @version: 2018-10-04 updated
     */
    init: function() {
        $(window).on("load", function() {
           
            DataSync.loadResize();
            
        });
        $(window).on("resize", function(e) {
            DataSync.loadResize();
        });
        // Function call for anchor preventdefault
        DataSync.anchorpreventDefault();
        // Function call for sticky footer
        DataSync.footerAdj();
        // Function call for all input text box place holder
        DataSync.placeholderFallback();
        // menu navigation
        DataSync.mainNav();
         // carousel
         DataSync.carousel();
        // custom select
        DataSync.select();
        // book a demo
        DataSync.bookDemo();
    },


    /*
     Function Name : loadResize
     script to functions call on page load and window resize
     @version: 2018-10-04 updated
     */
    loadResize: function() {
        //load resize script starts
        DataSync.footerAdj();
       
        //Reset the width value on window resize
        DataSync.windowWidth = document.body.clientWidth;
        //condition for the device width greater then and equal to 768
        if (DataSync.windowWidth >= 768) {}
        if (DataSync.windowWidth < 1200) {
           
        }
        //condition for the device width less then and equal to 768(mobile devices)
        else {};
        //load resize script ends 
    },

    // Script for check mobile, Ipad and desktop device
    windowIs: {
        mobileSmall: function() {
            DataSync.windowWidth = document.body.clientWidth;
            return DataSync.windowWidth <= 480;
        },
        mobile: function() {
            DataSync.windowWidth = document.body.clientWidth;
            return DataSync.windowWidth <= 767;
        },
        tablet: function() {
            DataSync.windowWidth = document.body.clientWidth;
            return DataSync.windowWidth <= 991 && DataSync.windowWidth >= 767;

        },
        desktop: function() {
            DataSync.windowWidth = document.body.clientWidth;
            return DataSync.windowWidth >= 991;
        },
        desktopLarge: function() {
            DataSync.windowWidth = document.body.clientWidth;
            return DataSync.windowWidth >= 1199;
        },
    },
    /*
    Function Name :  anchor prevent default
    */
    anchorpreventDefault: function() {
        $("a[href='#']").click(function(e) {
            e.preventDefault();
        })
    },
    /*
    Function Name :  Sticky Footer 
    */
    footerAdj: function() {
        var footerH = $("footer").outerHeight();
        $("footer").css({ "margin-top": -footerH });
        $(".wrapper").css({ "padding-bottom": footerH });
    },
     /*
     Function Name :  carousel
     script for owl carousels 
     */
     carousel: function() {
        // Input place holder is visible on focus
        $('.banner-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots: false,
            items: 1
        })
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:10,
            dotsEach:true,
            responsive:{
                0:{
                    items:1,
                    dots: true,
                    nav:true,
                },
                992:{
                    items:2,
                    dots: true,
                    nav:true,
                }
            }

        })
        
    },
    /*
     Function Name :  select
     script for place holder fall back for internet explorer
     */
     select: function() {
          if ($(".country-select").length > 0 && $(".no-default-select2").length == 0) {
            $('.country-select').select2({
                width: '100%',
                templateResult: function (country) {
                    var id = country.id ? country.id.toLowerCase() : '';
                    var flagName;
                    if(id === 'en'){
                        flagName = 'gb'
                    }else if(id === 'fe'){
                        flagName = 'fr'
                    }
                    else if(id === 'de'){
                        flagName = 'de'
                    }
                    var $span = $("<span><i class=\"mr-2 fi fi-" + flagName + "\"></i><span class=\"language-text\">" + country.text + "</span></span>");
                    return $span;
                },
                templateSelection: function (country) {
                    var id = country.id ? country.id.toLowerCase() : '';
                    var flagName;
                    if(id === 'en'){
                        flagName = 'gb'
                    }else if(id === 'fe'){
                        flagName = 'fr'
                    }
                    else if(id === 'de'){
                        flagName = 'de'
                    }
                    var $span = $("<span><i class=\"mr-2 fi fi-" + flagName + "\"></i><span class=\"language-text\">" + country.text + "</span></span>");
                    return $span;
                },
                minimumResultsForSearch: -1,
            });
        }  
        if ($(".custom-select").length > 0 && $(".no-default-select2").length == 0) {
            $('.custom-select').select2({
                width: '100%',
                minimumResultsForSearch: -1
            });
        }
        
    },
    /*
     Function Name :  placeholderFallback
     script for place holder fall back for internet explorer
     */
    placeholderFallback: function() {
        // Input place holder is visible on focus
        $(".form-control").each(
            function() {
                $(this).data('holder', $(this).attr('placeholder'));
                $(this).focusin(function() {
                    $(this).attr('placeholder', '');
                });
                $(this).focusout(function() {
                    $(this).attr('placeholder', $(this).data('holder'));
                });

            });
    },
    /*
    Function Name :  mainNav
    script for Header navigation menu
    */
    mainNav: function() {
        $(".hamburger-icon").click(function(e) {
            e.stopImmediatePropagation();
            $("html,body").toggleClass("open");
            // if ($("body").hasClass("open")) {
            //     $(".overlay").fadeIn();
            // } else {
            //     $('.overlay').fadeOut();
            // }
        });
        $(document).bind('click', function(e) {
            $("html,body").removeClass("open");
            // $('.overlay').fadeOut();
        });
        
        if ($(window).width() > 768) {
            $(".has-submenu").on("mouseover", function () {
                $(this).closest("li").find(".submenu").slideDown('slow');
            });
            $(".has-submenu").on("mouseleave", function () {
                $(this).closest("li").find(".submenu").slideUp('slow');
            });
        }else{
            // $("nav").click(function (e) {
            //     e.preventDefault();
            //     e.stopImmediatePropagation();
            // })
            $(".has-submenu > a .dropdown-arrow").click(function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).closest("li").siblings("li").find(".submenu").slideUp();
                $(this).closest("li").siblings("li").removeClass("submenu-open");
                $(this).closest("li").siblings("li").find(".has-submenu").removeClass("submenu-open");
                $(this).closest("li").find("> .submenu").slideToggle();
                $(this).closest("li").find("> .submenu li.has-submenu").removeClass("submenu-open");
                $(this).closest("li").find("> .submenu li.has-submenu .submenu").slideUp();
                $(this).closest("li").toggleClass("submenu-open");
        
            });
        }
        if ($(window).scrollTop() > 0) {
            $('header').addClass('sticky-header');
        } else {
            $('header').removeClass('sticky-header');
        }
        $(window).on( 'scroll', function(){
            if ($(window).scrollTop() > 0) {
                $('header').addClass('sticky-header');
            } else {
                $('header').removeClass('sticky-header');
            }
        });
    },
    bookDemo: function(){
        $(".book-demo-btn").click(function() {
            $('html, body').animate({
                scrollTop: ($("#demo-form").offset().top - $("header").innerHeight())
            }, 2000);
        });
    }


};
// when the page is ready, initialize everything
$(document).ready(function() {
    DataSync.init();
});


