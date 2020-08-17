// Scope Global

let myVarGlobal = 5;

console.log(myVarGlobal);

function myfunc() {
    myVarGlobal = myVarGlobal + 5;
}

console.log(myVarGlobal);

// Scope Function

function myfunc2() {
    myVarGlobal2 = myVarGlobal + 5;
}

// Ejercicios Arrays 
/* Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese "Stop"
Almacenar todos los datos en un array y mostrarlos al final */

document.getElementById('start-1').addEventListener('click', () => {
    
    const numArray = [];
    let newNum = 0;
    do {
        newNum = prompt("Ingrese un número para almacenar; Escriba stop para salir.")
        
        if(newNum != 'stop' && isNaN(newNum) == false) {
            numArray.push(Number(newNum));
        } 
        
    } while (newNum != 'stop');
    
    document.querySelector('.numbers').innerHTML = numArray;
    console.log(numArray);    
})

//Ejercicio 2
/* Dividir arrays
Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese 0 (cero).
Crear un array para los numero pares, otro para los impares y un tercero para almacenar
datos no numéricos.
Mostrar los resultados al finalizar el ciclo.
*/

document.getElementById('start-2').addEventListener('click', () => {
    
    const evenArray = [];
    const oddArray = [];
    const stringArray = [];
    let num = 1;
    
    do {
        num = prompt("Ingrese un número para almacenar; Escriba 0 (cero) para salir.")
        if(num == 0) {
            
            break;
            
        }
        else if (num % 2 == 0) {
            //Numero Par
            evenArray.push(Number(num));
            
        } else if (num % 2 == 1) {
            //Numero Impar
            oddArray.push(Number(num));
        } else {
            // Demas Datos
            stringArray.push(num);
        }
        
    } while (num != 0);
    
    document.querySelector('.numbers-2').innerHTML = "Array Par:  " + evenArray + "  Array Impar:  " + oddArray + "  Array Data:  " + stringArray;
    
    console.log(evenArray);
    console.log(oddArray);
    console.log(stringArray);
})

//Ejercicio 3 

/* Ingresar mediante prompt numeros indefinidamente hasta que el usuario ingrese 0 (cero).
Almacenar en un array solamente los números.
Eliminar del array el numero más alto y el más bajo. */

document.getElementById('start-3').addEventListener('click', () => {
    
    let numArray = [];
    let checkArray = [];
    let hNum = -1;
    let lNum = -1;
    
    let num = 1;
    let x = 1;
    
    do {
        num = prompt("Ingrese un número para almacenar; Escriba 0 (cero) para salir.");
        if(num == 0) {
            
            break;
            
        } else if (isNaN(num) == false) {
            
            numArray.push(Number(num));
            checkArray.push(Number(num));
            
        } 
        
    } while (num != 0);
    
    if(numArray.length > 2) {
        lNum = numArray[0];
        hNum = numArray[0];
        
        for (let i = 0; i < numArray.length; i++ ) {
                  
            if (lNum < numArray[i]) { } 
            
            else {
                lNum = numArray[i];
            }
                     
            if (hNum > numArray[i]) { }

            else {
                hNum = numArray[i];
            }
            console.log(i);
            console.log(typeof(numArray[i]));
            
        }

        checkArray.splice(checkArray.indexOf(lNum),1);
        checkArray.splice(checkArray.indexOf(hNum),1);
    }

    
    
    console.log("High Num : " + hNum);
    console.log("Low Num : " + lNum);
    console.log(numArray);
    console.log(checkArray);
    
    
})


// Ejercicio 4

/* Ingresar mediante prompt cualquier carácter hasta el ingreso de un 0 (cero).
Almacenar cada ingreso en una posición del array. Al finalizar dividir la cantidad
de elementos en 3 arrays iguales.
Si sobra un elemento eliminar el primero. Si Sobran dos elementos eliminar el primero y el último.*/


document.getElementById('start-4').addEventListener('click', () => {

    let characterArray = [];
    let firstArray = [];
    let secondArray = [];
    let thirdArray = [];
    let character = 1;
    let sum = 0;
    let i = 0;
    
    do {
        character = prompt("Ingrese un número para almacenar; Escriba 0 (cero) para salir.")
        if(character == 0) {
            
            break;
            
        } else {
            
            characterArray.push(character);
        }
        
    } while (character != 0);

    console.log(characterArray);
    sum = characterArray.length;
    console.log(sum);

    let pushElements = (sum, array) => {
        for(let z = 0; z < sum / 3; z++) {
            firstArray.push(array[z]);
        }
        for (let z = sum / 3; z < sum / 3 * 2; z++)  {
            secondArray.push(array[z]);
        }
        for (let z = sum / 3 * 2; z < sum; z++) {
            thirdArray.push(array[z]);
        }
    }

    do {
        if ( Number.isInteger(sum / 3)  == true && sum >= 3 && i == 0) {
            
            console.log('true');
            
            pushElements(sum, characterArray);
            
            break;

        } else if ( sum == 0) {
           
            break;
        
        } else if (Number.isInteger(sum / 3)  == true && i == 1) {

            characterArray.shift();
            pushElements(sum, characterArray);
            break;

        } else if (Number.isInteger(sum / 3)  == true && i == 2) {
            
            characterArray.shift();
            characterArray.pop();
            pushElements(sum,characterArray);
            break;
        
        } else {
            i = i + 1;
            sum = sum - 1;
            console.log('i: ' + i);
            console.log('sum: ' + sum);
        }
        
    } while (i != 3);

    console.log(sum);

    console.log(firstArray);
    console.log(secondArray);
    console.log(thirdArray);

})