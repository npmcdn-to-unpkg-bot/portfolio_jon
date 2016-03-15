$(document).ready(function(){
	//home setup
	$('#ho').on('click', function(){
		if ($('article').hasClass('galleried')) {
			$('article').removeClass('galleried');
			$('.grid').fadeOut('fast', function(){
				$('#home').show();
				$('#myCarousel').show();
			});
		}
		else {
			console.log('home else');
			$('#about').fadeOut('fast', function(){
				$('#home').show();
				$('#myCarousel').show();
			});
		}
	});

	//about setup
	$('#ab').on('click', function(){
		if ($('article').hasClass('galleried')) {
			$('article').removeClass('galleried');
			$('.grid').fadeOut('fast', function(){
				$('#about').show();
				$('#myCarousel').show();
			});
		}
		else {
			console.log('about else');
			$('#home').fadeOut('fast', function(){
				$('#about').show();
				$('#myCarousel').show();

			});
		}
	});	
	
	//gallery setup
	$('#ga').on('click', function(){
		//fadeout Header on home
		$('#home').fadeOut('fast',function(){
			//fadeout carousel
			$('#myCarousel').fadeOut('fast', function(){
				$('article').addClass('galleried');
				$('.grid').show();
				//gallery setup
				var $grid = $('.grid').imagesLoaded( function() {
				  // init Masonry after all images have loaded
				  $grid.masonry({
				    // options...
				    itemSelector: '.grid-item',
			      	percentPosition: true,
			      	columnWidth: '.grid-sizer'
				  });
				});
			});
		});
	});

	//bounce nav li's
	// $('li').on('mouseover', function(){
	// 	// console.log('mouseover');
	// 	if($('li').hasClass('hovered')) {
	//         $('li').removeClass('hovered');
	//     }else{
	//         $('li').addClass('hovered');
	//     }
		
	// });
	
});