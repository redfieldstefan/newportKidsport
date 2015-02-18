$(document).ready(function() {

	$('.small-feature img').mouseenter(function(){
	var thisImg = this.src;
	$('.main img').attr('src', thisImg);
})

})