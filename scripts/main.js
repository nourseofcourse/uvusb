import $ from 'jquery';
import 'slick-carousel';
import Headroom from 'headroom.js';


$(document).ready(() => {

  const myHeader = document.querySelector('header.headroom');

  let headroom = new Headroom(myHeader);

  headroom.init();

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
