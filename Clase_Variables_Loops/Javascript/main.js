let num1 = 5;//parseInt(prompt("Escriba el primer número?"),10);
let num2 = 7; //parseInt(prompt("Escriba el segundo número?"),10);

let num3 = num1 + num2;
let nombre = "Antonio ";
let apellido = "de los Rios";


let element = document.getElementById('num-1').getElementsByTagName('span');
let element = document.getElementsByTagName('span');
element[0].innerText = num1;
element[1].innerText = num2;
element[2].innerText = num3;
console.log(element);
console.log(num3);
//alert(nombre + apellido);
console.log("Hola Acamica");

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

let dial = document.getElementById('dial').value;

document.getElementById('evaluate3').addEventListener('click', () => {
    
    if()
})