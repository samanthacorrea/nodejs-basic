// Criação do servidor
const app = require('./src/config/custom-express');

// Configurar porta do servidor
app.listen(3001, function() {
    console.log(`Servidor rodando na porta 3001`);
});

