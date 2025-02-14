//ACTIVIDAD CLASE 2 

//App para validar entrada al parque tematico

//1. Edad y altura, tener 12 años o medir mas de 140cm

//2. Pago o pase, debe haber hecho el pago de $20 o tener un pase VIP

//3. Condicion de salud, no debe tener restricciones medicas

//4. Acompañante, si el visitante es menor de 16 años debe ser acompañado por un adulto

let edad = Number(prompt('ingresa tu edad'))
let altura = Number(prompt('Ingresa tu altura en cm'))
let pago = prompt('hiciste el pago de la entrada').toLocaleLowerCase()
let pase = prompt('tienes un pase VIP').toLocaleLowerCase()
let salud = prompt('Tienes alguna condicion medica? si - no').toLocaleLowerCase()

if (edad >= 12 && altura >= 140){
    if(edad < 16){
        let acompañante = prompt('eres menor de 16, te acompaña un adulto? si - no').toLocaleLowerCase()
        if(acompañante == 'si'){
            if((pago === 'si' || pase === 'si')&& salud === 'no'){
                console.log('Puedes ingresar con tu compañero') 
            }
            else if(pago === 'no' || pase === 'no'){
                console.log('No puede ingresar ya que no hay pago ni pase')
            }
            else{
                console.log('no puedes ingresar por tu salud')
            }
        }else{
            console.log('no puedes ingresar sin acompañante')
        }
    }else{
        if((pago === 'si' || pase === 'si')&& salud === 'no'){
            console.log('Puedes ingresar con tu compañero') 
        }
        else if(pago === 'no' || pase === 'no'){
            console.log('No puede ingresar ya que no hay pago ni pase')
        }
        else{
            console.log('no puedes ingresar por tu salud')
        }
    }
}else{
    console.log('no cumples cpn los requisitos para entrar')
}

//ACTIVIDAD CLASE 3

