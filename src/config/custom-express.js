const express = require('express');
const app = express();

// Exemplos para ver a impressão dos logs no
// console do terminal :)
// app.use('*', (req, res, next) => {
//     console.log('1.1');
//     next();
//     console.log('1.2');
//  });
 
//  app.use('*', (req, res, next) => {
//     console.log('2.1');
//     next();
//     console.log('2.2');
//  });

// O método use cria um middleware
app.use('/estatico', express.static('src/app/public'));

// É necessário utilizar um middleware para obter
// as informações enviadas no corpo da requisição POST
// Segue abaixo a configuração do body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))

require('marko/node-require').install();
require('marko/express')

const rotas = require('../app/rotas/rotas');
rotas(app);

// Caso app não seja exportado, então não
// será possível utilizá-lo fora desse contexto.
module.exports = app;