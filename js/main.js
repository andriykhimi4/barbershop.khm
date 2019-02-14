$(document).ready(function(){
  // header height
  function heightDetect(){
    $('.header').css('min-height', $(window).height());
  }
  heightDetect();
  $(window).resize(function(){
    heightDetect();
  });
  // humburger menu
  $('.humburger__logo').click(function(){
    $(this).toggleClass('open');
    $('.menu').toggleClass('menu_active');
    $('body').toggleClass('body_fixed');
  });
  $('.menu__link').click(function(){
    $('.menu_active').removeClass('menu_active');
    $('.humburger__logo').removeClass('open');
    $('body').removeClass('body_fixed');
  });
  // sloww scroll
  $('.menu__item a[href^="#"], .footer__item a[href^="#"]').on('click', function () {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 30}, 1000);
  });
  // portfolio slider
  $('.slider__wrap').slick({
    slidesToShow: 5,
    infinite: true,
    focusOnSelect: false,
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // team
  $('.team__block').not(':first').hide();
  $('.team__link').click(function(){
    $('.team__link').removeClass('team__link_active');
    $(this).addClass('team__link_active');
    $('.team__block').hide();
    var teamSlide = $(this).attr('href');
    $(teamSlide).fadeIn(800);
    return false;
  });
  // popup img
  $('.portfolio__link').magnificPopup({
    type : 'image',
    gallery : {
      enabled : true
    }
  });
  // Ajax FORM
  // $('.footer__form').submit(function(e) {
  //   e.preventDefault();
  //   e.stopImmediatePropagation();
  //   $.ajax({
  //     type:"POST",
  //     url:"php/mail.php",
  //     cache: false,
  //     data:  $(this).serialize()
  //       // Done Functions
  //     }).done(function(){
  //       $('.overlay').css('display','flex').delay(2000);
  //       $('.overlay').fadeOut();
  //       setTimeout(function() {
  //         $('.footer__form').trigger("reset");
  //       }, 1000);
  //     });
  //   return false;
  // });
});