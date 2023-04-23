const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector("main");

const operator = document.querySelector(".calculator__operator");
const calculatedResult = document.querySelector(".calculator__result");

function calculate(n1, operator, n2) {
  let result = 0;

  if (operator === "+") {
    result = n1 + n2;
  } else if (operator === "-") {
    result = n1 - n2;
  } else if (operator === "*") {
    result = n1 * n2;
  } else if (operator === "/") {
    result = n1 / n2;
  } else if (operator === "%") {
    result = n1 % n2;
  }

  return String(result);
}

const display = document.querySelector(".calculator_display");
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;

  // ToDo. 클래스 number나 operator로 통일해야 가능

  if (action === "number") {
    if (display.textContent === "0" || previousKey === "operator") {
      display.textContent = buttonContent;
    } else {
      display.textContent += buttonContent;
    }
    previousKey = "number";
  }

  if (action === "operator") {
    firstNum = display.textContent;
    operatorForAdvanced = buttonContent;
    previousKey = "operator";
    if (operatorForAdvanced === buttonContent || display.textContent === "0") {
      display.textContent = buttonContent;
    }
  }

  if (action === "convert") {
    display.textContent = -display.textContent;
  }

  if (action === "decimal") {
  }

  if (action === "clear") {
    display.textContent = "0";
    displayNumber = null;
    firstNum = null;
    previousKey = null;
  }

  if (action === "calculate") {
    let n1 = Number(firstNum);
    let n2 = Number(display.textContent);
    display.textContent = calculate(n1, operatorForAdvanced, n2);
  }
});
