$(document).ready(function() {


	$('.logo-box img').click(function(){
		var thisImg = this.src;
		console.log(thisImg);
		$('#featured img').attr('src', thisImg);
	})


})