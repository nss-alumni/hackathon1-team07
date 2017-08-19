var textArray = [
		'red',
		'blue',
		'green'
	]

var colorArray = [
		'red',
		'blue',
		'green'
	]

var questionArray = [
		'What is the color of the word?',
		'What is the text?'
	]

let buildPrompt = (arr1, arr2, arr3) => {
	let prompt = {}
	prompt.text = arr1[Math.floor(Math.random() * arr1.length)]
	console.log(prompt.text)
	prompt.color = arr2[Math.floor(Math.random() * arr2.length)]
	console.log(prompt.color)
	prompt.question = arr3[Math.floor(Math.random() * arr3.length)]
	return prompt
};

var prompt = buildPrompt(textArray, colorArray, questionArray)

let checkAnswer = (prompt, answer)=>{
	if(prompt.question = 'What is the color of the word?'){
		if(answer == prompt.color){
			console.log('correct')
		} else {
			console.log('incorrect')
		}
	}
	else if(prompt.question = 'What is the text?'){
		if(answer == prompt.text){
			console.log('correct')
		} else {
			console.log('incorrect')			
		}
	}
}

$(document).ready(function(){
	$('#prompt').html(`${prompt.text}`).attr('style', `color: ${(prompt.color)}`)
	$('#question').html(`${prompt.question}`)
});

$('#answer-button').click(()=>{
	console.log('click')
	let answer = $('#answer').val()
	checkAnswer(prompt, answer)
	location.reload()
});


