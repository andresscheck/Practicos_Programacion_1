
/* Ejercicio 1 */

document.querySelector('#btnEj1').addEventListener('click', Ej1Handler);

function Ej1Handler()
{
let ValorEj1=parseInt(document.querySelector("#txtValorEj1").value)
if (ValorEj1 >=0) {
    document.querySelector("#msgEj1Resultado").innerHTML="Positivo";
}  
else {
    document.querySelector("#msgEj1Resultado").innerHTML="Negativo";
}  
}

/* Ejercicio 2 */

document.querySelector('#btnEj2').addEventListener('click', Ej2Handler);

function Ej2Handler()
{
let ValorEj2=parseInt(document.querySelector("#txtValorEj2").value)
if (ValorEj2 >10) {
   alert("Mayor que diez")
}
}

/* Ejercicio 3 */

document.querySelector('#btnEj3').addEventListener('click', Ej3Handler);

function Ej3Handler()
{
let ValorEj3=parseInt(document.querySelector("#txtValorEj3").value)
if (ValorEj3 >20) {
    document.querySelector("#msgEj3Resultado").innerHTML="Es mayor que 20";
}  
else {
    document.querySelector("#msgEj3Resultado").innerHTML="Es menor o igual a 20";
}  
}

/* Ejercicio 4 */

document.querySelector('#btnEj4').addEventListener('click', Ej4Handler);

function Ej4Handler()
{
let ValorEj4=parseInt(document.querySelector("#txtValorEj4").value)
if (ValorEj4 <0) {
    ValorEj4 = ValorEj4 * -1
    document.querySelector("#msgEj4Resultado").innerHTML=ValorEj4;
}  
else {
    document.querySelector("#msgEj4Resultado").innerHTML=ValorEj4;
}  
}

/* Ejercicio 5 */

document.querySelector('#btnEj5').addEventListener('click', Ej5Handler);

function Ej5Handler()
{
let ValorEj5=parseInt(document.querySelector("#txtValorEj5").value)
if (ValorEj5 >10 && ValorEj5<20) {
    document.querySelector("#msgEj5Resultado").innerHTML=ValorEj5;
}  
}

/* Ejercicio 6 */

document.querySelector('#btnEj6').addEventListener('click', Ej6Handler);

function Ej6Handler()
{
let ValorEj6=parseInt(document.querySelector("#txtValorEj6").value);
let Resto7=ValorEj6%7;
let Resto3=ValorEj6%3;

if (Resto7==0 && Resto3==0) {
    document.querySelector("#msgEj6Resultado").innerHTML="Es múltiplo de 7 y de 3 simultáneamente";
}
else {
    document.querySelector("#msgEj6Resultado").innerHTML="No es múltiplo de 7 y de 3 simultáneamente";
}    
}

/* Ejercicio 7 */

document.querySelector('#btnEj7').addEventListener('click', Ej7Handler);

function Ej7Handler()
{
let ValorEj7=parseInt(document.querySelector("#txtValorEj7").value)
if (ValorEj7 >20 || ValorEj7<-20) {
    alert("CUMPLE");
} 
else {
    alert("NO CUMPLE");
} 
}

/* Ejercicio 8 */

document.querySelector('#btnEj8').addEventListener('click', Ej8Handler);

function Ej8Handler()
{
let ValorEj8=parseInt(document.querySelector("#txtValorEj8").value)
if (ValorEj8 >30) {
    document.querySelector("#msgEj8Resultado").innerHTML="Es mayor que 30";
}  
if (ValorEj8 <10) {
    document.querySelector("#msgEj8Resultado").innerHTML="Es menor que 10";
}
if (ValorEj8 >=10 && ValorEj8 <=30) {
    document.querySelector("#msgEj8Resultado").innerHTML="Entre 10 y 30";
}  

}

/* Ejercicio 9 */

document.querySelector('#btnEj9').addEventListener('click', Ej9Handler);

