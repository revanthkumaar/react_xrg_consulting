

//DECLARATION OF THE CALCULATOR CLASS
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  //ACTIONS / TASKS YOU NEED TO PERFORM
  appendNumber(number) {
      //validation for not using any decimals
    if(number==='.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  //choose which operation to perform
  chooseOperation(operator){
    console.log('inside the choose operation function')
    console.log('the operation you want to perform is : '+operator)
  }
  
  compute(){

  }

  delete(){

  }

  clear(){

  }


}

//UTILIZING THE CLASS

//GRAB ALL THE HTML ELEMENTS AND ASSIGN IT TO JS VARIABLES
//select all the html elements with an attribute name "data_numbers"
const numberButtons = document.querySelectorAll("[data-number]");
//select all the operatipns
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]")
  const currentOperandTextElement = document.querySelector(
  "[data-current-operand]")


//instantiating the calculator class by creating a new instance of calculator
const myCalculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

//ADD EVENT LISTENERS

numberButtons.forEach(
  //for each button add an event listener
  (button) => {
    button.addEventListener("click", () => {
       myCalculator.appendNumber(button.innerText);
       //calling an action/function of the class 
    });
  }
);

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    myCalculator.chooseOperation(button.innerText);
    //calling an action when you chose an operator
  });
});

equalsButton.addEventListener("click", () => {
  myCalculator.compute();
});

deleteButton.addEventListener("click", () => {
 myCalculator.delete();
});

allClearButton.addEventListener("click", () => {
 myCalculator.clear();
});
