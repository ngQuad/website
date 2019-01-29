import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentYear: number;

  ngOnInit() {

    this.preLoader(window);
    this.onMenuScrollDown(window);
    this.offCanvas();
    this.clStatCount(window);
    this.clSlickSlider();
    this.clSmoothScroll();
    this.clPhotoswipe();
    this.clAlertBoxes();
    this.clAOS();

    this.currentYear = new Date().getFullYear();
  }

  onMenuScrollDown(window) {
    const menuTrigger = $('.header-menu-toggle');
    const goTop = $('#gotop');

    window.addEventListener('scroll', () => {

      if (window.scrollY > 150) {
        menuTrigger.addClass('opaque');
      } else if (window.scrollY <= 150) {
        menuTrigger.removeClass('opaque');
      }

      if (window.scrollY > 800) {
        goTop.fadeIn();
      } else if (window.scrollY <= 800) {
        goTop.fadeOut();
      }
    })
  }

  preLoader(window) {
    $("html").addClass('cl-preload');
    window.addEventListener('load', () => {
      $("#loader").fadeOut("slow", function () {
        $("#preloader").delay(300).fadeOut("slow");
      });
      $("html").removeClass('cl-preload');
      $("html").addClass('cl-loaded');
    });
  };

  offCanvas() {
    const menuTrigger = $('.header-menu-toggle'), nav = $('.header-nav'), closeButton = nav.find('.header-nav__close'),
      siteBody = $('body');

    menuTrigger.on('click', (e) => {
      e.preventDefault();
      siteBody.toggleClass('menu-is-open');
    });

    closeButton.on('click', (e) => {
      e.preventDefault();
      menuTrigger.trigger('click');
    });

    siteBody.on('click', function (e) {
      if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
        siteBody.removeClass('menu-is-open');
      }
    });
  };

  clStatCount(window) {

    let a = 0;

    $(window).scroll(function () {

      const oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.stats__count').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 4000,
              easing: 'swing',
              step: function () {
                // @ts-ignore
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }
    });
  };

  clSlickSlider() {

    // @ts-ignore
    $('.clients').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      pauseOnFocus: false,
      autoplaySpeed: 1000,
      responsive: [{ breakpoint: 1200, settings: { slidesToShow: 5 } }, {
        breakpoint: 1000,
        settings: { slidesToShow: 4 }
      }, { breakpoint: 800, settings: { slidesToShow: 3, slidesToScroll: 2 } }, {
        breakpoint: 500,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      }]
    });
    // @ts-ignore
    $('.testimonials').slick({
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      pauseOnFocus: false,
      autoplaySpeed: 1500,
      responsive: [{ breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1 } }, {
        breakpoint: 800,
        settings: { arrows: false, dots: true }
      }]
    });
  };

  clSmoothScroll() {

    // @ts-ignore
    $('.smoothscroll').on('click', function (e) {
      // @ts-ignore
      var target = this.hash, $target = $(target);
      e.preventDefault();
      e.stopPropagation();
      $('html, body').stop().animate({ 'scrollTop': $target.offset().top }, 800, 'swing').promise().done(function () {
        if ($('body').hasClass('menu-is-open')) {
          $('.header-menu-toggle').trigger('click');
        }
        window.location.hash = target;
      });
    });
  };

  clAlertBoxes() {
    // @ts-ignore
    $('.alert-box').on('click', '.alert-box__close', function () {
      // @ts-ignore
      $(this).parent().fadeOut(500);
    });
  };

  clPhotoswipe() {
    // @ts-ignore
    const items = [], $pswp = $('.pswp')[0], $folioItems = $('.item-folio');
    $folioItems.each(function (i) {
      const $folio = $(this), $thumbLink = $folio.find('.thumb-link'), $title = $folio.find('.item-folio__title'),
        $caption = $folio.find('.item-folio__caption'), $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
        $captionText = $.trim($caption.html()), $href = $thumbLink.attr('href'),
        $size = $thumbLink.data('size').split('x'), $width = $size[0], $height = $size[1];
      const item = { src: $href, w: $width, h: $height };
      if ($caption.length > 0) {
        // @ts-ignore
        item.title = $.trim($titleText + $captionText);
      }
      items.push(item);
    });
    $folioItems.each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        const options = { index: i, showHideOpacity: true };
        // @ts-ignore
        const lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
        lightBox.init();
      });
    });
  };

  clAOS() {
    // @ts-ignore
    AOS.init({ offset: 200, duration: 600, easing: 'ease-in-sine', delay: 300, once: true, disable: 'mobile' });
  };
}