function Ej9Handler()
{
let TemperaturaEj9=parseInt(document.querySelector("#txtTemperaturaEj9").value)
if (TemperaturaEj9>20) {
    document.querySelector("#msgEj9Resultado2").innerHTML="Ponerse ropa comoda";
}
if (TemperaturaEj9<10) {
    document.querySelector("#msgEj9Resultado2").innerHTML="Abrigarse mucho";
}  
if (TemperaturaEj9>=10 && TemperaturaEj9<=20) {
    document.querySelector("#msgEj9Resultado2").innerHTML="Abrigo moderado";
}  
let Dia=document.querySelector("#txtDiaEj9").value 
if (Dia == "Lunes" || Dia == "Martes" || Dia == "Miercoles" || Dia == "Jueves" || Dia == "Viernes" || Dia == "Sabado" ) {
document.querySelector("#msgEj9Resultado3").innerHTML="Ir al trabajo";
}
if (Dia == "Domingo") {
document.querySelector("#msgEj9Resultado3").innerHTML="Quedarse en casa, hoy no trabaja";
}
document.querySelector("#msgEj9Resultado1").innerHTML="Levantarse";
}

/* Ejercicio 10 */

document.querySelector('#btnEj10').addEventListener('click', Ej10Handler);

function Ej10Handler()
{
let Valor1Num=parseInt(document.querySelector("#txtValor1Ej10").value)
let Valor2Num=parseInt(document.querySelector("#txtValor2Ej10").value)
if (Valor1Num>Valor2Num) {
    let Resultado=Valor1Num - Valor2Num
    document.querySelector("#msgEj10Resultado").innerHTML=Resultado;
}
else {
    let Resultado=Valor2Num - Valor1Num
    document.querySelector("#msgEj10Resultado").innerHTML=Resultado;
}
}

/* Ejercicio 11 */

document.querySelector('#selectEj11').addEventListener('click', Ej11Handler);

function Ej11Handler()
{
let Resultado;
let Valor1Num=parseInt(document.querySelector("#txtValor1Ej11").value);
let Valor2Num=parseInt(document.querySelector("#txtValor2Ej11").value);
if (document.querySelector("#selectEj11").value=="S") {
    Resultado=Valor1Num + Valor2Num
    document.querySelector("#msgEj11Resultado").innerHTML=Resultado;
}
if (document.querySelector("#selectEj11").value=="R") {
    Resultado=Valor1Num - Valor2Num
    document.querySelector("#msgEj11Resultado").innerHTML=Resultado;
}
if (document.querySelector("#selectEj11").value=="M") {
    Resultado=Valor1Num * Valor2Num
    document.querySelector("#msgEj11Resultado").innerHTML=Resultado;
}
if (document.querySelector("#selectEj11").value=="D") {
    Resultado=Valor1Num / Valor2Num
    document.querySelector("#msgEj11Resultado").innerHTML=Resultado;
}
}

/* Ejercicio 12 */

document.querySelector('#btnEj12').addEventListener('click', Ej12Handler);

function Ej12Handler()
{
let Caracter=document.querySelector("#txtCaracterEj12").value;
if (Caracter=="a" || Caracter=="A" || Caracter=="e" || Caracter=="E" || Caracter=="i" || Caracter=="I" || Caracter=="o" || Caracter=="O" || Caracter=="u" || Caracter=="U") {
    document.querySelector("#msgEj12Resultado").innerHTML="Es una vocal";
}
else {
    document.querySelector("#msgEj12Resultado").innerHTML="No es una vocal";
}
}

/* Ejercicio 13 */

document.querySelector('#btnEj13').addEventListener('click', Ej13Handler);

function Ej13Handler()
{
let Valor1Num=parseInt(document.querySelector("#txtValor1Ej13").value);
let Valor2Num=parseInt(document.querySelector("#txtValor2Ej13").value);
if (Valor1Num % Valor2Num == 0) {
    document.querySelector("#msgEj13Resultado").innerHTML=Valor1Num + " es multiplo de " + Valor2Num;
}
else {
    document.querySelector("#msgEj13Resultado").innerHTML=Valor1Num + " no es multiplo de " + Valor2Num;
}
}

/* Ejercicio 14 */

document.querySelector('#btnEj14').addEventListener('click', Ej14Handler);

