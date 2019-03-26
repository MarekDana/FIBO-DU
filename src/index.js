const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Kontaktujte mě na vaclav.strnad@gyarab.cz");
});

app.get("/about", function(req, res) {
  res.send("<h1>About</h1>");
});

app.get("/hobbies", function(req, res) {
  res.send("<h4>Hobbies</h4>");
});

app.get("/calc", function(req, res) {
  var formular = "<form action ='/calc' method='post'>";
  formular += "<input type='text' name='n1' placeholder='První číslo'/>";
  formular += "<input type='text' name='n2'placeholder='Druhé číslo'/>";
  formular += "<button type ='submit' name='submit'>Kalkuluj</button>";
  formular += "</form>";
  res.send(formular);
});

app.post("/calc", function(req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;

  res.send("Součet je: " + result);
});

app.get("/fibo/:n", function(req, res) {
  var n = Number(req.params.n);
  var pole = [0, 1];
  for (var i = 2; i < n; i++) {
    pole.push(pole[i - 2] + pole[i - 1]);
  }

  res.send("cislo: " + pole);
});

app.listen(8080, function() {
  console.log("Server běží na portu 8080");
});
