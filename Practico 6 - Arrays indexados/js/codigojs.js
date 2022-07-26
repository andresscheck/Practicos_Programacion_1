/* Ejercicio 1 */

document.querySelector('#btnEj1').addEventListener('click', Ej1Handler);

function Ej1Handler() {
    let textoEj1 = document.querySelector("#txtEj1").value;
    let arrayGenerado = generarArray(textoEj1)
    document.querySelector("#msgEj1Resultado").innerHTML = DevolverArrayNumerico(arrayGenerado);
    document.querySelector("#txtEj1").value = "";
    console.log(arrayGenerado);
}

let arrayEj1 = [];
function generarArray(texto) {
    arrayEj1.push(texto);
    return arrayEj1;
}

function DevolverArrayNumerico(array) {
    let retorno = [];
    for (let i = 0; i < array.length; i++) {
        let textoActual = array[i];
        let largoDelTextoActual = textoActual.length;
        retorno.push(largoDelTextoActual);
    }
    return retorno;
}

/* Ejercicio 2 */

document.querySelector("#btnE2Guardar").addEventListener("click", btnE2GuardarHandler);
document.querySelector("#btnE2Mostrar").addEventListener("click", btnE2MostrarHandler);

let arrayNumerosEjercicio2 = [];
function btnE2GuardarHandler() {
    let valorIngresado = parseInt(document.querySelector("#txtEj2").value);
    arrayNumerosEjercicio2.push(valorIngresado);
    document.querySelector("#txtEj2").value = "";
    document.querySelector("#msgEj2Resultado").innerHTML = "Número guardado";
}

function btnE2MostrarHandler() {
    let mayor = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arrayNumerosEjercicio2.length; i++) {
        let numeroActual = arrayNumerosEjercicio2[i];
        if (numeroActual > mayor) {
            mayor = numeroActual;
        }
    }

    document.querySelector("#msgEj2Resultado").innerHTML = `El mayor número es: ${mayor}.`;
}

/* Ejercicio 3 */

document.querySelector("#btnE3Guardar").addEventListener("click", btnE3GuardarHandler);
document.querySelector("#btnE3Mostrar").addEventListener("click", btnE3MostrarHandler);

let arrayPalabrasEjercicio3 = [];
function btnE3GuardarHandler() {
    let valorIngresado = document.querySelector("#txtEj3").value;
    arrayPalabrasEjercicio3.push(valorIngresado);
    document.querySelector("#txtEj3").value = "";
    document.querySelector("#msgEj3Resultado").innerHTML = "Palabra guardada";
}

function btnE3MostrarHandler() {
    let mensaje = "";
    for (let i = 0; i < arrayPalabrasEjercicio3.length; i++) {
        mensaje += arrayPalabrasEjercicio3[i] + "<br>";
    }
    document.querySelector("#msgEj3Resultado").innerHTML = mensaje;
}

/* Ejercicio 4 */

document.querySelector("#btnE4Guardar").addEventListener("click", btnE4GuardarHandler);
document.querySelector("#btnE4Mostrar").addEventListener("click", btnE4MostrarHandler);

let arrayPalabrasEjercicio4 = [];
function btnE4GuardarHandler() {
    let valorIngresado = parseInt(document.querySelector("#txtEj4").value);
    arrayPalabrasEjercicio4.push(valorIngresado);
    document.querySelector("#txtEj4").value = "";
    document.querySelector("#msgEj4Resultado").innerHTML = "Numero guardado";
}

function btnE4MostrarHandler() {
    let suma = 0;
    for (let i = 0; i < arrayPalabrasEjercicio4.length; i++) {
        suma += arrayPalabrasEjercicio4[i];
    }
    promedio = (suma / arrayPalabrasEjercicio4.length).toFixed(2);
    document.querySelector("#msgEj4Resultado").innerHTML = promedio;
}

/* Ejercicio 5 */

document.querySelector('#btnEj5').addEventListener('click', Ej5Handler);

function Ej5Handler() {
    let textoEj5 = parseInt(document.querySelector("#txtEj5").value);
    let arrayGenerado = generarArray(textoEj5)
    document.querySelector("#msgEj5Resultado").innerHTML = DevolverArrayconNumerosMayoresA20(arrayGenerado);
    document.querySelector("#txtEj5").value = "";
}