function Ej14Handler()
{
let Millas=parseInt(document.querySelector("#txtValorEj14").value);
let EsPlus=document.querySelector("#selectEj14").value;
if (EsPlus == "s") {
    Millas=Millas * 2;
    if (Millas <15000) {
    document.querySelector("#msgEj14Resultado").innerHTML="Tengo " + Millas + " millas y no dispongo de millas suficientes";
    }  
    else if (Millas>=15000 && Millas<30000) {
        document.querySelector("#msgEj14Resultado").innerHTML="Tengo " + Millas + " millas y soy parte del plan plus -> puedo viajar a America del Sur como destino mas lejano";
    } 
    else if (Millas>=30000 && Millas<60000) {
        document.querySelector("#msgEj14Resultado").innerHTML="Tengo " + Millas + " millas y soy parte del plan plus -> puedo viajar a America del Norte como destino mas lejano";
    } 
    else if (Millas>=60000) {
        document.querySelector("#msgEj14Resultado").innerHTML="Tengo " + Millas + " millas y soy parte del plan plus -> puedo viajar a Europa como destino mas lejano";
    }    
}
if (EsPlus == "n") {
    Millas=Millas;
    if (Millas<15000) {
    document.querySelector("#msgEj14Resultado").innerHTML="Tengo " + Millas + " millas y no dispongo de millas suficientes";
    }  
    else if (Millas>=15000 && Millas<30000) {
        document.querySelector("#msgEj14Resultado").innerHTML="Tengo " + Millas + " millas y no soy parte del plan plus -> puedo viajar a America del Sur como destino mas lejano";
    } 
    else if (Millas>=30000 && Millas<60000) {
        document.querySelector("#msgEj14Resultado").innerHTML="Tengo " + Millas + " millas y no soy parte del plan plus -> puedo viajar a America del Norte como destino mas lejano";
    } 
    else if (Millas>=60000) {
        document.querySelector("#msgEj14Resultado").innerHTML="Tengo " + Millas + " millas y no soy parte del plan plus -> puedo viajar a Europa como destino mas lejano";
    }  
}
}  

/* Ejercicio 15 */

document.querySelector('#btnEj15').addEventListener('click', Ej15Handler);

function Ej15Handler()
{
let Codigo=document.querySelector("#txtCodigoEj15").value;
if (Codigo=="A") {
    document.querySelector("#msgEj15Resultado").innerHTML="Canelones";
}
else if (Codigo=="B") {
    document.querySelector("#msgEj15Resultado").innerHTML="Maldonado";
}
else if (Codigo=="C") {
    document.querySelector("#msgEj15Resultado").innerHTML="Rocha";
}
else if (Codigo=="D") {
    document.querySelector("#msgEj15Resultado").innerHTML="Treinta y Tres";
}
else if (Codigo=="E") {
    document.querySelector("#msgEj15Resultado").innerHTML="Cerro Largo";
}
else if (Codigo=="F") {
    document.querySelector("#msgEj15Resultado").innerHTML="Rivera";
}
else if (Codigo=="G") {
    document.querySelector("#msgEj15Resultado").innerHTML="Artigas";
}
else if (Codigo=="H") {
    document.querySelector("#msgEj15Resultado").innerHTML="Salto";
}
else if (Codigo=="I") {
    document.querySelector("#msgEj15Resultado").innerHTML="Paysandú";
}
else if (Codigo=="J") {
    document.querySelector("#msgEj15Resultado").innerHTML="Rio Negro";
}
else if (Codigo=="K") {
    document.querySelector("#msgEj15Resultado").innerHTML="Soriano";
}
else if (Codigo=="L") {
    document.querySelector("#msgEj15Resultado").innerHTML="Colonia";
}
else if (Codigo=="M") {
    document.querySelector("#msgEj15Resultado").innerHTML="San José";
}
else if (Codigo=="N") {
    document.querySelector("#msgEj15Resultado").innerHTML="Flores";
}
else if (Codigo=="O") {
    document.querySelector("#msgEj15Resultado").innerHTML="Florida";
}
else if (Codigo=="P") {
    document.querySelector("#msgEj15Resultado").innerHTML="Lavalleja";
}
else if (Codigo=="Q") {
    document.querySelector("#msgEj15Resultado").innerHTML="Durazno";
}
else if (Codigo=="R") {
    document.querySelector("#msgEj15Resultado").innerHTML="Tacuarembó";
}
else if (Codigo=="S") {
    document.querySelector("#msgEj15Resultado").innerHTML="Montevideo";
}
}

/* Ejercicio 16 */

document.querySelector('#btnEj16').addEventListener('click', Ej16Handler);

function Ej16Handler()
{
let a=parseFloat(document.querySelector("#txtValoraEj16").value);
let b=parseFloat(document.querySelector("#txtValorbEj16").value);
let c=parseFloat(document.querySelector("#txtValorcEj16").value);

if (a>b && a>c) {
    document.querySelector("#msgEj16Resultado").innerHTML="a es el mayor de los 3";
}
else {
    document.querySelector("#msgEj16Resultado").innerHTML="a no es el mayor de los 3";
}
}

