const display = document.getElementById('display');

function appendValue(input) {
    if (display.innerText === "0") {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function percent() {
    display.innerText = parseFloat(display.innerText) / 100;
}
function equalsTo() {
    const display = document.getElementById('display');
    try {
        let expression = display.innerText;
        expression = expression.replace(/×/g, '*');
        expression = expression.replace(/÷/g, '/');
        expression = expression.replace(/π/g, 'Math.PI');
        expression = expression.replace(/√(\d+\.?\d*)/g, 'Math.sqrt($1)');
        expression = expression.replace(/\^/g, '**');
        let result = eval(expression);
        if (result.toString().length > 10) {
            display.innerText = result.toPrecision(10);
        } else {
            display.innerText = result;
        }

    } catch (err) {
        display.innerText = "Error";
    }
}

function deleteLast() {
    let current = display.innerText;
    if (current.length > 1) {
        display.innerText = current.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}
