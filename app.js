/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll(".button");
console.log("Buttons:", buttons);

const display = document.querySelector(".display");
console.log("Display:", display);

/*-------------------------------- Variables --------------------------------*/

let firstNumber = "";
let secondNumber = "";
let operator = undefined;
let userDisplay = "";
let result;
let clear = "0";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let clickedButton = event.target;
    let clickButtonText = clickedButton.innerText;
    let isNumber = clickedButton.classList.contains("number");
    let isEquals = clickedButton.classList.contains("equals");
    let isOperator = clickedButton.classList.contains("operator");

    display.textContent = clickButtonText;

    if (isNumber) {
      setNumbers(clickButtonText);
    }

    if (isOperator) {
      setOperator(clickButtonText);
    }

    if (isEquals) {
      calculate();
      display.textContent = result;
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
const addition = (num1, num2) => {
  return num1 + num2;
};

const subtraction = (num1, num2) => {
  return num1 - num2;
};

const multiplication = (num1, num2) => {
  return num1 * num2;
};

const division = (num1, num2) => {
  return num1 / num2;
};

const calculate = () => {
  let num1 = Number(firstNumber);
  let num2 = Number(secondNumber);

  if (operator === "+") {
    result = addition(num1, num2);
    console.log(result);
  } else if (operator === "-") {
    result = subtraction(num1, num2);
    console.log(result);
  } else if (operator === "*") {
    result = multiplication(num1, num2);
    console.log(result);
  } else if (operator === "/") {
    result = division(num1, num2);
    console.log(result);
  } else {
    return "error";
  }
  return result;
};

const setOperator = (clickButtonText) => {
  if (clickButtonText === "C") {
    firstNumber = "";
    secondNumber = "";
    operator = undefined;
    display.textContent = clear;
    console.log("claculator cleared!");
  } else {
    operator = clickButtonText;
    console.log("operator:", operator);
  }
};

const setNumbers = (clickButtonText) => {
  if (operator === undefined) {
    firstNumber += clickButtonText;
    display.textContent = firstNumber;
    console.log("firstNumber:", firstNumber);
  } else {
    secondNumber += clickButtonText;
    display.textContent = secondNumber;
    console.log("secondNumber:", secondNumber);
  }
};
