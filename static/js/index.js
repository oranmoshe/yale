
var data = "";
var COLOR_DOMINANT = "";
var COLOR_1 = "";
var COLOR_2 = "";
var COLOR_3 = "";
var COLOR_4 = "";
var COLOR_5 = "";
var COLOR_6 = "";
var COLOR_7 = "";
var COLOR_8 = "";
var COLOR_9 = "";
var QUOT = null;
var ICON = null;
var IMAGE = null;
var CREDIT = null;

$(document).ready(function(){
	$('#submit').click(function init(){
		$.getJSON('https://yale-oran-moshe.herokuapp.com/product/'+ $('#term').val() +'?callback=non', 
		function(json) {
				console.log(json);
				$(QUOT).html(json["quot"]) 
				$(ICON).html(json["icon_svg"])
				$(IMAGE).html('<img src='+json["image_url"]+' style=\"width:100%\">')
				$(CREDIT).html(json["image_credit"])
		  		//imageColors(json["image_url"]);
		});
		// //init();
	});
});

function imageColors(image_url){
	var colorThief = new ColorThief();
	colorThief.getColorsAsync(image_url,function(color, element){
        $('.dominant').css('color','rgb('+color[0][0]+','+color[0][1]+','+color[0][2]+')');
        $('.color1').css('color','rgb('+color[1][0]+','+color[1][1]+','+color[1][2]+')');
        $('.color2').css('color','rgb('+color[2][0]+','+color[2][1]+','+color[2][2]+')');
        $('.color3').css('color','rgb('+color[3][0]+','+color[3][1]+','+color[3][2]+')');
        $('.color4').css('color','rgb('+color[4][0]+','+color[4][1]+','+color[4][2]+')');
        $('.color5').css('color','rgb('+color[5][0]+','+color[5][1]+','+color[5][2]+')');
        $('.color6').css('color','rgb('+color[6][0]+','+color[6][1]+','+color[6][2]+')');
        $('.color7').css('color','rgb('+color[7][0]+','+color[7][1]+','+color[7][2]+')');
        $('.color8').css('color','rgb('+color[8][0]+','+color[8][1]+','+color[8][2]+')');
        $('.color9').css('color','rgb('+color[9][0]+','+color[9][1]+','+color[9][2]+')');
        $('.box.dominant').css('background-color','rgb('+color[0][0]+','+color[0][1]+','+color[0][2]+')');
        $('.box.color1').css('background-color','rgb('+color[1][0]+','+color[1][1]+','+color[1][2]+')');
        $('.box.color2').css('background-color','rgb('+color[2][0]+','+color[2][1]+','+color[2][2]+')');
        $('.box.color3').css('background-color','rgb('+color[3][0]+','+color[3][1]+','+color[3][2]+')');
        $('.box.color4').css('background-color','rgb('+color[4][0]+','+color[4][1]+','+color[4][2]+')');
        $('.box.color5').css('background-color','rgb('+color[5][0]+','+color[5][1]+','+color[5][2]+')');
        $('.box.color6').css('background-color','rgb('+color[6][0]+','+color[6][1]+','+color[6][2]+')');
        $('.box.color7').css('background-color','rgb('+color[7][0]+','+color[7][1]+','+color[7][2]+')');
        $('.box.color8').css('background-color','rgb('+color[8][0]+','+color[8][1]+','+color[8][2]+')');
        $('.box.color9').css('background-color','rgb('+color[9][0]+','+color[9][1]+','+color[9][2]+')');
        console.log(color);
	});
}

function loadImage(url){
	var colorThief = new ColorThief();
	colorThief.getColorAsync('http://images.wcdn.co.il/2301527-54.jpg?crop=w635&output=webp',function(color, element){
		COLOR_DOMINANT = 'rgb('+color[0][0]+','+color[0][1]+','+color[0][2]+')';
		COLOR_1 = 'rgb('+color[1][0]+','+color[1][1]+','+color[1][2]+')';
		COLOR_2 = 'rgb('+color[2][0]+','+color[2][1]+','+color[2][2]+')';
		COLOR_3 = 'rgb('+color[3][0]+','+color[3][1]+','+color[3][2]+')';
		COLOR_4 = 'rgb('+color[4][0]+','+color[4][1]+','+color[4][2]+')';
		COLOR_5 = 'rgb('+color[5][0]+','+color[5][1]+','+color[5][2]+')';
		COLOR_6 = 'rgb('+color[6][0]+','+color[6][1]+','+color[6][2]+')';
		COLOR_7 = 'rgb('+color[7][0]+','+color[7][1]+','+color[7][2]+')';
		COLOR_8 = 'rgb('+color[8][0]+','+color[8][1]+','+color[8][2]+')';
		COLOR_9 = 'rgb('+color[9][0]+','+color[9][1]+','+color[9][2]+')';
	});
}

