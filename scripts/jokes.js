$(function(){
	$("#jokeBtn").click(jokeRandom);
	$("#answerBtn").click(showAnswer);
});

function jokeRandom () {
	var jokeQuestion = ["What's a dentist's favorite time?", "What did the cow say to the farmer?", "When does a vampire sleep?"];
	var jokeAnswer = ["Tooth-hurty", "Moo You dumb dumb!", "Never!"];
	var range = jokeAnswer.length;
	var x = Math.floor((Math.random() * range));
	document.getElementById("joke-question").innerHTML = jokeQuestion[x];
	document.getElementById("joke-answer").innerHTML = jokeAnswer[x];
	document.getElementById("joke-question").style.display='block';
	document.getElementById("joke-answer").style.display='none';
	
}

function showAnswer() {
	if(document.getElementById("joke-answer").innerHTML != "") {
		document.getElementById("joke-answer").style.display='block';
	}
	else {
		document.getElementById("joke-answer").style.display='none';
	}

}