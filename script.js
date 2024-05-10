function appendToOutput(value) {
    document.getElementById("output").value += value;
}

function clearOutput() {
    document.getElementById("output").value = '';
}

function calculate() {
    let expression = document.getElementById("output").value;

    expression = expression.replace(/÷/g, "/");

    expression = expression.replace(/x/g, "*");

    let result;
    try {
        result = eval(expression);
        if (!isFinite(result)) {
            throw "Invalid expression";
        }
        } catch (error) {
        result = "Error";
    }
    document.getElementById("output").value = result;
}
