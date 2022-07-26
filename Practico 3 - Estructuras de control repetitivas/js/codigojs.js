
/* Ejercicio 1 */

document.querySelector('#btnEj1').addEventListener('click', test);

function test() {
console.log(one)
var one = 1;
console.log(one)
}

/* Ejercicio 2 */

document.querySelector('#btnEj2').addEventListener('click', Ej2Handler);

function Ej2Handler() {
let mensaje = "";
let Ej2=-100;
while(Ej2<11) {
    mensaje += Ej2 + "<br>";
    Ej2++;
    } 
    document.querySelector("#msgEj2Resultado").innerHTML = mensaje;
} 

/* Ejercicio 3 */

document.querySelector('#btnEj3').addEventListener('click', Ej3Handler);

function Ej3Handler() {
let mensaje = "";
let Ej3=40;
while (Ej3>9) {
    mensaje += Ej3 + "<br>";
    Ej3--;
    }
    document.querySelector("#msgEj3Resultado").innerHTML = mensaje;
} 

/* Ejercicio 4 */

document.querySelector('#btnEj4').addEventListener('click', Ej4Handler);

function Ej4Handler() {
let mensaje = "";
for (let Ej4=20; Ej4>-31; Ej4--) {
    mensaje += Ej4 + "<br>";
    } 
    document.querySelector("#msgEj4Resultado").innerHTML = mensaje;
} 

/* Ejercicio 5 */

document.querySelector('#btnEj5').addEventListener('click', Ej5Handler);

function Ej5Handler() {
let mensaje = "";
let Ej5=1;
while (Ej5<451) {
    if (Ej5%5==0) {
    mensaje += Ej5 + "<br>";
    }
    Ej5++;
}
    document.querySelector("#msgEj5Resultado").innerHTML = mensaje;
} 

/* Ejercicio 6 */

document.querySelector('#btnEj6').addEventListener('click', Ej6Handler);

function Ej6Handler() {
let mensaje = "";
let Ej6=-33;
do {
    if (Ej6%4==0) {
        mensaje += Ej6 + "<br>"
    }
    Ej6++;
}
while (Ej6<231);
    document.querySelector("#msgEj6Resultado").innerHTML = mensaje;
} 

/* Ejercicio 7 */

document.querySelector('#btnEj7').addEventListener('click', Ej7Handler);

function Ej7Handler() {
let mensaje = "";
let valorIngresado=document.querySelector("#txtValorEj7").value;
if (!isNaN(valorIngresado) && valorIngresado!="") {
    let valorIngresadoNum = parseInt(valorIngresado)
        if (valorIngresadoNum >= 2 && valorIngresadoNum <= 50) {
            for (let Ej7=0; Ej7<=valorIngresadoNum; Ej7++) {
            mensaje += "-" ;
            }
        }
        else {
            mensaje = "Debe ingresar un valor entre 2 y 50";
        }
}
else {
    mensaje = "Debe ingresar un numero";
}
document.querySelector("#msgEj7Resultado").innerHTML = mensaje;
}

/* Ejercicio 8 */

document.querySelector('#btnEj8').addEventListener('click', Ej8Handler);

function Ej8Handler() {
let mensaje = "";
let valorIngresado1=document.querySelector("#txtValor1Ej8").value;
let valorIngresado2=document.querySelector("#txtValor2Ej8").value;
if (!isNaN(valorIngresado1) && valorIngresado1!="" && !isNaN(valorIngresado2) && valorIngresado2!="") {
    let valorIngresado1Num = parseInt(valorIngresado1);
    let valorIngresado2Num = parseInt(valorIngresado2);
    if (valorIngresado1Num < valorIngresado2Num) {
        let i= valorIngresado1Num
            while (i <= valorIngresado2Num) {
            mensaje += i + "<br>";
            i++;
            }
    }
    else {
        let i= valorIngresado1Num
            while (i >= valorIngresado2Num) {
            mensaje += i + "<br>";
            i--;
            }
    }
}
else {
    mensaje = "Debe ingresar un numero"    
}
document.querySelector("#msgEj8Resultado").innerHTML = mensaje;
}

/* Ejercicio 9 */

document.querySelector('#btnEj9').addEventListener('click', Ej9Handler);

function Ej9Handler() {
let mensaje = "";
let valorIngresado1=document.querySelector("#txtValor1Ej9").value;
let valorIngresado2=document.querySelector("#txtValor2Ej9").value;
if (!isNaN(valorIngresado1) && valorIngresado1!="" && !isNaN(valorIngresado2) && valorIngresado2!="") {
    let valorIngresado1Num = parseInt(valorIngresado1);
    let valorIngresado2Num = parseInt(valorIngresado2);
    let mayornumero = valorIngresado1Num;
    let menornumero = valorIngresado2Num;
    let suma=0;
    if (menornumero > mayornumero) {
        menornumero = valorIngresado1Num;
        mayornumero = valorIngresado2Num;
    }
    for (let Ej9=1; Ej9<=mayornumero; Ej9++) {
        suma += menornumero;
        mensaje = suma;
        }
}
else {
    mensaje = "Debe ingresar un numero"    
}
    document.querySelector("#msgEj9Resultado").innerHTML = mensaje;
}

