function calc() {
	var num1, num2, result;

	 function getNum1(){
        num1 = prompt("Voer hier je eerste getal in");
        return num1;
    }

    function getNum2(){
        num2 = prompt("Voer hier je tweede getal in");
        return num2;
    }

    function getOperator(){
        var operator = prompt("Voer hier je operator in");
        return operator;
    }

    function setResult(){
        if(!alert("Result = " + result)){window.location.reload();}
    }


	var num1 = getNum1();
	var num2 = getNum2();
	var decrement = Number(num1) + Number(num2)
	var increment = Number(num1) + Number(num2);
	var operator = getOperator();

	if (operator == "+") {

		result = Number(num1) + Number(num2);

	}else if(operator == "*") {

	    result = Number(num1) * Number(num2);

	}else if(operator == "/") {

	    result = Number(num1) / Number(num2);

	}else if (operator == "-") {

	    result = Number(num1) - Number(num2);

	}else if (operator == "++") {
		
		result = (increment++);
		result = increment;

	}else if(operator == "--"){
	
		result = (decrement--);
		result = decrement;

	}

	setResult();
}

calc();


