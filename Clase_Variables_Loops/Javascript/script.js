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