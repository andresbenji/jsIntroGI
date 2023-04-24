//prompt the user for input
let userInput = prompt("Enter your text here:");

//check if the input is all upercase
if (userInput === userInput.toUpperCase()) {
  alert("DON'T YELL AT ME!");
}

//check if the ipnut is all lowercase
else if (userInput === userInput.toLowerCase()) {
  alert("i can't hear you....");
}

//if the input is neither all uppercase nor all lowercase then, then it must be normal
else {
  alert("You are talking normally.");
}
