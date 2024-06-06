// SELECIONAR O MÓDULO http DO NODE
var http = require('http')

// ABRIR UM SERVIDOR http
http.createServer(function(req,res){
    res.end('<b>Aoba meu lindo</b>, muito do bao...')
}).listen(8081)

console.log('Servidor rodando...')