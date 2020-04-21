function imprimirlista() {

    //array de javascript
    var milista=["hola","que","tal"];

    //obtengo el body
    // lo hago usando gitElementsByTagName es un array y obtengo la posicion 0
    var body = document.getElementsByTagName("body")[0];

    //Bucle for
    for (var i=0;i<milista.length;i++) {

        //Crea un parrafo
        //Es un nodo p sin contenido
        var p=document.createElement("p");
        //Es un nodo de texto con el texto de cada item del array
        var texto=document.createTextNode(milista[i]);
        //Relaciono el p con el texto que lleva dentro
        p.appendChild(texto);
        //A body le añado p
        body.appendChild(p);
    }
}