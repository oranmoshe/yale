
$(document).ready(function(){
	
	var DATA = ""; 

	$('#submit').click(function init(){
		$.getJSON('https://yale-oran-moshe.herokuapp.com/product/'+ val +'?callback=non', 
		function(json) {
		     DATA = json;
			 elementsColoring(json.image_url);
		});
	});

	function elementsColoring(image_url){
		var colorThief = new ColorThief();
		colorThief.getColorsAsync(image_url,function(color, element){
			$(".place-image").append(element);
	        $('.text-color-dominant').css('color','rgb('+color[0][0]+','+color[0][1]+','+color[0][2]+')');
	        $('.text-color-1').css('color','rgb('+color[1][0]+','+color[1][1]+','+color[1][2]+')');
	        $('.text-color-2').css('color','rgb('+color[2][0]+','+color[2][1]+','+color[2][2]+')');
	        $('.text-color-3').css('color','rgb('+color[3][0]+','+color[3][1]+','+color[3][2]+')');
	        $('.text-color-4').css('color','rgb('+color[4][0]+','+color[4][1]+','+color[4][2]+')');
	        $('.text-color-5').css('color','rgb('+color[5][0]+','+color[5][1]+','+color[5][2]+')');
	        $('.text-color-6').css('color','rgb('+color[6][0]+','+color[6][1]+','+color[6][2]+')');
	        $('.text-color-7').css('color','rgb('+color[7][0]+','+color[7][1]+','+color[7][2]+')');
	        $('.text-color-8').css('color','rgb('+color[8][0]+','+color[8][1]+','+color[8][2]+')');
	        $('.text-color-9').css('color','rgb('+color[9][0]+','+color[9][1]+','+color[9][2]+')');
	        $('.bkg-dominant').css('background-color','rgb('+color[0][0]+','+color[0][1]+','+color[0][2]+')');
	        $('.bkg-1').css('background-color','rgb('+color[1][0]+','+color[1][1]+','+color[1][2]+')');
	        $('.bkg-2').css('background-color','rgb('+color[2][0]+','+color[2][1]+','+color[2][2]+')');
	        $('.bkg-3').css('background-color','rgb('+color[3][0]+','+color[3][1]+','+color[3][2]+')');
	        $('.bkg-4').css('background-color','rgb('+color[4][0]+','+color[4][1]+','+color[4][2]+')');
	        $('.bkg-5').css('background-color','rgb('+color[5][0]+','+color[5][1]+','+color[5][2]+')');
	        $('.bkg-6').css('background-color','rgb('+color[6][0]+','+color[6][1]+','+color[6][2]+')');
	        $('.bkg-7').css('background-color','rgb('+color[7][0]+','+color[7][1]+','+color[7][2]+')');
	        $('.bkg-8').css('background-color','rgb('+color[8][0]+','+color[8][1]+','+color[8][2]+')');
	        $('.bkg-9').css('background-color','rgb('+color[9][0]+','+color[9][1]+','+color[9][2]+')');
	        $('svg').css('fill','rgb('+color[0][0]+','+color[0][1]+','+color[0][2]+')');
    	});
	}

});