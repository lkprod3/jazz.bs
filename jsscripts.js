// JavaScript Document

/* Javascript da sidenav */

/* Abrir sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px"; /* abrir a sidenav */
	document.getElementById("mySidenav").style.borderLeftWidth = "3px";
	document.getElementById("main").style.filter = "blur(5px) contrast(60%) brightness(60%)";
	document.getElementById("footer").style.filter = "blur(5px) contrast(60%) brightness(60%)";
	document.getElementById("preftr").style.filter = "blur(5px) contrast(60%) brightness(60%)";
	document.body.style.backgroundImage = "url(img/bgpt_blur.png)";
}

/* Fechar sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; /* fechar a sidenav */
	document.getElementById("mySidenav").style.borderLeftWidth = "0";
	document.getElementById("main").style.filter = "blur(0px)";
	document.getElementById("footer").style.filter = "blur(0px)";	
	document.getElementById("preftr").style.filter = "blur(0px)";
	document.body.style.backgroundImage = "url(img/bgpt.png)";
	
}

function testando() {
		document.getElementById("img1").style.backgroundImage="img/asdf.jpg";
}

   $(document).ready(function(){
  // Add smooth scrolling to all links
  $(".navbar1 a").on('click', function(event) {

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

//$('.nav li a').click(function(event) {
//    var href = $(this).attr('href');
//
//    // Don't let the browser scroll, but still update the current address
//    // in the browser.
//    event.preventDefault();
//    window.location.hash = href;
//
//    // Explicitly scroll to where the browser thinks the element
//    // is, but apply the offset.
//    $(href)[0].scrollIntoView();
//    window.scrollBy(0, -navOffset);
//});