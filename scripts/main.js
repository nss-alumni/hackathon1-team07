"use strict";
console.log("main.js");
	

let resume = {};
///////////BASICS & CONTACT////////////

$("#contactInfoSubmit").click(()=>{
	$("#contactInfoSubmit").attr("data-dismiss","modal");
	resume.name = $('#nameInput').val();
	resume.email = $('#emailInput').val();
	resume.location = $('#addressInput').val();
	resume.phone = $('#phoneInput').val();
	resume.portfolioURL = $('#portfolioInput').val();
	resume.githubURL = $('#githubInput').val();
	resume.linkedInURL = $('#linkedInInput').val();
	// $('#nameInput').val('');
	// $('#emailInput').val('');
	// $('#addressInput').val('');
	// $('#phoneInput').val('');
	// $('#portfolioInput').val('');
	// $('#githubInput').val('');
	// $('#linkedInInput').val('');	
});

///////////EDUCATION////////////
resume.education = [];

$("#educationSubmit").click(()=>{
	$("#educationSubmit").attr("data-dismiss","modal");
	let education = {};
	education.institution = $('#edInstInput').val();
	education.degree = $('#degree').val();
	education.fieldOfStudy = $('#fieldOfStudy').val();
	// $('#edInstInput').val('');
	// $('#degree').val('');
	// $('#fieldOfStudy').val('');
	resume.education.push(education);
});




///////////WORK EXPERIENCE////////////
resume.workExperience = [];
resume.workExperience.jobDetails = [];
$("#workSubmit").click(()=>{
	$("#workSubmit").attr("data-dismiss","modal");
	let workExperience = {};
	workExperience.company = $('#company').val();
	workExperience.location = $('#location').val();
	workExperience.startDate = $('#dateStart').val();
	workExperience.endDate = $('#edInstInput').val();
	workExperience.jobTitle = $('#positionTitle').val();
	workExperience.jobSummary = $('#jobSummary').val();
	// $('#company').val('');
	// $('#location').val('');
	// $('#dateStart').val('');
	// $('#edInstInput').val('');
	// $('#positionTitle').val('');
	// $('#jobSummary').val('');
	// $('#jobDetails1').val('');
	// $('#jobDetails2').val('');
	// $('#jobDetails3').val('');
	resume.workExperience.jobDetails.push($('#jobDetails1').val());
	resume.workExperience.jobDetails.push($('#jobDetails2').val());
	resume.workExperience.jobDetails.push($('#jobDetails3').val());
	resume.workExperience.push(workExperience);
});

///////////PROJECTS////////////
resume.projects = [];
$("#projectSubmit").click(()=>{
	$("#projectSubmit").attr("data-dismiss","modal");
	let projects = {};
	projects.title = $('#projectTitle').val();
	projects.URL = $('#projectLink').val();
	projects.deployLink = $('#deployLink').val();
	projects.description = $('#projectDescription').val();
	// $('#projectTitle').val('');
	// $('#projectLink').val('');
	// $('#deployLink').val('');
	// $('#projectDescription').val('');
	resume.projects.push(projects);

});

///////////ABOUT ME////////////

$("#aboutMeSubmit").click(()=>{
	$("#aboutMeSubmit").attr("data-dismiss","modal");
	resume.aboutMe = $('#aboutme-input').val();
	// $('#aboutme-input').val('');
});

///////////SKILLS////////////
resume.skills = [];
$("#skillSubmit").click(()=>{
	$("#skillSubmit").attr("data-dismiss","modal");
	resume.skills = $('input[type=checkbox]:checked').map(function(_, el) {
    	return $(el).val();
	}).get();

	console.log("big resume", resume);
						
});
module.exports = resume;