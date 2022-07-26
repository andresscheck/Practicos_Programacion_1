/* Ejercicio 1 */

document.querySelector('#btnEj1').addEventListener('click', Ej1Handler);

function Ej1Handler() {
    let textoEj1 = document.querySelector("#txtEj1").value;
    document.querySelector("#msgEj1Resultado").innerHTML = invertirTexto(textoEj1);
}

function invertirTexto(t) {
    let textoInvertido = "";
    for (let i = t.length - 1; i >=0 ; i--) {
        textoInvertido += t[i];
    }
    return textoInvertido;
}

/* Ejercicio 2 */

document.querySelector('#btnEj2').addEventListener('click', Ej2Handler);

function Ej2Handler() {
    let textoEj2 = document.querySelector("#txtEj2").value;
    let letraEj2 = document.querySelector("#txtletraEj2").value;
    document.querySelector("#msgEj2Resultado").innerHTML = cuantasVeces(textoEj2,letraEj2);
}

let cantidadDeVeces = 0;
function cuantasVeces(t,l) {
    for (let i = 0; i <= t.length - 1 ; i++) {
        if (t[i]==l) {
        cantidadDeVeces++;
        }
    }
    return cantidadDeVeces;
}

/* Ejercicio 3 */

document.querySelector('#btnEj3').addEventListener('click', Ej3Handler);

function Ej3Handler() {
    let textoEj3 = document.querySelector("#txtEj3").value;
    document.querySelector("#msgEj3Resultado").innerHTML = cantidadDeVocales(textoEj3);
}

let vocales = 0;
function cantidadDeVocales(t) {
    for (let i = 0; i <= t.length - 1 ; i++) {
        if (t[i]=="a" || t[i]=="e" || t[i]=="i" || t[i]=="o" || t[i]=="u" || t[i]=="A" || t[i]=="E" || t[i]=="I" || t[i]=="O" || t[i]=="U") {
        vocales++;
        }
    }
    return vocales;
}

/* Ejercicio 4 */

document.querySelector('#btnEj4').addEventListener('click', Ej4Handler);

function Ej4Handler() {
    let textoEj4 = document.querySelector("#txtEj4").value;
    document.querySelector("#msgEj4Resultado").innerHTML = convertirAMinusculas(textoEj4);
}

function convertirAMinusculas(t) {
    let nuevoTexto = "";
    for (let i = 0; i <= t.length - 1 ; i++) {
        let caracterMinuscula = t[i].toLowerCase() ;
        nuevoTexto += caracterMinuscula;
    }
    return nuevoTexto;
}

/* Ejercicio 5 */

document.querySelector('#btnEj5').addEventListener('click', Ej5Handler);

function Ej5Handler() {
    let textoEj5 = document.querySelector("#txtEj5").value;
    document.querySelector("#msgEj5Resultado").innerHTML = convertirAMayusculas(textoEj5);
}

function convertirAMayusculas(t) {
    let nuevoTexto = "";
    for (let i = 0; i <= t.length - 1 ; i++) {
        let caracterMayuscula = t[i].toUpperCase() ;
        nuevoTexto += caracterMayuscula;
    }
    return nuevoTexto;
}

/* Ejercicio 6 */ 

document.querySelector('#btnEj6').addEventListener('click', Ej6Handler);

function Ej6Handler() {
    let texto1Ej6 = document.querySelector("#txt1Ej6").value;
    let texto2Ej6 = document.querySelector("#txt2Ej6").value;
    document.querySelector("#msgEj6Resultado").innerHTML = subCadena(texto1Ej6,texto2Ej6);
}

function subCadena(t1,t2) {
    let resultado="";
    let i=0;
    let j=0;
    while (i < t1.length && j<t2.length) {
        if (t1[i]==t2[j]) {
            j++;
        }
        i++
    }
    if (j == t2.length) {
        resultado = "La subcadena si esta contenida en la cadena"
    } else {
        resultado = "La subcadena no esta contenida en la cadena"
    }
    return resultado;   
}

