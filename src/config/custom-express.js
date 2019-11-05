const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app);

// Caso app não seja exportado, então não
// será possível utilizá-lo fora desse contexto.
module.exports = app;