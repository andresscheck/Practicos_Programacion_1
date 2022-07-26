/* Ejercicio 1 */

document.querySelector('#btnEj1').addEventListener('click', Ej1Handler);

function Ej1Handler() {
    let valor1 = parseInt(document.querySelector("#txtValor1Ej1").value);
    let valor2 = parseInt(document.querySelector("#txtValor2Ej1").value);
    document.querySelector("#msgEj1Resultado").innerHTML = calcularNumerosPares(valor1, valor2);
}

function calcularNumerosPares(n1, n2) {
    let resultado = 0;
    for (let i = n1; i <= n2; i++) {
        if (i % 2 == 0) {
            resultado++;
        }
    }
    return resultado;
}


/* Ejercicio 2 */

document.querySelector('#btnEj2').addEventListener('click', Ej2Handler);

function Ej2Handler() {
    let edad = parseInt(document.querySelector("#txtEdad").value);
    let tope = parseInt(document.querySelector("#txtTope").value);
    let valor = esMayor(edad, tope)
    if (valor == true) {
        document.querySelector("#msgEj2Resultado").innerHTML = "Es mayor";
    }
    else {
        document.querySelector("#msgEj2Resultado").innerHTML = "Es menor";
    }
}

function esMayor (e, t) {
    let resultado = 0;
        if (e > t) {
            resultado = true;
        } else {
            resultado = false;
        }
    return resultado;
}

/* Ejercicio 3 */

document.querySelector('#btnEj3').addEventListener('click', Ej3Handler);

function Ej3Handler() {
    let ano = parseInt(document.querySelector("#txtAno").value);
    let valor = esBisiesto(ano)
    if (valor == true) {
        document.querySelector("#msgEj3Resultado").innerHTML = "Es bisiesto";
    }
    else {
        document.querySelector("#msgEj3Resultado").innerHTML = "No es bisiesto";
    }
}

function esBisiesto (a) {
    if (a % 4 == 0){
        if (a % 100 == 0 && a % 400 !=0){
            return false;
        } else if (a % 400 == 0){
            return true;
        } else {
            return true;
        }
     } else {
         return false;
     }
 }

 /* Ejercicio 4 */

document.querySelector('#btnEj4').addEventListener('click', Ej4Handler);

function Ej4Handler() {
    let base = parseInt(document.querySelector("#txtBase").value);
    let altura = parseInt(document.querySelector("#txtAltura").value);
    document.querySelector("#msgEj4Resultado").innerHTML = calcularAreaTriangulo(base, altura);
}

function calcularAreaTriangulo (b, a) {
    let area = 0;
    if (b<0 || a<0) {
        return -1;
    } else {
        area = (b * a) / 2
        return area;
    }
}

 /* Ejercicio 5 */

 document.querySelector('#btnEj5').addEventListener('click', Ej5Handler);

 function Ej5Handler() {
     let ancho = parseInt(document.querySelector("#txtAncho").value);
     let alto = parseInt(document.querySelector("#txtAlto").value);
     document.querySelector("#msgEj5Resultado").innerHTML = calcularAreaRectangoulo (ancho, alto);
 }
 
 function calcularAreaRectangoulo (a, al) {
     let area = 0;
     if (a<0 || al<0) {
         return -1;
     } else {
         area = (a * al)
         return area;
     }
 }

 /* Ejercicio 6 */

 document.querySelector('#btnEj6').addEventListener('click', Ej6Handler);

 function Ej6Handler() {
     let temperatura = parseInt(document.querySelector("#txtTemperatura").value);
     document.querySelector("#msgEj6Resultado").innerHTML = convertirTemperatura (temperatura);
 }
 
 function convertirTemperatura (t) {
     let temperaturaFahrenheit = ((1.8 * t) + 32).toFixed(1);
     return temperaturaFahrenheit;
     }

 /* Ejercicio 7 */

 document.querySelector('#btnEj7').addEventListener('click', Ej7Handler);

 function Ej7Handler() {
     let temperatura = parseInt(document.querySelector("#txtTemperaturaEj7").value);
     let unidad = document.querySelector("#txtUnidadDeMedida").value;
     document.querySelector("#msgEj7Resultado").innerHTML = convertirTemperatura2 (temperatura, unidad);
 }
 
 function convertirTemperatura2 (t,u) {
     let temperaturaConvertida = 0;
     switch (u) {
         case "Celsius":
             temperaturaConvertida = (t - 32) / 1.8;
            break;            
        case "Kelvin":
            temperaturaConvertida = (t + 459.67) / 1.8;
            break;
        case "Rankine":
            temperaturaConvertida = (t + 459.67);
            break;
        case "Réaumur":
            temperaturaConvertida = (t - 32) / 2.25;
            break;
        default:
            temperaturaConvertida = "Seleccionar unidad de medida"
            break;
     }
        return temperaturaConvertida.toFixed(2);
}

 /* Ejercicio 8 */

 document.querySelector('#btnEj8').addEventListener('click', Ej8Handler);

 function Ej8Handler() {
     let base = parseFloat(document.querySelector("#txtBaseEj8").value);
     let exponente = parseInt(document.querySelector("#txtExponente").value);
     document.querySelector("#msgEj8Resultado").innerHTML = calcularPotencia (base, exponente);
 }
 
 function calcularPotencia (b,e) {
    let resultado = 1;
    if (e==0) {
        resultado = 1;
    } else {
        for (let i=1; i<=e; i++) {
            resultado *= b;
        }  
    }
    return resultado;
}
 

            


 











