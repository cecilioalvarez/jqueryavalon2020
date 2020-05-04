var express = require('express');
var app = express();
app.use(express.static('publica'));

app.get('/', function (req, res) {
    res.send('Hola desde Express');
});

app.get("/datos", function (req, res) {
    setTimeout(function () {
        res.send("estos son datos ajax");
    }, 4000);
});

app.get("/examen", function (req, res) {
    if (req.query.nota >= 5) {
        res.send("aprobado");
    }
    else {
        res.send("suspendido");
    }
})

app.get("/ciudades", function (req, res) {
    if (req.query.pais == "españa") {
        res.send("<select><option>Santander</option><option>Bilbao</option></select>");
    }
    else {
        res.send("<select><option>Londres</option><option>Manchester</option></select>");
    }
})

app.get("/fila1", function (req, res) {
    res.send("<tr><td>pedro</td></tr>");
})

app.get("/fila2", function (req, res) {
    res.send("<tr><td>juan</td></tr>");
})
app.get("/fila3", function (req, res) {
    res.send("<tr><td>luis</td></tr>");
})

let libros = [{ "isbn": "1", "titulo": "java" }, { "isbn": "2", "titulo": "python" }];
let libros2 = [{ "isbn": "3", "titulo": "java2" }, { "isbn": "4", "titulo": "python2" }];
let libros3 = [{ "isbn": "5", "titulo": "java3" }, { "isbn": "6", "titulo": "python3" }];

app.get("/libros", function (req, res) {
    res.send(libros);
})

app.get("/libros2", function (req, res) {
    setTimeout(function () {
        res.send(libros2);
    }, 2000);
})

app.get("/libros3", function (req, res) {
    setTimeout(function () {
        res.send(libros3);
    }, 4000);
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});