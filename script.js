$(document).ready(function() {
	/* $("#submit").click(function(){
		$("#ans").css("visibility", "visible")
	}); */
  $("button").click(function(){
	  if($("#test").val() == "6"){
		alert("Correct, " + $("#test").val() + " is the right answer");
	  }
	  else{
		alert("Sorry, wrong answer");
	  }
  });
});