const express = require('express');
const app = express();

require('marko/node-require').install();
require('marko/express')

// Adicionar e escrever sobre Marko

const rotas = require('../app/rotas/rotas');
rotas(app);

// Caso app não seja exportado, então não
// será possível utilizá-lo fora desse contexto.
module.exports = app;