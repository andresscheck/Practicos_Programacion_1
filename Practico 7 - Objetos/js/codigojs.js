/* Ejercicio 1 */

document.querySelector('#btnEj1').addEventListener('click', crearPersonaEj1);
document.querySelector('#btn2Ej1').addEventListener('click', crearTablaTodosEj1);
document.querySelector('#btn3Ej1').addEventListener('click', crearTablaMayoresEj1);

let personasEj1 = [];

class PersonaEj1 {
    constructor(pNombre,pEdad,pNacionalidad) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.nacionalidad = pNacionalidad;
        }
    }

function crearPersonaEj1(){
    let nombreEj1 = document.querySelector("#txt1Ej1").value;
    let edadEj1 = parseInt(document.querySelector("#txt2Ej1").value);
    let nacionalidadEj1 = document.querySelector("#txt3Ej1").value;
    let mensaje = ''

    if (nombreEj1 != "" && edadEj1 != "" && nacionalidadEj1 != "" && !isNaN(edadEj1)){
        if (edadEj1 < 0 ){
            mensaje = "La edad debe ser un numero mayor o igual a cero"
        } else {
            let nuevaPersona = new PersonaEj1(nombreEj1, edadEj1, nacionalidadEj1)
            personasEj1.push(nuevaPersona);
            mensaje = "Se almacenaron los datos de manera exitosa"
        }
    } else {
        mensaje = "Se deben completar todos los campos"
    }
    document.querySelector("#msgEj1Resultado").innerHTML = mensaje
}

function crearTablaTodosEj1() {
    document.querySelector("#msg2Ej1Resultado").innerHTML =    `<tr>
                                                                    <td>Nombre</td>
                                                                    <td>Edad</td>
                                                                    <td>Nacionalidad</td>
                                                               </tr>`
    for (let i = 0; i<personasEj1.length;i++){
    document.querySelector("#msg2Ej1Resultado").innerHTML += `  <br> <tr>
                                                                    <td>${personasEj1[i].nombre}</td>
                                                                    <td>${personasEj1[i].edad}</td>
                                                                    <td>${personasEj1[i].nacionalidad}</td>
                                                                </tr>`
    }
}

function crearTablaMayoresEj1() {
    document.querySelector("#msg3Ej1Resultado").innerHTML =    `<tr>
                                                                    <td>Nombre</td>
                                                                    <td>Edad</td>
                                                                    <td>Nacionalidad</td>
                                                               </tr>`
    for (let i = 0; i<personasEj1.length;i++){
        if (personasEj1[i].edad >=18) {
            document.querySelector("#msg3Ej1Resultado").innerHTML += `  <br> <tr>
                                                                            <td>${personasEj1[i].nombre}</td>
                                                                            <td>${personasEj1[i].edad}</td>
                                                                            <td>${personasEj1[i].nacionalidad}</td>
                                                                        </tr>`
        }
    }
}

/* Ejercicio 2 */

document.querySelector('#btnEj2').addEventListener('click', crearPeliculasEj2);
document.querySelector('#btn2Ej2').addEventListener('click', crearTablaPromedioMayora4Ej2);
document.querySelector('#btn3Ej2').addEventListener('click', crearTablaPeliculaBuscada);

let peliculasEj2 = [];

class PeliculaEj2 {
    constructor(pNombre,pAño,pGenero,pVotantes,pPuntos) {
        this.nombre = pNombre;
        this.año = pAño;
        this.genero = pGenero;
        this.votantes = pVotantes;
        this.puntos = pPuntos;
        }
    }

function crearPeliculasEj2(){
    let nombreEj2 = document.querySelector("#txt1Ej2").value;
    let añoEj2 = parseInt(document.querySelector("#txt2Ej2").value);
    let generoEj2 = document.querySelector("#selectGenero").value;
    let votantesEj2 = parseInt(document.querySelector("#txt4Ej2").value);
    let puntosEj2 = parseInt(document.querySelector("#txt5Ej2").value);
    let mensaje = ''
    let contador=0;

    for (let i = 0; i < peliculasEj2.length ; i++) {
        if (peliculasEj2[i].nombre == nombreEj2){
            contador++;
        }
    }

    if (contador == 0) {
        if (nombreEj2 != "" && generoEj2 != "" && !isNaN(añoEj2) && !isNaN(votantesEj2) && !isNaN(puntosEj2)){
            let nuevaPelicula = new PeliculaEj2(nombreEj2, añoEj2, generoEj2, votantesEj2, puntosEj2);
            peliculasEj2.push(nuevaPelicula);
            mensaje = "Se almacenaron los datos de manera exitosa";
            console.log(peliculasEj2)
        }
        else {
        mensaje = "Ingresar los datos correctamente"
        }
    }
    document.querySelector("#msg1Ej2Resultado").innerHTML = mensaje
 }


function crearTablaPromedioMayora4Ej2() {
    document.querySelector("#msg2Ej2Resultado").innerHTML =    `<tr>
                                                                        <td>Nombre</td>
                                                                        <td>Año</td>
                                                                        <td>Genero</td>
                                                                        <td>Promedio</td>
                                                                   </tr>`
    for (let i = 0; i<peliculasEj2.length;i++){
        if (peliculasEj2[i].puntos/peliculasEj2[i].votantes >=4) {
            let promedio = peliculasEj2[i].puntos/peliculasEj2[i].votantes;
            document.querySelector("#msg2Ej2Resultado").innerHTML += `  <br> <tr>
                                                                                <td>${peliculasEj2[i].nombre}</td>
                                                                                <td>${peliculasEj2[i].año}</td>
                                                                                <td>${peliculasEj2[i].genero}</td>
                                                                                <td>${promedio}</td>
                                                                            </tr>`
            }
        }
    }

    function crearTablaPeliculaBuscada() {
        let nombreBuscadoEj2 = document.querySelector("#txt6Ej2").value;
        for (let i = 0; i<peliculasEj2.length;i++){
            if (peliculasEj2[i].nombre != nombreBuscadoEj2) {
                document.querySelector("#msg3Ej2Resultado").innerHTML = "Nombre no encontrado";
            }
            else {
                document.querySelector("#msg3Ej2Resultado").innerHTML =    `<tr>
                                                                            <td>Nombre</td>
                                                                            <td>Año</td>
                                                                            <td>Genero</td>
                                                                            <td>Votantes</td>
                                                                            <td>Puntos</td>
                                                                       </tr>`

                document.querySelector("#msg3Ej2Resultado").innerHTML += `  <br> <tr>
                                                                                    <td>${peliculasEj2[i].nombre}</td>
                                                                                    <td>${peliculasEj2[i].año}</td>
                                                                                    <td>${peliculasEj2[i].genero}</td>
                                                                                    <td>${peliculasEj2[i].votantes}</td>
                                                                                    <td>${peliculasEj2[i].puntos}</td>
                                                                                </tr>`
            }
        }
    }

    




    

