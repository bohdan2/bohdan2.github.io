$(function() {


	$(window).scroll(function(){

		var st = $(this).scrollTop();

		if(st >= 88){
			$('.mnu_fixed').css('display', 'block');
		}else if(st < 88){
			$('.mnu_fixed').css('display', 'none');
		}

	});
/*	if(window.pageYOffset >= 88){
		$('.header_nav').css('position', 'fixed');
	}*/


	$( "#slider-range-min" ).slider({
      range: "min",
      value: 1,
      min: 1,
      max: 16
    });

    $( "#slider-range-min_another" ).slider({
      range: "min",
      value: 1,
      min: 1,
      max: 1000
    });

    $( "#slider_sec_9_1" ).slider({
      range: "min",
      value: 400,
      min: 1,
      max: 1000,
      slide: function( event, ui ) {
        $( ".input_1" ).val(ui.value );
      }
    });
    $( ".input_1" ).val($( "#slider_sec_9_1" ).slider( "value" ) );

    
    $( "#slider_sec_9_2" ).slider({
      range: "min",
      value: 300,
      min: 1,
      max: 1000,
      slide: function( event, ui ) {
        $( ".input_2" ).val(ui.value );
      }
    });
    $( ".input_2" ).val($( "#slider_sec_9_2" ).slider( "value" ) );

    

	$('.loop').owlCarousel({
		animateOut: 'zoomOut',
    animateIn: 'zoomIn',
		center: true,
		items:3,
		nav: true,
		loop:true,
		margin:10,
		autoHeight:true,
		smartSpeed: 100,
		navText: ['<div class="wrap_nav_bottom"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>', '<div class="wrap_nav_bottom"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'],
		responsive:{
			1000:{
				items:3
			},
			0:{
				items:1
			}
		}
	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		mouseDrag: false,
		autoplay: true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			}
		}
	})


	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".mnu-md").slideToggle();
		return false;
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//hide-search
	$(".wrap_hide_search").hide();
	$("i.fa-search").click(function(){
		$(".wrap_hide_search").slideToggle();
	})
	$("i.fa-times").click(function(){
		$(".wrap_hide_search").slideUp();
	})




});
