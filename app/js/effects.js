$(document).ready(function() {

	$('.small-feature img').mouseenter(function(){
	var thisImg = this.src;
	$('.main img').attr('src', thisImg);
	})

	$('.swatch-options img').mouseenter(function(){
	var thisImg = this.src;
	var thisParent = $(this).parents().children('.swatch img');
	thisParent.attr('src', thisImg);
	})

	$('nav ul li:nth-child(2)').click(function(){

		var navOpen = false;

		if (!navOpen) {
			$('nav ul li ul ').css('display', 'block');
			navOpen = true;

		}
		else {
			$('nav ul li ul ').css('display', 'none');
			navOpen = false;
		}

	});
});
