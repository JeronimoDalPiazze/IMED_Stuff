const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const urlencodeParser = bodyParser.urlencoded({extended:false});
const app = express();

const sql = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  user: "bbe0703200ce13",
  password: "3add9731",
  port: 3306
});

sql.query("use heroku_959f38508202df2");

// Template engine
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routs and Templates
app.get("/", function(req, res){
  // res.send("Essa é minha pagina web")
  // res.sendFile(__dirname + "/index.html")
  res.render("index")
});

// rotas
app.get("/javascript", function (req, res){
  res.sendFile(__dirname + "/js/javascript.js")
});

app.get("/style", function (req, res){
  res.sendFile(__dirname + "/css/style.css")
});

app.get("/insert",function(req, res){
  res.render("insert")
});

app.post("/controllerForm", urlencodeParser, function(req, res){
  sql.query("insert into itens (?,?,?,?,?,?)", [req.body.nome,
                                                req.body.bloco,
                                                req.body.sala,
                                                req.body.descricao,
                                                req.body.item_status,
                                                req.body.quantidade])
});





// Start Server
app.listen(3306, function(req, res){
  console.log('servidor rodando')
});