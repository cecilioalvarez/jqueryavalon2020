var express = require('express');
var app = express();

app.use(express.static('publica'));

app.get('/', function (req, res) {
    res.send('Hola desde express');
});

app.get("/datos", function (req, res) {

    res.send("Estos son datos ajax")
});

app.get("/examen", function (req, res) {

    if (req.query.nota >= 5) {
        res.send("aprobado")
    } else {
        res.send("suspendido")
    }
});

app.get("/cuidades", function (req, res) {

    if (req.query.pais == "España") {
        res.send("<select><option>Santander</option><option>Bilbao</option></select>")
    } else {
        res.send("<select><option>Londres</option><option>Manchester</option></select>")
    }
});

app.get("/fila1", function (req, res) {

    res.send("<tr><td>1:1</td><td>1:2</td><td>1:3</td></tr>")

});
app.get("/fila2", function (req, res) {

    res.send("<tr><td>2:1</td><td>2:2</td><td>2:3</td></tr>")

});
app.get("/fila3", function (req, res) {

    res.send("<tr><td>3:1</td><td>3:2</td><td>3:3</td></tr>")

});




let libros = [{ "isbn": "1", "titulo": "java" }, { "isbn": "2", "titulo": "phyton" }];
let libros2 = [{ "isbn": "3", "titulo": "java2" }, { "isbn": "4", "titulo": "phyton2" }];
let libros3 = [{ "isbn": "5", "titulo": "java5" }, { "isbn": "6", "titulo": "phyton3" }];

app.get("/libros", function (req, res) {
    res.send(libros);
})

app.get("/libros2", function (req, res) {
    setTimeout(function () {
        res.send(libros2);
    }, 2000)
})

app.get("/libros3", function (req, res) {
    setTimeout(function () {
        res.send(libros3);
    }, 4000)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});