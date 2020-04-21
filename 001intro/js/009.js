window.onload = function () {

    imprimirMayusculas("hola",asterisco)

}

function imprimirMayusculas(mensaje,formato) {

    formato(mensaje);
}

function mas(mensaje) {

    console.log("+" + mensaje + "+");
}

function asterisco(mensaje) {

    console.log("*" + mensaje + "*");
}

