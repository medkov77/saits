$(document).ready(function() {

  $('.trigger').click( function(event){
    event.preventDefault();
    $(this).siblings().fadeIn(297, function(){
      


    });
        });

  $('.close').click( function(event){
    event.preventDefault();
    $('.fix').fadeOut(297);
        });


  $('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<img src="../img/warehouse/prev.png" class="prev" alt="">',
  prevArrow: '<img src="../img/warehouse/next.png" class="next" alt="">',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          
        }
      }
    ]

    });

    });

  