/* Ejercicio 10 */

document.querySelector('#btnEj10').addEventListener('click', Ej10Handler);

function Ej10Handler() {
let mensaje = "";
let valorIngresado1=document.querySelector("#txtValor1Ej10").value;
let valorIngresado2=document.querySelector("#txtValor2Ej10").value;
if (!isNaN(valorIngresado1) && valorIngresado1!="" && !isNaN(valorIngresado2) && valorIngresado2!="") {
    let valorIngresado1Num = parseInt(valorIngresado1);
    let valorIngresado2Num = parseInt(valorIngresado2);
    if (valorIngresado1Num < valorIngresado2Num) {
        let Ej10=valorIngresado1Num;
        let multiplicacion=1;
        while (Ej10 <= valorIngresado2Num) {
            multiplicacion *= Ej10;
            mensaje = multiplicacion;
            Ej10++;
            }
    }
    else {
            mensaje = "Ingresar Valor 1 menor a Valor 2";
        }
}
else {
    mensaje = "Debe ingresar un numero"    
}
    document.querySelector("#msgEj10Resultado").innerHTML = mensaje;
}

/* Ejercicio 11 */

document.querySelector('#btnEj11').addEventListener('click', Ej11Handler);

function Ej11Handler() {
let mensaje = "";
let valorIngresado1=document.querySelector("#txtValor1Ej11").value;
let valorIngresado2=document.querySelector("#txtValor2Ej11").value;
let valorIngresado3=document.querySelector("#txtValor3Ej11").value;
if (!isNaN(valorIngresado1) && valorIngresado1!="" && !isNaN(valorIngresado2) && valorIngresado2!="" && !isNaN(valorIngresado3) && valorIngresado3!="") {
    let valorIngresado1Num = parseInt(valorIngresado1);
    let valorIngresado2Num = parseInt(valorIngresado2);
    let valorIngresado3Num = parseInt(valorIngresado3);
    if (valorIngresado1Num < valorIngresado2Num) {
        let i= valorIngresado1Num;
            while (i <= valorIngresado2Num) {
                if (i%valorIngresado3Num==0) {
                mensaje += i + "<br>";
                }
                i++;
            }
    } else {
        let i= valorIngresado1Num;
            while (i >= valorIngresado2Num) {
                if (i%valorIngresado3Num==0) {
                mensaje += i + "<br>";
                }
                i--;
            }
        }
}
else {
    mensaje = "Debe ingresar un numero"    
}
    document.querySelector("#msgEj11Resultado").innerHTML = mensaje;
}

/* Ejercicio 12 */

document.querySelector('#btnEj12').addEventListener('click', Ej12Handler);

function Ej12Handler() {
let mensaje = "";
let valorIngresado=document.querySelector("#txtValorEj12").value;
if (!isNaN(valorIngresado) && valorIngresado!="") {
    let valorIngresadoNum = parseInt(valorIngresado);
    let resultado=1;
    for (let i=1; i<=valorIngresadoNum; i++) {
        resultado *= i; 
        mensaje = resultado;
        }
}
else {
    mensaje = "Debe ingresar un numero";    
}
    document.querySelector("#msgEj12Resultado").innerHTML = mensaje;
}

/* Ejercicio 13 */

document.querySelector('#btnEj13').addEventListener('click', Ej13Handler);

function Ej13Handler() {
let mensaje = "";
let altoIngresado=document.querySelector("#txtAlto").value;
let anchoIngresado=document.querySelector("#txtAncho").value;
if (!isNaN(altoIngresado) && anchoIngresado!="" && altoIngresado>0 && anchoIngresado>0) {
    let altoIngresadoNum = parseInt(altoIngresado);
    let anchoIngresadoNum = parseInt(anchoIngresado);   
    for (let j=1; j<=altoIngresadoNum; j++) {
        for (let i=1; i<=anchoIngresadoNum; i++) {
            mensaje += "O";
        }
        mensaje += "<br>";
    }
}
else {
    mensaje = "Debe ingresar un numero. Los numeros deben ser mayores a cero";    
}
    document.querySelector("#msgEj13Resultado").innerHTML = mensaje;
}

/* Ejercicio 14 */

document.querySelector('#btnEj14').addEventListener('click', Ej14Handler);

