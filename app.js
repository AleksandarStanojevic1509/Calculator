//DOM
let numberBtns = document.querySelectorAll(".number");
let mathOpBtns = document.querySelectorAll(".math-op");
let allClear = document.querySelector("#all-clear");
let deleteBtn = document.querySelector("#delete");
let equalBtn = document.querySelector("#equals");
let currentOperandDisplay = document.querySelector("#disp-item-current");
let previouseOperandDisplay = document.querySelector("#disp-item-previous");

let currentOperand = "";
let previouseOperand = "";
let operator = "";

const deleteLast = () => {
  currentOperand = currentOperand.toString().slice(0, -1);
};

const clearAll = () => {
  currentOperand = "";
  previouseOperand = "";
  operator = "";
};

const calculate = (curr, prev, oper) => {
  let previous = parseFloat(prev);
  let current = parseFloat(curr);

  if (isNaN(previous) || isNaN(current)) return;

  switch (oper) {
    case "+":
      return previous + current;
    case "-":
      return previous - current;
    case "*":
      return previous * current;
    case "/":
      if (current === 0) {
        return "Not allowed";
      } else {
        return previous / current;
      }
    default:
      return;
  }
};

const addOperation = (op) => {
  if (!isNaN(previouseOperand) && currentOperand === "") {
    operator = op;
  }
  if (currentOperand === "") return;
  if (previouseOperand !== "") {
    currentOperand = calculate(currentOperand, previouseOperand, operator);
  }
  operator = op;
  previouseOperand = currentOperand;
  currentOperand = "";
};

const appendNumber = (number) => {
  if (number == "." && currentOperand.includes(".")) return;
  return (currentOperand = currentOperand.toString() + number.toString());
};

const formatDisplay = (operand) => {
  let operandNumber = parseFloat(operand);
  if (isNaN(operandNumber)) return "";
  return operandNumber.toLocaleString();
};

const updateDisplay = () => {
  currentOperandDisplay.textContent = formatDisplay(currentOperand);
  if (operator !== "") {
    previouseOperandDisplay.textContent = `${formatDisplay(previouseOperand)} ${operator}`;
  } else {
    previouseOperandDisplay.textContent = formatDisplay(previouseOperand);
  }
};

// Listener

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendNumber(btn.id);
    updateDisplay();
  });
});

mathOpBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    addOperation(btn.id);
    updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  if (currentOperand === "" && previouseOperand === "") return;
  if (currentOperand !== "" && previouseOperand === "") return;
  currentOperand = calculate(currentOperand, previouseOperand, operator);
  previouseOperand = "";
  operator = "";
  updateDisplay();
});

allClear.addEventListener("click", () => {
  clearAll();
  updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  deleteLast();
  updateDisplay();
});
