window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.querySelector(".navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "#1D1334";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}
$(document).ready(function () {
var div_box = "<div id ='load-screen'><div id ='loading'></div></div>";
$("body").prepend(div_box);
$('#load-screen').delay(700).fadeOut(600, function () {
    $(this).remove();
});
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 2000, // 2 seconds
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
   
  });
  var container = document.querySelector('.swiper-container');
        container.addEventListener('mouseenter', function () {
          swiper.autoplay.stop();
        });
  
        container.addEventListener('mouseleave', function () {
          swiper.autoplay.start();
        });