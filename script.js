$(document).ready(function() {
	
	/* add for loop */
	$("#check1").click(function() {
		checkAnswer("#userAns1", "2x^2 + 2x + C", "#feedback1")
	});

	$("#check2").click(function() {
		checkAnswer("#userAns2", "36x^2 + 14x + 5", "#feedback2")
	});

	$("#check3").click(function() {
		checkAnswer("#userAns3", "6x^3 + 3x^2 + 3x + C", "#feedback3")
	});

	$("#check4").click(function() {
		checkAnswer("#userAns4", "3e^x + C", "#feedback4")
	});
  
	$("#check5").click(function() {
		checkAnswer("#userAns5", "5x + C", "#feedback5")
	});
  
	$("#check6").click(function() {
		checkAnswer("#userAns6", "2cos(2x)", "#feedback6")
	});
  
	$("#check7").click(function() {
		checkAnswer("#userAns7", "6x^8", "#feedback7")
	});
  
	$("#check8").click(function() {
		checkAnswer("#userAns8", "16x^3 + 8x", "#feedback8")
	});
  
	$("#check9").click(function() {
		checkAnswer("#userAns9", "e^(x + 1)", "#feedback9")
	});
  
	$("#check10").click(function() {
		checkAnswer("#userAns10", "y = 2x - 13", "#feedback10")
	});
	
	function checkAnswer(userAnswer, correctAnswer, feedback) {
		
		if($(userAnswer).val().replace(/\s+/g, "") == correctAnswer.replace(/\s+/g, "")){
			$(feedback).removeClass("wrong").addClass("right").fadeTo(1, 0.0).text("Correct!").fadeTo(1000, 1.0)
		}
		else{
			$(feedback).removeClass("right").addClass("wrong").fadeTo(1, 0.0).text("Incorrect, try again!").fadeTo(1000, 1.0)
		}
	}
});