function DevolverArrayconNumerosMayoresA20(array) {
    let retorno = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 20) {
            retorno.push(array[i]);
        }
    }
    return retorno;
}

/* Ejercicio 6 */

document.querySelector("#btnEj6").addEventListener("click", btnE6MostrarHandler);

let arrayPalabrasEjercicio6 = [];
function btnE6MostrarHandler() {
    let valorIngresado = document.querySelector("#txtEj6").value;
    document.querySelector("#txtEj6").value = "";
    let contador=0;
    for (let i = 0; i < arrayPalabrasEjercicio6.length; i++) {
        if (valorIngresado == arrayPalabrasEjercicio6[i]) {
            contador++; ;
        }
    }
    if (contador == 0) {
        arrayPalabrasEjercicio6.push(valorIngresado);
    }
    let mensaje = "";
    for (let i = 0; i < arrayPalabrasEjercicio6.length; i++) {
        mensaje += arrayPalabrasEjercicio6[i] + "<br>";
    }
    document.querySelector("#msgEj6Resultado").innerHTML = mensaje;
}


/* Ejercicio 7 */

document.querySelector("#btn1Ej7").addEventListener("click", btnE7Mostrar1Handler);
document.querySelector("#btn2Ej7").addEventListener("click", btnE7Mostrar2Handler);
document.querySelector("#btn3Ej7").addEventListener("click", btnE7BuscarHandler);

let arrayPalabrasEjercicio7 = [];
function btnE7Mostrar1Handler() {
    let valorIngresado = document.querySelector("#txt1Ej7").value;
    arrayPalabrasEjercicio7.push(valorIngresado);
    document.querySelector("#txt1Ej7").value = "";
    let mensaje = "";
    for (let i = 0; i < arrayPalabrasEjercicio7.length; i++) {
            mensaje += arrayPalabrasEjercicio7[i] + "<br>";
    }
    document.querySelector("#msgEj7Resultado1").innerHTML = mensaje + "<br>" + arrayPalabrasEjercicio7.length + " elemento/s";
}

function btnE7Mostrar2Handler() {
    let valorIngresado = parseInt(document.querySelector("#txt2Ej7").value);
    document.querySelector("#txt1Ej7").value = "";
    let resultado = arrayPalabrasEjercicio7[valorIngresado];
    document.querySelector("#msgEj7Resultado2").innerHTML = resultado;
    let ultimaPosicion = arrayPalabrasEjercicio7.length-1;
    let ultimoElementoDelArray = arrayPalabrasEjercicio7[ultimaPosicion];
    document.querySelector("#msgEj7Resultado3").innerHTML = "El ultimo elemento del array es " + ultimoElementoDelArray;
}

function btnE7BuscarHandler() {
    let resultado = 0;
    let NombreABuscar = document.querySelector("#txt3Ej7").value;
    let NuevoNombre = document.querySelector("#txt4Ej7").value;   
    for (let i = 0; i < arrayPalabrasEjercicio7.length; i++) {
        if (NombreABuscar == arrayPalabrasEjercicio7[i]) {
            arrayPalabrasEjercicio7[i] = NuevoNombre;
            resultado++;
        }
    }
        if (resultado > 0){
            document.querySelector("#msgEj7Resultado4").innerHTML = "El elemento fue sustituido";
        } else {
            document.querySelector("#msgEj7Resultado4").innerHTML = "El elemento no existe";
        }
}

/* Ejercicio 8 */

document.querySelector('#btnEj8').addEventListener('click', Ej8Handler);

function Ej8Handler() {
    document.querySelector("#msgEj8Resultado").innerHTML = fibonacci(arrayEj8);
}

let arrayEj8 = [1,1];
function fibonacci(array) {
    for (let i = 2; i < 20; i++) {
        array.push(array[i-2] + array[i-1]);
    }
    return array;
}

/* Ejercicio 9 */

document.querySelector('#btnEj9').addEventListener('click', Ej9Handler);

function Ej9Handler() {
    document.querySelector("#msgEj9Resultado").innerHTML = fibonacci2(arrayEj9);
}

let arrayEj9 = [1,1];
function fibonacci2(array) {
    let i=2;
    while (array[i-1] < 1000) {
        array.push(array[i-2] + array[i-1]);
        i++;
    }
    return array;
}























 

            


 











