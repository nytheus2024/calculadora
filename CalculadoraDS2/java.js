let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function appendFunction(func) {
    display.value += func + '(';
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Substituir funções (como 'sin', 'cos', 'log', etc.) por chamadas de funções JS
        let result = display.value;
        
        // Substituir funções trigonométricas
        result = result.replace(/sin\((.*?)\)/g, 'Math.sin($1)');
        result = result.replace(/cos\((.*?)\)/g, 'Math.cos($1)');
        result = result.replace(/tan\((.*?)\)/g, 'Math.tan($1)');
        result = result.replace(/sqrt\((.*?)\)/g, 'Math.sqrt($1)');
        result = result.replace(/log\((.*?)\)/g, 'Math.log10($1)');
        result = result.replace(/ln\((.*?)\)/g, 'Math.log($1)');
        result = result.replace(/exp\((.*?)\)/g, 'Math.exp($1)');
        result = result.replace(/pow\((.*?)\)/g, 'Math.pow($1, 2)'); // Potência de 2

        // Calcular o resultado usando eval
        display.value = eval(result);
    } catch (error) {
        display.value = 'Erro';
    }
}
