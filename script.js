$(document).ready(function() {
	$("#btnrev").click(function(){
		$("#ans").css("visibility", "visible")
	});
  $("button").click(function(){
	  if($("#test").val() == "6"){
		alert("Correct!" + $("#test").val());
	  }
	  else{
		alert("Sorry, wrong answer!");
	  }
  });
});