/* Ejercicio 7 */

document.querySelector('#btnEj7').addEventListener('click', Ej7Handler);

function Ej7Handler() {
    let textoEj7 = document.querySelector("#txtEj7").value;
    document.querySelector("#msgEj7Resultado").innerHTML = contarPalabras(textoEj7);
}

let contadorDePalabras = 1;
function contarPalabras(t) {
    for (let i = 0;  i < t.length; i++) {
        let caracter = t[i];
        if (caracter == " ") {
            contadorDePalabras++;
        }
    }
    return contadorDePalabras
}

/* Ejercicio 8 */

document.querySelector('#btnEj8').addEventListener('click', Ej8Handler);

function Ej8Handler() {
    let textoEj8 = document.querySelector("#txtEj8").value;
    document.querySelector("#msgEj8Resultado").innerHTML = IndicarSiComienzaYTerminaConMismaLetra(textoEj8);
}

function IndicarSiComienzaYTerminaConMismaLetra(t) {
    if (t[0] == t[t.length - 1]) {
        resultado = "Comienza y termina con la misma letra";
    }
    else {
        resultado = "No comienza ni termina con la misma letra";
    }
    return resultado;
}

/* Ejercicio 9 */

document.querySelector('#btnEj9').addEventListener('click', Ej9Handler);

function Ej9Handler() {
    let textoEj9 = document.querySelector("#txtEj9").value;
    document.querySelector("#msgEj9Resultado").innerHTML = QueDepartamento(textoEj9);
}

function QueDepartamento(m) {
    let resultado = 0;
    switch (m[0]) {
        case "A":
            resultado = "Canelones";
            break;            
        case "B":
            resultado = "Maldonado";
            break;
        case "C":
            resultado = "Rocha";
            break;
        case "D":
            resultado = "Treinta y Tres";
            break;
        case "F":
            resultado = "Rivera";
            break;            
        case "G":
            resultado = "Artigas";
            break;
        case "H":
            resultado = "Salto";
            break;
        case "I":
            resultado = "Paysandú";
            break;
        case "J":
            resultado = "Rio Negro";
            break;            
        case "K":
            resultado = "Soriano";
            break;
        case "L":
            resultado = "Colonia";
            break;
        case "M":
            resultado = "San José";
            break;
        case "N":
            resultado = "Flores";
            break;            
        case "O":
            resultado = "Florida";
            break;
        case "P":
            resultado = "Lavalleja";
            break;
        case "Q":
            resultado = "Durazno";
            break; 
        case "P":
            resultado = "Lavalleja";
            break;
        case "Q":
            resultado = "Durazno";
            break;  
        case "R":
            resultado = "Tacuarembó";
            break;
        case "S":
            resultado = "Montevideo";
            break;  
        default:
            resultado = "Seleccionar marticula correcta"
            break;  
    }
    return resultado;
}

/* Ejercicio 10 */

document.querySelector('#btnEj10').addEventListener('click', Ej10Handler);

function Ej10Handler() {
    let textoEj10 = document.querySelector("#txtEj10").value;
    let letraEj10 = document.querySelector("#txtletraEj10").value;

    document.querySelector("#msgEj10Resultado").innerHTML = reemplazarLetra(textoEj10,letraEj10);
}

function reemplazarLetra(t,l) {
    let nuevoTexto="";
    for (let i = 0;  i < t.length; i++) {
        let caracter = t[i];
        if (caracter == l) {
            nuevoTexto+="*";
        }
        else {
            nuevoTexto+=caracter;
        }
    }
    return nuevoTexto;
}

/* Ejercicio 11 */

document.querySelector('#btnEj11').addEventListener('click', Ej11Handler);

