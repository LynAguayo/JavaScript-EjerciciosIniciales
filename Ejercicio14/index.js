document.getElementById('countryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let countryName = document.getElementById('countryInput').value;
    buscarPais(countryName);
});

function buscarPais(nombre) {
    let url = `https://restcountries.com/v3.1/name/${nombre}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('País no encontrado');
            }
            return response.json();
        })
        .then(data => {
            mostrarPais(data[0]);
        })
        .catch(error => {
            document.getElementById('result').innerHTML = 
                `<p>Error: ${error.message}</p>`;
        });
}

function mostrarPais(pais) {
    let resultDiv = document.getElementById('result');
    
    let idioma = pais.languages ? Object.values(pais.languages)[0] : 'No disponible';
    
    let moneda = 'No disponible';
    if (pais.currencies) {
        let monedaData = Object.values(pais.currencies)[0];
        moneda = `${monedaData.name} (${monedaData.symbol || 'sin símbolo'})`;
    }
    
    resultDiv.innerHTML = `
        <h2>${pais.name.common}</h2>
        <img src="${pais.flags.png}" alt="Bandera de ${pais.name.common}" class="flag">
        <div class="country-info">
            <p><strong>Población:</strong> ${pais.population.toLocaleString()}</p>
            <p><strong>Idioma:</strong> ${idioma}</p>
            <p><strong>Moneda:</strong> ${moneda}</p>
        </div>
    `;
}