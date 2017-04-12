$(window).ready(function(){
var counter =0;
	var l =$('.slide').length;
var $slider=$('.subslider');
var $slidecontainer=$slider.find('.slides');
var width=1536;
var animationtime=1000;
var intervaltime=3000;
var counter=1;
var interval;
function startslider(){
	interval=setInterval(function(){
		$slidecontainer.animate({'margin-left':'-='+width},animationtime,function(){
			counter++;
			if(counter===l)
			{
				counter=1;
				$slidecontainer.css({'margin-left':'0px'});
			}
		});
	},intervaltime);
};
function pauseslider(){
clearInterval(interval);
}

//$slider.on('mouseenter',pauseslider()).on('mouseleave',startslider());

startslider();

			var clicks=0;

	$('.path').click(function(){


		if(clicks==0){

	$('#patha').css({
		'stroke-dashoffset':'64'
	});
	$('#pathb').attr('d','M 48.9 50.5 L 48.9 50.5');
	$('#pathc').css({
		'stroke-dashoffset':'-287.5'
	});

						clicks++;

			$('.circle').css({
			       'background-color':'white',
				'transform':'scale(72)',
				'z-index':'5'
						});

		$('.display').css({'opacity':'1'});
		$('.header').css({'margin-top':'50px'});
		$('.underline').css({'margin-top':'20px'});

		}

		else if(clicks==1){

	$('#patha').css({
		'stroke-dashoffset':'290.1571044921875'
	});
	$('#pathb').attr('d','M 30 50.5 L 70 50.5');
	$('#pathc').css({
		'stroke-dashoffset':'0'
	});

			   clicks=0;

				$('.circle').css({
			     'background-color':'rgba(255,255,255,.3)',
				'transform':'scale(1)',
				'z-index':'203'
							});

				$('.display').css({'opacity':'0'});
				$('.header').css({'margin-top':'100%'});
				$('.underline').css({'margin-top':'100%'});

		};

	});

});
