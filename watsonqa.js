var qa_endpoint = {
    url : 'https://dal09-gateway.watsonplatform.net/instance/582/deepqa/v1/question', // Watson QA endpoint
    username : 'udem_student21',
	password : 'kGytpsPu'
};

exports.ask = function(req, res) {
	var obj = {};

	qin = (req.body).question;	
    qText = qin.replace(/[^\x00-\x7F]|"|\n|\r|\n\r/g, "").trim();
	console.log('content for analysis: ' + qText);
		
	var question = "{\"question\" : { \"questionText\" : \"" + qText + "\"}}";
	console.log("question: " + question);
	require("request")({
		uri : qa_endpoint.url,
		method : "POST",
		headers : {
			'Content-Type' : 'application/json; charset=utf-8',
			'Accept' : 'application/json',
			'X-SyncTimeout' : '30'
		},
		auth : {
			user : qa_endpoint.username,
			pass : qa_endpoint.password
		},
		rejectUnauthorized: false,
		requestCert: true,
		agent: false,
		body: question
	}, function(error, response, body) {
                

                
                var data = JSON.parse(JSON.stringify(body));
                                

                res(body  );
            
            /*
            var evidence = "evidencelist";
            var list = value[evidence];

            var value = "value";
            var text = "text";

            var size = list.length;
            if (size >= 3) {
                size = 3;
            } else {
                size = list.length;
            }

            var valueRes;
            var textRes;


            var resultadoP;
            
            
            

            for (var i = 0; i < size; i++) {
                var obj = list[i];
                var valueResA = obj[value] * 100;
                valueRes = valueResA.toFixed(2);
                textRes = obj[text];

                console.log(i + "val "+ valueRes);
            }

                */
                
                
var html = "<html lang='en'>"+
    "<head>"+
        "<meta charset='UTF-8' />"+
        "<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'> "+
        "<title>Fullscreen Slit Slider with CSS3 and jQuery</title>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'> "+
        "<meta name='description' content='Fullscreen Slit Slider with CSS3 and jQuery' />"+
        "<meta name='keywords' content='slit slider, plugin, css3, transitions, jquery, fullscreen, autoplay' />"+
        "<meta name='author' content='Codrops' />"+
        "<link rel='shortcut icon' href='../favicon.ico'> "+
        "<link rel='stylesheet' type='text/css' href='css/demo_1.css' />"+
        "<link rel='stylesheet' type='text/css' href='stylesheets/style_1.css' />"+
        "<link rel='stylesheet' type='text/css' href='stylesheets/custom_1.css' />"+
        "<link rel='stylesheet' href='stylesheets/styleRespuesta.css'>"+
        "<link rel='stylesheet' type='text/css' href='stylesheets/buttons.css' />"+
        "<link rel='stylesheet' type='text/css' href='stylesheets/normalize.css' />"+
        "<link rel='stylesheet' type='text/css' href='stylesheets/demo1.css' />"+
        "<link rel='stylesheet' type='text/css' href='stylesheets/component.css' />"+
        "<script src='js/modernizr.custom.js'></script>"+
        "<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.1.min.js'></script>"+
        "<script type='text/javascript' src='js/controllerRespuesta.js'></script>"+
        "<script type='text/javascript' src='js/modernizr.custom.79639.js'></script>"+
        "<noscript>"+
        "<link rel='stylesheet' type='text/css' href='stylesheets/styleNoJS_1.css' />"+
        "</noscript>"+
    "</head>"+
    "<body>"+
        "<form action='home.html'>"+
            "<button  class='button button--nanuk button--round-l button--text-thick button--inverted'>"+
                "<span>G</span>"+
                "<span>o</span>"+
                "<span> </span>"+
                "<span> </span>"+
                "<span>b</span>"+
                "<span>a</span>"+
                "<span>c</span>"+
                "<span>k</span>"+

            "</button>"+
        "</form>"+

        "<div class='container demo-1'>"+



            "<div id='slider' class='sl-slider-wrapper'>"+

                "<div class='sl-slider'>"+

                    "<div class='sl-slide bg-1' data-orientation='horizontal' data-slice1-rotation='-25' data-slice2-rotation='-25' data-slice1-scale='2' data-slice2-scale='2'>"+
                        "<div class='sl-slide-inner'>"+
                            "<div class='deco' >"+
                                "<!--  Container  -->"+
                                "<ul  class='progress'>"+
                                    "<li id='grafica1' data-percent='13%'>"+
                                        "<svg viewBox='-10 -10 220 220'>"+
                                        "<g fill='none' stroke-width='12' transform='translate(100,100)'>"+
                                        "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                        "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                        "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                        "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                        "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                        "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                        "</g>"+
                                        "</svg>"+
                                        "<svg viewBox='-10 -10 220 220'>"+
                                        "<path id='graficaporcentaje1' d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='81'></path>"+
                                        "</svg>"+
                                    "</li>  "+


                                "</ul>"+



                            "</div>"+

                            "<blockquote><p id='texto1'>You have just dined, and of miles, there is complicity.</p></blockquote>"+





                       " </div>"+
                    "</div>"+
                    "<div class='sl-slide bg-2' data-orientation='vertical' data-slice1-rotation='10' data-slice2-rotation='-15' data-slice1-scale='1.5' data-slice2-scale='1.5'>"+
                        "<div class='sl-slide-inner'>"+
                            "<div class='deco' >"+

                                "<ul  class='progress'>"+
                                    "<li id='grafica2' data-percent='13%'>"+
                                        "<svg viewBox='-10 -10 220 220'>"+
                                        "<g fill='none' stroke-width='12' transform='translate(100,100)'>"+
                                        "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                        "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                        "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                        "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                        "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                        "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                        "</g>"+
                                        "</svg>"+
                                        "<svg viewBox='-10 -10 220 220'>"+
                                        "<path id='graficaporcentaje2' d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='81'></path>"+
                                        "</svg>"+
                                    "</li>  "+


                                "</ul>"+

                            "</div>"+
                            "<blockquote><p id='texto2'>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p></blockquote>"+



                        "</div>"+
                    "</div>"+

                    "<div class='sl-slide bg-3' data-orientation='horizontal' data-slice1-rotation='3' data-slice2-rotation='3' data-slice1-scale='2' data-slice2-scale='1'>"+
                        "<div class='sl-slide-inner'>"+
                            "<div class='deco' >"+
                                "<ul  class='progress'>"+
                                    "<li id='grafica3' data-percent='13%'>"+
                                        "<svg viewBox='-10 -10 220 220'>"+
                                        "<g fill='none' stroke-width='12' transform='translate(100,100)'>"+
                                        "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                        "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                        "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                        "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                        "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                        "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                        "</g>"+
                                        "</svg>"+
                                        "<svg viewBox='-10 -10 220 220'>"+
                                        "<path id='graficaporcentaje3' d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='81'></path>"+
                                        "</svg>"+
                                    "</li>  "+


                                "</ul>"+
                            "</div>"+
                            "<blockquote><p id='texto3'>Thousands of people who say they 'love' animals sit down once or twice a day to enjoy the flesh of creatures who have been utterly deprived of everything that could make their lives worth living and who endured the awful suffering and the terror of the abattoirs.</p></blockquote>"+

                        "</div>"+
                    "</div>"+

                "</div><!-- /sl-slider -->"+

                "<nav id='nav-arrows' class='nav-arrows'>"+
                    "<span class='nav-arrow-prev'>Previous</span>"+
                    "<span class='nav-arrow-next'>Next</span>"+
                "</nav>"+

                "<nav id='nav-dots' class='nav-dots'>"+
                    "<span class='nav-dot-current'></span>"+
                    "<span></span>"+
                    "<span></span>"+
                "</nav>"+

            "</div><!-- /slider-wrapper -->"+

        "</div>"+
        "<!--  Defining Angle Gradient Colors  -->"+
        "<svg width='0' height='0'>"+
        "<defs>"+
        "<linearGradient id='cl1' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>"+
        "<stop stop-color='#FEF730'/>"+
        "<stop offset='100%' stop-color='#92DB39'/>"+
        "</linearGradient>"+
        "<linearGradient id='cl2' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='0' y2='1'>"+
        "<stop stop-color='#92DB39'/>"+
        "<stop offset='100%' stop-color='#16DAF4'/>"+
        "</linearGradient>"+
        "<linearGradient id='cl3' gradientUnits='objectBoundingBox' x1='1' y1='0' x2='0' y2='1'>"+
        "<stop stop-color='#16DAF4'/>"+
        "<stop offset='100%' stop-color='#CE51F7'/>"+
        "</linearGradient>"+
        "<linearGradient id='cl4' gradientUnits='objectBoundingBox' x1='1' y1='1' x2='0' y2='0'>"+
        "<stop stop-color='#CE51F7'/>"+
        "<stop offset='100%' stop-color='#F751B5'/>"+
        "</linearGradient>"+
        "<linearGradient id='cl5' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='0' y2='0'>"+
        "<stop stop-color='#F751B5'/>"+
        "<stop offset='100%' stop-color='#FB5F51'/>"+
        "</linearGradient>"+
        "<linearGradient id='cl6' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='0'>"+
        "<stop stop-color='#FB5F51'/>"+
        "<stop offset='100%' stop-color='#FEF730'/>"+
        "</linearGradient>"+
        "</defs>"+
        "</svg>"+
        "<!--"+
        
                "<div id='contenedor'>"+
        
                    "<form id='theForm' class='simform' action='ask' method='POST' autocomplete='off'>"+
                        "<div class='simform-inner'>"+
        
                            "<ol class='questions'>"+
                                "<li>"+
                                    "<span><label for='q1'>What day is today?</label></span>"+
                                    "<input id='question' name='question' type='text'/>"+
                                "</li>"+
                            "</ol>"+
        
                            "<button class='submit' type='submit'>Ask</button>"+
        
                            "<div class='controls'>"+
                                "<button class='next'></button>"+
                                "<div class='progress'></div>"+
                                "<span class='number'>"+
                                    "<span class='number-current'></span>"+
                                    "<span class='number-total'></span>"+
                                "</span>"+
                                "<span class='error-message'></span>"+
                            "</div>"+
        
                        "</div>"+
                        "<span class='final-message'></span>"+
                    "</form>"+
                "</div>-->"+
        "<!-- /container -->"+
        
       
        
        "<script src='js/classie.js'></script>"+
        "<script src='js/stepsForm.js'></script>"+
        "<script>"+
            "var theForm = document.getElementById('theForm');"+

            "new stepsForm(theForm, {"+
                "onSubmit: function (form) {"+
                    
                    "classie.addClass(theForm.querySelector('.simform-inner'), 'hide');"+


                    "form.submit();"+
                   

                    "var messageEl = theForm.querySelector('.final-message');"+
                    "messageEl.innerHTML = 'We are looking for your answer...';"+
                    "classie.addClass(messageEl, 'show');"+
                "}"+
            
            "});"+
        "</script>"+
        "<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js'></script>"+
        "<script type='text/javascript' src='js/jquery.ba-cond.min.js'></script>"+
        "<script type='text/javascript' src='js/jquery.slitslider.js'></script>"+
        "<script type='text/javascript'>"+
            "$(function () {"+
                "var Page = (function () {"+
                    "var $navArrows = $('#nav-arrows'),"+
                            "$nav = $('#nav-dots > span'),"+
                            "slitslider = $('#slider').slitslider({"+
                        "onBeforeChange: function (slide, pos) {"+
                            "$nav.removeClass('nav-dot-current');"+
                            "$nav.eq(pos).addClass('nav-dot-current');"+
                        "}"+
                    "}),"+
                            "init = function () {"+
                                "initEvents();"+
                            "},"+
                            "initEvents = function () {"+
                                "$navArrows.children(':last').on('click', function () {"+
                                    "slitslider.next();"+
                                    "return false;"+
                                "});"+
                                "$navArrows.children(':first').on('click', function () {"+
                                    "slitslider.previous();"+
                                    "return false;"+
                                "});"+
                                "$nav.each(function (i) {"+
                                    "$(this).on('click', function (event) {"+
                                        "var $dot = $(this);"+
                                        "if (!slitslider.isActive()) {"+
                                            "$nav.removeClass('nav-dot-current');"+
                                            "$dot.addClass('nav-dot-current');"+
                                        "}"+
                                        "slitslider.jump(i + 1);"+
                                        "return false;"+
                                    "});"+
                                "});"+
                            "};"+
                    "return {init: init};"+
                "})();"+
                "Page.init();"+
            "});"+
        "</script>"+
    "</body>"+
"</html>";
                
                
                
                
                
		//res(html  );
                
                
                
	});
};
