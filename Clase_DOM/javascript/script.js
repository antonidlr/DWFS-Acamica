// Grabar Local Storage

//localStorage.setItem('encuentro', '25');

//Grabar en el Session Storage

//sessionStorage.setItem('curso', 'DWFS-Online-41');

let value1 = 5;
let value2 = [1, 2, "acamica"];
let value3 = {
    name: "acamica",
    age: 20
}
let value4 = true;

localStorage.setItem('value1', value1);

let rvalue1 = localStorage.getItem("value1");
console.log(rvalue1);

localStorage.setItem('value2', value2);

let rvalue2 = localStorage.getItem("value2");
console.log(rvalue2);

localStorage.setItem('value3', value3);

let rvalue3 = localStorage.getItem('value3');
console.log(rvalue3);

localStorage.setItem('ciudad', 'buenos aires');
localStorage.removeItem('ciudad');

//localStorage.clear();

const keyExist = (key_name) => {
    
    if(localStorage.getItem(key_name) == null) {
        return false;
    }

    return true;
}

console.log(keyExist('ciudad'));


