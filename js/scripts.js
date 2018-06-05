$(document).ready(function(){
 $("#factorial-form").submit(function(event){
   event.preventDefault();

// Recursive way of solving factorial
  var factorialRecursive = function (number){
  	if (number > 1){
    return number * factorialRecursive(number -1);
    } else {
    	return 1;
    }
  };

// For loop way of solving factorial
  var factorialLoop = function (number){
  	var result = 1;
    for (var i = number; i >= 1; i-= 1) {
    	result = result * i;
    };
    return result;
  };

  var userInput = $("input#factorial").val();
   $("#output").text(factorialLoop(userInput));

 });

});