/* Ejercicio 17 */

document.querySelector('#btnEj17').addEventListener('click', Ej17Handler);

function Ej17Handler()
{
let a=parseFloat(document.querySelector("#txtValoraEj17").value);

if (a<0 || a>10) {
    document.querySelector("#msgEj17Resultado").innerHTML="a está fuera de rango";
}
else {
    document.querySelector("#msgEj17Resultado").innerHTML="a está en el rango";
}
}

/* Ejercicio 18 */

document.querySelector('#btnEj18').addEventListener('click', Ej18Handler);

let contador=0;
let acumulado=0;

function Ej18Handler()
{
let Valor=parseFloat(document.querySelector("#txtValoresEj18").value);
if (Valor<0) {
    Valor=Valor * -1;
}
contador++
acumulado+=Valor
if (contador==6) {
    document.querySelector("#msgEj18Resultado").innerHTML=acumulado;
}
else {
    document.querySelector("#msgEj18Resultado").innerHTML="El valor ha sido guardado";
}
}

/* Ejercicio 19 */

document.querySelector('#btnEj19').addEventListener('click', Ej19Handler);

let contadorEj19=0;
let contadorcondicion1=0;
let contadorcondicion2=0;
let contadorcondicion3=0;

function Ej19Handler()
{
let Valor=parseFloat(document.querySelector("#txtValoresEj19").value);
contadorEj19++;
if (Valor%5==0) {
    contadorcondicion1++;
}
if (Valor>20) {
    contadorcondicion2++;
}
if (Valor%5==0 && Valor>20) {
    contadorcondicion3++;
}
if (contadorEj19==5) {
document.querySelector("#msgEj19Resultado").innerHTML=contadorcondicion1 + " son multiplos de 5, " + contadorcondicion2 + " son mayores que 20, " + contadorcondicion3 + " cumplen ambas condiciones en simultaneo";
}
else {
    document.querySelector("#msgEj19Resultado").innerHTML="El valor ha sido guardado";
}
}

/* Ejercicio 20 */

document.querySelector('#btnEj20').addEventListener('click', Ej20Handler);

function Ej20Handler()
{
let azucar=parseInt(document.querySelector("#txtazucarEj20").value);
let harina=parseInt(document.querySelector("#txtharinaEj20").value);
let aceite=parseInt(document.querySelector("#txtaceiteEj20").value);
let agua=parseInt(document.querySelector("#txtaguaEj20").value);

let recetasazucar=azucar/1;
let recetasharina=harina/100;
let recetasaceite=aceite/1;
let recetasagua=agua/1;
let recetas;

if (azucar<=0 || harina<=0 || aceite<=0 || agua<=0){
    document.querySelector('#msgEj20Resultado').innerHTML = "Las cantidades ingresadas deben ser mayores a cero";
    }

else {
    if (recetasazucar<=recetasharina && recetasazucar<=recetasaceite && recetasazucar<=recetasagua){
    recetas = recetasazucar;
    }
    else if (recetasharina<=recetasazucar && recetasharina<=recetasaceite && recetasharina<=recetasagua){
    recetas = recetasharina;    
    }
    else if (recetasaceite<=recetasazucar && recetasaceite<=recetasharina && recetasaceite<=recetasagua){
    recetas = recetasaceite;
    }
    else {
    recetas = recetasagua;
    }
}
if (recetas >=1) {
    document.querySelector('#msgEj20Resultado').innerHTML = 'Puede realizar ' + recetas + " recetas"
    }
    else {
        document.querySelector('#msgEj20Resultado').innerHTML = "No hay ingredientes suficientes"
    }
}

/* Ejercicio 21 */

document.querySelector('#btnEj21').addEventListener('click', Ej21Handler);

