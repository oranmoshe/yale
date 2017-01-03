
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

$('#submit').click(function init(){
	$.getJSON('https://yale-oran-moshe.herokuapp.com/product/'+ $('#term').val() +'?callback=non', 
	function(json) {
			console.log(json);
			$(QUOT).html(json["quot"]) 
			$(ICON).html(json["icon_svg"])
			$(IMAGE).html('<img src='+json["image_url"]+' style=\"width:100%\">')
			$(CREDIT).html(json["image_credit"])
	  		loadImage(json["image_url"]);
	});
	init();
});

function loadImage(url){
	var colorThief = new ColorThief();
	colorThief.getColorsAsync(url,function(color, element){
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
        $('svg').css('fill','rgb('+color[0][0]+','+color[0][1]+','+color[0][2]+')');
	});
}

