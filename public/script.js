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
});