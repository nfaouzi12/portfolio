

$('.h-nav-toggle').click(function(e){
	e.preventDefault();
	$('.h-right').toggleClass('is-open');
});
$('.h-nav-toggle').click(function(e){
	e.preventDefault();
	$('.menu').toggleClass('menu-p');
});
$('.h-link').click(function(e){
	$('.h-right').removeClass('is-open');
});