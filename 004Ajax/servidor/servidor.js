var express = require('express');
var app = express();

app.use(express.static('publica'));

app.get('/', function (req, res) {
  res.send('Hola desde Express!');
});

app.get("/datos", function(req, res) {
    res.send("estos son datos ajax")
})

app.get("/examen", function(req, res) {
    if (req.query.nota>=5) {
        res.send("aprobado")
    } else {
        res.send("suspenso")
    }
})

app.get("/ciudades", function(req, res) {
    if (req.query.pais=="España") {
        res.send("<select><option>Santander</option><option>Bilbao</option></select>")
    } else {
        res.send("<select><option>Londres</option><option>Manchester</option></select>")
    }
})

app.get("/fila1", function(req, res) {
    res.send("<table><tr>hola</tr></table>")
})
app.get("/fila2", function(req, res) {
    res.send("<table><tr>que</tr></table>")
})
app.get("/fila3", function(req, res) {
    res.send("<table><tr>tal</tr></table>")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
