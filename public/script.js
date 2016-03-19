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
						//Fixes alignent issue when traveling from home to about to home and then gallery.
						$('article').addClass('galleried');
						$('article').css('left', '0');
						$('.grid').show();
						//gallery setup
						initializeMasonry();
					});
				});
			});
		});
	});

	// Gallery overlay functionality:
	$('.grid-item').on('click', function(){
		var classes = $(this).attr("class");
		var imgClass = classes.split(' ')[0];
		openOverlay(imgClass);
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

function openOverlay(imgClass) {
	$('#myCarousel').css({
		'position':'fixed',
		'z-index' : '50',
		'width' : '100%'
	});
	//remove active class from previous active carousel item
	$('div.active').removeClass('active');
	$('.' + imgClass + '.item').addClass('active');
	$('#myCarousel').show();
}