function Ej11Handler() {
    let textoEj11 = document.querySelector("#txtEj11").value;

    document.querySelector("#msgEj11Resultado").innerHTML = hacerMinusculaYPrimerLetraMayusculaa(textoEj11);
}

function hacerMinusculaYPrimerLetraMayusculaa(t) {
    let nuevoTexto=t[0].toUpperCase();
    for (let i = 1;  i < t.length; i++) {
        let caracterMinuscula = t[i].toLowerCase();
        nuevoTexto += caracterMinuscula;
    }
    return nuevoTexto;
}

/* Ejercicio 12 */

document.querySelector('#btnEj12').addEventListener('click', Ej12Handler);

function Ej12Handler() {
    let textoEj12 = document.querySelector("#txtEj12").value;

    document.querySelector("#msgEj12Resultado").innerHTML = numerodeMinusculasyMayusculas(textoEj12);
}

cantidadMinusculas = 0;
cantidadMayusculas = 0;
function numerodeMinusculasyMayusculas(t) {
    let nuevoTexto="";
    for (let i = 0;  i < t.length; i++) {
        let caracter = t[i];
        if (caracter == " ") {
            nuevoTexto+="";
        }
        else {
            nuevoTexto+=caracter;
        }
    }
    for (let j = 0;  j < nuevoTexto.length; j++) {
        let caracternuevoTexto = nuevoTexto[j];
        if (caracternuevoTexto == caracternuevoTexto.toLowerCase()) {
            cantidadMinusculas++;
        }
        else if (caracternuevoTexto == caracternuevoTexto.toUpperCase()) {
            cantidadMayusculas++;
        }
    }
    let mensaje = "El texto contiene " + cantidadMinusculas + " minusculas y " + cantidadMayusculas + " mayusculas";
    return mensaje;
}

/* Ejercicio 13 */

document.querySelector('#btnEj13').addEventListener('click', Ej13Handler);

function Ej13Handler() {
    let textoEj13 = document.querySelector("#txtEj13").value;

    document.querySelector("#msgEj13Resultado").innerHTML = palindromo(textoEj13);
}

function palindromo(t) {
    let nuevoTexto="";
    let mensaje=""
    let nuevoTextoInvertido=""
    for (let i = 0;  i < t.length; i++) {
        let caracter = t[i];
        if (caracter == " ") {
            nuevoTexto+="";
        }
        else if (caracter == ",") {
            nuevoTexto+="";
        }
        else if (caracter == ".") {
            nuevoTexto+="";
        }
        else {
            nuevoTexto+=caracter.toLowerCase();
        }
    }
    let textoInvertido = invertirTexto(t);
    for (let j = 0;  j < textoInvertido.length; j++) {
        let caracter2 = textoInvertido[j];
        if (caracter2 == " ") {
            nuevoTextoInvertido+="";
        }
        else if (caracter2 == ",") {
            nuevoTextoInvertido+="";
        }
        else if (caracter2 == ".") {
            nuevoTextoInvertido+="";
        }
        
        else {
            nuevoTextoInvertido+=caracter2.toLowerCase();
        }
    }
    if (nuevoTexto == nuevoTextoInvertido) {
        mensaje = "El texto es un palindromo";
    }
    else {
        mensaje = "El texto no es un palindromo";
    }
    return mensaje;   
    }  
    
/* Ejercicio 14 */

document.querySelector('#btnEj14').addEventListener('click', Ej14Handler);

function Ej14Handler() {
    let textoEj14 = document.querySelector("#txtEj14").value;
    document.querySelector("#msgEj14Resultado").innerHTML = cuantasVecesPrimeraLetra(textoEj14);
}

let cantidadDeVecesPrimeraLetra = 0;
function cuantasVecesPrimeraLetra(t) {
    for (let i = 0; i <= t.length - 1 ; i++) {
        if (t[i]==t[0]) {
            cantidadDeVecesPrimeraLetra++;
        }
    }
    return cantidadDeVecesPrimeraLetra;
}

















 

            


 











