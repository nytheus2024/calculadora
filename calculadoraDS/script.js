
function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let display = document.getElementById("result").value;
    document.getElementById("result").value = display.substring(0, display.length - 1);
}

function calculate(value) {
    document.getElementById("result").value += value;
}

function equal() {
    try {
        let expression = document.getElementById("result").value;
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (err) {
        alert("Expressão inválida");
    }
}


