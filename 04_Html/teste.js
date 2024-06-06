const Sequilize = require('sequelize')
const sequilize = new Sequilize('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

// sequilize.authenticate().then(function(){
//     console.log('Tudo certo jão, conectado com sussa!')
// }).catch(function(erro){
//     console.log('Erro: ' + erro)
// })

const Postagem = sequilize.define('postagens',{
    titulo:{
        type: Sequilize.STRING
    },
    conteudo:{
        type: Sequilize.TEXT
    }
})

const Usuario = sequilize.define('usuarios',{
    nome:{
        type: Sequilize.STRING
    },
    sobrenome:{
        type: Sequilize.STRING
    },
    email:{
        type: Sequilize.STRING
    },
    idade:{
        type: Sequilize.INTEGER
    }
})

// Postagem.sync(force=true)
// Usuario.sync(force=true)

// Postagem.create({
//     titulo:'Primeira Postagem',
//     conteudo:'Conteudo da primeira postagem bla bla bla...'
// })