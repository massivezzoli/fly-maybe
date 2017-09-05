var sv,
ScriptsVari = {
	//settings
	settings: {
		$body: $("body"),
		$html: $("html")
	},

	//init
	init: function() {

		//settings
		sv = this.settings;

		//UI actions
		this.bindUIActions();
		//onLoad actions
		this.onLoadActions();
		//scroll actions
		this.scrollActions();
		//resize actions
		this.resizeActions();

		//IE message
		this.ieMessage();

	},

	onLoadActions: function() {
		// Loading screen
		$(window).load(function() {

	    });
	},

	bindUIActions: function() {

	},

	scrollActions: function() {
		//terminare animazione quando raggiunto il bottom della pagina
		$(window).scroll(function() {

		});

	},

	resizeActions: function() {
		//azioni al resize
		$(window).resize(function(){


		}).resize();
	},

	ieMessage: function(){
		//thanks to Alessio Atzeni for the hint.
		//If browser is IE8 or older we show IE specific page
		if(sv.$html.hasClass("lt-ie9")){
			// define the HTML of the page
			var page  = "<div id='ie' class='container'>";
			page 	 += "<h1>Problema!</h1>";
			page 	 += "<p class='intro'>Sembra che tu sia usando un browser abbastanza datato.</p>";
			page 	 += "<p>Browser vecchi, come Internet Explorer versione 6,7 e 8 non sono supportati dal nostro sito, scaricane uno più recente ai seguenti link:</p>";
			page 	 += "<ul>";
			page 	 += "<li><a href='http://www.google.com/chrome' target='_blank'>Google Chrome</a></li>";
			page 	 += "<li><a href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'>Firefox</a></li>";
			page 	 += "<li><a href='http://www.apple.com/safari/'' target='_blank'>Safari</a></li>";
			page 	 += "</ul></div>";

			// Print the page
			$('.main').replaceWith(page);
		}
	}
}