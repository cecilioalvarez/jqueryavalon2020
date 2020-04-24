var express = require('express');
var app = express();
app.use(express.static('publica'));
app.get('/', function (req, res) {
  res.send('Hola desde Express');
});

app.get("/datos",function(req,res) {

    setTimeout(function() {
        res.send("estos son datos ajax");
    },4000);
});


app.get("/examen",function(req,res) {

    if (req.query.nota>5) {

        res.send("aprobado");
    }else {
        res.send("suspenso");
    }

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