function Ej14Handler() {
let mensaje = "";
let valorIngresado=document.querySelector("#txtValorEj14").value;
if (!isNaN(valorIngresado) && valorIngresado!="") {
    let valorIngresadoNum = parseInt(valorIngresado);
    let digitos=1;  
    if (valorIngresadoNum <=1) {
        valorIngresadoNum = valorIngresadoNum *-1;
    }
    if (valorIngresadoNum /10 <1) {
        mensaje = digitos + " digito/s";
    }
    while (valorIngresadoNum / 10 >=1) {
            digitos++;
            valorIngresadoNum/=10;
            mensaje = digitos + " digito/s";
    }
}
else {
    mensaje = "Debe ingresar un numero."
}
    document.querySelector("#msgEj14Resultado").innerHTML = mensaje;
}

/* Ejercicio 15 */

document.querySelector('#btnEj15').addEventListener('click', Ej15Handler);

function Ej15Handler() {
let mensaje = "";
let valorIngresado=document.querySelector("#txtValorEj15").value;
if (!isNaN(valorIngresado) && valorIngresado!="" && valorIngresado > 2000) {
    let valorIngresadoNum = parseInt(valorIngresado); 
    if (valorIngresadoNum < 100 || valorIngresadoNum / 20 <100) {
        mensaje = valorIngresadoNum;
    }
    while (valorIngresadoNum / 20 >=100) {
            valorIngresadoNum/=20;
    }
    valorIngresadoNum/=20;
    mensaje = valorIngresadoNum;
}
else {
    mensaje = "Debe ingresar un numero mayor a 2000."
}
    document.querySelector("#msgEj15Resultado").innerHTML = mensaje;
}

/* Ejercicio 16 */

document.querySelector('#btnEj16').addEventListener('click', Ej16Handler);

function Ej16Handler() {
let mensaje = "";
let valor1Ingresado=document.querySelector("#txtValor1Ej16").value;
let valor2Ingresado=document.querySelector("#txtValor2Ej16").value;
if (!isNaN(valor1Ingresado) && valor1Ingresado!="" && !isNaN(valor2Ingresado) && valor2Ingresado!="") {
    let valor1IngresadoNum = parseInt(valor1Ingresado); 
    let valor2IngresadoNum = parseInt(valor2Ingresado); 
    let mayornumero = valor1IngresadoNum;
    let menornumero = valor2IngresadoNum;
    if (menornumero > mayornumero) {
        menornumero = valor1IngresadoNum;
        mayornumero = valor2IngresadoNum;
    }
    for (let i = menornumero; i <= mayornumero; i++) {
        if (i%4==0 && i%6==0) {
            mensaje = "El primer número incluido entre ellos que es múltiplo de 4 y 6 a la vez es " + i;
            break
        }
        else {
            mensaje = "No hay ningun numero comprendido entre ellos multiplo de 4 y 6 a la vez";
        }
    }
}
else {
    mensaje = "Debe ingresar un numero."
}
    document.querySelector("#msgEj16Resultado").innerHTML = mensaje;
}

/* Ejercicio 17 */

document.querySelector('#btnEj17').addEventListener('click', Ej17Handler);

function Ej17Handler() {
let mensaje = "";
let dividendoIngresado=document.querySelector("#txtDividendo").value;
let divisorIngresado=document.querySelector("#txtDivisor").value;
if (!isNaN(dividendoIngresado) && dividendoIngresado!="" && !isNaN(divisorIngresado) && divisorIngresado!="" && dividendoIngresado>0 && divisorIngresado>0) {
    let dividendoIngresadoNum = parseInt(dividendoIngresado); 
    let divisorIngresadoNum = parseInt(divisorIngresado); 
    let cociente = 0;
    let resto = dividendoIngresadoNum;
    while (resto >= divisorIngresadoNum) {
        cociente++;
        resto-= divisorIngresadoNum;
        mensaje = "El cociente es " + cociente + " y el resto es " + resto;
    }
}
else {
    mensaje = "Debe ingresar un dividendo y divisor mayores a cero."
}
    document.querySelector("#msgEj17Resultado").innerHTML = mensaje;
}

/* Ejercicio 18 */

document.querySelector('#btnEj18').addEventListener('click', Ej18Handler);

function Ej18Handler() {
let mensaje = "";
let valorIngresado=document.querySelector("#txtValorEj18").value;
if (!isNaN(valorIngresado) && valorIngresado!="") {
    let valorIngresadoNum = parseInt(valorIngresado); 
    let i = 1;
    while (i < 200) {
        if ((i%2==0 && i%valorIngresadoNum==0) && i>30) {
        mensaje += i + "</br>";
        }
    i++;
    }
}
else {
    mensaje = "Debe ingresar un numero."
}
    document.querySelector("#msgEj18Resultado").innerHTML = mensaje;
}






