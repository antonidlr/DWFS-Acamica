
const objetos_clasicos = {
    nombre: "DWFS",
    apellido: "ONLINE 41",
    edad: 23,
    estado: function () {
        return "Feliz"
    }
};

/* EJ 1
class Persona {
    constructor(nombre, apellido, year_birthday) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.year_birthday = year_birthday;
    }

    calcular_edad() {
        return 2020 - this.year_birthday;
    }
}

let persona_moderna = new Persona('Acamica', 'DWFS 41', '1986');

console.log(persona_moderna.calcular_edad());

*/

// Ejemplo 2 Ejercicio Diapositiva
/*
class Persona {
    constructor(nombre, apellido, edad) {
        this.name = nombre;
        this.lastname = apellido;
        this.age = edad;
    }

    fullname() {
        return this.name.concat(' ' + this.lastname);
    }

    es_mayor() {
        if(Number(this.age) >= 18) {
            return 'Es Mayor de Edad';
        }else {
            return 'Ud. es aún menor de Edad';
        }

    }
}

const firstUser = new Persona('Antonio', 'de los Rios', '34');
*/

//EJEMPLO 3

/////////////////////////////////////////7
//EJERCICIO PROGRAMAN
class DogAdoption {
    constructor(breed, size, age, color, status) { //en_adopcion, proceso_adopcion, adoptado
        this.breed = breed; 
        this.size = size ;
        this.age = age;
        this.color = color;
        this.status =status;
    }
​
    modifyStatus(new_status){
        this.status = new_status;

    }
​
    reportStatus(){
        console.log("El estado de perro es " + this.status);
        alert("El estado de perro es " + this.status);
    }
}
​
/*let perro = new PerroAdopcion("Golden", "Grande", 8, "Marron claro", "Proceso adopcion");*/

while (window.confirm('Desea seguir cargando datos de adopción') == true ) {
    let perro = new PerroAdopcion(prompt("Ingrese la raza del perro"), prompt("Ingrese el tamaño del perro"), prompt("Ingrese la edad del perro"), 
    prompt("Ingrese el color del perro"), prompt("Ingrese el estado de la adopcion del perro"));
}


let things = [];
let temp_var;

while (true) {
    temp_var = prompt('Name');

    if(temp_var == 'None') {
        break;
    }

    things.push(temp_var);
}

for(let i = 0; i<5; i++) {
    things.push(prompt('Name'));
}

const answer = window.confirm('Want to continue');

if(answer == true) {
    console.log('User decided to continue');
}
else (answer != true) {
    console.log('User decided not to continue');
}

//////////////////// FUNCIONES

function retro_syntax_function_1(param1) {
    console.log(param1);
}

retro_syntax_function_1("retro_syntax_function_1");

// Arrow Function

const retro_syntax_function_2 = function(param1) {
    console.log(param1);
}


const arrow_syntax = () => 'arrow_syntax_4';

//

function retro_syntax_function_3() {
    return "retro_syntax_function_3";
}

console.log(retro_syntax_function_3());


const arrow_syntax_function_1 = () => console.log("arrow_syntax_function_1");
const arrow_syntax_function_2 = (param1) => console.log(param1);
const arrow_syntax_function_3 = () => "arrow_syntax_function_3";
const arrow_syntax_function_4 = param1 => console.log(param1);
const arrow_syntax_function_5 = param1 => {
    console.log(param1)
};
arrow_syntax_function_1();
arrow_syntax_function_2("arrow_syntax_function_2");
console.log(arrow_syntax_function_3());
arrow_syntax_function_4("arrow_syntax_function_4");


class User {
    constructor(name, lastname, email, user, pass, status) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.user = user;
        this.pass = pass;
        this.status = status;
    }
}