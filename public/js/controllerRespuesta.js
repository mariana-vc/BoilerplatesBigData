//Controller del convertidor, Lee los campos del formulario y manda la peticiÃ³n al PHP



$(document).ready(function () {

    var GET = {};
    (function (input) {
        'use strict';
        if (input.length > 1) {
            var param = input.slice(1).replace(/\+/g, ' ').split('&'),
                    plength = param.length,
                    tmp,
                    p;

            for (p = 0; p < plength; p += 1) {
                tmp = param[p].split('=');
                GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1]);
            }
        }
    }(window.location.search));

    var x = JSON.parse(JSON.stringify(GET));
    var pregunta = x.question;
    console.log(pregunta);

    //form.submit();

    $.ajax({
        type: 'POST',
        url: '/ask',
        data: {question: pregunta},
        success: function (data) {
            var answers = JSON.parse(data);

            var an1 = answers.question.evidencelist[0];
            if (!jQuery.isEmptyObject(an1)) {
                console.log(an1);

                for (var i = 0; i < 3; i++) {

                    var valueResA = answers.question.evidencelist[i].value * 100;
                    var valueRes = valueResA.toFixed(2);
                    var textRes = answers.question.evidencelist[i].text;
                    $("#grafica" + (i + 1)).attr("data-percent", valueRes + "%");
                    $("#graficaporcentaje" + (i + 1)).attr("stroke-dashoffset", Math.PI * 2 * valueRes);
                    $("#texto" + (i + 1)).html(textRes);

                }
            }
            else{
                $("#grafica1" ).attr("data-percent", "0%");
                    $("#graficaporcentaje1" ).attr("stroke-dashoffset",0);
                    $("#texto1" ).html("We are sorry, try another question.");
                    
                    
                    $("#nav-arrows, #nav-dots" ).hide();
                
            }


            //var an1 = data.question.evidencelist[0];
            //console.log(an1);
        }


    });



});


