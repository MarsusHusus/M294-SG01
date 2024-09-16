/* console.log("hi");

var a = 1; // ohne scope
const b = 2;
let c = 3; // mit scope

function test(){
    console.log("test");
    let d = 4;
    console.log(d);
}

test();

 

document.getElementById("text").innerHTML = "hi Welt"; 


import { durchmesser } from './app.js';
console.log(durchmesser(5));*/


// JQuerry
$('#text').html('Hallo Welt mit JQUERRY');

$('#text').addClass('blue');

$('#text')
    .html('Hallo Welt mit Jqry')
    .addClass('Blue')
    .removeClass('yellow')
    .on('click', function(){
        console.log('click');
        $(this).toggleClass('red');
    });

//jqgetJson

$.getJSON("data.json", function (response) {
        //console.log(response);
        $.get("template.hbs", function(template){
            //console.log(template);
            var compiled = Handlebars.compile(template);
            var html = compiled(response);
            console.log(html);
            //console.log(html)
            $('main').append(html);
        });
    });

