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
$("#workSubmit").click(()=>{
	$("#workSubmit").attr("data-dismiss","modal");
	let workExperience = {};
	workExperience.jobDetails = [];
	workExperience.company = $('#company').val();
	workExperience.location = $('#location').val();
	workExperience.startDate = $('#dateStart').val();
	workExperience.endDate = $('#dateEnd').val();
	workExperience.jobTitle = $('#positionTitle').val();
	workExperience.jobSummary = $('#jobSummary').val();
	workExperience.jobDetails.push($('#jobDetails1').val());
	workExperience.jobDetails.push($('#jobDetails2').val());
	workExperience.jobDetails.push($('#jobDetails3').val());
	resume.workExperience.push(workExperience);
	console.log("work experience", resume.workExperience);
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
	resume.projects.push(projects);
});

///////////ABOUT ME////////////

$("#aboutMeSubmit").click(()=>{
	$("#aboutMeSubmit").attr("data-dismiss","modal");
	resume.aboutMe = $('#aboutme-input').val();
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

let eduCounter = 1;
let workCounter = 1;
let projectCounter = 1;
let jobDetailsCounter = 3;

$('#add-edu-button').click(()=>{
	eduCounter ++;
	$('#education-buttons').append(
		`<div>
			<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#eduInfoModal${eduCounter}">
			Education #${eduCounter}
			</button>
			<button id="remove-edu-button${eduCounter}" class='btn btn-default'>
				<i class="fa fa-minus-square" aria-hidden="true"></i>
			</button>
			<!-- Education Modal -->
			<div class="modal fade" id="eduInfoModal${eduCounter}" tabindex="-1" role="dialog" aria-labelledby="eduModalLabel${eduCounter}">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title" id="eduModalLabel${eduCounter}">Education #${eduCounter}</h4>
			      </div>
			      <div class="modal-body">
				      	<form>
			      		  <div class="form-group">
			      		  <!-- Worry - if we have more than one education set, will these IDs work? -->
			      		    <label for="edInstInput">Educational Institution</label>
			      		    <input type="text" class="form-control" id="edInstInput${eduCounter}" placeholder="Belmont University">
			      		  </div>
			      		  <div class="form-group">
			      		    <label for="degree">Degree (if obtained)</label>
			      		    <input type="text" class="form-control" id="degree${eduCounter}" placeholder="BA">
			      		  </div>
			      		  <div class="form-group">
			      		    <label for="fieldOfStudy">Degree (if obtained)</label>
			      		    <input type="text" class="form-control" id="fieldOfStudy${eduCounter}" placeholder="Audio Engineering">
			      		  </div>
			        		  <div class="form-group">
			      	  		
			      	  		<p>Remember, your NSS goes under experience, not education!</p>
			      	  		<!-- Should we offer some kind of date-picker as a stretch goal? Would make UX better -->
			      		  </div>
			      		  <!-- Give users a button to add more educational stuff -->
			      		</form>
			      	</section>  <!--   education -->
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" class="btn btn-primary" data-dismiss="modal" id="saveEdu${eduCounter}">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>  <!-- education info modal -->
		</div>`
		);
	$(`#remove-edu-button${eduCounter}`).click((e)=>{
		e.currentTarget.parentNode.remove();
	});
	$(`#saveEdu${eduCounter}`).click(()=>{
		$(`#saveEdu${eduCounter}`).attr("data-dismiss","modal");
		let education = {};
		education.institution = $(`#edInstInput${eduCounter}`).val();
		education.degree = $(`#degree${eduCounter}`).val();
		education.fieldOfStudy = $(`#fieldOfStudy${eduCounter}`).val();
		// $('#edInstInput').val('');
		// $('#degree').val('');
		// $('#fieldOfStudy').val('');
		resume.education.push(education);
	});
});

$('#add-work-button').click(()=>{
	workCounter ++;
	$('#work-buttons').append(
		`<div>
			<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#workInfoModal${workCounter}">
			  Work Experience #${workCounter}
			</button>
			<button id="remove-work-button${workCounter}" class='btn btn-default'>
				<i class="fa fa-minus-square" aria-hidden="true"></i>
			</button>

			<!-- Work experience Modal -->
	<div class="modal fade" id="workInfoModal${workCounter}" tabindex="-1" role="dialog" aria-labelledby="workModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="workModalLabel">Job Experience #${workCounter}</h4>
	      </div>
	      <div class="modal-body">
	      	<section id="work-exp">
	      		<form>
	      		  <div class="form-group">
	      		    <label for="company">Company</label>
	      		    <input type="text" class="form-control" id="company${workCounter}" placeholder="Nashville Software School">
	      		  </div>
	      		  <div class="form-group">
	      		    <label for="location">Company Location</label>
	      		    <input type="text" class="form-control" id="location${workCounter}" placeholder="Nashville, TN">
	      		  </div>
	      		  <div class="form-group">
	      		    <label for="title">Position/Title</label>
	      		    <input type="text" class="form-control" id="positionTitle${workCounter}" placeholder="Technical Writer">
	      		  </div>
      			  <div class="form-group">
	      	  		<p>Remember, your time at NSS goes under experience, not education!</p>
	      	  		<!-- Should we offer some kind of date-picker as a stretch goal? Would make UX better -->
	      		    <label for="dateStart">Date started</label>
	      		    <input type="text" class="form-control" id="dateStart${workCounter}" placeholder="August 2004"><label for="dateEnd">Date finished</label>
	      		    <input type="text" class="form-control" id="dateEnd${workCounter}" placeholder="May 2008">
	      		  </div>
	      		  <div class="form-group">
	      		    <label for="jobSummary">Work Summary: give a one or two sentence description of your job OR the company for which you worked.</label>
	      		    <textarea class="form-control" id="jobSummary${workCounter}${workCounter}" placeholder="Full time software bootcamp..."></textarea>
	      		  </div>
	      		  <div class="form-group">
	      		    <label for="jobDetails">Give the details of what you have done during the time you were working in this job. Enter one responsibility per input box, and add more as needed</label>
	      		    <input type="text" class="form-control" id="jobDetails1${workCounter}" placeholder="Deployed applications leveraging Firebase...">
	      		    <input type="text" class="form-control" id="jobDetails2${workCounter}" placeholder="Created single page applications in...">
	      		    <input type="text" class="form-control" id="jobDetails3${workCounter}" placeholder="Project management and tracking with Trello and...">
	      		    <!-- Need to give users option to add fields -->
	      		  </div>
	      		</form>
	      	</section>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary" data-dismiss="modal" id="workSubmit${workCounter}">Save changes</button>
	      </div>
	    </div>
	  </div>
	</div>`
		);
	$(`#remove-work-button${workCounter}`).click((e)=>{
		e.currentTarget.parentNode.remove();
	});

$(`#workSubmit${workCounter}`).click(()=>{
	$(`#workSubmit${workCounter}`).attr("data-dismiss","modal");
	let workExperience = {};
	workExperience.jobDetails = [];
	workExperience.company = $(`#company${workCounter}`).val();
	workExperience.location = $(`#location${workCounter}${workCounter}`).val();
	workExperience.startDate = $(`#dateStart${workCounter}`).val();
	workExperience.endDate = $(`#dateEnd${workCounter}`).val();
	workExperience.jobTitle = $(`#positionTitle${workCounter}`).val();
	workExperience.jobSummary = $(`#jobSummary${workCounter}`).val();
	workExperience.jobDetails.push($(`#jobDetails1${workCounter}`).val());
	workExperience.jobDetails.push($(`#jobDetails2${workCounter}`).val());
	workExperience.jobDetails.push($(`#jobDetails3${workCounter}`).val());
	resume.workExperience.push(workExperience);
	console.log("resume.work", resume.workExperience);
});
});

$('#add-project-button').click(()=>{
	projectCounter ++;
	$('#project-buttons').append(
		`<div>
			<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#projectModal${projectCounter}">
			  Project #${projectCounter}
			</button>
			<button id="remove-project-button${projectCounter}" class='btn btn-default'>
				<i class="fa fa-minus-square" aria-hidden="true"></i>
			</button>

			<div class="modal fade" id="projectModal${projectCounter}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title" id="myModalLabel">Project #${projectCounter}</h4>
			      </div>
			      <div class="modal-body">
			        <form id="projectform${projectCounter}">
			        			<div class="form-group">
			              		    <label for="company">Project Title</label>
			              		    <input type="text" class="form-control" id="projectTitle${projectCounter}" placeholder="Nashville Software School">
			              		  </div>
			        
			              		  <div class="form-group">
			              		    <label for="title">Project Link</label>
			              		    <input type="text" class="form-control" id="projectLink${projectCounter}" placeholder="Technical Writer">
			              		  </div>
			              		  <div class="form-group">
			              		    <label for="title">Deployed Link (if deployed)</label>
			              		    <input type="text" class="form-control" id="deployLink${projectCounter}" placeholder="Technical Writer">
			              		  </div>


			        	<label for="aboutme-input">Please provide 2-3 sentences about your project. Include the technologies that were used.</label>
			        	<textarea id="projectDescription${projectCounter}" type="text" class="form-control" placeholder="Max Characters : 250" maxlength="250" rows="4"></textarea>
			        </form>

			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" class="btn btn-primary" data-dismiss="modal" id="projectSubmit${projectCounter}">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>`
		);
	$(`#remove-project-button${projectCounter}`).click((e)=>{
		e.currentTarget.parentNode.remove();
	});

	$(`#projectSubmit${projectCounter}`).click(()=>{
	$(`#projectSubmit${projectCounter}`).attr("data-dismiss","modal");
	let projects = {};
	projects.title = $(`#projectTitle${projectCounter}`).val();
	projects.URL = $(`#projectLink${projectCounter}`).val();
	projects.deployLink = $(`#deployLink${projectCounter}`).val();
	projects.description = $(`#projectDescription${projectCounter}`).val();
	resume.projects.push(projects);
});
});


$('#add-jobDetails-button').click(()=>{
	jobDetailsCounter ++;
	console.log(jobDetailsCounter);
	$('#jobDetailsList').append(
		`<input type="text" class="form-control" id="jobDetails${jobDetailsCounter}" placeholder="More job stuff...">`
		);
});



module.exports = resume;