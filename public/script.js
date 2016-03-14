$(document).ready(function(){
	//home setup
	$('#ho').on('click', function(){
		$('#about').fadeOut('fast', function(){
			$('#home').show()
		});
	});
	//about setup
	$('#ab').on('click', function(){
		$('#home').fadeOut('fast', function(){
			$('#about').show();
		});
	});	
	//gallery setup
	$('#ga').on('click', function(){

	});

	//bounce nav li's
	$('li').on('mouseover', function(){
		// console.log('mouseover');
		if($('li').hasClass('hovered')) {
	        $('li').removeClass('hovered');
	    }else{
	        $('li').addClass('hovered');
	    }
		
	});
});