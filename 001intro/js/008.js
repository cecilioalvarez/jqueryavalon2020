window.onload=function() {
    
    var boton=document.getElementById("boton");
    boton.onclick=imprimirlista;
}

function imprimirlista() {

    var milista=["hola","que","tal"];

    var body = document.getElementsByTagName("body")[0];

    for (var i=0;i<milista.length;i++) {

        var p=document.createElement("p");
        var texto=document.createTextNode(milista[i]);
        p.appendChild(texto);
        body.appendChild(p);
    }
}