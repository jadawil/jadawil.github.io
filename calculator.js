  	var awnsered = false;
  	const ERROR = "Error";
  	function caclulate() {
  		var calculation = document.getElementById("calculation").value.split(" ");

  		var operand;
  		var operation;

  		for(var i = 0; i < calculation.length; i++) {
  			console.log(calculation[i]);
  			if(!isNaN(calculation[i])) {
  				if(operand == undefined) {
  					operand = parseFloat(calculation[i]);
  				}
  				else if(operation == "+") {
  					operand = operand + parseFloat(calculation[i]);	
  				}
  				else if(operation == "-") {
  					operand = operand - parseFloat(calculation[i]);	
  				}
  				else if(operation == "*") {
  					operand = operand * parseFloat(calculation[i]);	
  				}
  				else if(operation == "/") {
  					operand = operand / parseFloat(calculation[i]);	
  				}
  				else if(operation == "^") {
  					operand = Math.pow(operand, parseFloat(calculation[i]));	
  				}
          else if(operation == "%") {
            operand = operand % parseFloat(calculation[i]);  
          }
  			}
  			else {
  				operation = calculation[i];
  				if(operation.startsWith("√")) {
  					var sqrt = Math.sqrt(parseFloat(operation.split("√")[1]));
  					if(isNaN(sqrt)) {
  						operand = ERROR;
  						break;
  					}
  					if(operand == undefined) { operand = 1 };
  					operand = operand * sqrt; 	
  				}
  			}
  		}
  		document.getElementById("calculation").value = operand;
  		awnsered = true;
  	}

  	function clearCalculation() {
  		document.getElementById("calculation").value = "0";
  	}

  	function appendToCalculation(element) {
  		var currentValue = document.getElementById("calculation").value;
  		var textToAppend = "";

  		if(isNaN(element.textContent) && element.textContent != ".") {
  			if((element.textContent == "-" || element.textContent == "√") && (currentValue == "0" || currentValue == ERROR)) {
  				currentValue = "";
  				textToAppend = element.textContent;
  			}
  			else if(element.textContent == "-" && isNaN(currentValue[currentValue.length-1])) {
  				textToAppend = element.textContent;
  			}
  			else {
  				textToAppend =  " " + element.textContent;
			}

  			if(element.textContent != "√" && !(element.textContent == "-" && (currentValue[currentValue.length-1] == "√" || currentValue == ""))) {
  				textToAppend += " ";
  			}

  			awnsered = false;
  		}
  		else {
  			if(currentValue == "0" || currentValue == ERROR || awnsered) {
  				currentValue = "";
  				awnsered = false;
  			}

  			textToAppend += element.textContent;
  		}

  		document.getElementById("calculation").value = currentValue + textToAppend;
  	}