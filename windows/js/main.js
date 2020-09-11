$(document).ready(function() {
	$(function(){
  
  var note = $('#note'),
    ts = new Date(2020, 10, 10),
    newYear = true;
  
  if((new Date()) > ts){
    // The new year is here! Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = (new Date()).getTime() + 10*24*60*60*1000;
    newYear = false;
  }
    
  $('#countdown').countdown({
    timestamp : ts,
    callback  : function(days, hours, minutes, seconds){
      
      var message = "";
      
      message += days + " дн." + ( days==1 ? '':'' ) + ", ";
      message += hours + " час." + ( hours==1 ? '':'' ) + ", ";
      message += minutes + " мин." + ( minutes==1 ? '':'' ) + " и ";
      message += seconds + " сек." + ( seconds==1 ? '':'' ) + " <br />";
      
      if(newYear){
        message += "осталось до Нового Года!";
      }
      else {
        message += "осталось от текущего момента до окончания 10 дней!";
      }
      
      note.html(message);
    }
  });
  
});

 
  $('.header-btn').hover( function(event){
    event.preventDefault();
    $('#btn-img').toggleClass('show');
  

  });
 
  $('.works-imadge').click(function(event) {
		$(this).toggleClass('active');
    $(this).parent().toggleClass('col-md-6');
    $('.icon-wrapper').toggleClass('active');
	});
$(".btn").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
$(".arrow").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });

 	$('.header-btn').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
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

	$('.btn-routes').click(function (e) {
		e.preventDefault();
		$('.destinations-more').toggleClass('destinations-visible')
	});

  $('#call').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function(){
      $('#myModal-call') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
  $('#myModal-call').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });

  $('.btn-routes').click(function (e) {
    e.preventDefault();
    $('.destinations-more').toggleClass('destinations-visible')
  });
  
  $('#text').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function(){
      $('#myModal-text') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
  $('#myModal-text').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });

  $('.btn-routes').click(function (e) {
    e.preventDefault();
    $('.destinations-more').toggleClass('destinations-visible')
  });

  $('.calculation').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function(){
      $('#myModal-calculation') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
  $('#myModal-calculation').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });

  $('.btn-routes').click(function (e) {
    e.preventDefault();
    $('.destinations-more').toggleClass('destinations-visible')
  });

});