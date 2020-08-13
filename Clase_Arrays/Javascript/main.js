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