function Ej21Handler()
{
let Sueldo=parseInt(document.querySelector("#Valor1Ej21").value);
let ValorCasa=parseInt(document.querySelector("#Valor2Ej21").value);
let Primerpago;
let PagoMensual;
let Periodo;

if (Sueldo<0 || ValorCasa<0){
    document.querySelector('#msgEj21Resultado').innerHTML = "Los valores ingresados deben ser mayores a cero";
    }

else {
    if(Sueldo<20000){
        Primerpago = (ValorCasa * 0.15).toFixed(2);
        PagoMensual = (((ValorCasa - Primerpago)/(12*7)).toFixed(2))
        Periodo = "84 meses"
        }

        if(Sueldo >= 20000){
            Primerpago = (ValorCasa * 0.30).toFixed(2);
            PagoMensual = (((ValorCasa - Primerpago)/(12)).toFixed(2))
            Periodo = "12 meses"
        }

    document.querySelector('#msgEj21Resultado1').innerHTML = 'Pago inicial: ' + Primerpago
    document.querySelector('#msgEj21Resultado2').innerHTML = 'Pagos parciales mensuales: ' + PagoMensual + " por " + Periodo;
    }
}

/* Ejercicio 22 */

document.querySelector('#btnEj22').addEventListener('click', Ej22Handler);

function Ej22Handler()
{
let Compra=parseInt(document.querySelector("#txtValor1Ej22").value);
let Tarjeta=document.querySelector("#selectEj22").value;
let ValorFinal=Compra;

if (Tarjeta == "s" && Compra<10000) {
    ValorFinal=Compra * 0.96;
    document.querySelector("#msgEj22Resultado").innerHTML="Pago de " + Compra + " con tarjeta, costo final ->" + ValorFinal;
}
else {
    document.querySelector("#msgEj22Resultado").innerHTML="Pago de " + Compra + " con tarjeta, costo final ->" + ValorFinal;
    }    
}

/* Ejercicio 23 */

document.querySelector("#btnEj23").addEventListener('click', Ej23Handler);

let cantidadPerdieron = 0;
let cantidadSalvaron = 0;
let cantidadMuyBuenaNota = 0;
let totalDePuntos = 0;
let maximaNota = Number.NEGATIVE_INFINITY;
let minimaNota = Number.POSITIVE_INFINITY;

function Ej23Handler() {
    let valorIngresado=document.querySelector("#txtNotaEj23").value;
    if (!isNaN(valorIngresado) && valorIngresado != "") {
        let valorIngresadoNumerico=parseInt(valorIngresado);
        if (valorIngresadoNumerico >= 0 && valorIngresadoNumerico <= 100) {   
            totalDePuntos += valorIngresadoNumerico;
            if (valorIngresadoNumerico < 70) {
                cantidadPerdieron++;
            } 
            else {
                cantidadSalvaron++;
                if (valorIngresadoNumerico > 90) {
                    cantidadMuyBuenaNota++;
                }
            }
            if (maximaNota < valorIngresadoNumerico) {
                maximaNota = valorIngresadoNumerico;
            }
            if (minimaNota > valorIngresadoNumerico) {
                minimaNota = valorIngresadoNumerico;
            }
            let promedioDeNotas = totalDePuntos / (cantidadPerdieron + cantidadSalvaron);
            promedioDeNotas = (promedioDeNotas).toFixed(2);

            document.querySelector("#msgEj23Resultado1").innerHTML = "Perdieron: " + cantidadPerdieron ;
            document.querySelector("#msgEj23Resultado2").innerHTML = "Salvaron: " + cantidadSalvaron + " (con muy buena nota: " + cantidadMuyBuenaNota + ")";
            document.querySelector("#msgEj23Resultado3").innerHTML = "Promedio: " + promedioDeNotas;
            document.querySelector("#msgEj23Resultado4").innerHTML = "Menor nota: " + minimaNota;
            document.querySelector("#msgEj23Resultado5").innerHTML = "Mayor nota: " + maximaNota;

        } else {
            document.querySelector("#msgEj23Resultado1").innerHTML = "El número ingresado debe estar entre 0 y 100.";
            document.querySelector("#msgEj23Resultado2").innerHTML = "";
            document.querySelector("#msgEj23Resultado3").innerHTML = "";
            document.querySelector("#msgEj23Resultado4").innerHTML = "";
            document.querySelector("#msgEj23Resultado5").innerHTML = "";
            }
    } else {
        document.querySelector("#msgEj23Resultado1").innerHTML = "Debe ingresar un número.";
        document.querySelector("#msgEj23Resultado2").innerHTML = "";
        document.querySelector("#msgEj23Resultado3").innerHTML = "";
        document.querySelector("#msgEj23Resultado4").innerHTML = "";
        document.querySelector("#msgEj23Resultado5").innerHTML = "";
    }
}


