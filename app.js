$(document).ready(function() {

	var color = 'white';
	var colors = 'red blue green yellow white';
	var isPressed = false;

	$('.box').on('mousedown', function(){
		isPressed = true;
	})

	$('.box').on('mouseup', function(){
		isPressed = false;
	})

	$('.box').on('mouseenter', function(){
		if (isPressed) {
			$(this).removeClass(colors);
			$(this).addClass(color);
		}
	})



	$('.box').on('click', function(){
		$(this).removeClass(colors);
		$(this).addClass(color);
	})

	$('.box').on('dblclick', function(){
		$(this).removeClass(colors);
	})

	$('#reset').on('click', function(){
		$('.box').removeClass(colors);
		color = 'white';
	})



	$('#red').on('click', function(){
		color = 'red';
	})

	$('#green').on('click', function(){
		color = 'green';
	})

	$('#blue').on('click', function(){
		color = 'blue';
	})

	$('#yellow').on('click', function(){
		color = 'yellow';
	})

	$('#white').on('click', function(){
		color = 'white';
	})


})