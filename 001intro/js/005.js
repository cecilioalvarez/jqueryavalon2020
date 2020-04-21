
function cambiar (){
 
    //busco parrafo
    let parrafo= document.getElementById("miparrafo");
    //console.dir(parrafo);

    //crea nodo texto 
var texto =document.createTextNode("adios1");
// quita un hijo, eltexto qe el parrafo contiente
parrafo.removeChild(parrafo.childNodes[0]);
//añade en nuevo texto
parrafo.appendChild(texto);

  //  parrafo.innerHTML="adios1"
}