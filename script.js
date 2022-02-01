$(document).ready(function() {
	$("#check1").click(function(){
		if($("#ans1").val() == "2x^2 + 2x + C"){
			$("#w1").css("visibility", "hidden")
			$("#r1").css("visibility", "visible")
		}
		else{
			$("#r1").css("visibility", "hidden")
			$("#w1").css("visibility", "visible")
		}
	});
  
	$("#check2").click(function(){
		if($("#ans2").val() == "12"){
			$("#w2").css("visibility", "hidden")
			$("#r2").css("visibility", "visible")
		}
		else{
			$("#r2").css("visibility", "hidden")
			$("#w2").css("visibility", "visible")
		}
	});
});