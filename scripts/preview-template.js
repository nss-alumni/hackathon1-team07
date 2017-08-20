"use strict";

console.log('preview-template.js'); 

/* -----BROWSERIFY ------*/
//require() returns the exports of the module name that you specify.
var Handlebars = require('hbsfy/runtime');
var	templateOne = require('../templates/template-one.hbs');

/*----- HANDLEBARS HELPER -----*/



function createHTML(data) {
	// Target where the results will be displayed and send the data to the Handlebars template
	$('#container').html(templateOne(data));
}


/* ----- EVENT LISTENERS ----- */
$('#submitButton').click(function() {
	console.log('you clicked the button'); 
 	createHTML();
}); 


module.exports = {
	// since there's no other modules, there's no need to export them
};