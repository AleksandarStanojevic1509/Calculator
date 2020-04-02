//DOM
let numberBtns = document.querySelectorAll('.number'); // selektuje sve brojeve 0 i .
let mathOpBtns = document.querySelectorAll('.math-op'); // selektuje matematicke operacije
let allClear = document.querySelector('#all-clear');
let deleteBtn = document.querySelector('#delete');
let equalBtn = document.querySelector('#equals');
let currentOperandDisplay = document.querySelector('#disp-item-current');
let previouseOperandDisplay = document.querySelector('#disp-item-previous');

//Varijable
let currentOperand = '';
let previouseOperand = '';
let operator = '';
let floatResult = '';

// Function

let calculate = (current, previouse, operator) => {
  let currentOperand = Number(current)
  let previouseOperand = Number (previouse) 
  switch (operator) {
    case '+':
      return currentOperand + previouseOperand;
    case '-':
      return previouseOperand - currentOperand;
    case '*':
      return currentOperand * previouseOperand;
    case '/':
      if (currentOperand === 0) {
        return 'Not allowed';
      } else {
        return previouseOperand / currentOperand;
      }
  }
};

// Listen

numberBtns.forEach(n => {
  n.addEventListener('click', () => {
    if (n.id === '.' && currentOperand.includes('.')) return;
    currentOperand += n.id;
    currentOperandDisplay.innerHTML = currentOperand;
  });
});

mathOpBtns.forEach(o => {
  o.addEventListener('click', () => {
    if(currentOperand.toString() == '') return
    if (previouseOperand.toString() === ''){
      previouseOperand = currentOperand;
      currentOperand = '';
      operator = o.id;
      if (floatResult !== ''){
        previouseOperandDisplay.innerHTML = floatResult + operator;
      }
      else{
        previouseOperandDisplay.innerHTML = previouseOperand + operator;
      }
      currentOperandDisplay.innerHTML = '';
      floatResult = ''
    } 
    // if (previouseOperand.toString() !== '' ){
    //   operator = o.id
    //   if( currentOperand.toString() !='' && previouseOperand.toString() != ''){
    //     let calcResult = calculate(currentOperand, previouseOperand , operator);

    //     //currentOperandDisplay.innerHTML = calcResult
    //   }
    //  // currentOperandDisplay.innerHTML = ''
    //  // console.log (calcResult)
    //   // currentOperand = '';
    //   // currentOperandDisplay.innerHTML = ''

    // }




  
  });
});

equalBtn.addEventListener('click', () => {
  if (currentOperand === '' || previouseOperand === '') return;
  let calcResult = calculate(currentOperand, previouseOperand , operator);
  if (calcResult % 1 !== 0) {
    floatResult = calcResult.toFixed(2);
    currentOperandDisplay.innerHTML = floatResult
  } else{

    currentOperandDisplay.innerHTML = calcResult;
  }
  currentOperand = calcResult;

  previouseOperandDisplay.innerHTML = '';
  opereator = '';
});

allClear.addEventListener('click', () => {
  currentOperandDisplay.innerHTML = '';
  previouseOperandDisplay.innerHTML = '';
  currentOperand = '';
  previouseOperand = '';
  operator = '';
});

deleteBtn.addEventListener('click', () => {
  console.log('ewe');
  currentOperand = currentOperand.toString().slice(0, -1);
  currentOperandDisplay.innerHTML = currentOperand;
});
