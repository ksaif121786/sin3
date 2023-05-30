
(function ($) {
    'use strict';
    const $inp = $(".ap-otp-input");
    $inp.on({
        paste(ev) { // Handle Pasting

            const clip = ev.originalEvent.clipboardData.getData('text').trim();
            // Allow numbers only
            if (!/\d{6}/.test(clip)) return ev.preventDefault(); // Invalid. Exit here
            // Split string to Array or characters
            const s = [...clip];
            // Populate inputs. Focus last input.
            $inp.val(i => s[i]).eq(5).focus();
        },
        input(ev) { // Handle typing

            const i = $inp.index(this);
            if (this.value) $inp.eq(i + 1).focus();
        },
        keydown(ev) { // Handle Deleting

            const i = $inp.index(this);
            if (!this.value && ev.key === "Backspace" && i) $inp.eq(i - 1).focus();
        }

    });




    jQuery(function ($) {
        var path = window.location.href;
        $('.main-menu li a').each(function () {
            if (this.href === path) {
                $(this).parent().addClass('active');
            } else {

            }
        });

        var path = window.location.href;
        $('.sidenav li a').each(function () {
            if (this.href === path) {
                $(this).parent().addClass('active');
            } else {

            }
        });
    });



    $(".addCart").click(function () {
        $("#cart1").hide();
        $("#cart2").show();
    });

    $(".addCart1").click(function () {
        $(".afterAdd1").show();
        $(".addCart1").hide();
    });

    $(".addCart2").click(function () {
        $(".afterAdd2").show();
        $(".addCart2").hide();
    });

    $(".addCart3").click(function () {
        $(".afterAdd3").show();
        $(".addCart3").hide();
    });

    $(".addCart4").click(function () {
        $(".afterAdd4").show();
        $(".addCart4").hide();
    });

    $(".addCart5").click(function () {
        $(".afterAdd5").show();
        $(".addCart5").hide();
    });

    $(".addCart6").click(function () {
        $(".afterAdd6").show();
        $(".addCart6").hide();
    });

    $(".addCart7").click(function () {
        $(".afterAdd7").show();
        $(".addCart7").hide();
    });

    $(".addCart8").click(function () {
        $(".afterAdd8").show();
        $(".addCart8").hide();
    });

    $("input[value='cash']").click(function () {
        $(".paymentBox .payment-info").hide();
    });

    $("input[value='pay']").click(function () {
        $(".paymentBox .payment-info").show();
    });

    // HERO SLIDER
    var menu = [];
    jQuery('.swiper-slide').each(function (index) {
        menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
    });


    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },

            touchStart: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },

            setTransition: function (speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });



    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    });

    // Initializations
    var sidenav = new Sidenav("sidenav");
    const elc = document.getElementById("sidenav");
    if (elc) {
        elc.addEventListener("click", function () {
            sidenav.openClose();
        })
    }


    /**
     * Sidenav
     */
    function Sidenav(ob) {
        var navId = (ob !== null && typeof ob === 'object') ? ob.id : ob;
        var opt = ob || {};

        this.isOpen = opt.isOpen || false;
        this.sidenav = document.getElementById(navId);
    }

    // True is open, false is close and no option is toggle
    Sidenav.prototype.openClose = function (open) {
        var self = this;

        self.isOpen = open || !self.isOpen;
        if (self.isOpen) {
            self.sidenav.classList.add("open");
        } else {
            self.sidenav.classList.remove("open");
        }
    }


    /* Cart Currency Search toggle active */
    $(".header-cart a").on("click", function (e) {
        e.preventDefault();
        $(this).parent().find('.shopping-cart-content').slideToggle('medium');
    })

    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.transparent-bar');
    var win = $(window);

    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });

    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });


    /* Slider active */
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* Best selling active */
    $('.product-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    /* Best selling active */
    $('.related-product-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1100: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })



    /* Testimonial active */
    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* Brand logo active */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 5,
        margin: 80,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            480: {
                items: 2,
                margin: 30,
            },
            768: {
                items: 4,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 100,
            },
            1200: {
                items: 5
            }
        }
    })


    /*---------------------
        Countdown
    --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });


    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function () {
        sliderrange.slider({
            range: true,
            min: 0,
            max: 1200,
            values: [0, 800],
            slide: function (event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });

    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="fa fa-angle-right"></i></span>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    });

    /*------ Wow Active ----*/
    new WOW().init();

    /* counterUp */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*-------------------------------------
        Thumbnail Product activation
    --------------------------------------*/
    $('.thumb-menu').owlCarousel({
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    $('.thumb-menu a').on('click', function () {
        $('.thumb-menu a').removeClass('active');
    })


    /*---------------------
    shop grid list
    --------------------- */
    $('.view-mode li a').on('click', function () {
        var $proStyle = $(this).data('view');
        $('.view-mode li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.product-view').removeClass('product-grid product-list').addClass($proStyle);
    })

    /* blog gallery slider */
    $('.blog-gallery-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*--------------------------
        Product Zoom
    ---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });


    $('.testimonial-2-active').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            992: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    });


    /* magnificPopup video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });


})(jQuery);


