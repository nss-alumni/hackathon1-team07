"use strict";

let counter = 1;

$('#add-edu-button').click(()=>{
	counter ++
	$('#education-buttons').append(
		`<div>
			<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#eduInfoModal${counter}">
			Education #${counter}
			</button>
			<button id="remove-edu-button${counter}" class='btn btn-default'>
				<i class="fa fa-minus-square" aria-hidden="true"></i>
			</button>
			<!-- Education Modal -->
			<div class="modal fade" id="eduInfoModal${counter}" tabindex="-1" role="dialog" aria-labelledby="eduModalLabel">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title" id="eduModalLabel">Education #${counter}</h4>
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
	$(`#remove-edu-button${counter}`).click((e)=>{
		e.currentTarget.parentNode.remove()
	})
})

