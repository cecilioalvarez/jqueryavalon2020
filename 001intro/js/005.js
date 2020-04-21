function cambiar() {

    var parrafo = document.getElementById("miparrafo");

    var texto = document.createTextNode("adios1");

    parrafo.removeChild(parrafo.childNodes[0]);
    parrafo.appendChild(texto);
    

    
}