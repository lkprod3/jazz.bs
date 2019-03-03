// JavaScript Document

   $(document).ready(function(){
  // Add smooth scrolling to all links
  $(".navbar1 a, .nodeco").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var navOffset = $('.nav').height();




// Tocar música ao clicar nos artistas [Miles, Nina e John]

$('document').ready(function() {
	$('#ninaImg').click(function () {
	if ($('#previewNina')[0].paused) {
		$('#previewMiles')[0].pause();
		$('.hoverMiles').attr('src','img/assets/miles_v2.png');
		$('#previewJohn')[0].pause();
		$('.hoverJohn').attr('src','img/assets/john_v2.png');
		$('#previewNina')[0].play();
		$('.hoverNina').attr('src','img/assets/nina_Pa.png');
	}
	else {
		$('#previewNina')[0].pause();
		$('.hoverNina').attr('src','img/assets/nina_Pl.png');
	}
	});
	$('#ninaImg').mouseenter(function () {
		if ($('#previewNina')[0].paused) {
		$('.hoverNina').attr('src','img/assets/nina_Pl.png');
		}
		else {
			$('.hoverNina').attr('src','img/assets/nina_Pa.png');
		}
	});
	$('#ninaImg').mouseleave(function () {
		if ($('#previewNina')[0].paused) {
		$('.hoverNina').attr('src','img/assets/nina_v2.png');
		}
		else {
			return;
		}
	});
	$('#previewNina').on('ended', function () {
		$('.hoverNina').attr('src','img/assets/nina_v2.png');
});
});
$('document').ready(function() {
	$('#milesImg').click(function () {
	if ($('#previewMiles')[0].paused) {
		$('#previewNina')[0].pause();
		$('.hoverNina').attr('src','img/assets/nina_v2.png');
		$('#previewJohn')[0].pause();
		$('.hoverJohn').attr('src','img/assets/john_v2.png');
		$('#previewMiles')[0].play();
		$('.hoverMiles').attr('src','img/assets/miles_Pa.png');
	}
	else {
		$('#previewMiles')[0].pause();
		$('.hoverMiles').attr('src','img/assets/miles_Pl.png');
	}
	});
	$('#milesImg').mouseenter(function () {
		if ($('#previewMiles')[0].paused) {
		$('.hoverMiles').attr('src','img/assets/miles_Pl.png');
		}
		else {
			$('.hoverMiles').attr('src','img/assets/miles_Pa.png');
		}
	});
	$('#milesImg').mouseleave(function () {
		if ($('#previewMiles')[0].paused) {
		$('.hoverMiles').attr('src','img/assets/miles_v2.png');
		}
		else {
			return;
		}
	});
	$('#previewMiles').on('ended', function () {
		$('.hoverMiles').attr('src','img/assets/miles_v2.png');
});
});
$('document').ready(function() {
	$('#johnImg').click(function () {
	if ($('#previewJohn')[0].paused) {
		$('#previewNina')[0].pause();
		$('.hoverNina').attr('src','img/assets/nina_v2.png');
		$('#previewMiles')[0].pause();
		$('.hoverMiles').attr('src','img/assets/miles_v2.png');
		$('#previewJohn')[0].play();
		$('.hoverJohn').attr('src','img/assets/john_Pa.png');
	}
	else {
		$('#previewJohn')[0].pause();
		$('.hoverJohn').attr('src','img/assets/john_Pl.png');
	}
	});
	$('#johnImg').mouseenter(function () {
		if ($('#previewJohn')[0].paused) {
		$('.hoverJohn').attr('src','img/assets/john_Pl.png');
		}
		else {
			$('.hoverJohn').attr('src','img/assets/john_Pa.png');
		}
	});
	$('#johnImg').mouseleave(function () {
		if ($('#previewJohn')[0].paused) {
		$('.hoverJohn').attr('src','img/assets/john_v2.png');
		}
		else {
			return;
		}
	});
	$('#previewJohn').on('ended', function () {
		$('.hoverJohn').attr('src','img/assets/john_v2.png');
});
});

$('document').ready(function(){
$('#johnImg').click(function () {
	$('#songTitleJ').animate({
		opacity:"1",
		marginTop: "10px"},900, "swing");
	});	
$('#ninaImg').click(function () {
	$('#songTitleN').animate({
		opacity:"1",
		marginTop: "10px"},900, "swing");
	});	
$('#milesImg').click(function () {
	$('#songTitleM').animate({
		opacity:"1",
		marginTop: "10px"},900, "swing");
	});
	})