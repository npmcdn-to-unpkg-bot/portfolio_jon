$(document).ready(function(){
	originalGutter = parseFloat($('article').css('left'));
	//home setup
	$('#ho').on('click', function(){
		if ($('article').hasClass('galleried')) {
			$('article').removeClass('galleried');
			$('.grid').fadeOut('fast', function(){
				showHome();
				$('#myCarousel').show();
			});
		}
		else {
			$('#about').fadeOut('fast', function(){
				$('#profile').fadeOut('fast',function(){
					showHome();
					$('#myCarousel').show();
				});
			});
		}
	});

	//about setup
	$('#ab').on('click', function(){
		if ($('article').hasClass('galleried')) {
			$('article').removeClass('galleried');
			$('.grid').fadeOut('fast', function(){
				showAbout();
			});
		}
		else {
			$('#home').fadeOut('fast', function(){
				$('#myCarousel').fadeOut('fast', function(){
					showAbout();
				});
			});
		}
	});	
	
	//gallery setup
	$('#ga').on('click', function(){
		//fadeout Header on home
		$('#home').fadeOut('fast',function(){
			//fadeout about
			$('#about').fadeOut('fast',function(){
				$('#profile').fadeOut('fast',function(){
					//fadeout carousel
					$('#myCarousel').fadeOut('fast', function(){
						$('article').addClass('galleried');
						$('.grid').show();
						//gallery setup
						initializeMasonry();
					});
				});
			});
		});
	});
});

function showAbout(){
	$('#about').show();
	interV = setInterval(slideArticleLeft, 1);
	$('#profile').fadeIn('fast', function(){});
}

function showHome(){
	$('#home').show();
	interH = setInterval(slideArticleRight, 1);
}

function slideArticleRight(){
	console.log('slad')
	var gutter = parseFloat($('article').css('left'));
	if (gutter < originalGutter) {
		gutter++;
		$('article').css('left', gutter);
	}
	else {
		clearInterval(interH);
	}
}

function slideArticleLeft(){
	var gutter = parseFloat($('article').css('left'));
	if (gutter > 0) {
		gutter--;
		$('article').css('left', gutter);
	}
	else {
		clearInterval(interV);
	}
}

function initializeMasonry(){
	var $grid = $('.grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
	    // options...
	    itemSelector: '.grid-item',
      	percentPosition: true,
      	columnWidth: '.grid-sizer'
	  });
	});
}