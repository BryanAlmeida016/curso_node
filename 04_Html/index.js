const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/paginas/index.html')
});

app.get('/blog', function(req, res){
    res.send('Me chama de Douglas e me passe as drogas, só que estamos na página do Blog');
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/paginas/sobre.html')
});

app.get('/cadastro', function(req, res){
    res.send('Cadastro: xxxxxxxx');
});

app.get('/cadastro/:nome/:idade', function(req, res){
    res.send('Cadastro: ' + req.params.nome + " - Idade: " + req.params.idade);
});


//Abrindo um server com Express - Tem q ser a última linha do cód.
app.listen(8081, function(){
    console.log("Ixi... Tá podendo um minezin?? http://localhost:8081");
});


