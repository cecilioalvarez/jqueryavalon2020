window.onload= function(){

    imprimirMayusculas("hola",mas);
}
    


function imprimirMayusculas(mensaje, fformato){
    fformato(mensaje.toUpperCase());
    

}

function mas(mensaje){
    console.log("+"+mensaje+"+");
}
function asterisco(mensaje){
    console.log("*"+mensaje+"*")
}