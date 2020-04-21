window.onload= function(){


   this.imprimir("hola");

}

function imprimir(mensaje){

mas("hola");
asterisco("hola");
//le meto fomrato a parte de mayuscula

mayuscula("hola", mas);
mayuscula("hola", asterisco);

}

function mas (mensaje){
    console.log("+"+mensaje+"+");


}
function asterisco (mensaje){
    console.log("*"+mensaje+"*");
    
}
function mayuscula (mensaje, formato){
formato(mensaje.toUpperCase());
    
}