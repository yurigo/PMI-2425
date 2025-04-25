# Ejercicios

## Ejercicio 01

Crea un formulario en el que el usuario pueda elegir entre tres opciones:

- Obtener la fecha actual en milisegundos.
- Obtener la fecha actual en formato `dd-MM-yyyy`.
- Obtener la hora actual en formato `hh:mm:ss`.

Cuando el usuario haga clic en un botón, se debe mostrar el resultado correspondiente en la página sin recargarla.

> [!NOTE]
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

> [!NOTE]
> [Ver Solución](./soluciones/ejercicio%2004/)

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

> [!NOTE]
> [Ver Solución](./soluciones/ejercicio%2019/)

> [!WARNING]
> [Ver en directo](https://codi.link/PCFET0NUWVBFIGh0bWw+DQo8aHRtbCBsYW5nPSJlbiI+DQoNCjxoZWFkPg0KICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+DQogIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wIj4NCiAgPHRpdGxlPvCfpoQgQXdlc29tZSB0cmFuc2xhdG9yIG1vcnNlIHBhZ2Ug8J+mhDwvdGl0bGU+DQogIDxzY3JpcHQgc3JjPSJpbmRleC5qcyIgZGVmZXI+PC9zY3JpcHQ+DQo8L2hlYWQ+DQoNCjxib2R5Pg0KICA8Zm9ybSBpZD0iZm9ybSI+DQogICAgPGxhYmVsIGZvcj0idGV4dCI+VGV4dCB0byB0cmFuc2xhdGU6PC9sYWJlbD4NCiAgICA8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0idGV4dCIgaWQ9InRleHQiPg0KICAgIDxidXR0b24gdHlwZT0ic3VibWl0Ij5UcmFuc2xhdGU8L2J1dHRvbj4NCiAgPC9mb3JtPg0KICA8ZGl2IGlkPSJyZXN1bHQiPjwvZGl2Pg0KPC9ib2R5Pg0KDQo8L2h0bWw+%7CZGl2I3Jlc3VsdHsNCiAgcGFkZGluZzogMTBweDsNCiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjIwLCAxNik7DQogIG1hcmdpbjogMTBweCBhdXRvOw0KfQ0KDQojcmVzdWx0ID4gc3BhbiB7DQogIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDE1NiwgMTU2KTsNCiAgYm9yZGVyOiAxcHggc29saWQgcmVkOw0KICBjb2xvcjogcmdiKDc0LCAxNiwgMTYpOw0KICBwYWRkaW5nOiA1cHggMTBweDsNCn0=%7CY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiNmb3JtIik7DQpjb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjcmVzdWx0Iik7DQoNCmNvbnN0IGRpY3Rpb25hcnkgPSB7DQogIGE6ICLCty0iLA0KICBiOiAiLcK3wrfCtyIsDQogIGM6ICItwrctwrciLA0KICBkOiAiLcK3wrciLA0KICBlOiAiwrciLA0KICBmOiAiwrfCty3CtyIsDQogIGc6ICItLcK3IiwNCiAgaDogIsK3wrfCt8K3IiwNCiAgaTogIsK3wrciLA0KICBqOiAiwrctLS0iLA0KICBrOiAiLcK3LSIsDQogIGw6ICLCty3Ct8K3IiwNCiAgbTogIi0tIiwNCiAgbjogIi3CtyIsDQogIG86ICItLS0iLA0KICBwOiAiwrctLcK3IiwNCiAgcTogIi0twrctIiwNCiAgcjogIsK3LcK3IiwNCiAgczogIsK3wrfCtyIsDQogIHQ6ICItIiwNCiAgdTogIsK3wrctIiwNCiAgdjogIsK3wrfCty0iLA0KICB3OiAiwrctLSIsDQogIHg6ICItwrfCty0iLA0KICB5OiAiLcK3LS0iLA0KICB6OiAiLS3Ct8K3IiwNCiAgMDogIi0tLS0tIiwNCiAgMTogIsK3LS0tLSIsDQogIDI6ICLCt8K3LS0tIiwNCiAgMzogIsK3wrfCty0tIiwNCiAgNDogIsK3wrfCt8K3LSIsDQogIDU6ICLCt8K3wrfCt8K3IiwNCiAgNjogIi3Ct8K3wrfCtyIsDQogIDc6ICItLcK3wrfCtyIsDQogIDg6ICItLS3Ct8K3IiwNCiAgOTogIi0tLS3CtyIsDQogICIuIjogIsK3LcK3LcK3LSIsDQogICIsIjogIi0twrfCty0tIiwNCiAgIj8iOiAiwrfCty0twrfCtyIsDQogICInIjogIsK3LS0tLcK3IiwNCiAgIiEiOiAiLcK3LcK3LS0iLA0KICAiLyI6ICItwrfCty3CtyIsDQogICIoIjogIi3Cty0twrciLA0KICAiKSI6ICItwrctLcK3LSIsDQogICImIjogIsK3LcK3wrfCtyIsDQogICI6IjogIi0tLcK3wrfCtyIsDQogICI7IjogIi3Cty3Cty3CtyIsDQogICI9IjogIi3Ct8K3wrctIiwNCiAgIisiOiAiwrctwrctwrciLA0KICAiLSI6ICItwrfCt8K3wrctIiwNCiAgXzogIsK3wrctLcK3LSIsDQogICciJzogIsK3LcK3wrctwrciLA0KICAkOiAiwrfCt8K3LcK3wrctIiwNCiAgIkAiOiAiwrctLcK3LcK3IiwNCiAgIiAiOiAiICIsDQp9Ow0KDQpjb25zdCB0cmFuc2xhdGUgPSAodGV4dCkgPT4gew0KICAvLyBwYXNhciBhIG1pbnVzY3VsYXMNCiAgY29uc3QgbG93ZXJUZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpOw0KDQogIC8vIG1lIHBhc2VvIHBvciBjYWRhIGxldHJhIHkgbGEgdHJhZHV6Y28NCiAgLy8gbGV0IHJlc3VsdCA9ICIiOw0KICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxvd2VyVGV4dC5sZW5ndGg7IGkrKykgew0KICAvLyAgIGNvbnN0IGxldHRlciA9IGxvd2VyVGV4dFtpXTsNCiAgLy8gICBjb25zdCB0cmFuc2xhdGlvbiA9IGRpY3Rpb25hcnlbbGV0dGVyXTsNCiAgLy8gICByZXN1bHQgKz0gdHJhbnNsYXRpb24gKyAiICI7DQogIC8vIH0NCg0KICAvLyBjb25zdCBhcnJheU9mVHJhbnNhbHRpb25zID0gbG93ZXJUZXh0LnNwbGl0KCIiKS5tYXAoKGxldHRlcikgPT4gew0KICAvLyAgIHJldHVybiBkaWN0aW9uYXJ5W2xldHRlcl07DQogIC8vIH0pOw0KDQogIC8vIHJldHVybiBhcnJheU9mVHJhbnNhbHRpb25zLmpvaW4oIiAiKTsNCg0KICByZXR1cm4gbG93ZXJUZXh0DQogICAgLnNwbGl0KCIiKQ0KICAgIC5tYXAoKGxldHRlcikgPT4gZGljdGlvbmFyeVtsZXR0ZXJdKQ0KICAgIC5qb2luKCIgIik7DQp9Ow0KDQpmb3JtLmFkZEV2ZW50TGlzdGVuZXIoInN1Ym1pdCIsIChlKSA9PiB7DQogIGUucHJldmVudERlZmF1bHQoKTsNCiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7DQogIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpOw0KICBjb25zdCB0cmFuc2xhdGVkVGV4dCA9IHRyYW5zbGF0ZShkYXRhLnRleHQpOw0KICByZXN1bHQuaW5uZXJIVE1MID0gdHJhbnNsYXRlZFRleHQNCiAgICAuc3BsaXQoIiAiKQ0KICAgIC5tYXAoKGNoYXIpID0+IHsNCiAgICAgIHJldHVybiBgPHNwYW4+JHtjaGFyfTwvc3Bhbj5gOw0KICAgIH0pDQogICAgLmpvaW4oIiAiKTsNCn0pOw==)
---

## Ejercicio 20: Contar Vocales y Consonantes

Crea un formulario donde el usuario ingrese una palabra o frase.  
Al hacer clic en un botón, se debe mostrar:

- Cuántas vocales tiene.
- Cuántas consonantes tiene.
- Cuántas veces aparece cada vocal.

---

Cada ejercicio debe realizarse sin recargar la página, utilizando **HTML, CSS y JavaScript** para manejar la interacción.


# Más Ejercicios de JavaScript en Frontend

## Ejercicio 21: Contador de Caracteres Únicos
Crea un formulario donde el usuario ingrese una palabra o frase.  
Al hacer clic en un botón, se debe mostrar cuántos caracteres únicos tiene la entrada (sin contar espacios y diferenciando entre mayúsculas y minúsculas).

Ejemplo:  
Entrada: `"Hola mundo"`  
Salida: `8 caracteres únicos (H, o, l, a, m, u, n, d)`

---

## Ejercicio 22: Formateador de Números
Crea un formulario donde el usuario ingrese un número grande.  
Al hacer clic en un botón, se debe mostrar el número formateado con separadores de miles.

Ejemplo:  
Entrada: `1000000`  
Salida: `1,000,000`

Usa `toLocaleString()`.

---

## Ejercicio 23: Generador de Siglas
Crea un formulario donde el usuario ingrese un nombre completo o una frase.  
Al hacer clic en un botón, se debe mostrar las iniciales de cada palabra en mayúsculas.

Ejemplo:  
Entrada: `"Universidad de Barcelona"`  
Salida: `"UB"`

---

## Ejercicio 24: Reemplazo de Palabras
Crea un formulario donde el usuario ingrese un texto y una palabra a reemplazar, junto con la nueva palabra.  
Al hacer clic en un botón, se debe mostrar el texto con los reemplazos hechos.

Ejemplo:  
Entrada:  
- Texto: `"Me gusta el chocolate"`
- Reemplazar: `"chocolate"`
- Nuevo texto: `"helado"`

Salida: `"Me gusta el helado"`

Usa `.replaceAll()`.

[text](<soluciones/ejercicio 24>)

---

## Ejercicio 25: Simulador de Ahorro
Crea un formulario donde el usuario ingrese:  
1. Cantidad inicial de dinero.  
2. Ahorro mensual.  
3. Número de meses.  

Al hacer clic en un botón, se debe calcular cuánto dinero tendrá después del período indicado.

Fórmula: `total = cantidadInicial + (ahorroMensual * meses)`

---

## Ejercicio 26: Generador de Colores Aleatorios
Crea un botón que, al hacer clic, cambie el color de fondo de la página a un color aleatorio en formato hexadecimal (`#RRGGBB`).

Ejemplo de salida:  
`#f1a2c3`

Usa `Math.random().toString(16).slice(2, 8)` para generar colores.

---

## Ejercicio 27: Buscar GIFs con la API de Giphy
Crea un formulario donde el usuario ingrese un término de búsqueda.  
Al hacer clic en un botón, usa `fetch` para obtener un GIF relacionado desde la API de Giphy (`https://api.giphy.com/v1/gifs/search?api_key=TU_API_KEY&q=termino&limit=1`) y muestra el GIF.

---

## Ejercicio 28: Convertidor de Notación CamelCase y Snake_Case
Crea un formulario donde el usuario ingrese una frase.  
Al hacer clic en un botón, se debe mostrar:

- La frase en **camelCase**.
- La frase en **snake_case**.

Ejemplo:  
Entrada: `"Hola mundo feliz"`  
Salida:  
- **camelCase:** `holaMundoFeliz`
- **snake_case:** `hola_mundo_feliz`

---

## Ejercicio 29: Contador de Clicks con Límite
Crea un botón que, al hacer clic, aumente un contador en pantalla.  
Cuando el contador llegue a `10`, el botón se desactiva.

---

## Ejercicio 30: Simulador de Dados
Crea un botón que, al hacer clic, simule el lanzamiento de dos dados (números aleatorios del 1 al 6).  
Debe mostrar los valores obtenidos y el resultado total.

Ejemplo de salida:  
`Dado 1: 4 | Dado 2: 6 | Total: 10`

---
