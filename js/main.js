// What we do display more
$( document ).ready(function() {
	$('.more-wwd').hide();
	$('.plus-btn').click(function() {
  		$('.more-wwd').slideToggle('slow', function() {

    	 if (! $('.more-wwd').is(":hidden")){
  			$('.plus-btn span').removeClass('plus');
  			$('.plus-btn span').addClass('minus');
  		}
  		if ( $('.more-wwd').is(":hidden")){
  			$('.plus-btn span').removeClass('minus');
  			$('.plus-btn span').addClass('plus');
  		}
  		});

	});
	$('.what').click(function() {
		$('.more-wwd').show();
		 if (! $('.more-wwd').is(":hidden")){
  			$('.plus-btn span').removeClass('plus rotate');
  			$('.plus-btn span').addClass('minus');
  		}
	});
});

$( document ).ready(function() {
$('.computer').hover(
  function () {
    $('.hover-state').fadeIn( 500 );
  }, 
  function () {
    $('.hover-state').fadeOut( 500 );
  }
);
});