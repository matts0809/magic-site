
//PARALLAX
$(window).scroll(function() {
  parallax();
});

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position', 'center '+(wScroll*0.75)+'px');

}


//Smooth Scrolling Links
$(document).ready(function() {

  $('.scroll').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000 );
});
});

$(document).ready(function(){
  $('.nav-item').click(function(){
    $('.nav-item').removeClass("active");
    $(this).addClass("active");

  });
});


//Burger Menu Toggling
document.querySelector('.burger').addEventListener('click', () => {
document.querySelector('.nav-ul-list').classList.toggle('nav-active');
	});

document.querySelector('.burger').addEventListener('click', () => {
document.querySelector('.burger-exit').classList.toggle('active-exit-burger');
  	});


    $(document).ready(function(){
      $('.burger-exit').click(function(){
        $('.nav-ul-list').removeClass('nav-active');
        $('.burger-exit').removeClass('active-exit-burger');
      });
    });


    $(document).ready(function(){
      $('.ind-nav-link').click(function(){
        $('.nav-ul-list').removeClass('nav-active');
        $('.burger-exit').removeClass('active-exit-burger');
      });
    });


//Scroll Animation for Header Info Text
$(window).scroll(function() {
  if ($(document).scrollTop() > 150) {
    $('.header-section-info').addClass('header-section-info-scroll');
  }
  else {
    $('.header-section-info').removeClass('header-section-info-scroll');
  }
});


//Scroll Animation for Navigation
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#nav-container-box').addClass('nav-bg-scroll');
    $('.ind-nav-link').addClass('nav-text-scroll');
    $('.logo-image').addClass('logo-image-scroll');
    $('.burger div').addClass('burger-scroll');
    $('.ind-nav-link').addClass('ind-nav-link-scroll');
    $('.social-link-ind-img').addClass('social-link-img-scroll');
  }
  else {
    $('#nav-container-box').removeClass('nav-bg-scroll');
    $('.ind-nav-link').removeClass('nav-text-scroll');
    $('.logo-image').removeClass('logo-image-scroll');
    $('.burger div').removeClass('burger-scroll');
    $('.ind-nav-link').removeClass('ind-nav-link-scroll');
  }
});


//Scroll Animation for Services Section
$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('.ser-sect-par').addClass('ser-sect-par-scroll');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 550) {
    $('.s1-des, .s1-img').addClass('s123-scroll');
  }
  /*else {
    $('.s1-des, .s1-img').removeClass('s123-scroll');
  }*/
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 900) {
    $('.s2-des, .s2-img').addClass('s123-scroll');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 1350) {
    $('.services-dropdown-two').addClass('services-dropdown-active');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 1800) {
    $('.s3-des, .s3-img').addClass('s123-scroll');
  }
});


//Popup for Services
/*
document.querySelector('.btn-s1').addEventListener('click', () => {
document.querySelector('.s1-popup-bg').classList.toggle('s1-popup-bg-active');
document.querySelector('.s1-popup-container').classList.toggle('s1-popup-container-active');
	});
*/

//Dropdown for Services
/*
  document.querySelector('.s2-btn').addEventListener('click', () => {
  document.querySelector('.services-dropdown-two').classList.toggle('services-dropdown-active');
});
*/


//Animation for Gallery Section
$(window).scroll(function() {
  if ($(document).scrollTop() > 2250) {
    $('.one, .two, .three').addClass('grid-portfolio-item-scroll');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 2500) {
    $('.four, .five, .six').addClass('grid-portfolio-item-scroll');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 2750) {
    $('.seven, .eight, .nine').addClass('grid-portfolio-item-scroll');
  }
});


//Testimonial Carousel
  $('.single-item').slick({
    speed: 500,
	  autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
  });



//Contact Form Submission
$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('Clicked Button')

    var name = $('.name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }
  })
});


$(document).ready(function () {
  $('.submit-mobile').click(function (event) {
    console.log('Clicked Button')

    var nameM = $('.name-mobile').val()
    var emailM = $('.email-mobile').val()
    var messageM = $('.message-mobile').val()
    var statusElmM = $('.status-mobile')
    statusElm.empty()

    if(emailM.length > 5 && emailM.includes('@') && emailM.includes('.')) {
      statusElmM.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElmM.append('<div>Email is not valid</div>')
    }
  })
})
