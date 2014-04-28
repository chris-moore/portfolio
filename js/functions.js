
//--------------------------------------------------
// JQUERY EVENT HANDLERS
//--------------------------------------------------

/**
 * See (http://jquery.com/).
 * See the jQuery Library  {@link http://jquery.com/} for full details.
 */
$(document).ready(function(){
	
	// initial setup 
	initMenu();
	
	// load portfolio data
	loadPortfolio();
	
});

/**
 * Size change document function.
 */
$(window).resize(function() {
	
});


//--------------------------------------------------
// PROPERTIES
//--------------------------------------------------

/**
 * String URL for portfolio configuration json file
 * @type String
 */
var portfolio_url = "json/portfolio.json";

/**
 * JSON object containing portfolio configuration
 * @type Object
 */
var portfolio_obj = "";

//--------------------------------------------------
// FUNCTIONS
//--------------------------------------------------

/**
 * Scroll to the designated id
 * @param {String} id - Name of div to scroll to
 */
function scrollToAnchor(id){
	$("html,body").animate({scrollTop: $("#" + id).offset().top}, 400, function(){});
}

/**
 * Initialize the main menu visual state. Add functionality to buttons.
 */
function initMenu() {
	$("#nav_about").click(function(event){
		scrollToAnchor("about");
	});
	$("#nav_portfolio").click(function(event){
		scrollToAnchor("portfolio");
	});
	$("#nav_contact").click(function(event){
		scrollToAnchor("contact");
	});
}

/**
 * Build the portfolio items from data
 */
function buildPortfolio() {
	
	var str = "";
	var container = '<div class="portfolio_item">[CONTENT]</div>'
	var img = '<img class="portfolio_standard" src="[CONTENT]"/>';
	var retina = '<img class="portfolio_retina" src="[CONTENT]"/>';
	var title = '<div class="portfolio_title">[CONTENT]</div>';
	var description = '<div class="portfolio_description">[CONTENT]</div>';
	var url = '<a href="[CONTENT]" class="portfolio_url">VIEW PROJECT</a>';
	var total = "";
	
	for(var i = 0; i < portfolio_obj.length; i++) {
		
		str = img.replace("[CONTENT]", portfolio_obj[i].img);
		str += retina.replace("[CONTENT]", portfolio_obj[i].retina);
		str += title.replace("[CONTENT]", portfolio_obj[i].title);
		str += description.replace("[CONTENT]", portfolio_obj[i].description);
		if(portfolio_obj[i].url != null) {
			str += url.replace("[CONTENT]", portfolio_obj[i].url);
		}
		
		total += container.replace("[CONTENT]", str);
	}
	
	$("#portfolio_items").html(total);
	//document.getElementById("portfolio_container").write(str);
}

/**
 * Load the portfolio JSON config file
 */
function loadPortfolio() {
	
	$.ajax({ //GET or POST or PUT or DELETE verb
		url: portfolio_url, // Location of the service
		contentType: "application/json; charset=utf-8", // content type sent to server
		dataType: "json", //Expected data format from server
		processdata: true, //True or False
		success: function(data) {//On Successfull service call
			try { portfolio_obj = jQuery.parseJSON(data); }
			catch(e) { portfolio_obj = data; }
			finally {portfolio_obj = data.portfolio}
			buildPortfolio();
		},
		error: function(xhr) {// When Service call fails
			alert("[loadPortfolio] ERROR: " + portfolio_url + " " + JSON.stringify(xhr));
			console.log("[loadPortfolio] ERROR: " + xhr);	
		}
	});
}








