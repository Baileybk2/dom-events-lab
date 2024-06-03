/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll(".button");
console.log("Buttons:", buttons);

/*-------------------------------- Variables --------------------------------*/

let firstNumber = "";
let secondNumber = "";
let operator = undefined;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let clickedButton = event.target;
    let clickButtonText = clickedButton.innerText;
    let isNumber = clickedButton.classList.contains("number");
    let isEquals = clickedButton.classList.contains("equals");
    let isOperator = clickedButton.classList.contains("operator");

    if (isNumber) {
      setNumbers(clickButtonText);
    }

    if (isOperator) {
      setOperator(clickButtonText);
    }

    if (isEquals) {
      calculate();
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
    addition(num1, num2);
    console.log(addition(num1, num2));
  } else if (operator === "-") {
    subtraction(num1, num2);
    console.log(subtraction(num1, num2));
  } else if (operator === "*") {
    multiplication(num1, num2);
    console.log(multiplication(num1, num2));
  } else if (operator === "/") {
    division(num1, num2);
    console.log(division(num1, num2));
  } else {
    return "error";
  }
};

const setOperator = (clickButtonText) => {
  if (clickButtonText === "C") {
    firstNumber = "";
    secondNumber = "";
    operator = undefined;
    console.log("claculator cleared!");
  } else {
    operator = clickButtonText;
    console.log("operator:", operator);
  }
};

const setNumbers = (clickButtonText) => {
  if (operator === undefined) {
    firstNumber += clickButtonText;
    console.log("firstNumber:", firstNumber);
  } else {
    secondNumber += clickButtonText;
    console.log("secondNumber:", secondNumber);
  }
};
