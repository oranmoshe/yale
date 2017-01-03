
$(document).ready(function(){

	$('#submit').click(function init(){
		var val = $("#term").val();
		console.log(val);
		$.getJSON('https://yale-oran-moshe.herokuapp.com/product/'+ val +'?callback=non', 
		function(json) {
		     appenData(json);
		     console.log(json);
			 imageColors(json.image_url);
		});
		
		function appenData(obj){
			$("#icon").html('<svg src=\"' + obj.icon +'\"></svg>');
			$("#image_credit").html(obj.image_credit);
			$("#image_url").html('<img src=\"' + obj.image_url +'\">');
			$(".quot").html(obj.quot);
		}

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
		var icon = $('svg')
		icon.addEventListener("load", function() {
		    var doc = this.getSVGDocument();
		    doc.setAttribute("fill", "green");
		});

	});

});