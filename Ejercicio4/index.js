document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    
    let resultado;
    let error = null;
    
    switch(operation) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                error = "No se puede dividir por cero";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            error = "Operación no válida";
    }
    
    let resultDiv = document.getElementById('result');
    
    if (error) {
        resultDiv.innerHTML = `<div class="error">${error}</div>`;
    } else {
        let simbolo = '';
        switch(operation) {
            case 'suma': simbolo = '+'; break;
            case 'resta': simbolo = '-'; break;
            case 'multiplicacion': simbolo = '×'; break;
            case 'division': simbolo = '÷'; break;
        }
        
        resultDiv.innerHTML = `
            <p>El resultado de ${num1} ${simbolo} ${num2} es: <strong>${resultado}</strong></p>
        `;
    }
});