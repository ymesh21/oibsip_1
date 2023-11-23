function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateSquareRoot() {
    var display = document.getElementById('display');
    var currentValue = parseFloat(display.value);
    if (currentValue >= 0) {
        display.value = Math.sqrt(currentValue);
    } else {
        display.value = 'Error';
    }
}

function clearEntry() {
    var display = document.getElementById('display');
    display.value = '';
}

function calculatePercentage() {
    var display = document.getElementById('display');
    var currentValue = parseFloat(display.value);
    display.value = currentValue / 100;
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function changeSign() {
    var display = document.getElementById('display');
    var currentValue = parseFloat(display.value);
    display.value = -currentValue;
}

function addBracket(bracket) {
    var display = document.getElementById('display');
    display.value += bracket;
}
