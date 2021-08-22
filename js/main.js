

$(document).ready(function(){

    // Slider
	if(window.location.href.indexOf('index') > -1){
	  
	  $('.galeria').bxSlider({
	    mode: 'horizontal',
      	slideMargin: 50,
	    captions: false,
	    slideWidth: 1000,
	    responsive: true,
	    pager: true,
		infiniteLoop: true,
		auto: true
	  });


	  $('.galeriaP').bxSlider({
	    mode: 'horizontal',
      	slideMargin: 20,
	    captions: false,
	    slideWidth: 400,
	    responsive: true,
	    pager: true,
		infiniteLoop: true,
		auto: true
	  });

       

	 }

	// Scroll arriba de la web
	$('.menuProducto').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 1000
		}, 500);

		return false;
	});

	$('.menuServicios').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 600
		}, 500);

		return false;
	});

	  

});