/* Ejercicio 24 */

document.querySelector("#btnEj24").addEventListener('click', Ej24Handler);

let cuantosempleadoscobraran=0;
let minimosueldo = Number.POSITIVE_INFINITY;
let totalsueldosapagar=0;

function Ej24Handler() {
    let valorIngresado=document.querySelector("#txtValorEj24").value;
    if (!isNaN(valorIngresado) && valorIngresado != "") {
        let valorIngresadoNumerico=parseInt(valorIngresado);
        if (valorIngresadoNumerico >= 0) {   
            totalsueldosapagar += valorIngresadoNumerico;
            cuantosempleadoscobraran++;       
            if (minimosueldo > valorIngresadoNumerico) {
                minimosueldo = valorIngresadoNumerico;
            }
            document.querySelector("#msgEj24Resultado1").innerHTML = "Total de sueldos a pagar: " + totalsueldosapagar;
            document.querySelector("#msgEj24Resultado2").innerHTML = "Cuantos empleados cobraran este mes: " + cuantosempleadoscobraran;
            document.querySelector("#msgEj24Resultado3").innerHTML = "Valor de sueldo mas bajo: " + minimosueldo;    
        } else {
            document.querySelector("#msgEj24Resultado1").innerHTML = "El número ingresado debe ser mayor a cero";
            document.querySelector("#msgEj24Resultado2").innerHTML = "";
            document.querySelector("#msgEj24Resultado3").innerHTML = "";
            }
    } else {
        document.querySelector("#msgEj24Resultado1").innerHTML = "Debe ingresar un número.";
        document.querySelector("#msgEj24Resultado2").innerHTML = "";
        document.querySelector("#msgEj24Resultado3").innerHTML = "";
    }
}

/* Ejercicio 25 */

document.querySelector("#btnEj25").addEventListener('click', Ej25Handler);

let acumuladocompras=0;
let acumuladoclicks=0;
let maximocompras = Number.NEGATIVE_INFINITY;
function Ej25Handler() {
    let stockingresado=document.querySelector("#txtValor1Ej25").value;
    let nombreingresado=document.querySelector("#txtNombreEj25").value;
    let compraingresado=document.querySelector("#txtValor2Ej25").value;
    let nombremaximo;
    if (!isNaN(stockingresado) && stockingresado != "" && !isNaN(compraingresado) && compraingresado != "") {
        let stocknumerico=parseInt(stockingresado);
        let compranumerico=parseInt(compraingresado);
        if (stocknumerico >= 0 && compranumerico >= 0) {  
            acumuladocompras+=compranumerico;
            acumuladoclicks++;
            let stocknumericorestante=stocknumerico - acumuladocompras;
            if (maximocompras < compranumerico) {
                maximocompras = compranumerico;
                nombremaximo = nombreingresado;
            }
                document.querySelector("#msgEj25Resultado1").innerHTML = "La compra de " + nombreingresado + " ha sido registrada. Stock disponible: " + stocknumericorestante;
            if (compranumerico>stocknumericorestante) {
                document.querySelector("#msgEj25Resultado1").innerHTML = "Ha habido un problema";
                }   
            if (stocknumericorestante==0) {
                document.querySelector("#btnEj25").disabled = true;
                document.querySelector("#msgEj25Resultado1").innerHTML = "El cliente que compró más cantidad de cámaras en un pedido es " + nombremaximo;
                document.querySelector("#msgEj25Resultado2").innerHTML = "Se procesaron " + acumuladoclicks + " pedidos";
            }
        }
        else {    
            document.querySelector("#msgEj25Resultado1").innerHTML = "El número ingresado debe ser mayor a cero";
        }
    }
    else {
        document.querySelector("#msgEj25Resultado1").innerHTML = "Debe ingresar un número";
 
    }
}

/* Ejercicio 26 */

