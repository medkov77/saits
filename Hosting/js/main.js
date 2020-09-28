$(document).ready(function() {
	
	$('.accordion__triger').click(function (){
    	$(this).parent().toggleClass('active');
     
	});
 $('.slider').slick({
  arrows:false,
  dots:false,
  autoplay:false,
  slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: '0px',
    speed:1000,
    autoplaySpeed:800,
     asNavFor: '.text-slider',
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
$('.text-slider').slick({
  arrows:true,
   prevArrow: "<img src='https://medkov77.github.io/saits/Hosting/images/ic_outline-navigate-prev.svg' class='prev' alt='1'>",
   nextArrow: "<img src='https://medkov77.github.io/saits/Hosting/images/ic_outline-navigate-next.svg' alt='2'>",
   dots:false,
    autoplay:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:1000,
    autoplaySpeed:800,
    centerMode: false,
    centerPadding: '0px',
    asNavFor: '.slider',
    lazyLoad: 'ondemand',
  customPaging:function(){return ''}
})
  $('.burger').click(function(event) {
    $('.burger,.menu,.nav,.btn').toggleClass('active');
  });
  $(".arrow").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });

});
