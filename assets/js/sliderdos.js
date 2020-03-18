//almacenar slider en una variable
var sliderdos = $('#slider2');
//almacenar botones
var siguientedos = $('#btn-next2');
var anteriordos = $('#btn-prev2');

//mover ultima imagen al primer lugar
$('#slider2 .slider__section2:last').insertBefore('#slider2 .slider__section2:first');
//mostrar la primera imagen con un margen de -100%
sliderdos.css('margin-left', '-'+100+'%');

function moverD() {
	sliderdos.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider2 .slider__section2:first').insertAfter('#slider2 .slider__section2:last');
		sliderdos.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	sliderdos.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider2 .slider__section2:last').insertBefore('#slider2 .slider__section2:first');
		sliderdos.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguientedos.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anteriordos.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();