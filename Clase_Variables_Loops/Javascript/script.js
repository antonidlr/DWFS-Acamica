let frutasArray = ['Naranja', 'Fresa', 'Melon', 'limon', 'Uva', 'Banana', 'Pera'];
let num = frutasArray.length;
let i = 0;
while (i < num) {
    console.log(frutasArray[i]);
    i++;
}



function suma () {
    let total = 0;
    for(let i = 1; i < 6; i++) {
        let sum = prompt("Indicar numero "+ i + " sumar");
        let sum2 = Number(sum);
        total = total + sum2;
    }
    alert("El total de la suma es igual a " + total);
}


function promedio () {
    let total = 0;
    for(let i = 1; i < 6; i++) {
        let sum = prompt("Indicar numero "+ i + " para obtener el promedio");
        let sum2 = Number(sum);
        total = total + sum2;
    }
    let promedio = total / 5;
    alert("El total del promedio es igual a " + promedio);
}


// // Loop Do .. While

// let num = 0;

// do {

// } while ( )

// // while

// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// Ejercicio 1
/* Crear un script que permita ingresar solamente 5 valores mediante prompt <br>
    y nos muestre la suma total de todos los valores ingresados. Mostrar el resultado utilizando un alert.*/


document.getElementById('sum').addEventListener('click', () => {

    suma();

})

const f = () => {
    console.log('Hola');
}

localStorage.setItem("nombre", "Jimena");
var traer_datos = localStorage.getItem("nombre");
console.log(traer_datos); //imprime Jimena//
 //eliminó definitivamente “Jimena”

 //Ejercicio 2

 /* A nuestro script agreguemos el promedio de todos los números ingresados. <br>
    Muestra el resultado con un alert. */

document.getElementById('prom').addEventListener('click', () => {
    
    promedio();

})

//Ejercicio 3
/* Ingresar N cantidad de edades mediante prompt hasta que se ingrese un cero.
Al finalizar mostrar cuántos son mayores de edad. Muestra el resultado con un alert.*/

document.getElementById('age').addEventListener('click', () => {
    
    let cont = 0;
    let age = 1;
    let people = [];
    console.log(cont);
    do{
        age = Number(prompt("Indicar la edad para evaluar los mayores de edad."));
        if(age != 0) {
            people.push(age);
        }
        
        if (adultAge(age) == true) {
            cont ++;
        }

    }while (age != 0)

    alert("El total de personas mayor de edad es igual a " + cont);
    console.log(people);
})

const adultAge = (age) => {
    if (age >= 18) {

        return true;

    } else {

        return false;
    }
}

//Ejercicio 4 
/* Ingresar N cantidad de números mediante prompt. Mostrar el promedio de los números
ingresados de 1 dígito. Terminar el programar con la palabra salir.*/

document.getElementById('prom_cond').addEventListener('click', () => {

    let sum = 0;
    let num = 1;
    let prom = 0;

    do {
        num = prompt('Ingresar N números para calcular el promedio.');

    } while (num != 'salir')
})