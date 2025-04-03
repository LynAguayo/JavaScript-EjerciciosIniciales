let form = document.getElementById('textForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let texto = document.getElementById('textInput').value;
    
    let letras = contarLetras(texto);
    mostrarResultado(letras, 'letterCount');
    
    let palabras = contarPalabras(texto);
    mostrarResultado(palabras, 'wordCount');
});

function contarLetras(texto) {
    let contador = {};
    
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();
        
        if (letra >= 'a' && letra <= 'z') {
            if (contador[letra]) {
                contador[letra]++;
            } else {
                contador[letra] = 1;
            }
        }
    }
    
    return contador;
}

function contarPalabras(texto) {
    let contador = {};
    
    let palabras = texto.split(/\s+/);
    
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i].toLowerCase();
        
        palabra = palabra.replace(/[.,!?]$/, '');
        
        if (palabra.length > 0) {
            if (contador[palabra]) {
                contador[palabra]++;
            } else {
                contador[palabra] = 1;
            }
        }
    }
    
    return contador;
}

function mostrarResultado(contador, elementoId) {
    let elemento = document.getElementById(elementoId);
    let resultado = '';
    
    let claves = Object.keys(contador).sort();
    
    for (let i = 0; i < claves.length; i++) {
        let clave = claves[i];
        resultado += clave + ': ' + contador[clave] + '<br>';
    }
    
    elemento.innerHTML = resultado || 'No hay resultados';
}