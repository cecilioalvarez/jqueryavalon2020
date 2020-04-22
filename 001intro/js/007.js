
function imprimirlista() {
    
    // array de javaascript
    var milista=["hola","que","tal"];
    // obtengo el body
    // lo hago usando un getElementsByTangName es un array y obtengo la posicion 0
    var body=document.getElementsByTagName("body")[0];
    
    // var body=[objetobody] ----> body=objetobody[0]
    // bucle for clasico 
    for (var i=0; i<milista.length;i++) {

        // crea un parrafo
        // esto es un nodo p pero sin contenido
        var p=document.createElement("p");
        // este es un nodo de texto con el texto de cada item del array
        var texto=document.createTextNode(milista[i]);
        // relaciono el p con el texto que lleva dentro
        p.appendChild(texto);
        // al body le añado un p
        body.appendChild(p);
    }
}