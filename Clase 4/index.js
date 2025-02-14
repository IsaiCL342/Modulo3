//CLASE 4

/*function saludar(){
    console.log('Hola, bienvenidos a la clase')
}

saludar()

function mostrarMensaje(){
    console.log('Estoy aprendiendo funciones :D');
}

mostrarMensaje()

function sumar(){
    let resultado = 3 + 3
    console.log('El resultado es', resultado);
}

sumar()

function sumarParametros(numero1, numero2){
    console.log(numero1 + numero2);
}

sumarParametros(10,20)
sumarParametros(50,50)

function saludoDiferente(nombre, apellido, edad, pasatiempo){
    console.log(`Hola soy ${nombre} ${apellido}, tengo la edad de ${edad} y me gusta ${pasatiempo}`);
}

saludoDiferente('Isai','Campechano', 22, 'escuchar musica')

function restar(num1, num2){
    console.log(num1 - num2);
    return num1 - num2
}

let resultado = restar(5,1);

resultado = restar(3,1)

console.log(resultado);

function mostrarResultado(){
    console.log('Desde la funcion', resultado);
}

mostrarResultado()

//MANERAS DE DECLARAR FUNCIONES

//Arrow function*/


//ACTIVIDAD

//Crea una funcion que reciba un array de numeros y retorne cuantos numeros son pares

function contarPares(numeros){
    let contador = 0;

    for(let i =0; i<numeros.length; i++){
        if (numeros [i] % 2 === 0){
            //console.log(numeros[i]);
            contador++
        }
    }
    return contador;
}

//console.log(contarPares([1,2,3,4,5,6,7,8]));

//Crear una funcion que recibe un array de numero y retorne el numero mas grande

function encontrarMayor(numeros){
    let mayor = numeros[0]
    for(let i=0; i<numeros.length; i++){
        if(numeros[i] > mayor){
            mayor=numeros[i]
        }
        //console.log(numeros[i]);
    }
    return mayor;
}

//console.log(encontrarMayor([20,10,5,3,2,21,19]));

// Crear un objeto estudiante con nombre, edad y un array de notas, tambien crear una funcion que reciba un objeto y que retorne el promedio de las notas

const estudiante = {
    nombre: 'Isai',
    edad: '22',
    notas: [80, 90, 70]
}

function calcularPromedio(estudiante){
    let suma = 0;
    for(let i=0; i < estudiante.notas.length; i++){
        suma += estudiante.notas[i]
        //console.log(estudiante.notas[i]);
    }
    return suma/estudiante.notas.length
}

//console.log(calcularPromedio(estudiante));

// Crear una funcion que reciba un array de objetos con estudiantes que retorne un nuevo array con los nombres y los promedios

const estudiantes =[
    {nombre: 'Isai', notas:[80,90,70]},
    {nombre: 'Luis', notas:[100,50,90]},
    {nombre: 'Johan', notas:[60,90,80]}
]

function generarReporte(estudiantes){
    let reporte = [];
    for(let i=0; i<estudiantes.length; i++){
        let suma = 0;
        for(let j=0; j<estudiantes[i].notas.length; j++){
            suma +=estudiantes[i].notas[j]
        }
        let promedio = suma/estudiantes[i].notas.length
        reporte.push({nombre: estudiantes[i].nombre, promedio: promedio})
    }
    return reporte;
}

console.log(generarReporte(estudiantes));