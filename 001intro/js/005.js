function cambiar() {
    //busco el parrafo
    var parrafo = document.getElementById("miparrafo");
    //Documento crea un nodo de texto
    var texto = document.createTextNode("adios 1");
    //Elimina el texto que tiene el parrafo
    parrafo.removeChild(parrafo.childNodes[0]);
    parrafo.appendChild(texto);



    //parrafo.innerHTML="adios1";
}