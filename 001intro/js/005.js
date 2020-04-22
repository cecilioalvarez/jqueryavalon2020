
function cambiar() {
    // busco el parrafo
    var parrafo=document.getElementById("miparrafo");
    
    //documento creo un nodo de texto
    var texto=document.createTextNode("adios 1");
    //elimina el texto que el parrafo contiene
    parrafo.removeChild(parrafo.childNodes[0]);
    //añade el nuevo texto
    parrafo.appendChild(texto);

    // parrafo.innerHTML="adios1";
}