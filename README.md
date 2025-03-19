# Ejercicios

## Ejercicio 01

Crea un formulario en el que el usuario pueda elegir entre tres opciones:

- Obtener la fecha actual en milisegundos.
- Obtener la fecha actual en formato `dd-MM-yyyy`.
- Obtener la hora actual en formato `hh:mm:ss`.

Cuando el usuario haga clic en un botón, se debe mostrar el resultado correspondiente en la página sin recargarla.

> [!INFO]
> Usa el objeto [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) para gestionar la fecha.

---

## Ejercicio 02

Crea un formulario donde el usuario pueda ingresar un número del 1 al 99 y, al hacer clic en un botón, se muestre en la página la tabla de multiplicar de ese número.

---

## Ejercicio 03

Crea un formulario donde el usuario pueda ingresar un número y, al hacer clic en un botón, se muestre en la página el factorial de ese número.

---

## Ejercicio 04

Crea un formulario donde el usuario pueda:

1. Elegir una operación matemática (`suma`, `resta`, `multiplicación`, `división`).
2. Ingresar dos números.
3. Presionar un botón para realizar la operación y mostrar el resultado en la página.

Si el usuario intenta dividir por 0, debe mostrarse un mensaje de error en pantalla indicando que la operación no es válida.

---

## Ejercicio 05

Crea un formulario donde el usuario pueda ingresar una temperatura y seleccionar si está en grados **Celsius** o **Fahrenheit**.  
Al hacer clic en un botón, se debe mostrar su conversión a las otras unidades (Celsius, Fahrenheit y Kelvin).

---

## Ejercicio 06

Crea un formulario donde el usuario ingrese un número y, al hacer clic en un botón, se le indique si es un número primo o no.

---

## Ejercicio 07

Crea un formulario donde el usuario ingrese una palabra y, al hacer clic en un botón, se le indique si es un **palíndromo** (se lee igual al derecho y al revés).

---

## Ejercicio 08

Crea un formulario donde el usuario ingrese un número y, al hacer clic en un botón, se muestre su equivalente en **números romanos**.

---

## Ejercicio 09

Crea un formulario donde el usuario pueda elegir la **longitud** de una contraseña y si debe incluir **números** y **caracteres especiales**.  
Al hacer clic en un botón, se debe generar y mostrar una contraseña aleatoria con las opciones seleccionadas.

---

## Ejercicio 10

Crea un formulario donde el usuario pueda ingresar una frase y, al hacer clic en un botón, se muestre un **análisis** de la misma en la página, incluyendo:

- Número de palabras.
- Número de caracteres (sin contar espacios).
- Número de vocales y consonantes.
- La palabra más larga de la frase.

---

## Ejercicio 11: Ordenar Números

Crea un formulario donde el usuario ingrese una lista de números separados por comas.  
Al hacer clic en un botón, se debe mostrar la lista ordenada de **menor a mayor** y de **mayor a menor**.

---

## Ejercicio 12: Contar Letras y Palabras

Crea un formulario donde el usuario ingrese un **texto**.  
Al hacer clic en un botón, se debe mostrar:

- Cuántas veces aparece cada letra en el texto.
- Cuántas veces aparece cada palabra en el texto.

Usa objetos y métodos de string para procesar los datos.

---

## Ejercicio 13: Filtrar Palabras

Crea un formulario donde el usuario ingrese una lista de palabras separadas por comas y un número.  
Al hacer clic en un botón, se debe mostrar solo las palabras que tengan más letras que el número ingresado.

Ejemplo de entrada:  
`manzana, sol, estrella, árbol, pez, montaña` y el número `4`  
Salida: `manzana, estrella, árbol, montaña`

---

## Ejercicio 14: Buscar Países (Usando Fetch)

Crea un formulario donde el usuario ingrese el nombre de un país.  
Al hacer clic en un botón, usa `fetch` para obtener datos del país desde la API `https://restcountries.com/v3.1/name/{nombre}` y muestra:

- La bandera del país.
- La población.
- El idioma principal.
- La moneda.

---

## Ejercicio 15: Encontrar Palabra Más Corta y Más Larga

Crea un formulario donde el usuario ingrese una frase.  
Al hacer clic en un botón, se debe mostrar:

- La **palabra más corta** de la frase.
- La **palabra más larga** de la frase.

---

## Ejercicio 16: Eliminar Elementos Duplicados

Crea un formulario donde el usuario ingrese una lista de palabras separadas por comas.  
Al hacer clic en un botón, se debe mostrar la lista sin palabras repetidas.

Ejemplo de entrada:  
`rojo, azul, verde, rojo, amarillo, azul, negro`  
Salida: `rojo, azul, verde, amarillo, negro`

---

## Ejercicio 17: Generador de Nombres Aleatorios

Crea un formulario donde el usuario pueda elegir:

1. Un género (`masculino` o `femenino`).
2. Un número de nombres a generar.

Al hacer clic en un botón, usa `fetch` para obtener nombres aleatorios desde la API `https://randomuser.me/api/?results={cantidad}&gender={genero}` y muestra la lista de nombres generados.

---

## Ejercicio 18: Analizador de Números

Crea un formulario donde el usuario ingrese una lista de números separados por comas.  
Al hacer clic en un botón, se debe mostrar:

- El número más grande.
- El número más pequeño.
- La suma de todos los números.
- El promedio.

Usa `Math.max()`, `Math.min()`, `reduce()` y `map()` para los cálculos.

---

## Ejercicio 19: Convertir Texto a Código Morse

Crea un formulario donde el usuario ingrese un texto.  
Al hacer clic en un botón, se debe mostrar la versión en **código Morse** del texto ingresado.

Ejemplo:  
Entrada: `hola`  
Salida: `.... --- .-.. .-`

---

## Ejercicio 20: Contar Vocales y Consonantes

Crea un formulario donde el usuario ingrese una palabra o frase.  
Al hacer clic en un botón, se debe mostrar:

- Cuántas vocales tiene.
- Cuántas consonantes tiene.
- Cuántas veces aparece cada vocal.

---

Cada ejercicio debe realizarse sin recargar la página, utilizando **HTML, CSS y JavaScript** para manejar la interacción.
