import $ from 'jquery';
import 'slick-carousel';

$(document).ready(() => {
  $('.js-testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true
  });
});