document.querySelector('#btnEj26').addEventListener('click', Ej26Handler);
let cantidadnochesderegalo;
function Ej26Handler()
{
let cantidadnoches=parseInt(document.querySelector("#txtValor1Ej26").value);
let metododepago=document.querySelector("#selectEj26").value;
let cantidadnochesentotal;
let costototal;
if (cantidadnoches > 7 && metododepago == "t") {
    cantidadnochesderegalo=0;
    cantidadnochesderegalo=cantidadnochesderegalo+2;
    cantidadnochesentotal=cantidadnoches+cantidadnochesderegalo;
    costototal=cantidadnoches * 40;
    document.querySelector("#msgEj26Resultado").innerHTML=cantidadnoches + " noches pagadas con tarjeta -> hay " + cantidadnochesderegalo + " noche/s de regalo, el usuario se hospeda " + cantidadnochesentotal + " noches, el costo total son " + costototal +" $";
}
else if (cantidadnoches > 3 && metododepago == "t") {
    cantidadnochesderegalo=0;
    cantidadnochesderegalo++;
    cantidadnochesentotal=cantidadnoches+cantidadnochesderegalo;
    costototal=cantidadnoches * 40;
    document.querySelector("#msgEj26Resultado").innerHTML=cantidadnoches + " noches pagadas con tarjeta -> hay " + cantidadnochesderegalo + " noche/s de regalo, el usuario se hospeda " + cantidadnochesentotal + " noches, el costo total son " + costototal + " $";
}
else if (cantidadnoches > 3 && metododepago == "e") {
    cantidadnochesderegalo=0;
    cantidadnochesderegalo++;
    cantidadnochesentotal=cantidadnoches+cantidadnochesderegalo;
    costototal=cantidadnoches * 40;
    document.querySelector("#msgEj26Resultado").innerHTML=cantidadnoches + " noches pagadas con efectivo -> hay " + cantidadnochesderegalo + " noche/s de regalo, el usuario se hospeda " + cantidadnochesentotal + " noches, el costo total son " + costototal +" $";
}

else if (cantidadnoches < 3 && metododepago == "e") {
    cantidadnochesderegalo=0;
    cantidadnochesentotal=cantidadnoches+cantidadnochesderegalo;
    costototal=cantidadnoches * 40;
    document.querySelector("#msgEj26Resultado").innerHTML=cantidadnoches + " noches pagadas con efectivo -> hay " + cantidadnochesderegalo + " noche/s de regalo, el usuario se hospeda " + cantidadnochesentotal + " noches, el costo total son " + costototal +" $";
}
else {
    cantidadnochesderegalo=0;
    cantidadnochesentotal=cantidadnoches+cantidadnochesderegalo;
    costototal=cantidadnoches * 40;
    document.querySelector("#msgEj26Resultado").innerHTML=cantidadnoches + " noches pagadas con tarjeta -> hay " + cantidadnochesderegalo + " noche/s de regalo, el usuario se hospeda " + cantidadnochesentotal + " noches, el costo total son " + costototal +" $";
}
}

/* Ejercicio 27 */

document.querySelector("#btnGuardarNumeroE27").addEventListener("click", btnGuardarNumeroE27Handler);
document.querySelector("#btnGuardarNumeroRandomE27").addEventListener("click", btnGuardarNumeroRandomE27Handler);
document.querySelector("#btnRealizarIntentoE27").addEventListener("click", btnRealizarIntentoE27Handler);

    let numeroParaAdivinarE27 = 0;
    let cantidadIntentosE27 = 0;
    function btnGuardarNumeroE27Handler() {
        let mensaje = "";
        let valorIngresado = document.querySelector("#txtUsuario1E27").value;
        if (!isNaN(valorIngresado) && valorIngresado != "") {
            let valorIngresadoNumerico = parseInt(valorIngresado);
            if (valorIngresadoNumerico >= 1 && valorIngresadoNumerico <= 100) {
                numeroParaAdivinarE27 = valorIngresadoNumerico;
                document.querySelector("#txtUsuario1E27").value = "";
                document.querySelector("#txtUsuario2E27").value = "";
                cantidadIntentosE27 = 0;
                mensaje = "El número ha sido guardado, puede comenzar el jugador 2.";
            } else {
                mensaje = "El número ingresado debe estar entre 1 y 100.";
            }
        } else {
            mensaje = "Debe ingresar un número.";
        }
        document.querySelector("#pMensajesE27").innerHTML = mensaje;
    }
    
    function btnGuardarNumeroRandomE27Handler() {
        let mensaje = "";
        let valorGenerado = parseInt(Math.random() * (101 - 1) + 1);
        numeroParaAdivinarE27 = valorGenerado;
        document.querySelector("#txtUsuario1E27").value = "";
        document.querySelector("#txtUsuario2E27").value = "";
        cantidadIntentosE27 = 0;
        mensaje = "El número ha sido guardado, puede comenzar el jugador 2.";
        document.querySelector("#pMensajesE27").innerHTML = mensaje;
    }
    
    function btnRealizarIntentoE27Handler() {
        let mensaje = "";
        let valorIngresado = document.querySelector("#txtUsuario2E27").value;
        if (!isNaN(valorIngresado) && valorIngresado != "") {
            let valorIngresadoNumerico = parseInt(valorIngresado);
            if (valorIngresadoNumerico >= 1 && valorIngresadoNumerico <= 100) {
                cantidadIntentosE27 ++;
                document.querySelector("#txtUsuario2E27").value = "";  
                let mayorNumero = numeroParaAdivinarE27;
                let menorNumero = valorIngresadoNumerico;   
                if (menorNumero > mayorNumero) {
                    menorNumero = numeroParaAdivinarE27;
                    mayorNumero = valorIngresadoNumerico;
                }    
                let diferencia = mayorNumero - menorNumero;   
                if (diferencia > 15) {
                    mensaje = "Estás lejos.";
                } else if (diferencia >= 10) {
                    mensaje = "Te estás acercando.";
                } else if (diferencia >= 5) {
                    mensaje = "Cada vez más cerca";
                } else if (diferencia >= 1) {
                    mensaje = "Muy pero muy cerca.";
                } else {
                    mensaje = "Ha ganado en " + cantidadIntentosE27 + " intento/s.";
                }
            } else {
                mensaje = "El número ingresado debe estar entre 1 y 100.";
            }
        } else {
            mensaje = "Debe ingresar un número.";
        }
        document.querySelector("#pMensajesE27").innerHTML = mensaje;
    }

