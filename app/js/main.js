$(document).ready(function() {

  
$(".family, .offer-form__wrapper").mouseenter(function() {
    $('.family').css('transform', 'translateX(10%)');
    $('.offer-form__wrapper').css('transform', 'scale(0.9)');
}).mouseleave(function() {
     $('.family').css('transform', 'translateX(-10%)');
     $('.offer-form__wrapper').css('transform', 'scale(1)');
});

		$('#slider1, #slider2, #slider3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='../img/projects/prev.png' class='prev' alt='1'>", "<img src='../img/projects/next.png' class='next' alt='2'>"],
    slideBy:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


 $('#slider4').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    center:true,
    navText: ["<img src='../img/build/prev.svg' class='build__prev' alt='1'>", "<img src='../img/build/next.svg' class='build__next' alt='2'>"],
    slideBy:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('#slider5').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    center:false,
    navText: ["<img src='../img/build/prev.svg' class='build__prev' alt='1'>", "<img src='../img/build/next.svg' class='build__next' alt='2'>"],
    slideBy:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

 

});

