$(document).ready(function() {
	
	let answerKey = ["2x^2 + 2x + C", 
					 "36x^2 + 14x + 5", 
					 "6x^3 + 3x^2 + 3x + C", 
					 "3e^x + C", 
					 "5x + C", 
					 "2cos(2x)", 
					 "6x^8", 
					 "16x^3 + 8x", 
					 "e^(x + 1)", 
					 "y = 2x - 13"];
	
	for(let n = 1; n <= 10; n++) {
		$("#check"+n).click(function() {
			checkAnswer("#userAns"+n, answerKey[n-1], "#feedback"+n)
		});
	}
	
	function checkAnswer(userAnswer, correctAnswer, feedback) {
		//Function checks user answer to matching answerkey answer w/o spaces
		if($(userAnswer).val().replace(/\s+/g, "") == correctAnswer.replace(/\s+/g, "")){
			$(feedback).removeClass("wrong").addClass("right").fadeTo(1, 0.0).text("Correct!").fadeTo(1000, 1.0)
		}
		else{
			$(feedback).removeClass("right").addClass("wrong").fadeTo(1, 0.0).text("Incorrect, try again!").fadeTo(1000, 1.0)
		}
	}
});