/* Ejercicio 28 */

document.querySelector("#btnSumarPuntosE28").addEventListener("click", btnSumarPuntosE28Handler);
document.querySelector("#btnReiniciarE28").addEventListener("click", btnReiniciarE28Handler);

let puntosJ1E28 = 0;
let puntosJ2E28 = 0;
function btnSumarPuntosE28Handler() {
    let mensaje = "";
    let puntosJ1 = document.querySelector("#txtEquipo1E28").value;
    let puntosJ2 = document.querySelector("#txtEquipo2E28").value;
    let puntosJ1EsNumerico = !isNaN(puntosJ1);
    let puntosJ2EsNumerico = !isNaN(puntosJ2);
    if (puntosJ1EsNumerico && puntosJ2EsNumerico && puntosJ1 != "" && puntosJ2 != "") {
        let puntosJ1Numerico = parseInt(puntosJ1);
        let puntosJ2Numerico = parseInt(puntosJ2);
        puntosJ1E28 += puntosJ1Numerico;
        puntosJ2E28 += puntosJ2Numerico;
        mensaje = "Equipo 1: " + puntosJ1E28 + " puntos."
        mensaje += "<br>"
        mensaje += "Equipo 2: " + puntosJ2E28 + " puntos."
        if (puntosJ1E28 >= 30 || puntosJ2E28 >= 30) {
            document.querySelector("#btnSumarPuntosE28").disabled = true;
        }
    } else {
        mensaje = "¡Error!<br>Debe ingresar dos valores numéricos.";
    }
    document.querySelector("#txtEquipo1E28").value = "";
    document.querySelector("#txtEquipo2E28").value = "";
    document.querySelector("#pMensajesE28").innerHTML = mensaje;
}

function btnReiniciarE28Handler() {
    puntosJ1E28 = 0;
    puntosJ2E28 = 0; 
    document.querySelector("#pMensajesE28").innerHTML = "¡Juego reiniciado!";
    document.querySelector("#btnSumarPuntosE28").disabled = false;
}

/* Simulacro */

document.querySelector("#btnSimulacro").addEventListener("click", btnSimulacroHandler);

function btnSimulacroHandler () {
    let ancho = parseFloat(document.querySelector("#txtancho").value);
    let largo = parseFloat(document.querySelector("#txtlargo").value);
    let producto = ancho * largo;
    let costo = 0;
    if (producto >= 1) {
        costo = 200;
    }
    else if (producto >= 0.7) {
    costo = 280;
    }
    else {
    costo = 400;
    }
    if (document.querySelector("#selector").value == "s") {
    costo += 300;
    }
    document.querySelector("#pMensajesSimulacro").innerHTML = "El costo de la impresion es " + costo;
}