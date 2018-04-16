// JavaScript Document

/* Javascript da sidenav */

/* Abrir sidenav */
f

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

// Change main paragraph when clicking on carousel images
function change_txt1() {
 document.getElementById('txt_noticia1').innerHTML = 'Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1 Parágrafo 1';
}

function change_txt2() {
	document.getElementById('txt_noticia1').innerHTML = 'Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2 Parágrafo 2';
}
function change_txt3() {
	document.getElementById('txt_noticia1').innerHTML = 'Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3 Parágrafo 3';
}

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