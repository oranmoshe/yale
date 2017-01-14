
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

function runSame(){
	var vocabulary = words;
	// $.getJSON("js/words.json", function(json) {
 	// 	vocabulary = json;
	// });	
	var x = Math.floor((Math.random() * words.length) + 1);
	generateCommercial(vocabulary[x]);
	setInterval(function(){
		x = Math.floor((Math.random() * words.length) + 1);		
		generateCommercial(vocabulary[x]);
	}, 20000);
}

function runRandom(){
	var vocabulary = words;
	// $.getJSON("js/words.json", function(json) {
 	// 	vocabulary = json;
	// });	
	var x1 = Math.floor((Math.random() * words.length) + 1);
	var x2 = Math.floor((Math.random() * words.length) + 1);
	generateCommercial(vocabulary[x],vocabulary[x2]);
	setInterval(function(){
		x1 = Math.floor((Math.random() * words.length) + 1);		
		x2 = Math.floor((Math.random() * words.length) + 1);		
		generateCommercial(vocabulary[x1],vocabulary[x2]);
	}, 20000);
}

$(document).ready(function(){
	$('#submit').click(function init(){
		generateCommercial($('#term').val());
	});
});

function generateCommercial(term){
	$.getJSON('https://yale-oran-moshe.herokuapp.com/product/'+ term +'?callback=non', 
	function(json) {
		var image_url = "";
		if(json["image_url"]!=""){
  			image_url = json["image_url"];
		}else{
			image_url = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=";
		}
		imageColors(image_url,json);
	});
}

function generateCommercial(term1,term2){
	$.getJSON('https://yale-oran-moshe.herokuapp.com/product/'+ term1 +'/'+ term2 +'?callback=non', 
	function(json) {
		var image_url = "";
		if(json["image_url"]!=""){
  			image_url = json["image_url"];
		}else{
			image_url = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=";
		}
		imageColors(image_url,json);
	});
}

function imageColors(image_url,json){
	var colorThief = new ColorThief();
	colorThief.getColorsAsync(image_url,function(color, element){		
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
        $(IMAGE).html(element);
        $(QUOT).html(json["quot"]).css('color',COLOR_2);
		$(ICON).html(json["icon_svg"]).find('svg').css('fill',COLOR_2);
		$(CREDIT).html(json["image_credit"]);
	});
}

var words = ["people",
"Man",
"child",
"work",
"life",
"woman",
"party",
"school",
"family",
"business",
"home",
"money",
"ideas",
"Friends",
"authority",
"war",
"mom",
"society",
"community",
"Education",
"girls",
"Father",
"force",
"decision",
"class",
"mind",
"Death",
"team",
"experience",
"boys",
"food",
"art",
"wife",
"relationship",
"nature",
"bed",
"computer",
"Trump",
"leaders",
"colour",
"future",
"animal",
"heart",
"love",
"music",
"knowledge",
"environment",
"success",
"thoughts",
"space",
"choice",
"individuality",
"technology",
"Energy",
"Lady",
"science",
"college",
"feeling",
"Army",
"dog",
"baby",
"profit",
"attitude",
"drugs",
"culture",
"memory",
"TV",
"objects",
"career",
"fear",
"sex",
"crime",
"eating",
"peace",
"sport",
"failure",
"marriage",
"spirituality",
"strength",
"Cash",
"Hope",
"vote",
"exercise",
"play",
"belief",
"reality",
"the weekend",
"confidence",
"commitment",
"drink",
"coffee",
"tradition",
"improvement",
"freedom",
"bed",
"acid",
"silence",
"faith",
"religion",
"living",
"creature",
"Empire",
"focus",
"purchase",
"sleeping",
"beer",
"drama",
"muscle",
"soul",
"sugar",
"philosophy",
"possession",
"spending",
"awareness",
"cigarette",
"secret",
"wedding",
"American",
"dancing",
"dealer",
"discovery",
"emotion",
"furniture",
"intelligence",
"retirement",
"routine",
"substance",
"anger",
"birthday",
"darkness",
"Hero",
"infection",
"interaction",
"medicine",
"chemical",
"consumption",
"human",
"anxiety",
"luck",
"alcohol",
"Heaven",
"prayer",
"enthusiasm",
"princess",
"satisfaction",
"talent",
"lover",
"shopping",
"imagination",
"mystery",
"vexcitement",
"joy",
"pride",
"universe",
"consciousness",
"cow",
"mummy",
"Passion",
"chicken",
"evolution",
"pig",
"potato",
"Depression",
"destruction",
"friendship",
"sympathy",
"wonder",
"ambition",
"entertainment",
"logic",
"daddy",
"Jew",
"running",
"Bible",
"myth",
"Rebel",
"therapy",
"adventure",
"triumph",
"capitalism",
"crack",
"fantasy",
"juice",
"sandwich",
"shit",
"Sin",
"whisky",
"divorce",
"liberation",
"teenager",
"Weed",
"Heroin",
"Cocaine",
"Sex",
"Unicorn",
"Love",
"Cheating",
"Drinking",
"Burger",
"Pizza"];

