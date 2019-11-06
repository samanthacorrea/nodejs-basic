const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
    console.log('1.1');
    next();
    console.log('1.2');
 });
 
 app.use('*', (req, res, next) => {
    console.log('2.1');
    next();
    console.log('2.2');
 });

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))

require('marko/node-require').install();
require('marko/express')

// Adicionar e escrever sobre Marko

const rotas = require('../app/rotas/rotas');
rotas(app);

// Caso app não seja exportado, então não
// será possível utilizá-lo fora desse contexto.
module.exports = app;