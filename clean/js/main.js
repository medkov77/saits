$(document).ready(function(){
	$('.slider').slick({
  arrows:false,
  dots:true,
  autoplay:true,
		speed:1000,
		autoplaySpeed:800,
  customPaging:function(){return ''}
})
$('.servis-slider').slick({
  arrows:true,
  dots:false,
  autoplay:false,
  slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: "<img src='./images/servis/prev.png' class='prev' alt='1'>",
      nextArrow: "<img src='./images/servis/next.png' class='next' alt='2'>",
    		speed:1000,
		autoplaySpeed:800,
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: false,
        arrows: true,
        slidesToShow: 1
      }
    }
  ],
  customPaging:function(){return ''}
})
$('.feedback-slider').slick({
  arrows:false,
  dots:false,
  autoplay:false,
  slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
    speed:1000,
    autoplaySpeed:800,
     asNavFor: '.feedbacktext-slider',
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
  customPaging:function(){return ''}
})
$('.feedbacktext-slider').slick({
  arrows:true,
   prevArrow: "<img src='../images/feedback/prev-arrow.png' class='prev' alt='1'>",
   nextArrow: "<img src='../images/feedback/next-arrow.png' class='next' alt='2'>",
   dots:false,
    autoplay:false,
    speed:1000,
    autoplaySpeed:800,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.feedback-slider',
    lazyLoad: 'ondemand',
  customPaging:function(){return ''}
})

$('.burger').click(function(event) {
		$('.burger,.menu,.nav-logo-ul').toggleClass('active');
	});
$(".arow").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });

$('.btn-recall').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });
$('#myModal__close, #myOverlay').click( function(){
  $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
	
});
