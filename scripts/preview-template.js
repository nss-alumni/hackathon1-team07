"use strict";

console.log('preview-template.js');

/* -----BROWSERIFY ------*/
//require() returns the exports of the module name that you specify.
var Handlebars = require('hbsfy/runtime');
var resumeFactory = require('./main.js');
var	templateOne = require('../templates/template-one.hbs');
var templateTwo = require('../templates/template--2.hbs');
var templateThree = require('../templates/template--3.hbs');

// add each template to an array so we can loop through them like a carousel
let templateArray = [templateOne, templateTwo];
// index value used to loop through templateArray on click events
let i = 0;

/*----- HANDLEBARS HELPER -----*/



function createHTML(i) {
	// Target where the results will be displayed and send the data to the Handlebars template
	$('#output').html(templateArray[i](resumeFactory));
}


/* ----- EVENT LISTENERS ----- */
$('#submitButton').click(function() {
	console.log('you clicked the button');
 	createHTML(i);
});

// decrements i to display the previous template in the templateArray
$('#leftArrow').click(function() {
	console.log('you clicked the left arrow');
	i--;
	if(i < 0){
		i = templateArray.length - 1;
	}
 	createHTML(i);
});

// increments i to display the next template in the templateArray
$('#rightArrow').click(function() {
	console.log('you clicked the right arrow');
	i++;
	if(i == templateArray.length){
		i = 0;
	}
 	createHTML(i);
});


module.exports = {
	// since there's no other modules, there's no need to export them
};