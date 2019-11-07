const express = require('express');
const app = express('method-override');

const methodOverride = require('method-override')

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

// Esse middleware é utilizado para filtrar as requisições
// que chegam na aplicação e verifica se existe ou não um
// valor para id para que seja possível sobrescrever o 
// método de envio da requisição.
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));

require('marko/node-require').install();
require('marko/express')

const rotas = require('../app/rotas/rotas');
rotas(app);

// Caso app não seja exportado, então não
// será possível utilizá-lo fora desse contexto.
module.exports = app;