const defautValue = 0;
let currentResult = defautValue;

function getInputValue() {
    return parseInt(userInput.value);
}
// All buttons implementations

function mathCalc(operatorArg) {
    var enteredValue = getInputValue();
    var initialValue = currentResult;
    let mathOperator;
    if (operatorArg !== 'ADD' &&
        operatorArg !== 'SUBTRACT' &&
        operatorArg !== 'MULTIPLY' &&
        operatorArg !== 'DIVIDE' ||
        !enteredValue) {
        return;
    }

    if (operatorArg === 'ADD') {
        currentResult += enteredValue;
        mathOperator = '+';
    } else if (operatorArg === 'SUBTRACT') {
        currentResult -= enteredValue;
        mathOperator = '-';
    } else if (operatorArg === 'MULTIPLY') {
        currentResult *= enteredValue;
        mathOperator = '*';
    } else if (operatorArg === 'DIVIDE') {
        currentResult /= enteredValue;
        mathOperator = '/';
    }
    createLogOuput(mathOperator, initialValue, enteredValue);
}

function createLogOuput(operator, valueBeforecalc, enterValue) {
    calculDescription = `${valueBeforecalc} ${operator} ${enterValue}`
    outputResult(currentResult, calculDescription);
}
const resetingInputValue = () => {
    userInput.value = '';
};
// first button Implementation
function add() {
    mathCalc('ADD');
    resetingInputValue();
}
// second Button Implementation
function subtract() {
    mathCalc('SUBTRACT');
    resetingInputValue();
}

function multiply() {
    mathCalc('MULTIPLY');
    resetingInputValue();
}

function divide() {
    mathCalc('DIVIDE');
    resetingInputValue();
}
subtractBtn.addEventListener('click', subtract);
addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);