window.onload=function(){

 imprimirMayusculas("hola",asterisco);
}

function imprimirMayusculas(mensaje, fformato){
   fformato(mensaje.toUpperCase());

}

function mas(mensaje){
   console.log("+"+mensaje+"+");

}

function asterisco(mensaje, fformato){
   console.log("*"+mensaje+"*");

}