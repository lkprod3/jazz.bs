// JavaScript Document

/* abrir side nav e aplicar blur+contraste+brilho ao body e footer */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px"; /* abrir a sidenav */
	document.getElementById("mySidenav").style.borderLeftWidth = "3px";
	document.getElementById("main").style.filter = "blur(5px) contrast(60%) brightness(60%)";
	document.getElementById("footer").style.filter = "blur(5px) contrast(60%) brightness(60%)";
	document.getElementById("preftr").style.filter = "blur(5px) contrast(60%) brightness(60%)";
	document.body.style.backgroundImage = "url(img/bgpt_blur.png)";
}

/* fechar side nav e remover efeitos do body e footer */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; /* fechar a sidenav */
	document.getElementById("mySidenav").style.borderLeftWidth = "0";
	document.getElementById("main").style.filter = "blur(0px)";
	document.getElementById("footer").style.filter = "blur(0px)";	
	document.getElementById("preftr").style.filter = "blur(0px)";
	document.body.style.backgroundImage = "url(img/bgpt.png)";
	
}
/* function overlay() {
	if (document.querySelector(".miles-ahead").style.width="0%"){
	document.querySelector(".miles-ahead").style.width="100%";
	document.querySelector(".miles-ahead").style.background-color="blue";
	document.querySelector(".miles-ahead").style.background-blend-mode="multiply";
	document.querySelector(".miles-ahead").style.
}
} */
function testando() {
		document.getElementById("img1").style.backgroundImage="img/asdf.jpg";
}


$(document).ready(function(){
$("#img1").mouseenter(function(){
	console.log("test");
    $(".miles-ahead").stop().animate({
		width: '100%',
		opacity: '1'});
});
$("#img1").mouseleave(function(){
	console.log("test");
    $(".miles-ahead").stop().animate({
		width: '0%',
		opacity: '0'});
});
}); 

$(document).ready(function(){
$(".blue").mouseenter(function(){
	console.log("test");
    $(".blueovr").stop().animate({
		width: '100%',
		opacity: '1'});
});
$(".blue").mouseleave(function(){
	console.log("test");
    $(".blueovr").stop().animate({
		width: '0%',
		opacity: '0'});
});
}); 


var imgSrcs =[
    "img/asdf.jpg",
    "img/asdf2.jpg",
    "img/header1.jpg",
];
var colors =[
	"blue",
	"red",
	"#FFDB7D",
];
var butaum =[
	"img/b2.png",
	"img/b3.png",
	"img/b1.png",
];

$('#cover').delay(1000).fadeIn(1000, animateBackground());

function animateBackground() {

    window.setTimeout(function(){

        var url = imgSrcs[imgSrcs.push(imgSrcs.shift()) - 1];
		var crt = colors[colors.push(colors.shift()) - 1];
		var btn = butaum[butaum.push(butaum.shift()) - 1];

        $('#img1').delay(10000).fadeOut(0, function(){

            $(this).css("background-image", "url(" + url + ")")
		
		$(".miles-ahead").css("background-color", ""+crt+"")
		$(".select").css("content", "url("+btn+")")

        }).fadeIn(0, animateBackground())

    });
}


/* $(document).ready(function(){
$("#img1").click(function(){
	$("#img1").css("background", "url(img/asdf.jpg)");
});
});
*/


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 2 seconds
}