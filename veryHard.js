//prompt the user for their first number and store the value in a variable
const num1 = parseFloat(prompt("Enter your first number: "));

//prompt the use for their operator of choice and store in a variable
const operator = prompt("Enter operator ( either +, -, *, or / ):");

//prompt the user for their second number and store the value in a variable
const num2 = parseFloat(prompt("Enter your second number: "));

//undefined variable for the result
let result;

switch (operator) {
  //if user enters + for operator then it adds the two number values
  case "+":
    result = num1 + num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;

  //if user enters - for operator then it subtracts the two number values
  case "-":
    result = num1 - num2;
    alert(`${num1} - ${num2} = ${result}`);
    break;

  //if user enters * for operator then it multiplies the two number values
  case "*":
    result = num1 * num2;
    alert(`${num1} * ${num2} = ${result}`);
    break;

  //if user enters / for operator then it divides the two number values
  case "/":
    result = num1 / num2;
    alert(`${num1} / ${num2} = ${result}`);
    break;

  //default just in case user doesn't choose from one of the given operators
  default:
    alert("Error: Invalid operator entered.");
    break;
}
