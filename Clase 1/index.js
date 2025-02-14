//ACTIVIDAD CLASE - 1

var nombre = prompt('Ingresa tu nombre')
var edad = prompt('Ingresa tu edad')
var gusto1 = prompt('Ingresa tu pasatiempo favorito')
var gusto2 = prompt('Ingresa tu otro pasatiempo favorito')

console.log(`Mi nombre es: ${nombre} tengo la edad de ${edad} me gusta ${gusto1} y tambien ${gusto2}`);

var numero1 = Number (prompt('Ingresa el primer dato'))
var numero2 = Number (prompt('Ingresa el segundo dato'))
var numero3 = Number (prompt('Ingresa el tercer dato'))

console.log(numero1+numero2+numero3);  

let teorico = true;
let practico = true;
let vista = true;

if (teorico === true && practico === true && vista === true){
    alert ('felicidades tienes tu licencia de conducir')
}
else if(practico===false){
    alert ('fallaste el examen practico, repitelo')
}
else if(vista===false){
    alert ('consideramos no dar la licencia por temas de vista')
}
else if(teorico===false){
    alert ('fallaste el examen teorico, ponte a repasar')
}
else{
    alert('contacta al administrador')
}

