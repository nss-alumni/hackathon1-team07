"use strict";

let eduCounter = 1;
let workCounter = 1;
let projectCounter = 1;
let jobDetailsCounter = 3;

$('#add-edu-button').click(()=>{
	eduCounter ++
	$('#education-buttons').append(
		`<div>
			<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#eduInfoModal${eduCounter}">
			Education #${eduCounter}
			</button>
			<button id="remove-edu-button${eduCounter}" class='btn btn-default'>
				<i class="fa fa-minus-square" aria-hidden="true"></i>
			</button>
			<!-- Education Modal -->
			<div class="modal fade" id="eduInfoModal${eduCounter}" tabindex="-1" role="dialog" aria-labelledby="eduModalLabel">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title" id="eduModalLabel">Education #${eduCounter}</h4>
			      </div>
			      <div class="modal-body">
			      	<section id="education">
			      		<form class="form-horizontal">
			      		  <div class="form-group">
			      		  <!-- Worry - if we have more than one education set, will these IDs work? -->
			      		    <label for="edInstInput">Educational Institution</label>
			      		    <input type="text" class="form-control" id="edInstInput" placeholder="Belmont University">
			      		  </div>
			      		  <div class="form-group">
			      		    <label for="degree">Degree (if obtained)</label>
			      		    <input type="text" class="form-control" id="degree" placeholder="BA">
			      		  </div>
			      		  <div class="form-group">
			      		    <label for="fieldOfStudy">Degree (if obtained)</label>
			      		    <input type="text" class="form-control" id="fieldOfStudy" placeholder="Audio Engineering">
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
			        <button type="button" class="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>  <!-- education info modal -->
		</div>`
		);
	$(`#remove-edu-button${eduCounter}`).click((e)=>{
		e.currentTarget.parentNode.remove()
	})
})

$('#add-work-button').click(()=>{
	workCounter ++
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
	      		<form class="form-horizontal">
	      		  <div class="form-group">
	      		    <label for="company">Company</label>
	      		    <input type="text" class="form-control" id="company" placeholder="Nashville Software School">
	      		  </div>
	      		  <div class="form-group">
	      		    <label for="location">Company Location</label>
	      		    <input type="text" class="form-control" id="location" placeholder="Nashville, TN">
	      		  </div>
	      		  <div class="form-group">
	      		    <label for="title">Position/Title</label>
	      		    <input type="text" class="form-control" id="degree" placeholder="Technical Writer">
	      		  </div>
      			  <div class="form-group">
	      	  		<p>Remember, your time at NSS goes under experience, not education!</p>
	      	  		<!-- Should we offer some kind of date-picker as a stretch goal? Would make UX better -->
	      		    <label for="dateStart">Date started</label>
	      		    <input type="text" class="form-control" id="dateStart" placeholder="August 2004"><label for="dateEnd">Date finished</label>
	      		    <input type="text" class="form-control" id="dateEnd" placeholder="May 2008">
	      		  </div>
	      		  <div class="form-group">
	      		    <label for="jobSummary">Work Summary: give a one or two sentence description of your job OR the company for which you worked.</label>
	      		    <textarea class="form-control" id="jobSummary" placeholder="Full time software bootcamp..."></textarea>
	      		  </div>
	      		  <div class="form-group">
	      		    <label for="jobDetails">Give the details of what you have done during the time you were working in this job. Enter one responsibility per input box, and add more as needed</label>
	      		    <input type="text" class="form-control" id="jobDetails1" placeholder="Deployed applications leveraging Firebase...">
	      		    <input type="text" class="form-control" id="jobDetails2" placeholder="Created single page applications in...">
	      		    <input type="text" class="form-control" id="jobDetails3" placeholder="Project management and tracking with Trello and...">
	      		    <!-- Need to give users option to add fields -->
	      		  </div>
	      		</form>
	      	</section>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary">Save changes</button>
	      </div>
	    </div>
	  </div>
	</div>`
		);
	$(`#remove-work-button${workCounter}`).click((e)=>{
		e.currentTarget.parentNode.remove()
	})
})

$('#add-project-button').click(()=>{
	projectCounter ++
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
			        <form id="aboutme-form">
					<label for="aboutme-input">Please provide 2-3 sentences articulating was sets you apart from other developers with a similar skill level.  Be sure to express enthusiasim!</label>
					<textarea id="aboutme-input" type="text" class="form-control" placeholder="Max Characters : 250" maxlength="250" rows="4"></textarea>
				</form>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" class="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>`
		);
	$(`#remove-project-button${projectCounter}`).click((e)=>{
		e.currentTarget.parentNode.remove()
	})
})


$('#add-jobDetails-button').click(()=>{
	jobDetailsCounter ++
	console.log(jobDetailsCounter)
	$('#jobDetailsList').append(
		`<input type="text" class="form-control" id="jobDetails${jobDetailsCounter}" placeholder="More job stuff...">`
		);
})

