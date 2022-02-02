$(document).ready(function() {
	$("#check1").click(function() {
		checkAnswer("#userAns1", "2x^2 + 2x + C", "#feedback1")
	});

	$("#check2").click(function() {
		checkAnswer("#userAns2", "36x^2 + 14x + 5", "#feedback2")
	});

	$("#check3").click(function() {
		checkAnswer("#userAns3", "6x^3 + 3x^2 + 3x + C", "#feedback3")
	});
  
	function checkAnswer(userAnswer, correctAnswer, feedback) {
		
		if($(userAnswer).val().replace(/\s+/g, "") == correctAnswer.replace(/\s+/g, "")){
			$(feedback).removeClass("wrong").addClass("right").fadeTo(1, 0.0).text("Correct!").fadeTo(1000, 1.0)
		}
		else{
			$(feedback).removeClass("right").addClass("wrong").fadeTo(1, 0.0).text("Incorrect!").fadeTo(1000, 1.0)
		}
	}
});