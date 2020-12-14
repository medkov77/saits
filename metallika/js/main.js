$(document).ready(function() {



var mySwiper = new Swiper('.swiper-container', {
  grabCursor: true,
  centeredSlides: false,
  slidesPerView : 1,
  loop: true,
  zoom: true,
  zoom: {
    maxRatio: 5,
  }, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 30,
  autoPlay: true,
  autoplay: {
    delay: 1000,
  },
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
     
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
      
  },
        // when window width is >= 640px
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false
    }
  }
});

var mySwiper_1 = new Swiper('.swiper-container-1', {
  grabCursor: true,
  centeredSlides: false,
  slidesPerView : 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
     
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
      
  },
        // when window width is >= 640px
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false
    }
  }
});

var mySwiper = new Swiper('.swiper-container1', {
  grabCursor: true,
  centeredSlides: false,
  slidesPerView : 1,
  loop: false,
   
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
     
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 1,
      spaceBetween: 30,
      
  },
        // when window width is >= 640px
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false
    }
  }
});

var mySwiper = new Swiper('.swiper-container2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: false,
  slidesPerView : 1,
  loop: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
     
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
      
  },
        // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false
    }
  }
});

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

// $('[data-fancybox="gallery"]').fancybox({
//     loop: false,
//     autoFocus: false,
//     backFocus: true,
//     transitionEffect: "fade"
// });
 

}); 