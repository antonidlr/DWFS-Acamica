let num1 = 5;//parseInt(prompt("Escriba el primer número?"),10);
let num2 = 7; //parseInt(prompt("Escriba el segundo número?"),10);

let num3 = num1 + num2;
let nombre = "Antonio ";
let apellido = "de los Rios";

/*
let element = document.getElementById('num-1').getElementsByTagName('span');
let element = document.getElementsByTagName('span');
element[0].innerText = num1;
element[1].innerText = num2;
element[2].innerText = num3;
console.log(element);
console.log(num3);
//alert(nombre + apellido);
console.log("Hola Acamica");
*/
// Ejercicio 1 

let kilometer = 15;
let fuel = 45;
let total = kilometer*fuel;

document.getElementById('evaluate').addEventListener('click', () => {
    let distance = document.getElementById('dist').value;
    let totaltrip = distance/total;
    console.log(totaltrip);
    if(totaltrip <= 1) {
        alert("Vas a poder recorrer la distancia indicada con un solo tanque de nafta completo.")
    }
    else {
        alert("Deberás abastecerte de " + (Math.round(totaltrip * 100) / 100).toFixed(2) + " tanques de nafta");
    }
    console.log("Distancia Tanque " + total);
    console.log(distance);
    console.log(verUser);
})


//Ejercicio 2

let ver = document.getElementById('motor');
let verUser = ver.options;
let motorver = 15;
let fuel2 = 50;


document.getElementById('evaluate2').addEventListener('click', () => {
    
    for(let i = 0; i < verUser.length; i++) {
        if(verUser[i].selected == true) {
            motorver = verUser[i].value;
            console.log(motorver);
        }
    }
    let total2 = motorver*fuel2;
    let distance = document.getElementById('dist2').value;
    let totaltrip2 = distance/total2;
    console.log(totaltrip2);
    
    console.log(document.getElementById('res2').innerText = (Math.round(totaltrip2* 100) / 100).toFixed(2));

})

//Ejercicio 3

/* Crea un algoritmo que valida que una radio exista. Pide al usuario que 
ingrese un dial y valida la existencia de la radio condiciones:
dial debe ser impar
dial debe ser mayor o igual a 89.9
el dial debe ser menor a 107.9*/

document.getElementById('evaluate3').addEventListener('click', () => {
    
    const dial = Number(document.getElementById('dial').value);
    const message = document.getElementById('res3');
    message.innerHTML = " ";
    console.log(dial);

    if(dial % 2 == 1 && dial >= 89.9 && dial <= 107.9 ) {

        message.innerHTML = 'El DIAL de radio ingresado si existe';

    } else if (Number.isInteger(dial) == false && dial >= 89.9 && dial <= 107.9) {

        message.innerHTML = 'El DIAL de radio ingresado si existe';

    }else if (dial == 0) {

        message.innerHTML = 'Ingresar DIAL para validar';

    } else {
        message.innerHTML = 'El DIAL ingresado no existe';
    }
})


//Ejercicio 4 
/* Transferencia bancaria el usuario quiere transferir dinero a otro usuario.
Solicita al usuario source la cantidad de dinero que quiere transferir 
y a quien desea hacerlo.
Tu aplicación debe validar:
- Que tenga fondos para enviar dinero
- Que el destinatario exista.
Si las validaciones pasan correctamente muestra un mensaje de "Transacción 
exitosa".
*/
var credit = 0;
var userArray = [];
const section = document.getElementById('section-4');


document.getElementById('credit').addEventListener('click', () => {
    
    credit = credit + Number(document.getElementById('num-4').value);
    document.getElementById('total-credit').innerHTML = 'Your Credit $' + credit;
    console.log(credit);

})

document.getElementById('new-user').addEventListener('click', () => {
    
    const newUser = document.getElementById('get-user').value;
    if(userArray.indexOf(newUser) == -1) {

        userArray.push(newUser);
        const listSection = section.getElementsByTagName('ul')[0];
        const li = document.createElement('li');
        listSection.appendChild(li);
        li.innerHTML = newUser;

    } else {
        alert("USUARIO YA EXISTE, INGRESE UNO NUEVO");
    }

    console.log(userArray);

})


document.getElementById('new-transfer').addEventListener('click', () => {

    const amount = Number(document.getElementById('transfer').value);
    const userTransfer = document.getElementById('user-4').value;
    const message = document.getElementById('alert');

    if(amount <= credit) {

        if(userArray.indexOf(userTransfer) != -1) {
            message.innerHTML = 'Transferencia Exitosa de $' + amount + ' al usuario ' + userTransfer;
            credit = credit - amount;
            document.getElementById('total-credit').innerHTML = 'Your Credit $' + credit;
        } else {
            alert('El Usuario no existe. Ingrese usuario en la lista de destinatarios.');
        }
    } else {
        alert ("Saldo Insuficiente")
    }

})










