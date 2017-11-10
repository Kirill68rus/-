function year(){
	var d = new Date();
	var t = document.getElementById("copyrights");
	t.append(d.getFullYear());
}


window.onload = year;

$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});


