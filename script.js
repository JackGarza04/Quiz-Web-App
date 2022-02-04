$(document).ready(function() {
	
	//Answer key array
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
			checkAnswer("#userAns"+n, answerKey[n-1], "#feedback"+n);
		});
	}
	
	//Function checks the user's answer to matching answerkey answer, checks both whilst ignoring spaces
	function checkAnswer(userAnswer, correctAnswer, feedback) {
		if($(userAnswer).val().replace(/\s+/g, "") == correctAnswer.replace(/\s+/g, "")){
			$(feedback).removeClass("wrong").addClass("right").fadeTo(1, 0.0).text("Correct!").fadeTo(1000, 1.0);
		}
		else{
			$(feedback).removeClass("right").addClass("wrong").fadeTo(1, 0.0).text("Incorrect, try again!").fadeTo(1000, 1.0);
		}
	}
	
	//Clears all text fields and resets all feedback (returns page to original state)
	$("#clearAll").click(function() {
		for(let n=1; n <= 10; n++) {
			$("#userAns"+n).val("");
			$("#feedback"+n).fadeTo(1, 0.0);
		}
	});
	
	//Scroll back to top button w/ relevant animation
	var btn = $("#button");

	$(window).scroll(function() {
		if ($(window).scrollTop() > 150) {
			btn.addClass("show");
		} 
		else {
			btn.removeClass("show");
		}
	});

	btn.on("click", function(e) {
		e.preventDefault();
		$("html, body").animate({scrollTop:0}, "300");
	});
});