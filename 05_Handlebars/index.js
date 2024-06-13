const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequilize = require('sequelize');

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

    //Conexão Banco de Dados
    const sequilize = new Sequilize('test','root','',{
        host:'localhost',
        dialect:'mysql'
    })

app.listen(8081, function(){
    console.log("Server on... Tá podendo um minezin?? http://localhost:8081");
});