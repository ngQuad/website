import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { IGeoJson } from './interfaces/location.interface';
import { IEmail } from './interfaces/email.interface';
import { ITeamMember } from './interfaces/team.interface';
import { ISocial } from './interfaces/social.interface';

import { config } from './config/config';
import { teamMembers } from './helpers/team.helper';
import { socials } from './helpers/social.helper';

import { defaultMapCenter, defaultMapZoom, iGeoJson } from './helpers/locations.helper';
import { AppService } from './services/app.service';
import { ICompanyStats } from './interfaces/companystats.interface';
import { aboutDescription, companyStats } from './helpers/companystats.helper';
import { ICompanyService } from './interfaces/services.interface';
import { companyServices } from './helpers/services.helper';
import { IPortfolio } from './interfaces/portfolio.interface';
import { portfolios } from './helpers/portfolio.helper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  currentYear: number;
  iGeoJson: IGeoJson = iGeoJson;
  map: any;
  socials: ISocial[] = socials;
  teamMembers: ITeamMember[] = teamMembers;
  companyStats: ICompanyStats[] = companyStats;
  aboutDescription: string = aboutDescription;
  companyServices: ICompanyService[] = companyServices;
  portfolios: IPortfolio[] = portfolios;

  constructor(private readonly appService: AppService) {
  }

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

  ngAfterViewInit() {
    this.initMap();
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
          const $this = $(this),
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
      const target = this.hash, $target = $(target);
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

  onSendEmail(contactForm: IEmail) {

    const sLoader = $('.submit-loader');
    const messageWarning = $('.message-warning');

    sLoader.slideDown("slow");

    const emailData = {
      ...contactForm,
      body: `A new contact has been made from our website,
      \n Name: ${contactForm.name} ,
      \n Email: ${contactForm.email},
      \n Message: ${contactForm.body}`
    };

    this.appService.sendEmail(emailData).subscribe(res => {

      sLoader.slideUp("slow");
      messageWarning.fadeOut();
      $('#contactForm').fadeOut();
      $('.message-success').fadeIn();
    });
  }

  initMap() {

    mapboxgl.accessToken = config.mapGlToken;

    const map = new mapboxgl.Map({
      container: 'mapgl',
      style: 'mapbox://styles/mapbox/dark-v9',
      center: defaultMapCenter,
      zoom: defaultMapZoom
    });

    this.map = map;

    map.on('load', (e) => {

      map.addSource('places', {
        type: 'geojson',
        data: this.iGeoJson
      });

      this.iGeoJson.features.forEach((marker) => {

        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);

        el.addEventListener('click', (e) => {
          this.flyToLocation(marker, map);
        });
      });
    });
  }

  onMapReset() {

    this.map.flyTo({
      center: defaultMapCenter,
      zoom: defaultMapZoom
    });

    this.markLocationActive(null);
  }

  onItemLocationClicked(location) {

    this.flyToLocation(location, this.map);
    this.markLocationActive(location);
  }

  flyToLocation(currentFeature, map) {

    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  markLocationActive(location: any) {

    if (!location) {
      return this.iGeoJson = iGeoJson;
    }

    const newIGeoJson = { ...this.iGeoJson };

    this.iGeoJson = {
      ...newIGeoJson,
      features: newIGeoJson.features.map(feature => {

        return {
          ...feature,
          properties: {
            ...feature.properties,
            active: location.properties.city === feature.properties.city
          }
        }
      })
    };
  }
}
