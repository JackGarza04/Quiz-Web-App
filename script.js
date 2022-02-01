$(document).ready(function() {
	$("#check1").click(function(){
		if($("#ans1").val() == "2x^2 + 2x + C"){
			$("#w1").css("visibility", "hidden").fadeTo(1, 0.01)
			$("#r1").css("visibility", "visible").fadeTo(1000, 1.0)
		}
		else{
			$("#r1").css("visibility", "hidden").fadeTo(1, 0.01)
			$("#w1").css("visibility", "visible").fadeTo(1000, 1.0)
		}
	});
  
	$("#check2").click(function(){
		if($("#ans2").val() == "36x^2 + 14x + 5"){
			$("#w2").css("visibility", "hidden").fadeTo(1, 0.01)
			$("#r2").css("visibility", "visible").fadeTo(1000, 1.0)
		}
		else{
			$("#r2").css("visibility", "hidden").fadeTo(1, 0.01)
			$("#w2").css("visibility", "visible").fadeTo(1000, 1.0)
		}
	});
	
	$("#check3").click(function(){
		if($("#ans3").val() == "36x^2 + 14x + 5"){
			$("#w3").css("visibility", "hidden").fadeTo(1, 0.01)
			$("#r3").css("visibility", "visible").fadeTo(1000, 1.0)
		}
		else{
			$("#r3").css("visibility", "hidden").fadeTo(1, 0.01)
			$("#w3").css("visibility", "visible").fadeTo(1000, 1.0)
		}
	});
});