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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});